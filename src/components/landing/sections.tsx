import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]">Веб-разработка & Digital</Badge>,
    title: "Сайты, которые продают.",
    showButton: true,
    buttonText: 'Обсудить проект'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Мы не просто верстаем страницы — мы создаём инструменты роста. Каждый проект начинается с глубокого погружения в ваш бизнес и заканчивается результатом, который работает.'
  },
  {
    id: 'features',
    title: 'Что мы делаем',
    content: 'Лендинги и корпоративные сайты, интернет-магазины, веб-приложения и MVP. Полный цикл: от дизайна и разработки до запуска и поддержки.'
  },
  {
    id: 'testimonials',
    title: 'Наши проекты',
    content: 'Более 80 проектов в e-commerce, fintech, edtech и B2B. Средний рост конверсии клиентов после редизайна — 40%.'
  },
  {
    id: 'join',
    title: 'Готовы к запуску?',
    content: 'Расскажите о вашей задаче — мы предложим решение, сроки и бюджет уже на первой встрече. Без воды и затянутых согласований.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]