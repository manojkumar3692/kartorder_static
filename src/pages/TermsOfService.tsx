import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        KartOrder – Terms of Service
      </h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Last updated: 08 December 2025
      </p>

      <p>
        These Terms of Service (“Terms”) govern your access to and use of{" "}
        <strong>KartOrder</strong> (“we”, “us”, “our”), a software service
        currently operated as a product under House of Eon (India). By using
        KartOrder, you agree to be bound by these Terms.
      </p>

      <h2>1. Who may use KartOrder</h2>
      <p>
        KartOrder is intended for use by businesses (“Merchants”). By creating
        an account or using our platform, you represent that you are authorized
        to act on behalf of a business entity and that you will use KartOrder
        for lawful business purposes only.
      </p>

      <h2>2. What KartOrder provides</h2>
      <p>
        KartOrder offers tools to manage WhatsApp-based orders, automate
        replies, and support customer communication. Features may evolve over
        time as we improve the service.
      </p>

      <h2>3. Merchant responsibilities</h2>
      <ul>
        <li>Comply with all applicable laws and regulations.</li>
        <li>
          Ensure that product details, pricing, and policies you share with
          customers are accurate.
        </li>
        <li>
          Obtain any necessary consents from your customers for using their
          data.
        </li>
        <li>
          Use WhatsApp and Meta services in line with their official policies.
        </li>
      </ul>

      <h2>4. Meta & WhatsApp</h2>
      <p>
        KartOrder connects to the WhatsApp Business Platform and other Meta
        services via official APIs. You must follow WhatsApp Business and Meta
        platform policies at all times. KartOrder is not owned, operated, or
        endorsed by Meta Platforms, Inc.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to use KartOrder to:</p>
      <ul>
        <li>Send spam, threats, or abusive content.</li>
        <li>Engage in fraud, scams, or misleading offers.</li>
        <li>Violate intellectual property or privacy rights.</li>
        <li>Conduct any illegal or prohibited activity.</li>
      </ul>
      <p>
        We may suspend or terminate access if we reasonably believe these Terms
        have been violated.
      </p>

      <h2>6. Data & privacy</h2>
      <p>
        Our handling of data is described in the{" "}
        <a href="/privacy" style={{ textDecoration: "underline" }}>
          Privacy Policy
        </a>
        . Merchants are responsible for how they use customer data processed
        through KartOrder.
      </p>

      <h2>7. Fees & payments</h2>
      <p>
        If paid subscriptions or billing are enabled, they may be subject to
        separate pricing plans and billing terms. Unless explicitly stated,
        fees are non-refundable once a billing period has started.
      </p>

      <h2>8. Availability & changes</h2>
      <p>
        We aim to keep KartOrder reliable but do not guarantee uninterrupted
        availability. We may update, modify, or discontinue parts of the
        service at any time.
      </p>

      <h2>9. Disclaimer & limitation of liability</h2>
      <p>
        KartOrder is provided on an “as is” and “as available” basis. To the
        maximum extent permitted by law, we disclaim all warranties, express or
        implied. We are not liable for indirect, incidental, or consequential
        damages, business losses, or loss of data resulting from use of the
        service.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using KartOrder at any time. We may suspend or terminate
        your access if you breach these Terms, misuse the service, or as
        required by law or platform policies.
      </p>

      <h2>11. Governing law</h2>
      <p>
        Unless otherwise required by local law, these Terms are governed by the
        laws of India.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:support@kartorder.com">support@kartorder.com</a>.
      </p>
    </main>
  );
};

export default TermsOfService;