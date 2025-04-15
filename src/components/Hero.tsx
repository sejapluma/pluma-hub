'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className="relative min-h-screen isolate overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-purple-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-purple-50/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center"
            >
              <span className="rounded-full bg-purple-100/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-600 ring-1 ring-inset ring-purple-500/20">
                Comunidade Gratuita
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl max-w-[840px] mx-auto leading-[1.2]"
            >
              Uma comunidade acolhedora<br />
              para psicólogas empreendedoras<br />
              que buscam crescimento<br />
              e apoio mútuo
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="#join"
                className={cn(
                  "rounded-full bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm",
                  "hover:bg-purple-500 focus-visible:outline focus-visible:outline-2",
                  "focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                  "transition-all duration-200"
                )}
              >
                Quero ser Pluma
              </a>
              <a href="#why" className="text-base font-semibold leading-6 text-gray-900">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16"
          >
            <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden">
              <motion.img
                src="/capa.png"
                alt="Pluma - Comunidade para psicólogas"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero 