import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        KartOrder – Cookie Policy
      </h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Last updated: 08 December 2025
      </p>

      <p>
        This Cookie Policy explains how <strong>KartOrder</strong> (“we”, “us”,
        “our”) uses cookies and similar technologies on our website and
        dashboard.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help websites remember information about your visit and
        improve your experience.
      </p>

      <h2>2. How we use cookies</h2>
      <p>We may use cookies to:</p>
      <ul>
        <li>Keep you signed in to your KartOrder account</li>
        <li>Remember basic preferences (such as language or layout)</li>
        <li>Collect anonymous usage statistics and performance metrics</li>
        <li>Improve security and detect unusual activity</li>
      </ul>

      <h2>3. Types of cookies we may use</h2>
      <ul>
        <li>
          <strong>Essential cookies:</strong> Required for login, navigation and
          core functionality.
        </li>
        <li>
          <strong>Preference cookies:</strong> Remember settings and UI
          preferences.
        </li>
        <li>
          <strong>Analytics cookies:</strong> Help us understand usage patterns
          (for example, via analytics tools) so we can improve the service.
        </li>
      </ul>

      <h2>4. Third-party cookies</h2>
      <p>
        Some cookies may be set by third-party services we integrate with, such
        as analytics providers or Meta integrations. These third parties
        process data according to their own privacy and cookie policies.
      </p>

      <h2>5. Managing cookies</h2>
      <p>
        You can manage or disable cookies in your browser settings. However,
        disabling certain cookies may affect your ability to sign in or use some
        features of KartOrder.
      </p>

      <h2>6. Updates</h2>
      <p>
        We may update this Cookie Policy periodically. Any changes will be
        posted on this page with an updated “Last updated” date.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have questions about this Cookie Policy, contact us at{" "}
        <a href="mailto:support@kartorder.com">support@kartorder.com</a>.
      </p>
    </main>
  );
};

export default CookiePolicy;