import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section_header";
import ProductCard from "../products/product_card";
import EmptyState from "../common/empty_state";

const recentlyLaunchedProducts=[
//   {
//     id:1,
//     name:"React UI Library",
//     description:"Reusable UI components built for modern React apps",
//     tags:["React", "UI Components", "Design System"],
//     votes:615,
//     isFeatured:true,
//   },

//   {
//     id:2,
//     name:"Building Microservices with Spring Boot",
//     description:"Learn to build scalable, independent microservices using Spring Boot.",
//     tags:["Spring Boot", "Microservices", "Backend"],
//     votes:123,
//     isFeatured:false,
//   }
]

export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
        <div className="wrapper space-y-12">
            <SectionHeader title="Recently Launched" icon={RocketIcon} description="The most recently launched products"/>
            {recentlyLaunchedProducts.length>0?(
                <div className="grid-wrapper">{recentlyLaunchedProducts.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}</div>
            ):(
                <EmptyState message="No products recently launched!" icon={CalendarIcon}/>
            )}
        </div>
    </section>
  )
}
