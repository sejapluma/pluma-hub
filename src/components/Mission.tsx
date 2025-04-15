'use client'

import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-purple-50/60 shadow-xl shadow-purple-600/10 ring-1 ring-purple-50" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="grid gap-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl leading-relaxed text-gray-600"
            >
              A Pluma é mais do que um grupo de trocas— é um espaço de potência para psicólogas empreendedoras que querem transformar seu trabalho com propósito e leveza.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl leading-relaxed text-gray-600"
            >
              Aqui, falamos sobre <span className="text-gray-600 font-semibold">negócios, inovação, finanças, marketing e gestão</span> —pilares essenciais para construir uma clínica de sucesso, que te traga estabilidade, segurança e realização de metas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl leading-relaxed text-gray-600"
            >
              Com foco em <span className="text-gray-600 font-semibold">conhecimento, motivação, troca de experiências e colaboração</span>, nos comprometemos a ajudar você a realizar seus sonhos e construir um futuro melhor, sem abrir mão quem você é.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission 