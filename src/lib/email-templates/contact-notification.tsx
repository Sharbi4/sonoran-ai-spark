import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'Sonoran Systems & AI'
const OWNER_EMAIL = 'sharbin@sonoransystemsai.com'

interface ContactNotificationProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  businessName?: string
  city?: string
  website?: string
  businessType?: string
  helpWith?: string[]
  challenge?: string
  repetitive?: string
  tools?: string
  timeline?: string
  budget?: string
}

const ContactNotificationEmail = (props: ContactNotificationProps) => {
  const fullName = [props.firstName, props.lastName].filter(Boolean).join(' ') || 'New lead'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New contact: {fullName} ({props.businessName || 'unknown business'})</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New contact form submission</Heading>
          <Text style={text}>
            A new lead just came in through {SITE_NAME}.
          </Text>

          <Section style={card}>
            <Row label="Name" value={fullName} />
            <Row label="Business" value={props.businessName} />
            <Row label="Email" value={props.email} />
            <Row label="Phone" value={props.phone} />
            <Row label="City" value={props.city} />
            <Row label="Website" value={props.website} />
            <Row label="Business type" value={props.businessType} />
            <Row label="Help with" value={props.helpWith?.join(', ')} />
            <Row label="Timeline" value={props.timeline} />
            <Row label="Budget" value={props.budget} />
          </Section>

          {props.challenge ? (
            <>
              <Heading as="h2" style={h2}>Biggest challenge</Heading>
              <Text style={text}>{props.challenge}</Text>
            </>
          ) : null}

          {props.repetitive ? (
            <>
              <Heading as="h2" style={h2}>Repetitive work</Heading>
              <Text style={text}>{props.repetitive}</Text>
            </>
          ) : null}

          {props.tools ? (
            <>
              <Heading as="h2" style={h2}>Current tools</Heading>
              <Text style={text}>{props.tools}</Text>
            </>
          ) : null}

          <Hr style={hr} />
          <Text style={footer}>Sent to {OWNER_EMAIL} from {SITE_NAME}.</Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label, value }: { label: string; value?: string | null }) => {
  if (!value) return null
  return (
    <Text style={rowStyle}>
      <strong style={rowLabel}>{label}:</strong> {value}
    </Text>
  )
}

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => {
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ')
    const biz = data.businessName ? ` — ${data.businessName}` : ''
    return `New contact: ${name || 'lead'}${biz}`
  },
  displayName: 'Contact notification (owner)',
  to: OWNER_EMAIL,
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '520-555-0101',
    businessName: 'Acme Co',
    city: 'Tucson',
    businessType: 'Real estate',
    helpWith: ['Website', 'Automations'],
    timeline: '1-3 months',
    budget: '$5k-$10k',
    challenge: 'Too many leads slipping through the cracks.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0a0a0a', margin: '0 0 12px' }
const h2 = { fontSize: '15px', fontWeight: 'bold', color: '#0a0a0a', margin: '20px 0 6px' }
const text = { fontSize: '14px', color: '#374151', lineHeight: '1.5', margin: '0 0 10px' }
const card = {
  backgroundColor: '#f7f7f8',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '14px 16px',
  margin: '12px 0',
}
const rowStyle = { fontSize: '14px', color: '#111827', margin: '4px 0' }
const rowLabel = { color: '#6b7280', marginRight: '6px' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0 12px' }
const footer = { fontSize: '12px', color: '#9ca3af', margin: 0 }