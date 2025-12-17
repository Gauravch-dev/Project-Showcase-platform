import HeroSection from "@/components/landing_page/hero_section";
import FeaturedProducts from "@/components/landing_page/featured_products";
import RecentlyLaunchedProducts from "@/components/landing_page/recently_launched_products";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <RecentlyLaunchedProducts/>
    </div>
  );
}
