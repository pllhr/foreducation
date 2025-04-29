
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Facebook, 
  Github, 
  Apple, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  AlertCircle 
} from "lucide-react";
import { toast } from "sonner";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("dara.rakari@deallabs.org");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      toast.success("Login successful", {
        description: "Welcome back to your learning journey!",
      });
      setIsLoading(false);
    }, 1500);
    
    console.log("Login attempted with:", email, password, "Remember me:", rememberMe);
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 animate-fade-in transform transition-all hover:shadow-xl">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-1 text-gray-800">Welcome back</h1>
        <p className="text-sm text-gray-500">Log in to continue your learning journey</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="block text-sm text-gray-500">
            * Required
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 focus:ring-primary focus:border-primary transition-all"
              placeholder="Email or username"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 w-full rounded-md border-gray-300 focus:ring-primary focus:border-primary transition-all"
              placeholder="Password"
            />
            <div 
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" /> : 
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              }
            </div>
          </div>
        </div>
        
        {showMessage && (
          <div className="text-red-500 text-sm bg-red-50 p-3 rounded border border-red-100 flex items-center space-x-2 animate-fade-in">
            <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
            <span>Signed out successfully.</span>
            <span 
              className="ml-auto cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setShowMessage(false)}
            >
              &times;
            </span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember-me" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-600 cursor-pointer">
              Remember me
            </label>
          </div>
          <a href="#" className="text-primary hover:underline text-sm font-medium transition-colors">
            Forgot password?
          </a>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-2 py-6"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <>
              <LogIn className="h-5 w-5" />
              <span>Log in</span>
            </>
          )}
        </Button>
      </form>
      
      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-4 gap-3">
        <Button variant="outline" className="rounded-md hover:bg-gray-50 border-gray-300 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
        </Button>
        <Button variant="outline" className="rounded-md hover:bg-gray-50 border-gray-300 transition-all">
          <Facebook className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="rounded-md hover:bg-gray-50 border-gray-300 transition-all">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="rounded-md hover:bg-gray-50 border-gray-300 transition-all">
          <Apple className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm">
          Not a member yet? <a href="#" className="text-primary hover:underline font-medium">Sign up for free</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
