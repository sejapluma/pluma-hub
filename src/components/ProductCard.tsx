'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  title: string
  subtitle: string
  category: string
  image: string
  className?: string
  imageClassName?: string
}

const ProductCard = ({ title, subtitle, category, image, className, imageClassName }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-white",
        "flex flex-col justify-end shadow-lg",
        className?.includes('col-span-2') ? '' : 'aspect-square',
        className
      )}
    >
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src={image}
          alt={title}
          className={cn(
            "h-full w-full object-cover",
            imageClassName
          )}
        />
      </div>
      <div className="relative bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8 pt-32 text-white">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wider text-purple-200">{category}</p>
          <h3 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h3>
          <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard 