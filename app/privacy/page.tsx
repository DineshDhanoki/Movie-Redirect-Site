export const metadata = {
  title: "Privacy Policy | MovieZone",
  description: "Read MovieZone's privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>MovieZone</strong>, we respect your privacy. This Privacy Policy outlines the types
        of personal information collected and how it is used.
      </p>
      <h2>Data Collection</h2>
      <p>
        We do not directly collect personal information. However, third-party advertising networks
        may use cookies or web beacons.
      </p>
      <h2>Third-Party Ads</h2>
      <p>
        Our site may display ads from third-party providers. These networks may collect browsing
        data to serve relevant ads.
      </p>
      <h2>Consent</h2>
      <p>
        By using this website, you consent to our privacy policy.
      </p>
    </div>
  );
}
