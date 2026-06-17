import { useMemo } from 'react'
import { motion } from 'framer-motion'
import rough from 'roughjs/bin/rough'
import { Link } from 'react-router-dom'
import {
  Home, Building2, ClipboardList, ArrowRight, Phone, Mail, MapPin,
  MessageCircle, Star, ShieldCheck, Users, CheckCircle2,
  Layers, Brush, Triangle, Paintbrush, Scissors, Grid2X2, Wrench
} from 'lucide-react'
import { useQuote } from '../App'
import hero from '../assets/hero-escuadra.jpeg'
import logo from '../assets/logo-escuadra.jpeg'
import projBeachHouse from '../assets/project-beach-house.png'
import projCoconutGrove from '../assets/project-coconut-grove.png'
import projLuxuryReno from '../assets/project-luxury-renovation.png'
import projOffice from '../assets/project-office-buildout.png'
import aboutTeam from '../assets/about-render.png'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

// HUD de arquitecto del hero (esquinas tipo visor + datos técnicos)
const hudWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.5 } },
}
const hudCorner = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}
const hudFade = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ── HERO ──────────────────────────────────────────────────────
function Hero() {
  const openQuote = useQuote()
  return (
    <section id="home" className="hero">
      <img src={hero} alt="Escuadra Builders Group – licensed general contractor Miami FL" className="hero-img" />
      <div className="hero-overlay" />
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-hud" aria-hidden="true" variants={hudWrap} initial="hidden" animate="visible">
        <motion.span className="hud-corner hud-c-tl" variants={hudCorner} />
        <motion.span className="hud-corner hud-c-tr" variants={hudCorner} />
        <motion.span className="hud-corner hud-c-bl" variants={hudCorner} />
        <motion.span className="hud-corner hud-c-br" variants={hudCorner} />
        <div className="hud-ruler" />
        <motion.span className="hud-label hud-l-tr" variants={hudFade}>N 25.7617°&nbsp;&nbsp;W 80.1918°</motion.span>
        <motion.span className="hud-label hud-l-bl" variants={hudFade}>MIAMI–DADE · FLORIDA</motion.span>
        <motion.span className="hud-label hud-l-br" variants={hudFade}>LIC. CGC · BONDED &amp; INSURED</motion.span>
      </motion.div>
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp}>
        <p className="hero-eyebrow">MIAMI-DADE COUNTY, FL</p>
        <h1>We Build Spaces<br />That Stand the<br />Test of Time.</h1>
        <p className="hero-sub">High-quality construction and project management in Miami-Dade. From concept to completion, we build with precision, integrity, and passion.</p>
        <div className="hero-contacts">
          <span><Phone size={15} /> (888) 271-9092</span>
          <span><Mail size={15} /> estimates@escuadrabg.com</span>
        </div>
        <div className="hero-actions">
          <button className="btn btn-sand" onClick={openQuote}>GET A FREE ESTIMATE →</button>
          <a href="#projects" className="btn btn-outline">VIEW PROJECTS</a>
        </div>
      </motion.div>
      <div className="hero-bar">
        {[
          { icon: <ShieldCheck size={16} />, label: 'LICENSED & INSURED' },
          { icon: <CheckCircle2 size={16} />, label: 'QUALITY CRAFTSMANSHIP' },
          { icon: <Users size={16} />, label: 'EXPERIENCED TEAM' },
          { icon: <MapPin size={16} />, label: 'MIAMI-DADE BASED' },
        ].map(b => (
          <div className="hero-bar-item" key={b.label}>
            {b.icon}<strong>{b.label}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── WHAT WE DO ─────────────────────────────────────────────────
function WhatWeDo() {
  const openQuote = useQuote()
  const categories = [
    {
      to: '/residential',
      icon: <Home size={28} />,
      title: 'RESIDENTIAL CONSTRUCTION',
      desc: 'Custom homes, remodels and additions built with quality and care.',
      items: ['Home Remodeling', 'New Construction', 'Additions', 'Kitchen & Bath'],
    },
    {
      to: '/commercial',
      icon: <Building2 size={28} />,
      title: 'COMMERCIAL PROJECTS',
      desc: 'Commercial construction solutions for businesses and developers.',
      items: ['Office Build-Outs', 'Retail Spaces', 'Restaurants', 'Warehouses'],
    },
    {
      to: '/project-management',
      icon: <ClipboardList size={28} />,
      title: 'PROJECT MANAGEMENT',
      desc: 'Complete oversight and management to ensure your project is a success.',
      items: ['Planning & Budgeting', 'Permitting', 'Scheduling', 'Quality Control'],
    },
  ]
  return (
    <section className="what-we-do">
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow gold">WHAT WE DO</p>
        <h2>Built Around Your Vision</h2>
        <p className="section-sub">From residential homes to commercial developments, we deliver exceptional results with attention to detail and a commitment to quality.</p>
      </motion.div>
      <div className="wwd-grid">
        {categories.map(c => (
          <motion.div key={c.title} className="wwd-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="wwd-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <ul className="wwd-list">
              {c.items.map(item => <li key={item}><CheckCircle2 size={13} /> {item}</li>)}
            </ul>
            <Link to={c.to} className="wwd-link">LEARN MORE <ArrowRight size={14} /></Link>
          </motion.div>
        ))}
      </div>
      <div className="wwd-cta">
        <p>Not sure where to start? We'll guide you through the right path for your project.</p>
        <button className="btn btn-sand" onClick={openQuote}>Get a Free Estimate</button>
      </div>
    </section>
  )
}

// ── FEATURED PROJECTS ──────────────────────────────────────────
function FeaturedProjects() {
  const openQuote = useQuote()
  const projects = [
    { title: 'Modern Beach House', location: 'Miami Beach, FL', type: 'RESIDENTIAL', img: projBeachHouse },
    { title: 'Coconut Grove Residence', location: 'Coconut Grove, FL', type: 'RESIDENTIAL', img: projCoconutGrove },
    { title: 'Luxury Renovation', location: 'Coral Gables, FL', type: 'RESIDENTIAL', img: projLuxuryReno },
    { title: 'Downtown Office Build-Out', location: 'Brickell, FL', type: 'COMMERCIAL', img: projOffice },
  ]
  return (
    <section id="projects" className="featured-projects-section">
      <div className="fp-header">
        <div>
          <p className="eyebrow gold">OUR WORK</p>
          <h2>Featured Projects</h2>
        </div>
        <Link to="/#projects" className="view-all-link">VIEW ALL PROJECTS →</Link>
      </div>
      <div className="fp-grid">
        {projects.map(p => (
          <motion.article key={p.title} className="fp-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={p.img} alt={`${p.title} – ${p.type === 'COMMERCIAL' ? 'commercial construction' : 'residential construction'} Miami FL`} loading="lazy" />
            <span className={`fp-badge${p.type === 'COMMERCIAL' ? ' fp-badge-comm' : ''}`}>{p.type}</span>
            <div className="fp-info">
              <h4>{p.title}</h4>
              <p><MapPin size={12} /> {p.location}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="fp-bottom-cta">
        <button className="btn btn-sand" onClick={openQuote}>Start Your Project →</button>
      </div>
    </section>
  )
}

// ── ABOUT ──────────────────────────────────────────────────────
// formas del boceto — RoughGenerator las convierte en trazos "a mano" (estilo lápiz)
const sketchShapes = [
  (g, o) => g.rectangle(22, 22, 556, 476, o),
  (g, o) => g.line(22, 150, 578, 150, o),
  (g, o) => g.line(22, 370, 578, 370, o),
  (g, o) => g.line(300, 498, 578, 200, o),
  (g, o) => g.line(300, 498, 300, 150, o),
  (g, o) => g.path('M330 360 L330 210 L470 170 L470 360 Z', o),
  (g, o) => g.path('M330 210 L400 175 L470 170', o),
  (g, o) => g.path('M360 360 L360 290 L400 290 L400 360', o),
  (g, o) => g.line(60, 450, 240, 450, o),
  (g, o) => g.line(60, 442, 60, 458, o),
  (g, o) => g.line(240, 442, 240, 458, o),
]

const drawVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.2 + i * 0.4, duration: 1.05, ease: 'easeInOut' },
      opacity: { delay: 0.2 + i * 0.4, duration: 0.3 },
    },
  }),
}

function About() {
  const checks = ['Licensed & Insured', 'Quality Craftsmanship', 'On-Time Delivery', 'Transparent Communication']
  // genera los trazos dibujados a mano una sola vez
  const sketchGroups = useMemo(() => {
    const gen = rough.generator()
    const opts = { roughness: 1.9, bowing: 1.6, strokeWidth: 1.4, disableMultiStroke: false, preserveVertices: false }
    return sketchShapes.map(make => gen.toPaths(make(gen, opts)))
  }, [])
  return (
    <section id="about" className="about-section">
      <div className="about-main">
        <motion.div className="about-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow gold">ABOUT US</p>
          <h2>Building with Integrity Since Day One</h2>
          <div className="about-divider" />
          <p>Escuadra Builders Group is a Miami-based construction company dedicated to delivering exceptional spaces. We combine experience, craftsmanship, and clear communication to bring every project to life.</p>
          <ul className="about-checks">
            {checks.map(c => <li key={c}><CheckCircle2 size={16} /> {c}</li>)}
          </ul>
          <a href="#contact" className="btn btn-dark">LEARN MORE ABOUT US →</a>
        </motion.div>
        <div className="about-img about-img-draw">
          <img src={aboutTeam} alt="Escuadra Builders Group team – construction professionals Miami Florida" />
          <motion.svg
            className="about-sketch" viewBox="0 0 600 520" preserveAspectRatio="none" aria-hidden="true"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          >
            {sketchGroups.map((paths, gi) =>
              paths.map((p, pi) => (
                <motion.path
                  key={`${gi}-${pi}`}
                  d={p.d}
                  custom={gi}
                  variants={drawVariant}
                  strokeWidth={p.strokeWidth || 1.4}
                />
              ))
            )}
          </motion.svg>
        </div>
      </div>
    </section>
  )
}

// ── PROCESS ────────────────────────────────────────────────────
function Process() {
  const steps = [
    { num: '01', title: 'CONSULTATION', desc: 'We listen, understand your needs and goals.' },
    { num: '02', title: 'PLANNING', desc: 'We plan every detail and provide a clear roadmap.' },
    { num: '03', title: 'EXECUTION', desc: 'Our team gets to work with precision and quality.' },
    { num: '04', title: 'DELIVERY', desc: 'We deliver on time and exceed your expectations.' },
  ]
  return (
    <section id="process" className="process-section">
      <motion.div className="section-header light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow gold">OUR PROCESS</p>
        <h2>A Process Built on Trust</h2>
        <p className="section-sub light">We keep things simple, transparent, and efficient.</p>
      </motion.div>
      <div className="process-steps">
        {steps.map((s, i) => (
          <motion.div key={s.num} className="process-step" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <div className="process-num">{s.num}</div>
            {i < 3 && <div className="process-connector" />}
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── TESTIMONIALS ───────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { text: 'Escuadra Builders Group turned our dream home into reality. Their team was professional, detail-oriented, and always available.', name: 'María González', location: 'Coral Gables, FL', stars: 5 },
    { text: 'From start to finish, the communication was excellent and the results exceeded our expectations. Highly recommend.', name: 'Javier Rodríguez', location: 'Miami, FL', stars: 5 },
    { text: 'Reliable, honest, and extremely skilled. They completed our commercial project on time and on budget.', name: 'Laura Martínez', location: 'Pinecrest, FL', stars: 5 },
  ]
  return (
    <section id="testimonials" className="testimonials-section">
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow gold">TESTIMONIALS</p>
        <h2>Clients Say It Best</h2>
        <p className="section-sub">We take pride in every project we build.</p>
      </motion.div>
      <div className="reviews-grid">
        {reviews.map(r => (
          <motion.div key={r.name} className="review-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="stars">{Array.from({ length: r.stars }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            <p className="review-text">"{r.text}"</p>
            <div className="reviewer">
              <div className="reviewer-avatar">{r.name[0]}</div>
              <div>
                <strong>{r.name}</strong>
                <span>{r.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── BIG CTA ────────────────────────────────────────────────────
function BigCTA() {
  const openQuote = useQuote()
  return (
    <section className="big-cta-section">
      <img src={hero} alt="Construction project Miami FL" className="big-cta-img" loading="lazy" />
      <div className="big-cta-overlay" />
      <motion.div className="big-cta-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow gold">READY TO START?</p>
        <h2>Let's Build Your Next<br />Project Together</h2>
        <p>Ready to build something amazing? We're here to bring your vision to life.</p>
        <div className="big-cta-actions">
          <button className="btn btn-sand" onClick={openQuote}>GET A FREE ESTIMATE →</button>
          <a href="#contact" className="btn btn-outline">SCHEDULE A CONSULTATION</a>
        </div>
      </motion.div>
    </section>
  )
}

// ── CONTACT ────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow gold">START YOUR PROJECT</p>
          <h2>Tell us what you<br />want to build.</h2>
          <p>We'll reach out to review your project, location, budget and timeline.</p>
          <div className="contact-info">
            <a href="tel:8882719092"><Phone size={16} /> (888) 271-9092</a>
            <a href="mailto:estimates@escuadrabg.com"><Mail size={16} /> estimates@escuadrabg.com</a>
            <span><MapPin size={16} /> Miami, Florida</span>
          </div>
        </motion.div>
      </div>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input placeholder="Full name" />
        <input placeholder="Email or phone" />
        <select defaultValue="">
          <option value="" disabled>Project type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Remodeling</option>
          <option>Project Management</option>
        </select>
        <textarea placeholder="Tell us about your project" rows={5} />
        <button type="submit">REQUEST AN ESTIMATE →</button>
      </form>
    </section>
  )
}

// ── PAGE ───────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <About />
      <Process />
      <Testimonials />
      <BigCTA />
      <Contact />
    </>
  )
}
