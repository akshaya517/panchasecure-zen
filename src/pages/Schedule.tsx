import { useState } from "react";
import { Calendar, Clock, Plus, User, MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState("2024-01-18");
  const [selectedTherapy, setSelectedTherapy] = useState("");

  const therapyTypes = [
    { name: "Abhyanga", duration: "60 min", description: "Full body oil massage" },
    { name: "Shirodhara", duration: "45 min", description: "Continuous oil pouring on forehead" },
    { name: "Panchakarma", duration: "90 min", description: "Complete detoxification treatment" },
    { name: "Nasya", duration: "30 min", description: "Nasal cleansing therapy" },
    { name: "Basti", duration: "45 min", description: "Medicated enema therapy" }
  ];

  const appointments = [
    {
      time: "9:00 AM",
      patient: "Ramesh Kumar",
      therapy: "Abhyanga",
      duration: "60 min",
      practitioner: "Dr. Ayurveda",
      status: "confirmed",
      contact: "+91 98765 43210"
    },
    {
      time: "10:30 AM",
      patient: "Priya Sharma",
      therapy: "Shirodhara",
      duration: "45 min",
      practitioner: "Dr. Ayurveda",
      status: "confirmed",
      contact: "+91 98765 43211"
    },
    {
      time: "12:00 PM",
      patient: "",
      therapy: "",
      duration: "",
      practitioner: "",
      status: "available",
      contact: ""
    },
    {
      time: "2:00 PM",
      patient: "Amit Patel",
      therapy: "Panchakarma",
      duration: "90 min",
      practitioner: "Dr. Wellness",
      status: "pending",
      contact: "+91 98765 43212"
    },
    {
      time: "4:00 PM",
      patient: "",
      therapy: "",
      duration: "",
      practitioner: "",
      status: "available",
      contact: ""
    }
  ];

  const practitioners = [
    { name: "Dr. Ayurveda", speciality: "Panchakarma Specialist", availability: "9 AM - 6 PM" },
    { name: "Dr. Wellness", speciality: "Abhyanga Expert", availability: "10 AM - 5 PM" },
    { name: "Dr. Healing", speciality: "Shirodhara Specialist", availability: "8 AM - 4 PM" }
  ];

  return (
    <div className="min-h-screen bg-gradient-wellness">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 shadow-card">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Therapy Scheduling</h1>
            <p className="text-muted-foreground">Manage appointments and therapy sessions</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-2">
              <Input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-auto"
              />
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by practitioner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Practitioners</SelectItem>
                  {practitioners.map((practitioner, index) => (
                    <SelectItem key={index} value={practitioner.name}>
                      {practitioner.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="healing">
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Schedule Timeline */}
          <div className="lg:col-span-3">
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Schedule for {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h2>
                <div className="flex gap-2">
                  <Badge variant="secondary">5 Appointments</Badge>
                  <Badge variant="outline" className="bg-healing/10 text-healing">2 Available</Badge>
                </div>
              </div>

              <div className="space-y-4">
                {appointments.map((appointment, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      appointment.status === 'available' 
                        ? 'bg-background/50 border-dashed border-border' 
                        : 'bg-background border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 min-w-20">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">{appointment.time}</span>
                        </div>
                        
                        {appointment.status === 'available' ? (
                          <div className="text-muted-foreground italic">Available Slot</div>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="font-medium text-foreground flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {appointment.patient}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {appointment.therapy} • {appointment.duration}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        {appointment.status !== 'available' && (
                          <>
                            <div className="text-right hidden sm:block">
                              <div className="text-sm font-medium text-foreground">{appointment.practitioner}</div>
                              <div className="text-xs text-muted-foreground flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {appointment.contact}
                              </div>
                            </div>
                            <Badge 
                              variant={
                                appointment.status === 'confirmed' ? 'default' : 
                                appointment.status === 'pending' ? 'secondary' : 'outline'
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </>
                        )}
                        
                        <Button 
                          variant={appointment.status === 'available' ? 'healing' : 'outline'} 
                          size="sm"
                        >
                          {appointment.status === 'available' ? 'Book Slot' : 'Edit'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Book */}
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <h3 className="font-semibold text-foreground mb-4">Quick Book</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Patient Name</label>
                  <Input placeholder="Enter patient name" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Therapy Type</label>
                  <Select value={selectedTherapy} onValueChange={setSelectedTherapy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select therapy" />
                    </SelectTrigger>
                    <SelectContent>
                      {therapyTypes.map((therapy, index) => (
                        <SelectItem key={index} value={therapy.name}>
                          {therapy.name} ({therapy.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="healing" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </Card>

            {/* Available Practitioners */}
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <h3 className="font-semibold text-foreground mb-4">Available Practitioners</h3>
              
              <div className="space-y-3">
                {practitioners.map((practitioner, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg border border-border">
                    <div className="font-medium text-foreground text-sm">{practitioner.name}</div>
                    <div className="text-xs text-muted-foreground">{practitioner.speciality}</div>
                    <div className="text-xs text-healing mt-1">{practitioner.availability}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Therapy Types */}
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <h3 className="font-semibold text-foreground mb-4">Therapy Types</h3>
              
              <div className="space-y-3">
                {therapyTypes.slice(0, 3).map((therapy, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg border border-border">
                    <div className="font-medium text-foreground text-sm">{therapy.name}</div>
                    <div className="text-xs text-muted-foreground">{therapy.description}</div>
                    <Badge variant="outline" className="mt-2 text-xs">{therapy.duration}</Badge>
                  </div>
                ))}
                
                <Button variant="outline" size="sm" className="w-full">
                  View All Therapies
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;