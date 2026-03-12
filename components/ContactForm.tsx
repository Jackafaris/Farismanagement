'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle } from 'lucide-react'

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName:  z.string().min(2, 'Last name is required'),
  email:     z.string().email('Please enter a valid email'),
  phone:     z.string().optional(),
  message:   z.string().min(10, 'Message must be at least 10 characters'),
  interest:  z.string().optional(),
})

type FormData = z.infer<typeof schema>

const interests = [
  'General Inquiry',
  'Buying a Home',
  'Renting a Property',
  'Schedule a Showing',
  'Property Valuation',
  'Other',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
      reset()
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-navy-50 p-10 text-center shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">Message Received!</h3>
        <p className="font-sans text-navy-500 text-sm mb-6">
          Thank you for reaching out. A member of our team will be in touch within one business day.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline text-sm px-6 py-2.5">
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl border border-navy-50 p-8 shadow-sm"
    >
      <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">Send Us a Message</h3>
      <p className="font-sans text-navy-500 text-sm mb-6">We typically respond within one business day.</p>

      <div className="flex flex-col gap-5">
        {/* Name row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="font-sans text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1.5 block">
              First Name *
            </label>
            <input {...register('firstName')} placeholder="Jane" className="input-field" />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="font-sans text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1.5 block">
              Last Name *
            </label>
            <input {...register('lastName')} placeholder="Smith" className="input-field" />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="font-sans text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1.5 block">
            Email Address *
          </label>
          <input {...register('email')} type="email" placeholder="jane@example.com" className="input-field" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="font-sans text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1.5 block">
            Phone Number
          </label>
          <input {...register('phone')} type="tel" placeholder="(301) 555-0000" className="input-field" />
        </div>

        {/* Interest */}
        <div>
          <label className="font-sans text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1.5 block">
            I&apos;m Interested In
          </label>
          <div className="relative">
            <select {...register('interest')} className="select-field">
              {interests.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="font-sans text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1.5 block">
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Tell us about your ideal home, budget, preferred neighborhoods, or any questions you have..."
            className="input-field resize-none"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base gap-2">
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  )
}
