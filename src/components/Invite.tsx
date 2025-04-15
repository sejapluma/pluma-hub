'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const steps = [
  {
    id: 1,
    name: 'Clique no botão "Quero ser Pluma"',
  },
  {
    id: 2,
    name: 'Preencha o formulário rápido (leva menos de 5 minutos!).',
  },
  {
    id: 3,
    name: 'Receba seu acesso imediato ao nosso grupo no Whatsapp',
  },
]

const Invite = () => {
  return (
    <section id="join" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.50),white)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pronta pra iniciar uma nova etapa?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step, stepIdx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * stepIdx }}
                className="relative flex items-center gap-6"
              >
                <div
                  className={cn(
                    stepIdx !== steps.length - 1 ? 'h-full' : '',
                    'absolute left-5 top-6 -ml-px mt-0.5 w-0.5 bg-purple-200'
                  )}
                  aria-hidden="true"
                />
                <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-purple-100">
                  <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">{step.id}</span>
                  </div>
                </div>
                <p className="text-lg leading-7 text-gray-600">{step.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <a
              href="https://tally.so/r/3qv41G"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center gap-x-2 rounded-full bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-sm",
                "hover:bg-purple-500 focus-visible:outline focus-visible:outline-2",
                "focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                "transition-all duration-200"
              )}
            >
              Quero ser Pluma
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Invite 