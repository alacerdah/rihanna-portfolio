import Cases from './components/Cases'
import Cta from './components/Cta'
import Fotos from './components/Fotos'
import Hero from './components/Hero'
import Marcas from './components/Marcas'
import Nav from './components/Nav'
import Sobre from './components/Sobre'
import Trabalho from './components/Trabalho'
import Videos from './components/Videos'
import { useProjectContent } from './hooks/useProjectContent'

export default function App() {
  // busca uma vez aqui e passa pros componentes que usam nicho/vídeo/galeria,
  // em vez de cada um buscar por conta própria
  const apiContent = useProjectContent()

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Nav />
      <Hero />
      <Sobre niches={apiContent?.niches} />
      <Videos niches={apiContent?.niches} />
      <Fotos apiGallery={apiContent?.gallery} />
      <Trabalho />
      <Marcas />
      <Cases />
      <Cta />
    </div>
  )
}
