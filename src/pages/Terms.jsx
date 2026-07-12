import LegalLayout from '../components/LegalLayout.jsx'

/*
  Edit the bracketed placeholders before publishing: [JURISDICTION] and [EFFECTIVE DATE]
*/
export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="[EFFECTIVE DATE]"
      intro="These terms cover your use of novekto.com. This is an informational website - it is not the agreement that governs any partnership, which we sign separately."
    >
      <p>
        The site at novekto.com is operated by <strong>Novekto</strong> (&ldquo;Novekto&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using it, you agree to what follows. If you do not
        agree, please do not use the site.
      </p>

      <h2>1. Acceptance</h2>
      <p>
        Using this site means you accept these terms and our <a href="/privacy">Privacy Policy</a>. If
        you are using it on behalf of a company, you confirm you are allowed to accept these terms for
        them.
      </p>

      <h2>2. What this site is</h2>
      <p>
        This is a marketing website. It describes who we are and what we do, and lets you get in touch.
        Nothing here is an offer, a guarantee of payouts or results, or a binding commitment. Any actual
        partnership - including offers, payouts, and payment terms - is governed by a separate written
        agreement between us.
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        The Novekto name, wordmark, text, design, and other content on this site belong to us or our
        licensors and are protected by law. You may view and share the pages as intended, but you may not
        copy, reproduce, or reuse our branding or content for your own purposes without our written
        permission.
      </p>

      <h2>4. Acceptable use</h2>
      <p>When using this site, you agree not to:</p>
      <ul>
        <li>Break the law or infringe anyone&rsquo;s rights.</li>
        <li>Attempt to disrupt, overload, probe, or gain unauthorized access to the site or its systems.</li>
        <li>Submit false information, spam, or malicious content through the contact form.</li>
        <li>Scrape or harvest content or data except as permitted by law.</li>
      </ul>

      <h2>5. Disclaimers</h2>
      <p>
        The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We work to keep it
        accurate and online, but we do not promise it will be error-free, uninterrupted, or complete, and
        we may change or remove content at any time without notice. Nothing on the site is professional,
        legal, or financial advice.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, Novekto is not liable for any indirect, incidental, or
        consequential loss arising from your use of - or inability to use - this site, including any
        reliance on its content. Nothing in these terms limits liability that cannot be limited by law.
      </p>

      <h2>7. Third-party links</h2>
      <p>
        The site may link to third-party websites or services. We do not control them and are not
        responsible for their content, practices, or availability. Following those links is at your own
        risk and subject to the other party&rsquo;s terms.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of <strong>[JURISDICTION]</strong>, and any dispute relating
        to them or to the site will be subject to the courts of that jurisdiction.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. When we do, we will change the date at the top of the
        page. Continuing to use the site after an update means you accept the revised terms.
      </p>
    </LegalLayout>
  )
}
