
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">About</a></li>
              <li><a href="#" className="text-sm hover:underline">Careers</a></li>
              <li><a href="#" className="text-sm hover:underline">Affiliates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Articles</a></li>
              <li><a href="#" className="text-sm hover:underline">Blog</a></li>
              <li><a href="#" className="text-sm hover:underline">Cheatsheets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Plans</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">For individuals</a></li>
              <li><a href="#" className="text-sm hover:underline">For students</a></li>
              <li><a href="#" className="text-sm hover:underline">For teams</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Subjects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">AI</a></li>
              <li><a href="#" className="text-sm hover:underline">Cloud computing</a></li>
              <li><a href="#" className="text-sm hover:underline">Data Science</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Languages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Bash</a></li>
              <li><a href="#" className="text-sm hover:underline">C</a></li>
              <li><a href="#" className="text-sm hover:underline">JavaScript</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-5 mt-4">
            <h3 className="font-bold mb-3">Career building</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Career paths</a></li>
              <li><a href="#" className="text-sm hover:underline">Career center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
