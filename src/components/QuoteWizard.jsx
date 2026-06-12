import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Building2, Grid2X2, Scissors, Paintbrush, Triangle, Brush, Wrench,
  Hammer, Tag, Coffee, Box, Settings, Layers, CheckCircle2, ArrowRight, X
} from 'lucide-react'
import logo from '../assets/logo-escuadra.jpeg'

const RESIDENTIAL = [
  { id: 'new-home',  icon: <Home size={22} />,      label: 'Casa Nueva',    sub: 'Construcción completa desde cero' },
  { id: 'addition',  icon: <Building2 size={22} />,  label: 'Ampliación',    sub: 'Agrega espacio a tu hogar' },
  { id: 'remodel',   icon: <Hammer size={22} />,     label: 'Remodelación',  sub: 'Transforma tu espacio actual' },
  { id: 'kitchen',   icon: <Grid2X2 size={22} />,    label: 'Cocina & Baño', sub: 'Actualiza los espacios clave' },
  { id: 'flooring',  icon: <Scissors size={22} />,   label: 'Pisos',         sub: 'Cerámicas, porcelanato y más' },
  { id: 'painting',  icon: <Paintbrush size={22} />, label: 'Pintura',       sub: 'Interior y exterior' },
  { id: 'roofing',   icon: <Triangle size={22} />,   label: 'Techo',         sub: 'Instalación y reparación' },
  { id: 'stucco',    icon: <Brush size={22} />,      label: 'Estuco',        sub: 'Acabados exteriores' },
]

const COMMERCIAL = [
  { id: 'offices',    icon: <Building2 size={22} />,  label: 'Oficinas',        sub: 'Espacios modernos y funcionales' },
  { id: 'retail',     icon: <Tag size={22} />,         label: 'Retail / Tienda', sub: 'Locales y espacios comerciales' },
  { id: 'restaurant', icon: <Coffee size={22} />,      label: 'Restaurante',     sub: 'Cocinas y salones de servicio' },
  { id: 'warehouse',  icon: <Box size={22} />,          label: 'Bodega',          sub: 'Industrial y almacenamiento' },
  { id: 'buildout',   icon: <Hammer size={22} />,       label: 'Build-Out',       sub: 'Construcción de interiores' },
  { id: 'concrete',   icon: <Layers size={22} />,       label: 'Concreto',        sub: 'Losas, columnas y estructuras' },
  { id: 'framing',    icon: <Triangle size={22} />,     label: 'Framing',         sub: 'Estructuras de madera y metal' },
  { id: 'maint',      icon: <Settings size={22} />,     label: 'Mantenimiento',   sub: 'Reparaciones y mejoras' },
]

import hero from '../assets/hero-escuadra.jpeg'

export default function QuoteWizard({ onClose }) {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState(null)
  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({ name: '', contact: '', location: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const services = category === 'residential' ? RESIDENTIAL : COMMERCIAL
  const toggle = (id) => setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])

  const pickCategory = (cat) => { setCategory(cat); setSelected([]); setStep(2) }

  return (
    <motion.div className="wizard-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <motion.div className="wizard-box"
        initial={{ opacity: 0, y: 36, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }} transition={{ duration: 0.38 }}>

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
          <button className="wizard-close" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="wizard-body">
          <AnimatePresence mode="wait">
            {sent && (
              <motion.div key="sent" className="wizard-success"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <CheckCircle2 size={52} />
                <h2>Request sent!</h2>
                <p>We'll reach out within a few hours to review your project and provide a free estimate.</p>
                <button className="btn btn-sand" onClick={onClose}>Close</button>
              </motion.div>
            )}

            {!sent && step === 1 && (
              <motion.div key="s1" className="wizard-step"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.28 }}>
                <span className="wiz-eyebrow">Step 1 of 3</span>
                <h2>What type of<br />project do you have?</h2>
                <p className="wiz-sub">Select the category that best describes what you're looking for.</p>
                <div className="cat-grid">
                  {[
                    { key: 'residential', icon: <Home size={28} />, title: 'RESIDENTIAL', desc: 'New homes, remodels, additions, kitchens, baths and home finishes.' },
                    { key: 'commercial',  icon: <Building2 size={28} />, title: 'COMMERCIAL', desc: 'Offices, retail, restaurants, warehouses, build-outs and commercial builds.' },
                  ].map(c => (
                    <button key={c.key} className="cat-card" onClick={() => pickCategory(c.key)}>
                      <div className="cat-img-wrap"><img src={hero} alt={c.title} /><div className="cat-img-overlay" /></div>
                      <div className="cat-body">
                        <div className="cat-icon">{c.icon}</div>
                        <strong>{c.title}</strong>
                        <span>{c.desc}</span>
                        <div className="cat-cta">See options <ArrowRight size={14} /></div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {!sent && step === 2 && (
              <motion.div key="s2" className="wizard-step"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.28 }}>
                <span className="wiz-eyebrow">Step 2 of 3 — {category === 'residential' ? 'Residential' : 'Commercial'}</span>
                <h2>What do you need?</h2>
                <p className="wiz-sub">Select one or more services. You can choose several.</p>
                <div className="svc-grid">
                  {services.map(s => (
                    <button key={s.id} className={`svc-option${selected.includes(s.id) ? ' selected' : ''}`} onClick={() => toggle(s.id)}>
                      <div className="svc-icon-box">{s.icon}</div>
                      <div className="svc-text"><strong>{s.label}</strong><span>{s.sub}</span></div>
                      <div className="svc-check"><CheckCircle2 size={16} /></div>
                    </button>
                  ))}
                </div>
                <div className="wiz-nav">
                  <button className="wiz-back" onClick={() => { setStep(1); setCategory(null) }}>← Back</button>
                  <button className={`btn btn-sand${selected.length === 0 ? ' wiz-disabled' : ''}`}
                    disabled={selected.length === 0} onClick={() => setStep(3)}>
                    Continue{selected.length > 0 ? ` (${selected.length})` : ''} →
                  </button>
                </div>
              </motion.div>
            )}

            {!sent && step === 3 && (
              <motion.div key="s3" className="wizard-step"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.28 }}>
                <span className="wiz-eyebrow">Step 3 of 3 — Your Request</span>
                <h2>How do we<br />reach you?</h2>
                <div className="selection-pills">
                  <span className="pill-cat">{category === 'residential' ? 'Residential' : 'Commercial'}</span>
                  {selected.map(id => { const s = services.find(x => x.id === id); return s ? <span key={id} className="pill-svc">{s.label}</span> : null })}
                </div>
                <form className="wiz-form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <div className="wf-row">
                    <input required placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input required placeholder="Phone or email" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} />
                  </div>
                  <input placeholder="City / Project location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
                  <textarea rows={4} placeholder="Tell us more about your project (size, materials, timeline...)"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  <div className="wiz-nav">
                    <button type="button" className="wiz-back" onClick={() => setStep(2)}>← Back</button>
                    <button type="submit" className="btn btn-sand">Send request →</button>
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
