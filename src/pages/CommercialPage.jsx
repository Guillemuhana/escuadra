import { motion } from 'framer-motion'
import { Building2, Tag, Coffee, Box, Triangle, Wrench, MapPin } from 'lucide-react'
import { useQuote } from '../App'
import hero from '../assets/hero-escuadra.jpeg'

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const SERVICES = [
  { icon: <Building2 size={24} />, title: 'OFFICE BUILD-OUTS', desc: 'Functional and modern office spaces designed for productivity and professionalism.' },
  { icon: <Tag size={24} />, title: 'RETAIL SPACES', desc: 'Branded and well-designed retail spaces built to perform and attract customers.' },
  { icon: <Coffee size={24} />, title: 'RESTAURANTS', desc: 'Restaurant construction from concept to opening — kitchens, dining and service areas.' },
  { icon: <Box size={24} />, title: 'WAREHOUSES', desc: 'Industrial and warehouse construction built for durability and operational efficiency.' },
  { icon: <Triangle size={24} />, title: 'FRAMING', desc: 'Wood and metal framing solutions for commercial structures of any size.' },
  { icon: <Wrench size={24} />, title: 'MAINTENANCE', desc: 'Ongoing maintenance, repairs and improvements to keep your business running.' },
]

const PROJECTS = [
  { title: 'Brickell Office Build-Out', location: 'Brickell, Miami' },
  { title: 'Doral Warehouse', location: 'Doral, FL' },
  { title: 'Coral Gables Retail', location: 'Coral Gables, FL' },
]

export default function CommercialPage() {
  const openQuote = useQuote()
  return (
    <>
      <section className="subpage-hero">
        <img src={hero} alt="Commercial construction Miami FL – Escuadra Builders Group" className="subpage-hero-img" />
        <div className="subpage-hero-overlay" />
        <motion.div className="subpage-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="eyebrow gold">COMMERCIAL</p>
          <h1>Commercial<br />Projects</h1>
          <p>Construction solutions for businesses, developers and property owners.</p>
          <button className="btn btn-sand" onClick={openQuote}>GET A FREE ESTIMATE →</button>
        </motion.div>
      </section>

      <section className="subpage-services">
        <div className="subpage-services-header">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow gold">WHAT WE BUILD</p>
            <h2>Our Commercial Services</h2>
            <p className="section-sub">From office spaces to retail environments, we deliver commercial construction solutions that are efficient, functional and built to last.</p>
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

      <section className="subpage-projects">
        <div className="subpage-projects-header">
          <p className="eyebrow gold">OUR WORK</p>
          <h2>Recent Commercial Projects</h2>
        </div>
        <div className="subpage-proj-grid">
          {PROJECTS.map(p => (
            <motion.div key={p.title} className="subpage-proj-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img src={hero} alt={`${p.title} – commercial construction Miami FL`} loading="lazy" />
              <div className="subpage-proj-info">
                <h4>{p.title}</h4>
                <span><MapPin size={12} /> {p.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="subpage-cta">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Let's build your next project.</h2>
          <p>On time, on budget, and beyond expectations.</p>
          <div className="subpage-cta-btns">
            <button className="btn btn-sand" onClick={openQuote}>SCHEDULE A CONSULTATION →</button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
