import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2, ShieldCheck, Home, MessageCircle, Menu, X, MapPin, Phone, Mail,
  Layers, Brush, Triangle, Paintbrush, Scissors, Grid2X2, Wrench, ArrowRight,
  CheckCircle2, Users, Clock, Star,
  Tag, Coffee, Box, Hammer, Settings
} from 'lucide-react'
import { useState, useEffect } from 'react'
import hero from './assets/hero-escuadra.jpeg'
import logo from './assets/logo-escuadra.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

// ─────────────────────────────────────────────────────────────
// QUOTE WIZARD
// ─────────────────────────────────────────────────────────────
const RESIDENTIAL_SERVICES = [
  { id: 'new-home',  icon: <Home size={22} />,      label: 'Casa Nueva',    sub: 'Construcción completa desde cero' },
  { id: 'addition',  icon: <Building2 size={22} />,  label: 'Ampliación',    sub: 'Agrega espacio a tu hogar' },
  { id: 'remodel',   icon: <Hammer size={22} />,     label: 'Remodelación',  sub: 'Transforma tu espacio actual' },
  { id: 'kitchen',   icon: <Grid2X2 size={22} />,    label: 'Cocina & Baño', sub: 'Actualiza los espacios clave' },
  { id: 'flooring',  icon: <Scissors size={22} />,   label: 'Pisos',         sub: 'Cerámicas, porcelanato y más' },
  { id: 'painting',  icon: <Paintbrush size={22} />, label: 'Pintura',       sub: 'Interior y exterior' },
  { id: 'roofing',   icon: <Triangle size={22} />,   label: 'Techo',         sub: 'Instalación y reparación' },
  { id: 'stucco',    icon: <Brush size={22} />,      label: 'Estuco',        sub: 'Acabados exteriores' },
]

const COMMERCIAL_SERVICES = [
  { id: 'offices',    icon: <Building2 size={22} />,  label: 'Oficinas',      sub: 'Espacios modernos y funcionales' },
  { id: 'retail',     icon: <Tag size={22} />,         label: 'Retail / Tienda',sub: 'Locales y espacios comerciales' },
  { id: 'restaurant', icon: <Coffee size={22} />,      label: 'Restaurante',   sub: 'Cocinas y salones de servicio' },
  { id: 'warehouse',  icon: <Box size={22} />,          label: 'Bodega',        sub: 'Industrial y almacenamiento' },
  { id: 'buildout',   icon: <Hammer size={22} />,       label: 'Build-Out',     sub: 'Construcción de interiores' },
  { id: 'concrete',   icon: <Layers size={22} />,       label: 'Concreto',      sub: 'Losas, columnas y estructuras' },
  { id: 'framing',    icon: <Triangle size={22} />,     label: 'Framing',       sub: 'Estructuras de madera y metal' },
  { id: 'maint',      icon: <Settings size={22} />,     label: 'Mantenimiento', sub: 'Reparaciones y mejoras' },
]

function QuoteWizard({ onClose }) {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState(null)
  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({ name: '', contact: '', location: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const services = category === 'residential' ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES

  const toggle = (id) =>
    setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])

  const pickCategory = (cat) => {
    setCategory(cat)
    setSelected([])
    setStep(2)
  }

  const handleSend = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <motion.div
      className="wizard-overlay"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="wizard-box"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="wizard-header">
          <div className="wizard-brand">
            <img src={logo} alt="Escuadra" />
            <span>Escuadra Builders Group</span>
          </div>
          {!sent && (
            <div className="wizard-steps">
              {[1, 2, 3].map((n, i) => (
                <span key={n} className="wizard-steps-chunk">
                  <div className={`wstep-dot${step >= n ? ' active' : ''}`}>{n}</div>
                  {i < 2 && <div className={`wstep-line${step > n ? ' active' : ''}`} />}
                </span>
              ))}
            </div>
          )}
          <button className="wizard-close" onClick={onClose} aria-label="Cerrar"><X size={18} /></button>
        </div>

        {/* Body */}
        <div className="wizard-body">
          <AnimatePresence mode="wait">

            {/* SUCCESS */}
            {sent && (
              <motion.div key="sent" className="wizard-success"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <CheckCircle2 size={52} />
                <h2>¡Solicitud enviada!</h2>
                <p>Nos comunicaremos contigo en las próximas horas para revisar tu proyecto y darte un presupuesto.</p>
                <button className="btn btn-sand" onClick={onClose}>Cerrar</button>
              </motion.div>
            )}

            {/* STEP 1 — Categoría */}
            {!sent && step === 1 && (
              <motion.div key="s1" className="wizard-step"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.28 }}>
                <span className="wiz-eyebrow">Paso 1 de 3</span>
                <h2>¿Qué tipo de<br />proyecto tienes?</h2>
                <p className="wiz-sub">Selecciona la categoría que mejor describe lo que buscas.</p>
                <div className="cat-grid">
                  <button className="cat-card" onClick={() => pickCategory('residential')}>
                    <div className="cat-img-wrap">
                      <img src={hero} alt="Residencial" />
                      <div className="cat-img-overlay" />
                    </div>
                    <div className="cat-body">
                      <div className="cat-icon"><Home size={26} /></div>
                      <strong>RESIDENCIAL</strong>
                      <span>Casas nuevas, remodelaciones, ampliaciones, cocinas, baños y acabados del hogar.</span>
                      <div className="cat-cta">Ver opciones <ArrowRight size={14} /></div>
                    </div>
                  </button>
                  <button className="cat-card" onClick={() => pickCategory('commercial')}>
                    <div className="cat-img-wrap">
                      <img src={hero} alt="Comercial" />
                      <div className="cat-img-overlay" />
                    </div>
                    <div className="cat-body">
                      <div className="cat-icon"><Building2 size={26} /></div>
                      <strong>COMERCIAL</strong>
                      <span>Oficinas, tiendas, restaurantes, bodegas, build-outs y construcciones comerciales.</span>
                      <div className="cat-cta">Ver opciones <ArrowRight size={14} /></div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Servicios */}
            {!sent && step === 2 && (
              <motion.div key="s2" className="wizard-step"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.28 }}>
                <span className="wiz-eyebrow">
                  Paso 2 de 3 — {category === 'residential' ? 'Residencial' : 'Comercial'}
                </span>
                <h2>¿Qué necesitas?</h2>
                <p className="wiz-sub">Selecciona uno o más servicios. Puedes elegir varios a la vez.</p>
                <div className="svc-grid">
                  {services.map(s => (
                    <button
                      key={s.id}
                      className={`svc-option${selected.includes(s.id) ? ' selected' : ''}`}
                      onClick={() => toggle(s.id)}
                    >
                      <div className="svc-icon-box">{s.icon}</div>
                      <div className="svc-text">
                        <strong>{s.label}</strong>
                        <span>{s.sub}</span>
                      </div>
                      <div className="svc-check"><CheckCircle2 size={16} /></div>
                    </button>
                  ))}
                </div>
                <div className="wiz-nav">
                  <button className="wiz-back" onClick={() => { setStep(1); setCategory(null) }}>← Atrás</button>
                  <button
                    className={`btn btn-sand${selected.length === 0 ? ' wiz-disabled' : ''}`}
                    disabled={selected.length === 0}
                    onClick={() => setStep(3)}
                  >
                    Continuar{selected.length > 0 ? ` (${selected.length})` : ''} →
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Formulario */}
            {!sent && step === 3 && (
              <motion.div key="s3" className="wizard-step"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.28 }}>
                <span className="wiz-eyebrow">Paso 3 de 3 — Tu solicitud</span>
                <h2>¿Cómo te<br />contactamos?</h2>
                <div className="selection-pills">
                  <span className="pill-cat">{category === 'residential' ? 'Residencial' : 'Comercial'}</span>
                  {selected.map(id => {
                    const s = services.find(x => x.id === id)
                    return s ? <span key={id} className="pill-svc">{s.label}</span> : null
                  })}
                </div>
                <form className="wiz-form" onSubmit={handleSend}>
                  <div className="wf-row">
                    <input required placeholder="Nombre completo" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input required placeholder="Teléfono o email" value={form.contact}
                      onChange={e => setForm({ ...form, contact: e.target.value })} />
                  </div>
                  <input placeholder="Ciudad / Ubicación del proyecto" value={form.location}
                    onChange={e => setForm({ ...form, location: e.target.value })} />
                  <textarea rows={4}
                    placeholder="Cuéntanos más sobre tu proyecto (medidas, materiales, fechas...)"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })} />
                  <div className="wiz-nav">
                    <button type="button" className="wiz-back" onClick={() => setStep(2)}>← Atrás</button>
                    <button type="submit" className="btn btn-sand">Enviar solicitud →</button>
                  </div>
                </form>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────
function Header({ openQuote }) {
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
        <button className="nav-cta" onClick={() => { setOpen(false); openQuote() }}>
          SOLICITA UN PRESUPUESTO
        </button>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  )
}

// ─────────────────────────────────────────────────────────────
// HERO — Selector de categoría integrado
// ─────────────────────────────────────────────────────────────
function Hero({ openQuote }) {
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
          <button className="btn btn-sand" onClick={openQuote}>SOLICITAR PRESUPUESTO</button>
          <a href="#projects" className="btn btn-outline">VER PROYECTOS</a>
        </div>
      </motion.div>

      {/* Category selector card dentro del hero */}
      <motion.div
        className="hero-selector"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <p className="hero-selector-label">¿Qué tipo de proyecto?</p>
        <div className="hero-selector-cards">
          <button className="hero-sel-card" onClick={openQuote}>
            <div className="hsc-icon"><Home size={20} /></div>
            <div>
              <strong>RESIDENCIAL</strong>
              <span>Hogares, remodelaciones, acabados</span>
            </div>
            <ArrowRight size={16} className="hsc-arrow" />
          </button>
          <div className="hsc-divider" />
          <button className="hero-sel-card" onClick={openQuote}>
            <div className="hsc-icon"><Building2 size={20} /></div>
            <div>
              <strong>COMERCIAL</strong>
              <span>Oficinas, tiendas, restaurantes</span>
            </div>
            <ArrowRight size={16} className="hsc-arrow" />
          </button>
        </div>
      </motion.div>

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

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────
function Services({ openQuote }) {
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
          <button className="btn btn-sand" onClick={openQuote}>SOLICITA UN PRESUPUESTO <ArrowRight size={15} /></button>
          <p><MessageCircle size={14} /> Hablemos sobre tu proyecto</p>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────
function Projects({ openQuote }) {
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
              <button className="btn btn-outline-light" onClick={openQuote}>PROYECTO SIMILAR →</button>
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
        <button className="btn btn-sand" onClick={openQuote}>SOLICITA UN PRESUPUESTO →</button>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// CHAT BUBBLE
// ─────────────────────────────────────────────────────────────
function ChatBubble({ openQuote }) {
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
        <p className="chat-intro">¿Buscas un presupuesto para un proyecto residencial o comercial? Respondemos rápido.</p>
        <div className="chat-actions">
          <a href="https://wa.me/18882719092" target="_blank" rel="noreferrer" className="btn chat-btn-primary">
            Iniciar chat
          </a>
          <button className="btn chat-btn-secondary" onClick={() => { setOpen(false); openQuote() }}>
            Solicitar presupuesto
          </button>
        </div>
      </div>
      <button className={`chat-bubble${open ? ' bubble-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Chat">
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const openQuote = () => setQuoteOpen(true)

  return (
    <>
      <Header openQuote={openQuote} />
      <Hero openQuote={openQuote} />
      <Services openQuote={openQuote} />
      <Projects openQuote={openQuote} />
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
      <ChatBubble openQuote={openQuote} />
      <AnimatePresence>
        {quoteOpen && <QuoteWizard onClose={() => setQuoteOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
