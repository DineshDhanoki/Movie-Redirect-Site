export const metadata = {
  title: "About Us | MovieZone",
  description: "Learn more about MovieZone - a movie redirect platform.",
};

export default function AboutPage() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>MovieZone</strong>, your one-stop destination for discovering the latest
        movies and clips. We do not host any video content ourselves. Instead, we provide curated
        links to external video platforms so you can enjoy your favorite content easily.
      </p>
      <p>
        Our mission is to make movie discovery simple, fast, and accessible while maintaining
        compliance with content owners' rights.
      </p>
    </div>
  );
}
