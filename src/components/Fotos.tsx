const items = [
  { src: '/images/sections/galeria1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/sections/galeria2.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/sections/galeria3.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/sections/galeria4.jpg', span: 'col-span-1 row-span-2' },
  { src: '/images/sections/galeria5.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/sections/galeria6.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/sections/galeria7.jpg', span: 'col-span-1 row-span-1' },
]

export default function Fotos() {
  return (
    <section id="fotos" className="w-full bg-bg px-6 py-16 pb-22 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="text-[13px] font-bold tracking-[0.2em] text-gold-deep">GALERIA</span>
        <h2 className="mt-2.5 mb-7 text-[34px] text-ink">Fotos</h2>
        <div className="grid grid-cols-4 auto-rows-[140px] gap-4">
          {items.map((item) => (
            <div key={item.src} className={`media-card overflow-hidden rounded-[22px] ${item.span}`}>
              <img src={item.src} alt="" className="media-card-img h-full w-full object-cover transition-transform duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
