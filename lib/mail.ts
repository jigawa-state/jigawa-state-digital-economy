import { Resend } from 'resend'

const env = process.env.NODE_ENV
const resend = new Resend(process.env.RESEND_API_KEY)
const baseUrl = env === 'production'
  ? process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  : 'http://localhost:3000'
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Jigawa State ICT and Digital Economy <onboarding@resend.dev>'

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Confirm your JICTDE sign-in',
    html: `<p>Your two-factor authentication code is <strong>${token}</strong>.</p>`,
  })
}

export const sendPropertyRequestMailToCompany = async (email: string, token: string) => {
  await resend.emails.send({
    from: fromEmail,
    to: process.env.ADMIN_NOTIFICATION_EMAIL || email,
    subject: 'JICTDE portal notification',
    html: '<p>A new portal notification requires administrative review.</p>',
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${baseUrl}/new-password?token=${token}`

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Reset your JICTDE portal password',
    html: `<p>Click the link to <a href="${resetLink}">reset your password</a>.</p>`,
  })
}

export const sendVrificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${baseUrl}/email-verification?token=${token}`

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Verify your JICTDE portal account',
    html: `<p>Click the link to <a href="${confirmationLink}">confirm your email</a>.</p>`,
  })
}

