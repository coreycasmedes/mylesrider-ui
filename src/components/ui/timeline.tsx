import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export interface TimelineEntry {
  title: string
  date: string
  content: React.ReactNode
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">

        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-32 md:gap-10">

            {/* Left: sticky dot + title */}
            <div className="sticky top-32 z-40 flex flex-col md:flex-row items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="absolute left-3 h-10 w-10 rounded-full bg-background border border-muted flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 font-bold text-foreground/30">
                {item.title}
              </h3>
            </div>

            {/* Right: content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2">{item.date}</p>
              <h3 className="md:hidden text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              {item.content}
            </div>

          </div>
        ))}

        {/* Track line (background) */}
        <div
          style={{ height }}
          className="absolute left-8 top-0 w-px bg-foreground/5 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        />

        {/* Animated fill line */}
        <div className="absolute left-8 top-0 w-px overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="w-full bg-gradient-to-b from-primary via-secondary to-transparent"
          />
        </div>

      </div>
    </div>
  )
}
