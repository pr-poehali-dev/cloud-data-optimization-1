import { motion } from "framer-motion"
import { MapPin, Clock, CalendarDays, Sparkles, Star, Users, Music, Flame } from "lucide-react"

export interface EventData {
  id: string
  title: string
  subtitle: string
  date: string
  time: string
  location: string
  description: string
  highlights: { icon: React.ReactNode; text: string }[]
  image: string
  accentColor: string
  accentBg: string
  borderColor: string
  glowColor: string
  emoji: string
  isFeatured?: boolean
}

export const eventsData: EventData[] = [
  {
    id: "may9",
    emoji: "🎖️",
    title: "День Победы",
    subtitle: "9 Мая 2026",
    date: "9 мая 2026",
    time: "Начало в 18:00",
    location: "Кремлевская набережная, 1",
    description:
      "Торжественный вечер в честь Великой Победы. Мы чтим память героев — вместе возложим цветы, послушаем живую музыку военных лет и встретим праздничный салют над рекой.",
    highlights: [
      { icon: <Music className="w-4 h-4" />, text: "Живой оркестр и песни военных лет" },
      { icon: <Flame className="w-4 h-4" />, text: "Торжественное факельное шествие" },
      { icon: <Star className="w-4 h-4" />, text: "Праздничный салют в 21:00" },
      { icon: <Users className="w-4 h-4" />, text: "Бесплатный вход для всех" },
    ],
    image:
      "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=900&q=85&auto=format&fit=crop",
    accentColor: "text-red-400",
    accentBg: "bg-red-500/10",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-900/30",
  },
  {
    id: "sep1",
    emoji: "🎂",
    title: "День Рождения Директора Набережной",
    subtitle: "1 Сентября 2026",
    date: "1 сентября 2026",
    time: "Начало в 18:30",
    location: "Кремлевская набережная, 1",
    description:
      "Самый роскошный праздник года — юбилей директора Кремлёвской набережной! 15 лет — это особая дата, поэтому мы подготовили грандиозную программу: живые выступления, фейерверк, изысканные угощения и незабываемые впечатления для всей семьи.",
    highlights: [
      { icon: <Sparkles className="w-4 h-4" />, text: "Грандиозный концерт под открытым небом" },
      { icon: <Flame className="w-4 h-4" />, text: "Праздничный торт и угощения" },
      { icon: <Star className="w-4 h-4" />, text: "Шоу фейерверков и дронов" },
      { icon: <Users className="w-4 h-4" />, text: "Бесплатный вход для всех" },
    ],
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&q=85&auto=format&fit=crop",
    accentColor: "text-[#FF4D00]",
    accentBg: "bg-[#FF4D00]/10",
    borderColor: "border-[#FF4D00]/40",
    glowColor: "shadow-orange-900/40",
    isFeatured: true,
  },
  {
    id: "dec20",
    emoji: "🎄",
    title: "Открытие ёлки",
    subtitle: "20 Декабря 2026",
    date: "20 декабря 2026",
    time: "Начало в 19:00",
    location: "Кремлевская набережная, 1",
    description:
      "Торжественное зажжение главной новогодней ёлки набережной! Сказочная атмосфера, Дед Мороз и Снегурочка, ледяной каток и горячий глинтвейн. Зима начинается здесь.",
    highlights: [
      { icon: <Star className="w-4 h-4" />, text: "Торжественное зажжение ёлки в 20:00" },
      { icon: <Music className="w-4 h-4" />, text: "Новогодний концерт и хоровод" },
      { icon: <Sparkles className="w-4 h-4" />, text: "Дед Мороз, Снегурочка, подарки" },
      { icon: <Users className="w-4 h-4" />, text: "Бесплатный вход для всех" },
    ],
    image:
      "https://images.unsplash.com/photo-1543934638-bd2b2d36e84c?w=900&q=85&auto=format&fit=crop",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-900/30",
  },
  {
    id: "ny",
    emoji: "🎆",
    title: "Новый Год",
    subtitle: "31 Декабря 2026",
    date: "31 декабря 2026",
    time: "18:00 — до 0:00 1 января",
    location: "Кремлевская набережная, 1",
    description:
      "Проводите 2026-й и встретьте Новый год у воды! Грандиозный праздник с живой музыкой, фейерверком над рекой, тематическими зонами и традиционным обратным отсчётом под бой курантов.",
    highlights: [
      { icon: <Flame className="w-4 h-4" />, text: "Масштабный фейерверк в полночь" },
      { icon: <Music className="w-4 h-4" />, text: "Живые выступления до 00:00" },
      { icon: <Sparkles className="w-4 h-4" />, text: "Новогодний стол и угощения" },
      { icon: <Users className="w-4 h-4" />, text: "Бесплатный вход для всех" },
    ],
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=900&q=85&auto=format&fit=crop",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
    glowColor: "shadow-blue-900/30",
  },
]

interface EventSlideProps {
  event: EventData
  isActive: boolean
}

export default function EventSlide({ event, isActive }: EventSlideProps) {
  return (
    <section
      id={event.id}
      className="relative h-screen w-full snap-start flex items-center overflow-hidden"
    >
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Декоративное свечение */}
      <motion.div
        className={`absolute top-1/2 right-20 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] pointer-events-none ${event.accentBg}`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Контент */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full px-8 md:px-16 lg:px-24">
        {/* Левая часть — текст */}
        <div className="flex-1 max-w-xl">
          {/* Дата-бейдж */}
          <motion.div
            className="flex items-center gap-2 mb-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${event.borderColor} ${event.accentBg}`}>
              <CalendarDays className={`w-4 h-4 ${event.accentColor}`} />
              <span className={`text-xs font-semibold uppercase tracking-widest ${event.accentColor}`}>
                {event.subtitle}
              </span>
              {event.isFeatured && <Sparkles className={`w-3.5 h-3.5 ${event.accentColor} fill-current`} />}
            </div>
          </motion.div>

          {/* Эмодзи + Заголовок */}
          <motion.div
            className="flex items-start gap-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="text-5xl md:text-6xl leading-none mt-1">{event.emoji}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              {event.title}
            </h2>
          </motion.div>

          {/* Описание */}
          <motion.p
            className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {event.description}
          </motion.p>

          {/* Мета-инфо */}
          <motion.div
            className="flex flex-col gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{event.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Правая часть — хайлайты */}
        <motion.div
          className="w-full lg:w-80 xl:w-96 grid grid-cols-1 gap-3"
          initial={{ opacity: 0, x: 40 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${event.accentColor}`}>
            Программа события
          </p>
          {event.highlights.map((h, i) => (
            <motion.div
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${event.borderColor} bg-white/[0.05] backdrop-blur-sm`}
              initial={{ opacity: 0, x: 30 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
            >
              <span className={event.accentColor}>{h.icon}</span>
              <span className="text-white text-sm font-medium">{h.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}