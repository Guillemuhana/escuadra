import { motion } from 'framer-motion'
import { Home, Layers, Paintbrush, Brush, Scissors, Triangle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuote } from '../App'
import hero from '../assets/hero-escuadra.jpeg'

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const SERVICES = [
  { icon: <Home size={24} />, title: 'HOME REMODELING', desc: 'Kitchen, bathrooms, flooring and whole home remodels tailored to your lifestyle.' },
  { icon: <Layers size={24} />, title: 'ADDITIONS', desc: 'Room additions, second stories and expansions built to match your existing home.' },
  { icon: <Paintbrush size={24} />, title: 'PAINTING', desc: 'Residential interior and exterior painting services with premium finishes.' },
  { icon: <Brush size={24} />, title: 'STUCCO', desc: 'Exterior stucco finishes with durability, texture and lasting curb appeal.' },
  { icon: <Scissors size={24} />, title: 'FLOORING', desc: 'Tile, wood, and luxury flooring installation for every room in your home.' },
  { icon: <Triangle size={24} />, title: 'ROOFING', desc: 'Roof installation and repair solutions that protect your home for decades.' },
]

const PROJECTS = [
  { title: 'Coral Gables Home', location: 'Coral Gables, FL' },
  { title: 'Pinecrest Remodel', location: 'Pinecrest, FL' },
  { title: 'Miami Beach Home', location: 'Miami Beach, FL' },
]

export default function ResidentialPage() {
  const openQuote = useQuote()
  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <img src={hero} alt="Residential construction Miami FL – Escuadra Builders Group" className="subpage-hero-img" />
        <div className="subpage-hero-overlay" />
        <motion.div className="subpage-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="eyebrow gold">RESIDENTIAL</p>
          <h1>Residential<br />Construction</h1>
          <p>Custom homes, remodels, and additions designed around your lifestyle.</p>
          <button className="btn btn-sand" onClick={openQuote}>GET A FREE ESTIMATE →</button>
        </motion.div>
      </section>

      {/* Services */}
      <section className="subpage-services">
        <div className="subpage-services-header">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow gold">WHAT WE OFFER</p>
            <h2>Our Residential Services</h2>
            <p className="section-sub">We build beautiful, functional spaces that feel like home. From custom builds to whole-home renovations, we handle every detail with precision and care.</p>
          </motion.div>
        </div>
        <div className="subpage-svc-grid">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title} className="subpage-svc-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="subpage-svc-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="subpage-projects">
        <div className="subpage-projects-header">
          <p className="eyebrow gold">OUR WORK</p>
          <h2>Recent Residential Projects</h2>
        </div>
        <div className="subpage-proj-grid">
          {PROJECTS.map(p => (
            <motion.div key={p.title} className="subpage-proj-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img src={hero} alt={`${p.title} – residential construction Miami FL`} loading="lazy" />
              <div className="subpage-proj-info">
                <h4>{p.title}</h4>
                <span><MapPin size={12} /> {p.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Ready to build your dream home?</h2>
          <p>Let's bring your vision to life.</p>
          <div className="subpage-cta-btns">
            <button className="btn btn-sand" onClick={openQuote}>SCHEDULE A CONSULTATION →</button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
