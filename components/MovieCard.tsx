import Link from "next/link";
import Image from "next/image";

interface MovieCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  category,
}) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-600/40 transition">
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-red-400 uppercase">{category}</p>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{description}</p>
        <Link
          href={`/movie/${id}`}
          className="block text-center bg-red-600 hover:bg-red-700 transition rounded-lg py-2 mt-4 font-semibold"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
