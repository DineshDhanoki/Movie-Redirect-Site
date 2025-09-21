const SidebarAds = () => {
  return (
    <aside className="bg-gray-900 border border-gray-700 p-4 rounded text-center mt-6">
      <h2 className="text-red-500 font-bold mb-2">Sponsored</h2>
      <div className="space-y-4">
        <a href="https://affiliate.example.com" target="_blank">
          <img
            src="/images/affiliate-banner1.jpg"
            alt="Affiliate Banner 1"
            className="rounded-lg"
          />
        </a>
        <a href="https://affiliate.example.com" target="_blank">
          <img
            src="/images/affiliate-banner2.jpg"
            alt="Affiliate Banner 2"
            className="rounded-lg"
          />
        </a>
      </div>
    </aside>
  );
};

export default SidebarAds;
