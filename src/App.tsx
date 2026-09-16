import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { images } from './data/images'
import logo from './assets/vusi-logo.jpeg'
import './App.css'

const practiceAreas = [
  { title: 'Criminal Litigation & Bail', eyebrow: '01', description: 'Clear-headed representation and strategic defence when the stakes are highest.' },
  { title: 'Unlawful Arrest & Detention Claims', eyebrow: '02', description: 'Protecting dignity and pursuing accountability when rights have been infringed.' },
  { title: 'Employment & Labour Law', eyebrow: '03', description: 'Practical advice for workplace disputes, negotiations and fair outcomes.' },
  { title: 'Drafting & Interpretation of Contracts', eyebrow: '04', description: 'Careful legal drafting that makes obligations clear and risk easier to manage.' },
  { title: 'Debt Collection Services', eyebrow: '05', description: 'Firm, professional recovery strategies built around commercial realities.' },
  { title: 'Deceased Estate Services', eyebrow: '06', description: 'Guidance through estate administration with care, clarity and diligence.' },
]
const principles = [
  ['01', 'Integrity', 'Advice grounded in honesty, discretion and professional responsibility.'],
  ['02', 'Client focused', 'Your circumstances shape the strategy, communication and next step.'],
  ['03', 'Strategic advice', 'Measured legal thinking designed to move matters forward.'],
  ['04', 'Professional representation', 'A composed, prepared presence when you need an advocate.'],
  ['05', 'Commitment to justice', 'Unyielding in the pursuit of a fair and lawful outcome.'],
]
const navItems = [['About', 'about'], ['Practice areas', 'practice'], ['Why us', 'why-us'], ['Our office', 'office'], ['Location', 'location'], ['Contact', 'contact']]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedPractice, setSelectedPractice] = useState<number | null>(null)
  const [officeIndex, setOfficeIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const scrollToConsultation = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = 'New Consultation Request – Vusi Makgopa Attorneys'
    const body = ['New Consultation Request', '', `Name: ${form.get('name')}`, `Email: ${form.get('email')}`, `Phone: ${form.get('phone')}`, `Practice Area: ${form.get('practice')}`, `Preferred Contact: ${form.get('contactMethod')}`, '', `Message: ${form.get('message')}`].join('\n')
    window.location.href = `mailto:VUSIMAKGOPAATTORNEYS@GMAIL.COM?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return <div className="site-shell">
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Vusi Makgopa Attorneys home"><img className="brand-logo" src={logo} alt="Vusi Makgopa Attorneys logo" /></a>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}<button className="mobile-cta" onClick={() => { closeMenu(); scrollToConsultation() }}>Book a consultation</button></nav>
      <button className="header-cta" onClick={scrollToConsultation}>Book a consultation <ArrowUpRight size={15} /></button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="home" className="hero"><div className="hero-photo" style={{ backgroundImage: `url(${images.hero.src})` }} /><div className="hero-wash" /><div className="hero-content page-width"><p className="kicker">Polokwane · South Africa</p><h1>Unyielding<br /><em>in the pursuit</em><br />of justice.</h1><p className="hero-copy">Professional legal representation focused on protecting your rights, resolving disputes and providing strategic legal solutions.</p><div className="hero-actions"><button className="button button-gold" onClick={scrollToConsultation}>Book a consultation <ArrowUpRight size={17} /></button><a className="text-link light" href="#practice">Explore practice areas <ArrowUpRight size={16} /></a></div></div><div className="hero-footer page-width"><span>41A Devenish Street, Polokwane</span><span className="hero-rule" /><span>Scroll to discover</span></div></section>

      <section id="about" className="about section page-width"><div className="about-image reveal-image"><img src={images.about.src} alt={images.about.alt} /></div><div className="about-copy"><p className="eyebrow">01 / The firm</p><h2>Built on integrity.<br /><em>Driven by justice.</em></h2><p className="lead">Vusi Makgopa Attorneys is a professional legal practice serving clients in Polokwane and beyond.</p><p>We believe good representation begins with listening. Our approach combines careful legal thinking, clear communication and a genuine commitment to the people and matters entrusted to us.</p><div className="signature"><span>VM</span><div><strong>Vusi Makgopa</strong><small>Attorney</small></div></div></div></section>

      <section id="practice" className="practice section section-tint"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">02 / What we do</p><h2>Legal clarity for<br /><em>complex moments.</em></h2></div><p>Focused legal services delivered with rigour, discretion and a practical understanding of what is at stake.</p></div><div className="practice-grid">{practiceAreas.map((area, index) => <motion.button whileHover={{ y: -7 }} transition={{ duration: .25 }} className="practice-card" key={area.title} onClick={() => setSelectedPractice(index)}><img src={images.practice[index].src} alt={images.practice[index].alt} /><span className="card-shade" /><span className="practice-number">{area.eyebrow}</span><span className="practice-card-content"><small>Practice area</small><strong>{area.title}</strong><span className="card-link">Learn more <ArrowUpRight size={15} /></span></span></motion.button>)}</div></div></section>

      <section id="why-us" className="principles section page-width"><div className="section-heading"><div><p className="eyebrow">03 / Our approach</p><h2>Measured counsel.<br /><em>Meaningful action.</em></h2></div><p>Trust is not assumed. It is built through every conversation, every document and every decision.</p></div><div className="principles-list">{principles.map(([number, title, text]) => <div className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="office" className="office section section-charcoal"><div className="page-width"><div className="office-head"><div><p className="eyebrow gold-text">04 / Justice in action</p><h2>Grounded in law.<br /><em>Committed to justice.</em></h2></div><p>Our work is shaped by South Africa’s courts, legal principles and the people who rely on fair representation.</p></div><div className="gallery"><div className="gallery-feature"><AnimatePresence mode="wait"><motion.img key={officeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }} src={images.office[officeIndex].src} alt={images.office[officeIndex].alt} /></AnimatePresence><div className="gallery-controls"><button onClick={() => setOfficeIndex((officeIndex - 1 + images.office.length) % images.office.length)} aria-label="Previous court image"><ChevronLeft /></button><span>{String(officeIndex + 1).padStart(2, '0')} / {String(images.office.length).padStart(2, '0')}</span><button onClick={() => setOfficeIndex((officeIndex + 1) % images.office.length)} aria-label="Next court image"><ChevronRight /></button></div></div><div className="gallery-thumbs">{images.office.map((image, index) => <button className={index === officeIndex ? 'active' : ''} key={image.src} onClick={() => setOfficeIndex(index)}><img src={image.src} alt={image.alt} /></button>)}</div></div></div></section>

      <section id="location" className="location section page-width"><div className="location-map"><iframe title="Map showing Vusi Makgopa Attorneys in Polokwane" src="https://www.google.com/maps?q=41A%20Devenish%20Street%2C%20Polokwane%2C%20South%20Africa&output=embed" loading="lazy" /></div><div className="location-copy"><p className="eyebrow">05 / Find us</p><h2>Visit our<br /><em>office.</em></h2><address>41A Devenish Street<br />Cnr Devenish &amp; Burger Street<br />Polokwane, South Africa</address><div className="contact-details"><a href="tel:0791827377">079 182 7377</a><a href="tel:0640276979">064 027 6979</a><a href="mailto:VUSIMAKGOPAATTORNEYS@GMAIL.COM">VUSIMAKGOPAATTORNEYS@GMAIL.COM</a></div><a className="text-link" href="https://www.google.com/maps/dir/?api=1&destination=41A+Devenish+Street%2C+Polokwane%2C+South+Africa" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div></section>

      <section id="contact" className="contact section section-tint"><div className="page-width contact-layout"><div><p className="eyebrow">06 / Start a conversation</p><h2>Let's discuss<br /><em>your legal matter.</em></h2><p>Tell us a little about what you are facing. A member of the team will be in touch using your preferred contact method.</p><div className="contact-quick"><a href="tel:0791827377">Call us <ArrowUpRight size={15} /></a><a href="mailto:VUSIMAKGOPAATTORNEYS@GMAIL.COM">Email us <ArrowUpRight size={15} /></a></div></div><form onSubmit={handleSubmit}><div className="form-row"><label>Full name<input name="name" required placeholder="Your full name" /></label><label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label></div><div className="form-row"><label>Phone number<input name="phone" required placeholder="079 182 7377" /></label><label>Legal matter<select name="practice" defaultValue=""><option value="" disabled>Select a practice area</option>{practiceAreas.map((area) => <option key={area.title}>{area.title}</option>)}</select></label></div><label>Preferred contact method<select name="contactMethod" defaultValue="Email"><option>Email</option><option>Phone call</option><option>WhatsApp</option></select></label><label>Message<textarea name="message" required rows={4} placeholder="How can we assist you?" /></label><button className="button button-dark" type="submit">Request a consultation <ArrowUpRight size={17} /></button>{submitted && <p className="form-note">Your email application should now be open with the enquiry details prepared. Please send it to complete the request.</p>}</form></div></section>
    </main>

    <footer className="footer section-charcoal"><div className="page-width footer-grid"><div><p>Unyielding in the pursuit of justice.</p></div><div><h3>Explore</h3>{navItems.slice(0, 4).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div><h3>Contact</h3><a href="tel:0791827377">079 182 7377</a><a href="tel:0640276979">064 027 6979</a><a href="mailto:VUSIMAKGOPAATTORNEYS@GMAIL.COM">VUSIMAKGOPAATTORNEYS@GMAIL.COM</a></div><div><h3>Address</h3><p>41A Devenish Street<br />Cnr Devenish &amp; Burger Street<br />Polokwane, South Africa</p></div></div><div className="page-width footer-bottom"><span>© 2026 Vusi Makgopa Attorneys. All rights reserved.</span><span>Professional legal services in Polokwane</span></div></footer>

    <AnimatePresence>{selectedPractice !== null && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPractice(null)}><motion.div className="practice-modal" initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 25, opacity: 0 }} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedPractice(null)} aria-label="Close practice area"><X /></button><img src={images.practice[selectedPractice].src} alt={images.practice[selectedPractice].alt} /><div><p className="eyebrow">Practice area {practiceAreas[selectedPractice].eyebrow}</p><h2>{practiceAreas[selectedPractice].title}</h2><p>{practiceAreas[selectedPractice].description} Contact the practice to discuss the details of your matter and the most appropriate next step.</p><button className="button button-dark" onClick={() => { setSelectedPractice(null); scrollToConsultation() }}>Book a consultation <ArrowUpRight size={17} /></button></div></motion.div></motion.div>}</AnimatePresence>
  </div>
}

export default App
