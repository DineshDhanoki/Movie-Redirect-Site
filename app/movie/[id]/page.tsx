import { Metadata } from "next";
import movies from "@/data/movies.json";
import Image from "next/image";
import SidebarAds from "@/components/SidebarAds";

// ✅ Dynamic Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movie = movies.find((m) => m.id === params.id);

  if (!movie) {
    return {
      title: "Movie Not Found",
      description: "The requested movie does not exist.",
    };
  }

  return {
    title: `${movie.title} | MovieZone`,
    description: movie.description,
    openGraph: {
      title: movie.title,
      description: movie.description,
      images: [movie.poster],
      url: `https://yourdomain.com/movie/${movie.id}`,
    },
  };
}

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = movies.find((m) => m.id === params.id);

  if (!movie) {
    return (
      <div className="text-center py-20 text-gray-400">Movie not found.</div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 🔹 Top Banner Ad */}
      <section role="complementary" aria-label="Advertisement">
        <div className="bg-gray-800 text-gray-400 text-center py-4 rounded">
          [Top Banner Ad]
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* 🔹 Poster */}
        <Image
          src={movie.poster}
          alt={movie.title}
          width={500}
          height={700}
          className="rounded-lg shadow-lg"
          priority
        />

        {/* 🔹 Movie Info */}
        <div>
          <h1 className="text-4xl font-bold text-red-500">{movie.title}</h1>
          <p className="mt-4 text-gray-300">{movie.description}</p>
          <p className="mt-2 text-sm text-red-400">
            Category: {movie.category}
          </p>

          {/* 🔹 Watch Button */}
          <a
            href={movie.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 transition rounded-lg px-6 py-3 mt-6 font-semibold text-lg"
          >
            ▶ Watch Now
          </a>

          {/* 🔹 Trailer Embed (optional) */}
          {movie.trailer && (
            <div className="mt-6 aspect-video">
              <iframe
                src={movie.trailer}
                title={`${movie.title} Trailer`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Bottom Banner Ad */}
      <section role="complementary" aria-label="Advertisement">
        <div className="bg-gray-800 text-gray-400 text-center py-4 rounded">
          [Bottom Banner Ad]
        </div>
      </section>

      {/* 🔹 Affiliate Sidebar Ads */}
      <SidebarAds />

      {/* 🔹 Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            name: movie.title,
            description: movie.description,
            image: movie.poster,
            genre: movie.category,
            trailer: movie.trailer,
            url: `https://yourdomain.com/movie/${movie.id}`,
            potentialAction: {
              "@type": "WatchAction",
              target: movie.watchUrl,
            },
          }),
        }}
      />
    </div>
  );
}
