import MovieCard from "@/components/MovieCard";
import movies from "@/data/movies.json";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-red-500">Latest Movies</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            thumbnail={movie.thumbnail}
            category={movie.category}
          />
        ))}
      </div>
    </div>
  );
}
