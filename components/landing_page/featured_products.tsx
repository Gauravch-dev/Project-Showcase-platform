import SectionHeader from "../common/section_header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/product_card";

const featuredProducts=[
  {
    id:1,
    name:"React UI Library",
    description:"Reusable UI components built for modern React apps",
    tags:["React", "UI Components", "Design System"],
    votes:615,
    isFeatured:true,
  },

  {
    id:2,
    name:"Building Microservices with Spring Boot",
    description:"Learn to build scalable, independent microservices using Spring Boot.",
    tags:["Spring Boot", "Microservices", "Backend"],
    votes:123,
    isFeatured:false,
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Featured Products" icon={StarIcon} description="Top picks from our community this week"/>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">View All<ArrowRightIcon className="size-4"/></Link>
            </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
      </section>
  );
}
