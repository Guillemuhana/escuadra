import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { useQuote } from '../App'

export default function ChatBubble() {
  const openQuote = useQuote()
  const [open, setOpen] = useState(false)
  return (
    <div className={`chat-wrap${open ? ' chat-open' : ''}`}>
      <div className="chat-card">
        <div className="chat-card-header">
          <div>
            <span>Escuadra Assistant</span>
            <p>Describe your project and we'll help you get started.</p>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <p className="chat-intro">Looking for a quote on a residential or commercial project? We respond fast.</p>
        <div className="chat-actions">
          <a href="https://wa.me/18882719092" target="_blank" rel="noreferrer" className="btn chat-btn-primary">
            Start chat
          </a>
          <button className="btn chat-btn-secondary" onClick={() => { setOpen(false); openQuote() }}>
            Get a free estimate
          </button>
        </div>
      </div>
      <button className={`chat-bubble${open ? ' bubble-open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="Chat">
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}
