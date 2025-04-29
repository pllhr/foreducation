
import React from "react";
import NavBar from "@/components/NavBar";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-purple-50 to-blue-50">
      <NavBar />
      
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md md:mr-8 mb-8 md:mb-0">
          <div className="text-center md:text-left mb-6 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Learn to code</h1>
            <p className="text-xl text-gray-600">Master in-demand programming skills with our interactive courses</p>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 shadow-sm animate-fade-in">
              <div className="text-sm text-gray-500 mb-2">Most popular courses</div>
              <ul className="space-y-2">
                {["Python", "JavaScript", "Data Science", "Machine Learning"].map((course, i) => (
                  <li key={course} className="flex items-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
