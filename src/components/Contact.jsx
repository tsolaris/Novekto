import { useState } from 'react'
import { motion } from 'framer-motion'
import CopperAura from './CopperAura.jsx'

const ROLES = [
  { value: '', label: 'I am a…', disabled: true },
  { value: 'brand', label: 'Brand / Advertiser' },
  { value: 'affiliate', label: 'Affiliate / Publisher' },
  { value: 'other', label: 'Other' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', role: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'That email does not look right.'
    if (!form.role) next.role = 'Let us know who you are.'
    if (!form.message.trim()) next.message = 'Add a short message.'
    setErrors(next)
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate()
    if (Object.keys(found).length > 0) {
      const first = ['name', 'email', 'role', 'message'].find((k) => found[k])
      if (first) document.getElementById(first)?.focus()
      return
    }
    setStatus('submitting')

    // ────────────────────────────────────────────────────────────────
    // BACKEND HOOK - drop in your Formspree (or similar) endpoint here.
    // 1. Create a form at https://formspree.io and copy your endpoint.
    // 2. Replace the mock below with the fetch call that is commented out.
    //
    // const res = await fetch('https://formspree.io/f/XXXXXXXX', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //   body: JSON.stringify(form),
    // })
    // if (!res.ok) { setStatus('idle'); setErrors({ form: 'Something went wrong. Try again.' }); return }
    // ────────────────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 900)) // mock latency; remove when live
    setStatus('success')
  }

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-espresso/60 px-4 py-3 text-cream placeholder:text-muted
     transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/60
     ${errors[field] ? 'border-red-500/70' : 'border-hairline focus:border-accent/60'}`

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <CopperAura pulse className="left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 opacity-45" />
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Contact us</span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
            Let&rsquo;s put your offer to work.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ash sm:text-lg">
            Tell us who you are and what you are moving.<br />
            We are extremely responsive and quick to reply.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            No forms lost to a void - real inquiries reach a real person.
          </div>
        </motion.div>

        {/* Right: form / success */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="card-sheen rounded-2xl border border-hairline bg-surface/70 p-6 sm:p-8"
        >
          {status === 'success' ? (
            <motion.div
              role="status"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex min-h-[22rem] flex-col items-center justify-center text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-accent/40 bg-accent/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5 10 17.5 19 7" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-cream">Message received.</h3>
              <p className="mt-2 max-w-sm text-ash">
                Thanks, {form.name.split(' ')[0] || 'there'}. We will be in touch shortly at{' '}
                <span className="text-cream">{form.email}</span>.
              </p>
              <button
                onClick={() => { setForm({ name: '', company: '', email: '', role: '', message: '' }); setStatus('idle') }}
                className="btn-ghost mt-8"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream">Name</label>
                  <input id="name" type="text" value={form.name} onChange={update('name')}
                    className={fieldClass('name')} placeholder="Jane Doe" autoComplete="name"
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
                  {errors.name && <p id="err-name" className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-cream">
                    Company <span className="text-muted">(optional)</span>
                  </label>
                  <input id="company" type="text" value={form.company} onChange={update('company')}
                    className={fieldClass('company')} placeholder="Acme Media" autoComplete="organization" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update('email')}
                    className={fieldClass('email')} placeholder="jane@company.com" autoComplete="email"
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
                  {errors.email && <p id="err-email" className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="role" className="mb-2 block text-sm font-medium text-cream">I am a…</label>
                  <select id="role" value={form.role} onChange={update('role')}
                    className={`${fieldClass('role')} appearance-none`}
                    aria-invalid={!!errors.role} aria-describedby={errors.role ? 'err-role' : undefined}>
                    {ROLES.map((r) => (
                      <option key={r.value} value={r.value} disabled={r.disabled} className="bg-espresso text-cream">
                        {r.label}
                      </option>
                    ))}
                  </select>
                  {errors.role && <p id="err-role" className="mt-1.5 text-xs text-red-400">{errors.role}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream">Message</label>
                <textarea id="message" rows={4} value={form.message} onChange={update('message')}
                  className={`${fieldClass('message')} resize-none`}
                  placeholder="What are you looking to run, and in which geos?"
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} />
                {errors.message && <p id="err-message" className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
              </div>

              {errors.form && <p role="alert" className="text-sm text-red-400">{errors.form}</p>}

              <button type="submit" disabled={status === 'submitting'} className="btn-accent mt-1 w-full disabled:opacity-70">
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
              <p className="text-center text-xs text-muted">
                We use your details only to reply to your inquiry. See our{' '}
                <a href="/privacy" className="link-underline text-ash">Privacy Policy</a>.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
