import { Calendar, Clock, CheckCircle, AlertCircle, TrendingUp, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const PatientPortal = () => {
  const patientInfo = {
    name: "Ramesh Kumar",
    id: "PK001",
    currentTreatment: "Panchakarma Detoxification",
    progress: 35,
    dayCount: "Day 5 of 14"
  };

  const upcomingSessions = [
    { 
      date: "Today", 
      time: "10:00 AM", 
      therapy: "Abhyanga", 
      duration: "60 min",
      practitioner: "Dr. Ayurveda",
      status: "confirmed"
    },
    { 
      date: "Tomorrow", 
      time: "11:30 AM", 
      therapy: "Shirodhara", 
      duration: "45 min",
      practitioner: "Dr. Ayurveda",
      status: "confirmed"
    },
    { 
      date: "Jan 20", 
      time: "2:00 PM", 
      therapy: "Panchakarma", 
      duration: "90 min",
      practitioner: "Dr. Ayurveda",
      status: "scheduled"
    },
  ];

  const notifications = [
    {
      type: "pre-procedure",
      message: "Please avoid heavy meals 2 hours before your Abhyanga session today",
      time: "2 hours ago",
      priority: "high"
    },
    {
      type: "reminder",
      message: "Tomorrow's Shirodhara session confirmed at 11:30 AM",
      time: "1 day ago",
      priority: "normal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-wellness">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-healing-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome, {patientInfo.name}</h1>
              <p className="text-muted-foreground">Patient ID: {patientInfo.id}</p>
            </div>
          </div>
          <Button variant="healing">
            Book New Session
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Treatment Progress */}
        <Card className="p-6 mb-8 bg-gradient-card shadow-card border-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Current Treatment Progress</h2>
              <p className="text-muted-foreground">{patientInfo.currentTreatment}</p>
            </div>
            <Badge variant="secondary" className="bg-healing/10 text-healing">
              {patientInfo.dayCount}
            </Badge>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Overall Progress</span>
              <span className="text-sm text-muted-foreground">{patientInfo.progress}% Complete</span>
            </div>
            <Progress value={patientInfo.progress} className="h-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-healing mb-1">5</div>
              <div className="text-sm text-muted-foreground">Sessions Completed</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-1">9</div>
              <div className="text-sm text-muted-foreground">Sessions Remaining</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-wellness mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Wellness Score</div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Sessions */}
          <Card className="lg:col-span-2 p-6 bg-gradient-card shadow-card border-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Upcoming Sessions</h3>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-12 bg-gradient-healing rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-foreground">{session.therapy}</h4>
                      <p className="text-sm text-muted-foreground">with {session.practitioner}</p>
                      <p className="text-xs text-muted-foreground">{session.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {session.time}
                    </p>
                    <p className="text-sm text-muted-foreground">{session.date}</p>
                    <Badge 
                      variant={session.status === 'confirmed' ? 'default' : 'secondary'}
                      className="mt-1"
                    >
                      {session.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notifications & Reminders */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-xl font-semibold text-foreground mb-6">Notifications</h3>
            
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    {notification.priority === 'high' ? (
                      <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-healing flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                View All Notifications
              </Button>
            </div>

            {/* Wellness Tracking */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium text-foreground mb-4">Wellness Tracking</h4>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-healing" />
                <span className="text-sm text-foreground">Energy Level: High</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-4 w-4 text-healing" />
                <span className="text-sm text-foreground">Sleep Quality: Good</span>
              </div>
              <Button variant="healing" size="sm" className="w-full">
                Log Today's Wellness
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;