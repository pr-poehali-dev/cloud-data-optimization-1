import { motion } from "framer-motion"
import { MapPin, Clock, Star } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  isFeatured?: boolean
}

const events: Event[] = [
  {
    id: "may9",
    title: "9 Мая — День Победы",
    date: "9 мая 2026",
    time: "Начало в 18:00",
    location: "Кремлевская набережная, 1",
  },
  {
    id: "sep1",
    title: "День Рождения",
    date: "1 сентября 2026",
    time: "Начало в 18:30",
    location: "Кремлевская набережная, 1",
    isFeatured: true,
  },
  {
    id: "dec20",
    title: "Открытие ёлки",
    date: "20 декабря 2026",
    time: "Начало в 19:00",
    location: "Кремлевская набережная, 1",
  },
  {
    id: "ny",
    title: "Новый Год",
    date: "31 декабря 2026",
    time: "Начало в 18:00 — до 0:00 1 января",
    location: "Кремлевская набережная, 1",
  },
]

interface EventCardProps {
  event: Event
  index: number
  isActive: boolean
}

function EventCard({ event, index, isActive }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
      className={`relative rounded-2xl border p-5 flex flex-col gap-2 transition-all duration-300
        ${event.isFeatured
          ? "border-[#FF4D00] bg-[#FF4D00]/10 shadow-[0_0_30px_rgba(255,77,0,0.2)]"
          : "border-white/10 bg-white/5 hover:border-white/25"
        }`}
    >
      {event.isFeatured && (
        <div className="flex items-center gap-1.5 mb-1">
          <Star className="w-4 h-4 text-[#FF4D00] fill-[#FF4D00]" />
          <span className="text-[#FF4D00] text-xs font-semibold uppercase tracking-widest">
            Самый роскошный праздник
          </span>
        </div>
      )}
      <h3 className={`font-bold text-lg leading-tight ${event.isFeatured ? "text-white" : "text-white"}`}>
        {event.title}
      </h3>
      <p className={`text-sm font-medium ${event.isFeatured ? "text-[#FF4D00]" : "text-neutral-400"}`}>
        {event.date}
      </p>
      <div className="flex items-center gap-2 text-neutral-400 text-sm">
        <Clock className="w-3.5 h-3.5 shrink-0" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center gap-2 text-neutral-400 text-sm">
        <MapPin className="w-3.5 h-3.5 shrink-0" />
        <span>{event.location}</span>
      </div>
    </motion.div>
  )
}

interface EventsSectionProps {
  isActive: boolean
}

export default function EventsSection({ isActive }: EventsSectionProps) {
  return (
    <section
      id="events"
      className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24"
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-2"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Праздники
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-base md:text-lg mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Все мероприятия проходят на <span className="text-white font-medium">Кремлевской набережной</span>
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} isActive={isActive} />
        ))}
      </div>
    </section>
  )
}
