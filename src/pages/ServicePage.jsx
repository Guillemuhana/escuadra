import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Users, Star, Clock, Wrench } from 'lucide-react'
import { useQuote } from '../App'
import hero from '../assets/hero-escuadra.jpeg'

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const SERVICES = {
  concrete: {
    title: 'Concrete',
    tagline: 'Strong foundations. Lasting results.',
    desc: 'Expert concrete work for every project. From foundations to flatwork, we deliver structural integrity and precision.',
    offers: ['Foundations & Footings', 'Slabs & Flatwork', 'Columns & Beams', 'Driveways & Walkways', 'Retaining Walls', 'Concrete Repair'],
  },
  stucco: {
    title: 'Stucco',
    tagline: 'High-quality finishes that add beauty, protection and value.',
    desc: 'Professional stucco application for residential and commercial properties across South Florida.',
    offers: ['Exterior Stucco Installation', 'Smooth & Textured Finishes', 'Stucco Repairs', 'Waterproofing Solutions', 'EIFS Systems', 'Premium Materials'],
  },
  framing: {
    title: 'Framing',
    tagline: 'Precision framing for every structure.',
    desc: 'Wood and metal framing built to code for residential and commercial construction across Miami-Dade.',
    offers: ['Wood Framing', 'Metal Stud Framing', 'Roof Trusses', 'Floor Systems', 'Wall Framing', 'Code Compliance'],
  },
  roofing: {
    title: 'Roofing',
    tagline: 'Durable roofing that protects your investment.',
    desc: 'Complete roofing solutions for homes and businesses in South Florida — installation, repair and replacement.',
    offers: ['Roof Installation', 'Roof Repair & Patching', 'Re-Roofing', 'Flat Roofing', 'Tile Roofing', 'Storm Damage Repair'],
  },
  painting: {
    title: 'Painting',
    tagline: 'Flawless finishes inside and out.',
    desc: 'Interior and exterior painting services that elevate every space with clean lines and lasting color.',
    offers: ['Interior Painting', 'Exterior Painting', 'Commercial Painting', 'Texture Finishes', 'Deck & Fence Coating', 'Color Consultation'],
  },
  flooring: {
    title: 'Tile & Flooring',
    tagline: 'Premium flooring installation for any space.',
    desc: 'Professional installation of ceramic, porcelain, stone, wood and luxury vinyl flooring across Miami FL.',
    offers: ['Ceramic & Porcelain Tile', 'Natural Stone', 'Hardwood Flooring', 'Luxury Vinyl Plank', 'Shower & Bathroom Tile', 'Custom Patterns'],
  },
  renovations: {
    title: 'Renovations',
    tagline: 'Transform your space. Elevate your life.',
    desc: 'Full-scope residential and commercial renovations that modernize and improve every inch of your property.',
    offers: ['Kitchen Remodeling', 'Bathroom Renovations', 'Basement Finishing', 'Open Floor Plans', 'Exterior Upgrades', 'Full Home Renovations'],
  },
}

const WHY_CHOOSE = [
  { icon: <Users size={22} />, title: 'Experienced Team', desc: 'Skilled professionals with years of hands-on experience.' },
  { icon: <Star size={22} />, title: 'Quality Materials', desc: 'We use top-quality materials for durability.' },
  { icon: <CheckCircle2 size={22} />, title: 'Attention to Detail', desc: 'Flawless finishes and clean work on every job.' },
  { icon: <Clock size={22} />, title: 'On-Time Delivery', desc: 'We respect your time and meet our deadlines.' },
]

export default function ServicePage() {
  const { slug } = useParams()
  const openQuote = useQuote()
  const svc = SERVICES[slug]

  if (!svc) {
    return (
      <div style={{ padding: '160px 5vw 100px', textAlign: 'center', background: '#0f0e0d', color: '#fff', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Service not found</h2>
        <Link to="/" style={{ color: '#c4a96f' }}>← Back to Home</Link>
      </div>
    )
  }

  const gallery = [1, 2, 3]

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <img src={hero} alt={`${svc.title} contractor Miami FL – Escuadra Builders Group`} className="subpage-hero-img" />
        <div className="subpage-hero-overlay" />
        <motion.div className="subpage-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="eyebrow gold">TECHNICAL SERVICES</p>
          <h1>{svc.title}</h1>
          <p>{svc.tagline}</p>
          <button className="btn btn-sand" onClick={openQuote}>GET A QUOTE →</button>
        </motion.div>
      </section>

      {/* What We Offer + Gallery */}
      <section className="svc-detail-body">
        <div className="svc-detail-left">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow gold">WHAT WE OFFER</p>
            <h2>{svc.title} Services in Miami</h2>
            <p className="svc-detail-desc">{svc.desc}</p>
            <ul className="svc-offer-list">
              {svc.offers.map(o => <li key={o}><CheckCircle2 size={15} /> {o}</li>)}
            </ul>
            <button className="btn btn-sand" style={{ marginTop: '28px' }} onClick={openQuote}>GET A QUOTE →</button>
          </motion.div>
        </div>
        <div className="svc-detail-right">
          <p className="eyebrow gold">PROJECT GALLERY</p>
          <div className="svc-gallery">
            {gallery.map(n => (
              <motion.div key={n} className="svc-gallery-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <img src={hero} alt={`${svc.title} project Miami FL`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow gold">WHY CHOOSE US</p>
          <h2>The Escuadra Difference</h2>
        </motion.div>
        <div className="why-grid">
          {WHY_CHOOSE.map((w, i) => (
            <motion.div key={w.title} className="why-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Need {svc.title} work in Miami?</h2>
          <p>Let's build it right. Get a free estimate today.</p>
          <div className="subpage-cta-btns">
            <button className="btn btn-sand" onClick={openQuote}>GET A FREE ESTIMATE →</button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
