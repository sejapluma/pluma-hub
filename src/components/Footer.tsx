'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">DÚVIDAS?</h2>
            <a 
              href="mailto:contato@sejapluma.com" 
              className="text-2xl text-purple-600 hover:text-purple-700 transition-colors"
            >
              contato@sejapluma.com
            </a>
          </div>

          <div className="space-y-2 text-gray-600">
            <p>Todos os direitos reservados</p>
            <p className="text-sm">
              © 2025 - SejaPluma | Leveza e eficiência para psicólogas
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 