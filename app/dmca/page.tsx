export const metadata = {
  title: "DMCA Disclaimer | MovieZone",
  description: "Read MovieZone's DMCA disclaimer.",
};

export default function DMCAPage() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto">
      <h1>DMCA Disclaimer</h1>
      <p>
        <strong>MovieZone</strong> does not host any files on our servers. We only provide links to
        third-party websites.
      </p>
      <p>
        All content is copyright of their respective owners. If you believe your copyright has been
        infringed, please contact us with the relevant details, and we will promptly remove the
        infringing links.
      </p>
      <p>
        Contact Email: <a href="mailto:admin@moviezone.com">admin@moviezone.com</a>
      </p>
    </div>
  );
}
