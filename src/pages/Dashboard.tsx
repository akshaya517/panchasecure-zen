import { Calendar, Clock, Users, TrendingUp, Bell, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const upcomingTherapies = [
    { patient: "Ramesh Kumar", therapy: "Abhyanga", time: "10:00 AM", duration: "60 min" },
    { patient: "Priya Sharma", therapy: "Shirodhara", time: "11:30 AM", duration: "45 min" },
    { patient: "Amit Patel", therapy: "Panchakarma", time: "2:00 PM", duration: "90 min" },
  ];

  const todayStats = {
    scheduledSessions: 8,
    completedSessions: 5,
    activePatients: 12,
    pendingNotifications: 3
  };

  return (
    <div className="min-h-screen bg-gradient-wellness">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Practitioner Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Ayurveda</p>
          </div>
          <div className="flex gap-3">
            <Button variant="healing" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications ({todayStats.pendingNotifications})
            </Button>
            <Button variant="outline" size="sm">Schedule Therapy</Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Today's Sessions</p>
                <p className="text-3xl font-bold text-healing">{todayStats.scheduledSessions}</p>
              </div>
              <Calendar className="h-8 w-8 text-healing" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Completed</p>
                <p className="text-3xl font-bold text-accent">{todayStats.completedSessions}</p>
              </div>
              <Activity className="h-8 w-8 text-accent" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Patients</p>
                <p className="text-3xl font-bold text-wellness">{todayStats.activePatients}</p>
              </div>
              <Users className="h-8 w-8 text-wellness" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Completion Rate</p>
                <p className="text-3xl font-bold text-primary">63%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2 p-6 bg-gradient-card shadow-card border-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Today's Schedule</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {upcomingTherapies.map((therapy, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-12 bg-gradient-healing rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-foreground">{therapy.patient}</h4>
                      <p className="text-sm text-muted-foreground">{therapy.therapy}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {therapy.time}
                    </p>
                    <p className="text-sm text-muted-foreground">{therapy.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Patient Progress */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-xl font-semibold text-foreground mb-6">Patient Progress</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">Ramesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Day 5/14</p>
                </div>
                <Progress value={35} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Panchakarma Treatment</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Day 3/7</p>
                </div>
                <Progress value={43} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Shirodhara Therapy</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">Amit Patel</p>
                  <p className="text-sm text-muted-foreground">Day 8/10</p>
                </div>
                <Progress value={80} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Abhyanga Treatment</p>
              </div>

              <Button variant="healing" className="w-full">
                View All Patients
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;