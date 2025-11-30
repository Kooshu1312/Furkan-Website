import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, price, image }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-yellow transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-display text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {price && (
        <CardFooter>
          <p className="text-primary font-semibold">{price}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default ServiceCard;
