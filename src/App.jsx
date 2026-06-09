import { motion } from 'framer-motion'
import { Building2, ShieldCheck, Clock3, HardHat, Home, MessageCircle, Menu, X, MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import hero from './assets/hero-escuadra.jpeg'
import logo from './assets/logo-escuadra.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } }
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Services', 'Projects', 'About', 'Contact']

  return (
    <header className="header">
      <a href="#home" className="brand">
        <div className="brand-logo">
          <img src={logo} alt="Escuadra Builders Group" />
        </div>
        <div className="brand-copy">
          <span>ESCUADRA</span>
          <p>Builders Group</p>
        </div>
      </a>

      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
        <a className="nav-cta" href="https://wa.me/17861234567" target="_blank" rel="noreferrer">Get a Quote</a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={hero} alt="Escuadra construction project" className="hero-img" />
      <div className="hero-overlay" />
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp}>
        <p className="eyebrow">Residential & Commercial Construction</p>
        <h1>Building Structures.<br />Creating Trust.</h1>
        <p className="hero-text">Premium construction, remodeling, stucco, framing and project execution with elegant detail and reliable delivery.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Us</a>
        </div>
      </motion.div>
      <div className="hero-panel">
        <div className="hero-panel-item">
          <Building2 />
          <div>
            <strong>Building</strong>
            <span>Residential & Commercial</span>
          </div>
        </div>
        <div className="hero-panel-item">
          <ShieldCheck />
          <div>
            <strong>Licensed & Insured</strong>
            <span>Trusted craftsmanship</span>
          </div>
        </div>
        <div className="hero-panel-item">
          <Clock3 />
          <div>
            <strong>On Time</strong>
            <span>Schedule-focused delivery</span>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <div className="hero-footer-card">
          <span>01</span>
          <div>
            <strong>Project Vision</strong>
            <p>Elegant planning for every premium build.</p>
          </div>
        </div>
        <div className="hero-footer-card">
          <span>02</span>
          <div>
            <strong>Quality Delivery</strong>
            <p>Professional execution with sharp details.</p>
          </div>
        </div>
        <div className="hero-footer-card">
          <span>03</span>
          <div>
            <strong>Trusted Team</strong>
            <p>Experienced crews for Miami and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: <Home />, title: 'Residential Building', text: 'Elegant homes, additions and upgrades with a premium finish.' },
    { icon: <Building2 />, title: 'Commercial Projects', text: 'Reliable structures for offices, retail and business spaces.' },
    { icon: <HardHat />, title: 'Concrete, Stucco & Framing', text: 'Strong foundations, clean execution and professional crews.' },
    { icon: <ShieldCheck />, title: 'Project Management', text: 'Planning, supervision, quality control and transparent delivery.' },
  ]

  return (
    <section id="services" className="section services">
      <motion.div className="section-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow dark">What we do</p>
        <h2>Construction solutions with a premium standard.</h2>
      </motion.div>
      <div className="grid cards-4">
        {items.map((item) => (
          <motion.article className="card" key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = ['Luxury Residence', 'Modern Remodeling', 'Commercial Structure']
  return (
    <section id="projects" className="section projects">
      <motion.div className="section-head light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow">Featured work</p>
        <h2>Projects built with precision and identity.</h2>
      </motion.div>
      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.article className="project-card" key={p} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}>
            <img src={hero} alt={p} />
            <div>
              <span>0{i + 1}</span>
              <h3>{p}</h3>
              <p>Design, planning and execution by Escuadra Builders Group.</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow dark">About Escuadra</p>
        <h2>A builder brand focused on trust, structure and detail.</h2>
      </motion.div>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Escuadra Builders Group combines technical execution with a refined visual identity. The result is a modern construction experience for clients who value quality, timing and professional communication.
      </motion.p>
      <div className="stats">
        <div><strong>100%</strong><span>Commitment</span></div>
        <div><strong>CGC</strong><span>Licensed & Insured</span></div>
        <div><strong>Miami</strong><span>Premium Market</span></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="eyebrow">Start your project</p>
        <h2>Tell us what you want to build.</h2>
        <p>We will contact you to review your project, location, budget and timeline.</p>
        <div className="contact-list">
          <span><Phone /> 786.123.4567</span>
          <span><Mail /> info@escuadrabuilders.com</span>
          <span><MapPin /> Miami, Florida</span>
        </div>
      </motion.div>
      <form className="contact-form">
        <input placeholder="Full name" />
        <input placeholder="Email or phone" />
        <select defaultValue=""><option value="" disabled>Project type</option><option>Residential</option><option>Commercial</option><option>Remodeling</option></select>
        <textarea placeholder="Tell us about your project" rows="5" />
        <button type="button">Request Quote</button>
      </form>
    </section>
  )
}

function ChatBubble() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`chat-wrap ${open ? 'chat-open' : ''}`}>
      <div className="chat-card" role="dialog" aria-label="Escuadra chat assistant">
        <div className="chat-card-header">
          <div>
            <span>Escuadra Assistant</span>
            <p>Describe your project and we’ll help you start the right plan.</p>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Cerrar chat">
            <X size={18} />
          </button>
        </div>
        <div className="chat-card-body">
          <p className="chat-intro">Need a quote, consultation, or quick follow-up? We reply fast with practical next steps.</p>
          <div className="chat-actions">
            <button className="btn chat-action primary" type="button">Start a chat</button>
            <button className="btn chat-action secondary" type="button">Request quote</button>
          </div>
        </div>
      </div>
      <button className={`chat-bubble ${open ? 'chat-bubble-open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar chat' : 'Abrir chat'}>
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <footer>© 2026 Escuadra Builders Group. Building Structures. Creating Trust.</footer>
      <ChatBubble />
    </>
  )
}
