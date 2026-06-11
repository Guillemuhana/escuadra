import { motion } from 'framer-motion'
import {
  Building2, ShieldCheck, Home, MessageCircle, Menu, X, MapPin, Phone, Mail,
  Layers, Brush, Triangle, Paintbrush, Scissors, Grid2X2, Wrench, ArrowRight,
  CheckCircle2, Users, Clock, Star
} from 'lucide-react'
import { useState } from 'react'
import hero from './assets/hero-escuadra.jpeg'
import logo from './assets/logo-escuadra.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'HOGAR', href: '#home' },
    { label: 'SERVICIOS', href: '#services' },
    { label: 'PROYECTOS', href: '#projects' },
    { label: 'ACERCA DE', href: '#about' },
    { label: 'CONTACTO', href: '#contact' },
  ]
  return (
    <header className="header">
      <a href="#home" className="brand">
        <div className="brand-logo"><img src={logo} alt="Escuadra" /></div>
        <div className="brand-copy">
          <span>ESCUADRA</span>
          <p>GRUPO DE CONSTRUCTORES</p>
        </div>
      </a>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>SOLICITA UN PRESUPUESTO</a>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  )
}

function Hero() {
  const panels = [
    { num: '01', title: 'STRUCTURED EXECUTION', desc: 'Professional coordination and real project supervision.' },
    { num: '02', title: 'SPECIALIZED CREWS', desc: 'Experienced teams for residential and commercial projects.' },
    { num: '03', title: 'PREMIUM FINISHES', desc: 'Modern construction with attention to detail.' },
  ]
  const bar = [
    { icon: <Building2 size={18} />, label: 'RESIDENTIAL & COMMERCIAL', sub: 'Solutions for homes, businesses and developments.' },
    { icon: <Star size={18} />, label: 'QUALITY EXECUTION', sub: 'High standards and attention to every detail.' },
    { icon: <Users size={18} />, label: 'TRUSTED PARTNERS', sub: 'Reliable subcontractors and suppliers.' },
    { icon: <Clock size={18} />, label: 'ON TIME & ON BUDGET', sub: 'Efficient planning and transparent communication.' },
    { icon: <MapPin size={18} />, label: 'MIAMI, FLORIDA', sub: 'Proudly serving South Florida.' },
  ]
  return (
    <section id="home" className="hero">
      <img src={hero} alt="Escuadra construction project" className="hero-img" />
      <div className="hero-overlay" />
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp}>
        <h1>Structure.<br />Precision.<br />Trust.</h1>
        <p className="hero-sub">Residential and commercial construction with professional execution and modern standards.</p>
        <div className="hero-contacts">
          <span><Phone size={15} /> (888) 271-9092</span>
          <span><Mail size={15} /> estimates@escuadrabg.com</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-sand">VIEW PROJECTS</a>
          <a href="#contact" className="btn btn-outline">CONTACT US</a>
        </div>
      </motion.div>
      <div className="hero-panel">
        {panels.map(p => (
          <div className="hero-panel-item" key={p.num}>
            <div className="panel-icon"><Building2 size={20} /></div>
            <div>
              <strong>{p.num} — {p.title}</strong>
              <span>{p.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-bar">
        {bar.map(b => (
          <div className="hero-bar-item" key={b.label}>
            {b.icon}
            <div>
              <strong>{b.label}</strong>
              <span>{b.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { icon: <Layers size={22} />, title: 'CONCRETE', desc: 'Estructuras sólidas y duraderas. Losas, columnas, vigas y más, con los más altos estándares.' },
    { icon: <Brush size={22} />, title: 'STUCCO', desc: 'Acabados exteriores e interiores con textura y resistencia que realzan cada superficie.' },
    { icon: <Home size={22} />, title: 'FRAMING', desc: 'Estructuras de madera y metal con precisión y cumplimiento de código.' },
    { icon: <Triangle size={22} />, title: 'ROOFING', desc: 'Instalación y reparación de techos con materiales de alta calidad y máxima protección.' },
    { icon: <Paintbrush size={22} />, title: 'PAINTING', desc: 'Acabados interiores y exteriores impecables que elevan la estética de tu propiedad.' },
    { icon: <Scissors size={22} />, title: 'FINISHES', desc: 'Pisos, molduras, cielorrasos y detalles que aportan elegancia y funcionalidad.' },
    { icon: <Grid2X2 size={22} />, title: 'TILE & FLOORING', desc: 'Instalación profesional de cerámicas, porcelanatos, piedra y otros materiales.' },
    { icon: <Wrench size={22} />, title: 'RENOVATIONS', desc: 'Remodelaciones integrales que transforman espacios con calidad y detalle.' },
  ]
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="services-header-left">
          <p className="eyebrow gold">TECHNICAL SERVICES</p>
          <h2>Built with quality.<br />Finished with care.</h2>
        </div>
        <p className="services-intro">Ofrecemos una amplia gama de servicios técnicos especializados para garantizar la calidad, durabilidad y estética en cada detalle de tu proyecto.</p>
      </div>
      <div className="services-grid">
        {services.map(s => (
          <motion.article className="service-card" key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="service-img">
              <img src={hero} alt={s.title} />
            </div>
            <div className="service-body">
              <div className="service-icon"><div className="icon-box-dark">{s.icon}</div></div>
              <div className="service-text">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <ArrowRight size={18} className="service-arrow" />
            </div>
          </motion.article>
        ))}
      </div>
      <div className="services-cta-bar">
        <div className="cta-bar-left">
          <p className="eyebrow gold">CALIDAD EN CADA DETALLE</p>
          <h3>Soluciones técnicas para<br />proyectos que perduran.</h3>
        </div>
        <ul className="cta-checklist">
          {['Materiales de primera calidad', 'Mano de obra profesional', 'Cumplimiento de tiempos', 'Atención al detalle en cada etapa'].map(item => (
            <li key={item}><CheckCircle2 size={16} /> {item}</li>
          ))}
        </ul>
        <div className="cta-bar-right">
          <a href="#contact" className="btn btn-sand">SOLICITA UN PRESUPUESTO <ArrowRight size={15} /></a>
          <p><MessageCircle size={14} /> Hablemos sobre tu proyecto</p>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const featured = [
    { type: 'RESIDENCIAL', title: 'Coral Gables Residence', desc: 'Remodelación integral de residencia de lujo. Diseño moderno, acabados premium y atención al detalle en cada espacio.', location: 'Coral Gables, FL', size: '5,200 ft²', year: '2023' },
    { type: 'COMERCIAL', title: 'Brickell Retail Space', desc: 'Construcción y remodelación de espacio comercial. Enfoque en funcionalidad, estética y cumplimiento de plazos.', location: 'Brickell, Miami', size: '3,800 ft²', year: '2024' },
  ]
  const gallery = [
    { type: 'RESIDENCIAL', title: 'Modern Bathroom Remodel', location: 'Miami, FL', year: '2024' },
    { type: 'RESIDENCIAL', title: 'Kendall Home Addition', location: 'Kendall, FL', year: '2023' },
    { type: 'COMERCIAL', title: 'Office Build-Out', location: 'Doral, FL', year: '2024' },
    { type: 'EXTERIOR', title: 'Stucco & Exterior Renovation', location: 'Miami Beach, FL', year: '2023' },
    { type: 'RESIDENCIAL', title: 'Luxury Kitchen Remodel', location: 'Coral Gables, FL', year: '2024' },
    { type: 'COMERCIAL', title: 'Warehouse Construction', location: 'Hialeah, FL', year: '2023' },
  ]
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-header-left">
          <p className="eyebrow gold">PROYECTOS DESTACADOS</p>
          <h2>Construimos ideas.<br />Creamos resultados.</h2>
        </div>
        <div className="projects-header-right">
          <p>Cada proyecto refleja nuestro compromiso con la calidad, la precisión y la atención al detalle. Desde residencias de lujo hasta espacios comerciales, entregamos construcciones que superan expectativas.</p>
          <div className="project-badges">
            <div className="project-badge"><ShieldCheck size={22} /><div><strong>Calidad garantizada</strong><span>Utilizamos materiales premium y procesos constructivos de la más alta calidad.</span></div></div>
            <div className="project-badge"><Users size={22} /><div><strong>Equipo experto</strong><span>Profesionales con experiencia y dedicación en cada etapa del proyecto.</span></div></div>
          </div>
        </div>
      </div>
      <div className="featured-grid">
        {featured.map(p => (
          <motion.article className="featured-card" key={p.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={hero} alt={p.title} />
            <span className={`type-badge ${p.type === 'COMERCIAL' ? 'badge-comercial' : ''}`}>{p.type}</span>
            <div className="featured-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-meta">
                <span><MapPin size={13} /> {p.location}</span>
                <span>↗ {p.size}</span>
                <span>📅 {p.year}</span>
              </div>
              <a href="#contact" className="btn btn-outline-light">VER PROYECTO →</a>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="gallery-grid">
        {gallery.map(p => (
          <motion.article className="gallery-card" key={p.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <img src={hero} alt={p.title} />
            <span className="type-badge small">{p.type}</span>
            <div className="gallery-info">
              <h4>{p.title}</h4>
              <p>{p.location} · {p.year}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="projects-cta-bar">
        <div>
          <strong>¿Tienes un proyecto en mente?</strong>
          <p>Hablemos de cómo podemos hacerlo realidad con la calidad y precisión que nos caracteriza.</p>
        </div>
        <a href="#contact" className="btn btn-sand">SOLICITA UN PRESUPUESTO →</a>
      </div>
    </section>
  )
}

function About() {
  const cards = [
    { num: '01', title: 'LICENSED & INSURED', desc: 'Contamos con licencia general (CGC) y seguro completo para garantizar operaciones seguras y profesionales.', icon: <ShieldCheck size={26} /> },
    { num: '02', title: 'RESIDENTIAL & COMMERCIAL', desc: 'Especialistas en construcción y remodelación de proyectos residenciales y comerciales de diferentes escalas.', icon: <Building2 size={26} /> },
    { num: '03', title: 'SOUTH FLORIDA BASED', desc: 'Conocemos el mercado local. Equipos locales, coordinación rápida y supervisión constante en cada proyecto.', icon: <MapPin size={26} /> },
  ]
  return (
    <section id="about" className="about-section">
      <div className="about-main">
        <motion.div className="about-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow gold">ACERCA DE ESCUADRA</p>
          <h2>Construimos proyectos con estructura, precisión y ejecución real.</h2>
          <div className="about-divider" />
          <p>Escuadra Builders Group combina experiencia en obra, equipos profesionales y una gestión organizada para entregar proyectos residenciales y comerciales con los más altos estándares de calidad.</p>
          <p>Nos enfocamos en la comunicación, los detalles constructivos y los plazos de entrega, asegurando una experiencia transparente y resultados que perduran.</p>
          <a href="#contact" className="btn btn-dark">CONOCE NUESTRO ENFOQUE →</a>
        </motion.div>
        <div className="about-img">
          <img src={hero} alt="Equipo Escuadra Builders Group" />
        </div>
      </div>
      <div className="about-cards">
        {cards.map(c => (
          <motion.div className="about-card" key={c.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="about-card-icon">{c.icon}</div>
            <span className="about-num">{c.num}</span>
            <h4>{c.title}</h4>
            <div className="about-card-divider" />
            <p>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow gold">INICIA TU PROYECTO</p>
          <h2>Dinos qué quieres construir.</h2>
          <p>Nos comunicaremos contigo para revisar tu proyecto, ubicación, presupuesto y cronograma.</p>
          <div className="contact-info">
            <a href="tel:8882719092"><Phone size={16} /> (888) 271-9092</a>
            <a href="mailto:estimates@escuadrabg.com"><Mail size={16} /> estimates@escuadrabg.com</a>
            <span><MapPin size={16} /> Miami, Florida</span>
          </div>
        </motion.div>
      </div>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input placeholder="Nombre completo" />
        <input placeholder="Email o teléfono" />
        <select defaultValue="">
          <option value="" disabled>Tipo de proyecto</option>
          <option>Residencial</option>
          <option>Comercial</option>
          <option>Remodelación</option>
          <option>Estructuras</option>
        </select>
        <textarea placeholder="Cuéntanos sobre tu proyecto" rows={5} />
        <button type="submit">SOLICITAR PRESUPUESTO →</button>
      </form>
    </section>
  )
}

function ChatBubble() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`chat-wrap${open ? ' chat-open' : ''}`}>
      <div className="chat-card">
        <div className="chat-card-header">
          <div>
            <span>Escuadra Assistant</span>
            <p>Describe tu proyecto y te ayudamos a comenzar.</p>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <p className="chat-intro">¿Necesitas un presupuesto, consulta o seguimiento? Respondemos rápido con los próximos pasos.</p>
        <div className="chat-actions">
          <a href="https://wa.me/18882719092" target="_blank" rel="noreferrer" className="btn chat-btn-primary">Iniciar chat</a>
          <a href="#contact" className="btn chat-btn-secondary" onClick={() => setOpen(false)}>Solicitar presupuesto</a>
        </div>
      </div>
      <button className={`chat-bubble${open ? ' bubble-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Chat">
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
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={logo} alt="Escuadra" />
            <div>
              <span>ESCUADRA</span>
              <p>GRUPO DE CONSTRUCTORES</p>
            </div>
          </div>
          <p>© 2026 Escuadra Builders Group. Building Structures. Creating Trust.</p>
          <div className="footer-contact">
            <a href="tel:8882719092">(888) 271-9092</a>
            <a href="mailto:estimates@escuadrabg.com">estimates@escuadrabg.com</a>
          </div>
        </div>
      </footer>
      <ChatBubble />
    </>
  )
}
