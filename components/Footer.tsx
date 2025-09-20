import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-8">
      <div className="container mx-auto text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} MovieZone. All rights reserved.
        </p>
        <p className="mt-2">
          This website only redirects to external video hosts. We do not host or upload any content.
        </p>
        <div className="mt-4 space-x-4">
          <Link href="/privacy" className="hover:text-red-400">Privacy Policy</Link>
          <Link href="/dmca" className="hover:text-red-400">DMCA</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
