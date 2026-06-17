import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/logo-footer.png'

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-main">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src={logo} alt="Escuadra Builders Group" className="footer-logo-glass" />
          </div>
          <p className="footer-tagline">
            Building exceptional spaces with integrity, precision, and passion.
            Serving Miami-Dade and surrounding areas.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-btn">IG</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-btn">FB</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-btn">IN</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <a href="/#about">About Us</a>
          <a href="/#process">Our Process</a>
          <a href="/#testimonials">Reviews</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>SERVICES</h4>
          <Link to="/residential">Residential Construction</Link>
          <Link to="/commercial">Commercial Projects</Link>
          <Link to="/project-management">Project Management</Link>
          <Link to="/services/concrete">Concrete</Link>
          <Link to="/services/stucco">Stucco</Link>
          <Link to="/services/roofing">Roofing</Link>
        </div>

        <div className="footer-col">
          <h4>CONTACT</h4>
          <a href="tel:8882719092" className="footer-info-row"><Phone size={14} /> (888) 271-9092</a>
          <a href="mailto:estimates@escuadrabg.com" className="footer-info-row"><Mail size={14} /> estimates@escuadrabg.com</a>
          <span className="footer-info-row"><MapPin size={14} /> Miami, FL 33131</span>
          <span className="footer-info-row footer-hours">Mon – Fri: 8:00 AM – 6:00 PM</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Escuadra Builders Group. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
