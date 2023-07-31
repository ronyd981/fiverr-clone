// Components
import { ServicesCard } from "@/components";

const Categories = () => {
  return (
    <div
      className="
      pt-24
      md:pt-28
    "
    >
      <div
        className="
        w-[85%] mx-auto pt-16 relative
        lg:w-[95%]
        2xl:w-[1400px]
        "
      >
        <h1 className="text-3xl font-bold text-primaryTitle">Categories</h1>
      </div>
      <ServicesCard />
    </div>
  );
};

export default Categories;
