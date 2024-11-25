import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={image} width={100} height={100} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
