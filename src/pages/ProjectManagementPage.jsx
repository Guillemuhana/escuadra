import { motion } from 'framer-motion'
import { ClipboardList, FileCheck, Calendar, Users, ShieldCheck, DollarSign, CheckCircle2 } from 'lucide-react'
import { useQuote } from '../App'
import hero from '../assets/hero-escuadra.jpeg'

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const SERVICES = [
  { icon: <ClipboardList size={24} />, title: 'PLANNING', desc: 'Detailed planning and budgeting from day one so your project stays on track.' },
  { icon: <FileCheck size={24} />, title: 'PERMITTING', desc: 'We handle all permits and inspections so you don\'t have to worry about compliance.' },
  { icon: <Calendar size={24} />, title: 'SCHEDULING', desc: 'On-time scheduling and milestone tracking to keep your project moving forward.' },
  { icon: <Users size={24} />, title: 'VENDOR MANAGEMENT', desc: 'We coordinate trusted subcontractors and suppliers for every phase of the build.' },
  { icon: <ShieldCheck size={24} />, title: 'QUALITY CONTROL', desc: 'Continuous quality control and site inspections throughout the entire project.' },
  { icon: <DollarSign size={24} />, title: 'BUDGET CONTROL', desc: 'Transparent budget management with no surprises — we keep costs in line.' },
]

const PROCESS = [
  { num: '01', title: 'CONSULTATION', desc: 'We sit down with you to understand your project goals, timeline and budget.' },
  { num: '02', title: 'PLANNING', desc: 'We create a comprehensive project plan with milestones and cost breakdowns.' },
  { num: '03', title: 'EXECUTION', desc: 'Our team manages every trade, timeline and quality checkpoint on your behalf.' },
  { num: '04', title: 'DELIVERY', desc: 'We deliver your completed project on time and walk you through every detail.' },
]

export default function ProjectManagementPage() {
  const openQuote = useQuote()
  return (
    <>
      <section className="subpage-hero">
        <img src={hero} alt="Project management construction Miami FL – Escuadra Builders Group" className="subpage-hero-img" />
        <div className="subpage-hero-overlay" />
        <motion.div className="subpage-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="eyebrow gold">MANAGEMENT</p>
          <h1>Project<br />Management</h1>
          <p>We manage every detail so you can focus on what matters most.</p>
          <button className="btn btn-sand" onClick={openQuote}>GET A FREE ESTIMATE →</button>
        </motion.div>
      </section>

      <section className="subpage-services">
        <div className="subpage-services-header">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow gold">OUR MANAGEMENT SERVICES</p>
            <h2>We Handle Everything</h2>
            <p className="section-sub">From planning to final delivery, our project management team ensures your construction project runs smoothly, on time and within budget.</p>
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

      {/* Mini Process */}
      <section className="process-section">
        <motion.div className="section-header light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow gold">HOW IT WORKS</p>
          <h2>Our Management Process</h2>
        </motion.div>
        <div className="process-steps">
          {PROCESS.map((s, i) => (
            <motion.div key={s.num} className="process-step" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className="process-num">{s.num}</div>
              {i < 3 && <div className="process-connector" />}
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="subpage-cta">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2>Experience the difference.</h2>
          <p>Professional management. Better results.</p>
          <div className="subpage-cta-btns">
            <button className="btn btn-sand" onClick={openQuote}>SCHEDULE A CONSULTATION →</button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
