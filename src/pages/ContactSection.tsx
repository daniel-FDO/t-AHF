import { useState, type FormEvent } from 'react'
import { adviser, enquiryOptions, services } from '../content'
import { Headshot } from '../components/Thumb'
import { ArrowIcon, MailIcon, PhoneIcon, ShieldIcon } from '../components/Icons'

export function ContactSection() {
  return (
    <section id="contact" className="pv2 subtle" aria-labelledby="contact-heading">
      <div className="container">
        <div className="sec-label">
          <span className="eyebrow">Get in touch</span>
        </div>
        <div className="contact-grid">
          <div className="cleft">
            <h2 id="contact-heading">Ready to talk?</h2>
            <p>
              Get in touch for a no-obligation chat about your protection
              needs. I’ll respond to you directly, no call-centre, no hold
              music.
            </p>
            <ul className="cdetails">
              <li>
                <a className="cdet" href={`mailto:${adviser.email}`}>
                  <MailIcon />
                  <span className="visually-hidden">Email me: </span>
                  {adviser.email}
                </a>
              </li>
              <li>
                <a className="cdet" href={`tel:${adviser.phone}`}>
                  <PhoneIcon />
                  <span className="visually-hidden">Call me: </span>
                  {adviser.phoneDisplay}
                </a>
              </li>
            </ul>
            <AdviserMini />
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}

function AdviserMini() {
  return (
    <div className="adv-mini">
      <Headshot src={adviser.photoThumb} name={adviser.name} alt="" />
      <div>
        <p className="amn">{adviser.name}</p>
        <p className="amr">{adviser.role}</p>
      </div>
    </div>
  )
}

// There is no form backend, so sending opens the visitor's email app with the
// enquiry addressed to Anjorin and ready to send.
function EnquiryForm() {
  const [heardOther, setHeardOther] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()
    const needs = data.getAll('needs').map(String)
    const heard = heardOther ? `Other: ${get('heardOther')}` : get('heardFrom')

    const lines = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Telephone: ${get('phone')}`,
      `Best time to contact: ${get('bestTime')}`,
      `Help with: ${needs.length ? needs.join(', ') : '—'}`,
      `Employment status: ${get('employment')}`,
      `Heard about us: ${heard}`,
      '',
      get('message'),
    ]
    window.location.href = `mailto:${adviser.email}?subject=${encodeURIComponent(
      `Enquiry from ${get('name')}`,
    )}&body=${encodeURIComponent(lines.join('\n').trim())}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="eq-box eq-thankyou" role="status">
        <h3>Thanks for getting in touch</h3>
        <p>
          Your email app should have opened with your message to me. If it
          didn’t, email me at{' '}
          <a href={`mailto:${adviser.email}`}>{adviser.email}</a> or call me on{' '}
          <a href={`tel:${adviser.phone}`}>{adviser.phoneDisplay}</a>.
        </p>
        <AdviserMini />
        <p>
          <button type="button" className="linkish" onClick={() => setSent(false)}>
            Back to the form
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="eq-box">
      <h3>Send me a message</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input
            className="finput"
            id="f-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="f-email">Email address</label>
            <input
              className="finput"
              id="f-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="f-phone">Telephone number</label>
            <input
              className="finput"
              id="f-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="07700 000000"
              required
            />
          </div>
        </div>

        <SelectField
          id="f-time"
          name="bestTime"
          label="Best time to contact"
          options={enquiryOptions.bestTime}
        />

        <fieldset className="field">
          <legend>
            What can I help you with?{' '}
            <span className="hint">(select all that apply)</span>
          </legend>
          <div className="check-group">
            {services.map((s) => (
              <label key={s.id} className="chk-row">
                <input type="checkbox" name="needs" value={s.title} />
                <span>{s.title}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <SelectField
          id="f-employment"
          name="employment"
          label="Employment status"
          options={enquiryOptions.employment}
        />

        <SelectField
          id="f-heard"
          name="heardFrom"
          label="Where did you hear about us?"
          options={enquiryOptions.heardFrom}
          onChange={(value) => setHeardOther(value.startsWith('Other'))}
        />

        {heardOther && (
          <div className="field field-other">
            <label htmlFor="f-heard-other">Please tell us more</label>
            <input
              className="finput"
              id="f-heard-other"
              name="heardOther"
              placeholder="Where did you hear about us?"
            />
          </div>
        )}

        <div className="field">
          <label htmlFor="f-msg">
            Anything else you’d like me to know?{' '}
            <span className="hint">(optional)</span>
          </label>
          <textarea
            className="ftextarea"
            id="f-msg"
            name="message"
            placeholder="Tell us a little more about your situation if it’s helpful…"
          />
        </div>

        <div className="chk-row consent">
          <input type="checkbox" id="f-consent" name="consent" required />
          <label htmlFor="f-consent">
            By submitting this form, you consent to Tavistock Protect and your
            chosen adviser contacting you about your enquiry using the details
            provided. Your information will be processed in line with our
            Privacy Policy and will not be shared with third parties without
            your consent. You can withdraw consent at any time.
          </label>
        </div>

        <button className="btn btn-dark btn-block" type="submit">
          Send enquiry
          <span className="arc">
            <ArrowIcon />
          </span>
        </button>
        <p className="reassure">
          <ShieldIcon />
          Your message comes straight to me, never through a call-centre.
        </p>
      </form>
      <p className="not-right">
        Not ready to enquire?{' '}
        <a href={adviser.firmContactUrl} target="_blank" rel="noopener">
          Learn more about Tavistock Protect <span aria-hidden="true">→</span>
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  )
}

function SelectField({
  id,
  name,
  label,
  options,
  onChange,
}: {
  id: string
  name: string
  label: string
  options: readonly string[]
  onChange?: (value: string) => void
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select
        className="fselect"
        id={id}
        name={name}
        defaultValue=""
        required
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="">Please select…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}
