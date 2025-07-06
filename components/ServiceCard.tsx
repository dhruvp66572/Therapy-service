import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  duration?: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function ServiceCard({
  title,
  image,
  description,
  duration,
  buttonText = "Learn More",
  onClick
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl border-slate-100 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-center pt-6">
        <div className="relative w-52 h-36">
          <Image
            src={image}
            alt={title}
            className="rounded-2xl object-cover border-4 border-slate-50 shadow-sm"
            width={200}
            height={200}
          />
          {duration && (
            <Badge className="absolute bottom-0 right-0 bg-emerald-50 text-emerald-700 border-emerald-100">
              {duration}
            </Badge>
          )}
        </div>
      </div>
      <CardHeader className="text-center">
        <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow text-center px-6">
        <p className="text-slate-600">{description}</p>
      </CardContent>
      {onClick && (
        <CardFooter className="justify-center pb-5">
          <Button 
            variant="ghost" 
            onClick={onClick} 
            className="group px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 font-medium transition-all"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
