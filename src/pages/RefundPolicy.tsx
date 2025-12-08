import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        KartOrder – Refund & Cancellation Policy
      </h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Last updated: 08 December 2025
      </p>

      <p>
        This Refund & Cancellation Policy applies to paid services and
        subscriptions (if and when they are activated) on{" "}
        <strong>KartOrder</strong>, a B2B (business-to-business) platform.
      </p>

      <h2>1. Subscription billing</h2>
      <p>
        If KartOrder offers paid subscription plans, charges are typically
        billed in advance for each billing period (for example, monthly or
        annually). You may cancel your subscription at any time, but:
      </p>
      <ul>
        <li>
          Cancellation stops future renewals and future charges after the end of
          the current billing period.
        </li>
        <li>
          Fees already paid for the current billing period are generally{" "}
          <strong>non-refundable</strong>, unless required by law or explicitly
          agreed otherwise.
        </li>
      </ul>

      <h2>2. One-time payments or add-on services</h2>
      <p>
        For one-time setup, integration, consultation or add-on services, fees
        are usually non-refundable once the service has started, unless an
        error occurs on our side or a specific written agreement states
        otherwise.
      </p>

      <h2>3. Exceptions & special cases</h2>
      <p>
        We may consider refunds or partial credits in limited situations, such
        as:
      </p>
      <ul>
        <li>Accidental duplicate payments</li>
        <li>Technical issues preventing any use of the service</li>
        <li>Incorrectly calculated or misapplied charges</li>
      </ul>
      <p>
        Each case will be reviewed individually, and granting a refund or credit
        remains at our discretion, except where otherwise required by law.
      </p>

      <h2>4. How to request billing support</h2>
      <p>
        If you believe there is an issue with a charge or need help with
        cancellation, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@kartorder.com">support@kartorder.com</a>
      </p>
      <p>
        Please include your account email, billing reference (if any), and a
        brief description of your concern.
      </p>

      <h2>5. Changes to this policy</h2>
      <p>
        We may update this Refund & Cancellation Policy from time to time. Any
        changes will be posted on this page with an updated “Last updated”
        date.
      </p>
    </main>
  );
};

export default RefundPolicy;