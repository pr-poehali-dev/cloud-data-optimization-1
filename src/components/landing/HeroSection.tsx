import { motion } from "framer-motion"
import { CalendarDays, Sparkles } from "lucide-react"

const holidayPreviews = [
  {
    id: "may9",
    emoji: "🎖️",
    label: "9 Мая",
    sublabel: "День Победы",
    gradient: "from-red-900/80 to-red-700/40",
    border: "border-red-500/30",
    glow: "shadow-red-900/40",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=400&q=80&auto=format&fit=crop",
  },
  {
    id: "sep1",
    emoji: "🎂",
    label: "1 Сентября",
    sublabel: "День Рождения Директора",
    gradient: "from-orange-900/80 to-orange-600/40",
    border: "border-[#FF4D00]/40",
    glow: "shadow-orange-900/50",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "dec20",
    emoji: "🎄",
    label: "20 Декабря",
    sublabel: "Открытие ёлки",
    gradient: "from-emerald-900/80 to-emerald-700/40",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-900/40",
    image: "https://images.unsplash.com/photo-1543934638-bd2b2d36e84c?w=400&q=80&auto=format&fit=crop",
  },
  {
    id: "ny",
    emoji: "🎆",
    label: "31 Декабря",
    sublabel: "Новый Год",
    gradient: "from-blue-900/80 to-indigo-700/40",
    border: "border-blue-400/30",
    glow: "shadow-blue-900/40",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&q=80&auto=format&fit=crop",
  },
]

interface HeroSectionProps {
  isActive: boolean
  onScrollToEvent?: (index: number) => void
}

export default function HeroSection({ isActive, onScrollToEvent }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Декоративный орнамент */}
      <motion.div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF4D00]/5 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Бейдж */}
      <motion.div
        className="flex items-center gap-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF4D00]/40 bg-[#FF4D00]/10">
          <CalendarDays className="w-4 h-4 text-[#FF4D00]" />
          <span className="text-[#FF4D00] text-xs font-semibold uppercase tracking-widest">
            Ближайшие праздники 2026
          </span>
        </div>
      </motion.div>

      {/* Заголовок */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.05] tracking-tight text-white max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        Праздники на<br />
        <span className="text-[#FF4D00]">Кремлёвской</span><br />
        Набережной
      </motion.h1>

      {/* Описание */}
      <motion.p
        className="mt-5 text-base md:text-lg lg:text-xl text-neutral-400 max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.18 }}
      >
        Здесь вы можете посмотреть, какие ближайшие праздники пройдут на нашей набережной. Яркие события, живая атмосфера и незабываемые впечатления для всей семьи.
      </motion.p>

      {/* Карточки праздников */}
      <motion.div
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.3 }}
      >
        {holidayPreviews.map((h, i) => (
          <motion.button
            key={h.id}
            onClick={() => onScrollToEvent?.(i + 1)}
            className={`relative group overflow-hidden rounded-2xl border ${h.border} bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-300 cursor-pointer shadow-xl ${h.glow} text-left`}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
          >
            {/* Фоновая картинка */}
            <div className="relative h-28 md:h-32 overflow-hidden">
              <img
                src={h.image}
                alt={h.sublabel}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${h.gradient}`} />
              {h.featured && (
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-4 h-4 text-[#FF4D00] fill-[#FF4D00] drop-shadow-lg" />
                </div>
              )}
              <span className="absolute bottom-2 left-3 text-2xl">{h.emoji}</span>
            </div>

            {/* Текст */}
            <div className="p-3">
              <p className={`text-xs font-bold uppercase tracking-wider ${h.featured ? "text-[#FF4D00]" : "text-neutral-400"}`}>
                {h.label}
              </p>
              <p className="text-white text-sm font-semibold mt-0.5 leading-tight">{h.sublabel}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Стрелка вниз */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-neutral-600"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Листайте</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}