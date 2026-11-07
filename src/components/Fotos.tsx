import type { ApiGalleryPhoto } from '../shared/videos-api'
import SocialEmbed from './SocialEmbed'

const items = [
  { src: '/images/sections/galeria1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/sections/galeria2.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/sections/galeria3.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/sections/galeria4.jpg', span: 'col-span-1 row-span-2' },
  { src: '/images/sections/galeria5.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/sections/galeria6.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/sections/galeria7.jpg', span: 'col-span-1 row-span-1' },
]

export default function Fotos({ apiGallery }: { apiGallery?: ApiGalleryPhoto[] | null }) {
  const photos = apiGallery && apiGallery.length > 0 ? [...apiGallery].sort((a, b) => a.position - b.position) : null

  return (
    <section id="fotos" className="w-full bg-bg px-6 py-16 pb-22 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="text-[13px] font-bold tracking-[0.2em] text-gold-deep">GALERIA</span>
        <h2 className="mt-2.5 mb-7 text-[34px] text-ink">Fotos</h2>
        {photos ? (
          <div className="flex flex-wrap gap-4">
            {photos.map((p) => (
              <div key={p.id} className="w-[270px]">
                <SocialEmbed platform={p.platform} url={p.url} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 auto-rows-[120px] gap-3 sm:grid-cols-4 sm:auto-rows-[140px] sm:gap-4">
            {items.map((item) => (
              <div key={item.src} className={`media-card overflow-hidden rounded-[22px] ${item.span}`}>
                <img src={item.src} alt="" className="media-card-img h-full w-full object-cover transition-transform duration-400" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
