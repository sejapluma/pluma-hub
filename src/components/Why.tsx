'use client'

import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Workshops & Treinamentos',
    description: 'Sessões intensivas de aprendizado prático, mão na massa',
    icon: AcademicCapIcon,
  },
  {
    name: 'Aulas & Palestras',
    description: 'Conteúdo profundo ministrado por especialistas de diferentes áreas',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Ferramentas exclusivas',
    description: 'Materiais complementares para simplificar a rotina na clínica',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Clube do livro',
    description: 'Leituras coletivas com acompanhamento, discussões e atividades',
    icon: BookOpenIcon,
  },
  {
    name: 'Rodas de Conversa',
    description: 'Compartilhe experiências, histórias e desafios através de trocas genuínas',
    icon: UserGroupIcon,
  },
  {
    name: 'Networking',
    description: 'Conecte-se com pessoas que querem crescer juntas e faça parte de uma rede de incentivo',
    icon: UsersIcon,
  },
]

const Why = () => {
  return (
    <section id="why" className="relative py-32 bg-purple-50">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.100),white)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Por que fazer parte da Pluma?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ao se juntar a nós, você terá acesso a tudo que precisa para crescer como empreendedora
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col"
              >
                <dt className="text-xl font-semibold leading-8 text-gray-900">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-xl leading-8 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}

export default Why 