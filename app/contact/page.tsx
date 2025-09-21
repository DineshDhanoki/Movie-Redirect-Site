export const metadata = {
  title: "Contact | MovieZone",
  description: "Get in touch with the MovieZone team.",
};

export default function ContactPage() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto">
      <h1>Contact Us</h1>
      <p>
        Have questions, suggestions, or concerns? Reach out to us using the details below:
      </p>
      <ul>
        <li>Email: <a href="mailto:admin@moviezone.com">admin@moviezone.com</a></li>
        <li>Telegram: <a href="https://t.me/example" target="_blank">t.me/example</a></li>
      </ul>
      <p>
        We usually respond within 2-3 business days.
      </p>
    </div>
  );
}
