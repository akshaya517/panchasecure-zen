import { Button } from "@/components/ui/button";
import { Heart, Calendar, User, BarChart3, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { to: "/", label: "Home", icon: Heart },
    { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { to: "/patient-portal", label: "Patient Portal", icon: User },
    { to: "/schedule", label: "Schedule", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-healing rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-healing-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">AyurvaManager</h1>
              <p className="text-xs text-muted-foreground">Panchakarma Management</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              
              return (
                <Link key={item.to} to={item.to}>
                  <Button 
                    variant={isActive ? "healing" : "ghost"} 
                    size="sm"
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="healing" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;