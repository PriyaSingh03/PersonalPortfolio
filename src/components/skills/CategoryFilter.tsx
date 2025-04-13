
import { Badge } from "@/components/ui/badge";
import { categories } from "./skillsData";

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      <Badge 
        onClick={() => setActiveCategory("all")}
        className={`cursor-pointer px-4 py-2 hover:bg-primary/20 transition-colors ${
          activeCategory === "all" ? "bg-primary/20 border-cyan" : "bg-secondary/50"
        }`}
      >
        All
      </Badge>
      {categories.map((category) => (
        <Badge 
          key={category} 
          onClick={() => setActiveCategory(category)}
          className={`cursor-pointer px-4 py-2 hover:bg-primary/20 transition-colors ${
            activeCategory === category ? "bg-primary/20 border-cyan" : "bg-secondary/50"
          }`}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;
