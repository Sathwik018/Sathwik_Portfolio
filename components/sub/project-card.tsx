import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-80 relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.06] transition ring-blue-500 border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={300}
        height={100}
        className="w-full h-64 object-cover rounded-t-lg" 
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
    </Link>
  );
};