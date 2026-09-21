import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Obras from './pages/Obras'
import Espiritualidad from './pages/Espiritualidad'
import NuestrosSimbolos from './pages/NuestrosSimbolos'
import Historia from './pages/Historia'
import PadrePio from './pages/PadrePio'
import DondeEstamos from './pages/DondeEstamos'
import Ciudad from './pages/Ciudad'
import Donar from './pages/Donar'
import Biblioteca from './pages/Biblioteca'
import BibliotecaOracion from './pages/BibliotecaOracion'
import BibliotecaLectio from './pages/BibliotecaLectio'
import BibliotecaDocumentos from './pages/BibliotecaDocumentos'
import BibliotecaGlosario from './pages/BibliotecaGlosario'
import Contactenos from './pages/Contactenos'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/espiritualidad" element={<Espiritualidad />} />
            <Route path="/nuestros-simbolos" element={<NuestrosSimbolos />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/padre-pio" element={<PadrePio />} />
            <Route path="/donde-estamos" element={<DondeEstamos />} />
            <Route path="/donde-estamos/:slug" element={<Ciudad />} />
            <Route path="/donde-estamos/:slug/donar" element={<Donar />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/biblioteca/oracion" element={<BibliotecaOracion />} />
            <Route path="/biblioteca/oracion/lectio-servicio" element={<BibliotecaLectio />} />
            <Route path="/biblioteca/documentos" element={<BibliotecaDocumentos />} />
            <Route path="/biblioteca/glosario" element={<BibliotecaGlosario />} />
            <Route path="/contactenos" element={<Contactenos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
