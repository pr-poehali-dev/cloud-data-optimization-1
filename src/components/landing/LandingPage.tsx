import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Layout from './Layout'
import HeroSection from './HeroSection'
import EventSlide, { eventsData } from './EventSlide'

// 1 hero + 4 events
const totalSections = 1 + eventsData.length

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  // Метки точек навигации
  const navLabels = ['Главная', ...eventsData.map(e => e.emoji)]

  return (
    <Layout>
      {/* Навигационные точки справа */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4 gap-1">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            title={index === 0 ? 'Главная' : eventsData[index - 1]?.title}
            className="group flex items-center justify-end gap-2 py-1"
            onClick={() => handleNavClick(index)}
          >
            <motion.span
              className="text-[10px] text-white/0 group-hover:text-white/70 transition-all duration-200 whitespace-nowrap"
              animate={index === activeSection ? { opacity: 1, x: 0, color: 'rgba(255,255,255,0.9)' } : {}}
            >
              {index === 0 ? 'Главная' : eventsData[index - 1]?.subtitle}
            </motion.span>
            <div
              className={`rounded-full transition-all duration-300 ${
                index === activeSection
                  ? 'bg-white w-3 h-3 scale-110'
                  : 'bg-gray-600 w-2.5 h-2.5 hover:bg-gray-400'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Прогресс-бар */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-30"
        style={{ scaleX }}
      />

      {/* Секции */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {/* Слайд 0 — Главная */}
        <HeroSection
          isActive={activeSection === 0}
          onScrollToEvent={(i) => handleNavClick(i)}
        />

        {/* Слайды 1–4 — Праздники */}
        {eventsData.map((event, index) => (
          <EventSlide
            key={event.id}
            event={event}
            isActive={activeSection === index + 1}
          />
        ))}
      </div>
    </Layout>
  )
}
