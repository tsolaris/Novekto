import LegalLayout from '../components/LegalLayout.jsx'

/*
  Edit the bracketed placeholder before publishing: [EFFECTIVE DATE]
*/
export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="[EFFECTIVE DATE]"
      intro="This policy explains what Novekto collects when you use novekto.com, why we collect it, and the choices you have. We keep it short on purpose."
    >
      <p>
        This site is operated by <strong>Novekto</strong> (&ldquo;Novekto&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;). This policy covers the novekto.com website only.
      </p>

      <h2>What we collect</h2>
      <p>Only two things:</p>
      <ul>
        <li>
          <strong>What you send us.</strong> When you fill in the contact form, we receive your name,
          email, and - if you add them - your company and message, plus whether you identified as a
          brand, affiliate, or other.
        </li>
        <li>
          <strong>Basic analytics.</strong> Standard, mostly aggregated data about how the site is
          used - pages viewed, rough location by country, device and browser type. This helps us keep
          the site fast and useful. It is not used to build a profile of you.
        </li>
      </ul>

      <h2>Why we use it, and our lawful basis</h2>
      <p>
        We use your contact details for one thing: to reply to your inquiry and, if it goes somewhere,
        to discuss a possible partnership. Our lawful basis is our legitimate interest in responding to
        people who reach out, and - where a deal follows - taking steps at your request before entering
        into a contract. Analytics runs on your consent where required, and otherwise on our legitimate
        interest in understanding and improving the site.
      </p>

      <h2>Who we share it with</h2>
      <p>We do not sell your data. We share it only where it is necessary to run the business:</p>
      <ul>
        <li>Service providers who host the site, process form submissions, or provide analytics, acting on our instructions.</li>
        <li>Partners strictly as needed to progress a partnership you have asked us about - never for their own marketing.</li>
        <li>Authorities, if the law genuinely requires it.</li>
      </ul>
      <p>
        Some of these providers may process data outside your country. Where that happens, we rely on
        appropriate safeguards such as the European Commission&rsquo;s Standard Contractual Clauses.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Contact submissions are kept for as long as we are in conversation and for a reasonable period
        afterward in case you get back in touch, then deleted. Analytics data is retained only for a
        limited window.
      </p>

      <h2>Your rights</h2>
      <p>
        If you are in the EEA or UK, you have the right to access the data we hold about you, correct it,
        delete it, restrict or object to how we use it, and port it elsewhere. You can also withdraw
        consent for analytics at any time. Where the law requires it, we will act on a valid request
        within the applicable timeframe. You also have the right to complain to your local data
        protection authority.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a small number of cookies and similar technologies - the ones needed to make the site
        work, and analytics cookies to understand usage. Where required, we will ask for your consent
        before setting non-essential cookies, and you can change your mind through your browser settings
        at any time.
      </p>

      <h2>Third-party services</h2>
      <p>
        We rely on reputable third parties for hosting, form handling, and analytics. Each processes data
        under its own terms and only as needed to provide its service to us. Links from this site to other
        websites are outside our control, and their privacy practices are their own.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we will update the date at the top. Material changes will be made clear
        on this page.
      </p>
    </LegalLayout>
  )
}
