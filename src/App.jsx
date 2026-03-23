import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Rewards from './components/Rewards'
import Rules from './components/Rules'
import Footer from './components/Footer'
import FloatingWidget from './components/FloatingWidget'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Rewards />
        <Rules />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  )
}
