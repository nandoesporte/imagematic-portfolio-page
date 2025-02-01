import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const FeatureCard = ({ title, description, image, className }: FeatureCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-lg overflow-hidden", className)}>
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;