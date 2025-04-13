
import { motion } from "framer-motion";
import TechIcons from "@/components/TechIcons";
// import SkillsSection from "@/components/SkillsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar />
      
      <main className="pt-24 pb-16">
        

        {/* <SkillsSection /> */}
        <TechIcons />
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <Link to="/experience">
              <Button variant="outline" className="group border-cyan-500/30 hover:bg-cyan-500/10">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
                Experience
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="group border-cyan-500/30 hover:bg-cyan-500/10">
                Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-[2px] transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillsPage;
