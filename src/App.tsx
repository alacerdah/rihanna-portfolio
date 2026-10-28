import Cases from './components/Cases'
import Cta from './components/Cta'
import Fotos from './components/Fotos'
import Hero from './components/Hero'
import Marcas from './components/Marcas'
import Nav from './components/Nav'
import Sobre from './components/Sobre'
import Trabalho from './components/Trabalho'
import Videos from './components/Videos'

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Nav />
      <Hero />
      <Sobre />
      <Videos />
      <Fotos />
      <Trabalho />
      <Marcas />
      <Cases />
      <Cta />
    </div>
  )
}
