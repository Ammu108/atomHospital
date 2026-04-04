import Categories from "~/features/home/category-section";
import HeroSection from "~/features/home/hero-section";
import TopDoctors from "~/features/home/top-doctors";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <Categories />
        <TopDoctors />
      </div>
    </main>
  );
};

export default Page;
