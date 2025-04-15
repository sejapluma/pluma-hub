'use client'

import ProductCard from './ProductCard'

const Products = () => {
  const products = [
    {
      title: "GestãoPluma",
      subtitle: "Gerencie sua clínica com simplicidade e eficiência",
      category: "Gestão",
      image: "/gestao-pluma.jpg",
      className: "h-[600px] w-full"
    },
    {
      title: "PlumaDocs",
      subtitle: "Documentação inteligente para profissionais da psicologia",
      category: "Documentação",
      image: "/pluma-docs.jpg",
      className: "h-[600px] w-full"
    },
    {
      title: "PerfilPluma",
      subtitle: "Crie seu perfil profissional e conecte-se com mais pacientes",
      category: "Visibilidade",
      image: "/perfil-pluma.jpg",
      className: "h-[400px] w-full col-span-2"
    }
  ]

  return (
    <section className="px-4 py-24 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <ProductCard {...products[0]} />
          </div>
          <div className="flex items-center justify-center">
            <ProductCard {...products[1]} />
          </div>
          <div className="flex items-center justify-center md:col-span-2">
            <ProductCard {...products[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products 