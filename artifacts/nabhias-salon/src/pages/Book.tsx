import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, FileText, AlertCircle } from "lucide-react";
import heroImg from "@assets/ChatGPT_Image_Aug_4,_2026,_06_51_53_PM_1785851568590.png";
import { supabase } from "@/lib/supabase";

// Convert "10:00 AM" → "10:00:00" for Supabase TIME column
function toTime24(slot: string): string {
  const [time, period] = slot.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
}

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  serviceId: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Book() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const preselectedService = searchParams.get("service") || "";
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceId: preselectedService,
      date: "",
      time: "",
      notes: ""
    }
  });

  const onSubmit = async (data: BookingFormValues) => {
    setSubmitError(null);
    const serviceName = SERVICES.find(s => s.id === data.serviceId)?.name ?? data.serviceId;

    const { error } = await supabase.from("appointments").insert({
      service: serviceName,
      appointment_date: data.date,
      appointment_time: toTime24(data.time),
      full_name: data.name,
      phone_number: data.phone,
      email: data.email || null,
      additional_notes: data.notes || null,
      status: "Pending",
    });

    if (error) {
      setSubmitError("Something went wrong saving your booking. Please try again or contact us via WhatsApp.");
      return;
    }

    setIsSubmitted(true);
  };

  // Generate future dates (next 14 days)
  const today = new Date();
  const dates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i + 1); // Start from tomorrow
    // Skip Sundays (0) if salon is closed
    if (d.getDay() === 0) return null;
    return d.toISOString().split('T')[0];
  }).filter(Boolean) as string[];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative hidden md:block">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Salon atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
          <h2 className="font-serif text-5xl mb-4">Book Your Visit</h2>
          <p className="text-lg text-white/90 max-w-md">
            Take a moment for yourself. Experience luxury, care, and absolute elegance.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 pt-32 md:pt-12">
        <div className="w-full max-w-md relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="md:hidden text-center mb-10">
                  <h1 className="font-serif text-4xl text-secondary mb-2">Book an Appointment</h1>
                  <p className="text-muted-foreground">Schedule your next pampering session.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center text-secondary">
                      Service *
                    </label>
                    <select 
                      {...register("serviceId")}
                      className={`w-full h-12 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none ${errors.serviceId ? 'border-destructive' : 'border-border'}`}
                    >
                      <option value="">Select a service...</option>
                      {/* Group services by category */}
                      {["Bridal", "Hair", "Skin", "Nails", "Mehndi"].map(cat => (
                        <optgroup key={cat} label={cat}>
                          {SERVICES.filter(s => s.category === cat).map(s => (
                            <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.serviceId && <p className="text-destructive text-xs">{errors.serviceId.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center text-secondary">
                        <Calendar className="w-4 h-4 mr-2 text-primary" /> Date *
                      </label>
                      <select 
                        {...register("date")}
                        className={`w-full h-12 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none ${errors.date ? 'border-destructive' : 'border-border'}`}
                      >
                        <option value="">Select date...</option>
                        {dates.map(date => (
                          <option key={date} value={date}>{formatDate(date)}</option>
                        ))}
                      </select>
                      {errors.date && <p className="text-destructive text-xs">{errors.date.message}</p>}
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center text-secondary">
                        <Clock className="w-4 h-4 mr-2 text-primary" /> Time *
                      </label>
                      <select 
                        {...register("time")}
                        className={`w-full h-12 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none ${errors.time ? 'border-destructive' : 'border-border'}`}
                      >
                        <option value="">Select time...</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.time && <p className="text-destructive text-xs">{errors.time.message}</p>}
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center text-secondary">
                        <User className="w-4 h-4 mr-2 text-primary" /> Full Name *
                      </label>
                      <input 
                        type="text" 
                        {...register("name")}
                        placeholder="Your full name"
                        className={`w-full h-12 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.name ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center text-secondary">
                        <Phone className="w-4 h-4 mr-2 text-primary" /> Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        {...register("phone")}
                        placeholder="e.g. 0300 1234567"
                        className={`w-full h-12 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.phone ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center text-secondary">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground" /> Email <span className="text-muted-foreground font-normal ml-1">(Optional)</span>
                      </label>
                      <input 
                        type="email" 
                        {...register("email")}
                        placeholder="For booking confirmation"
                        className={`w-full h-12 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.email ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center text-secondary">
                      <FileText className="w-4 h-4 mr-2 text-muted-foreground" /> Additional Notes
                    </label>
                    <textarea 
                      {...register("notes")}
                      placeholder="Any special requests or allergies we should know about?"
                      className="w-full h-24 p-4 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="flex items-start gap-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-4 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                        Saving your booking...
                      </span>
                    ) : "Confirm Booking Request"}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    This is a request. Our team will confirm your appointment via WhatsApp or call within a few hours.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-serif text-3xl text-secondary mb-4">Request Received!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for choosing Nabhia's Salon. We have received your booking request and will be in touch shortly via WhatsApp or phone to confirm your appointment.
                </p>
                
                <div className="bg-background rounded-lg p-4 mb-8 text-left space-y-2 border border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Service:</span>
                    <span className="font-medium text-sm text-secondary text-right max-w-[60%]">
                      {SERVICES.find(s => s.id === watch("serviceId"))?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Date & Time:</span>
                    <span className="font-medium text-sm text-secondary">
                      {watch("date") ? formatDate(watch("date")) : ""} at {watch("time")}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    window.scrollTo(0,0);
                  }}
                  variant="outline" 
                  className="w-full"
                >
                  Book Another Service
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  );
}
