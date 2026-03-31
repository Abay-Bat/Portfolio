import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    msg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, msg: "" });

    try {
      // 1. Sends the notification to YOU
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData, // Sending the full object
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Sends the auto-reply to the SENDER (The User)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RECEIVER, 
        formData, // Sending the full object
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        submitting: false,
        success: true,
        error: false,
        msg: "Message sent! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        msg: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          For professional inquiries, collaboration opportunities, or further information regarding my work, please don’t hesitate to get in touch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:abaybatyrbekov515@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    abaybatyrbekov515@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+7-700-333-62-75" className="text-muted-foreground hover:text-primary transition-colors">
                    +7-700-333-62-75
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Almaty, Kazakhstan</span>
                </div>
              </div>
            </div>

            <div className="pt-8 ">
              <h4 className="font-medium mb-4 "> Connect With Me </h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/abay-batyrbekov/" target="_blank" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Linkedin className="text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Aya Shalkar"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="ayashalkar@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none resize-none transition-all"
                  placeholder="Hey, I would love to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status.submitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2", status.submitting && "opacity-70 cursor-not-allowed")}
              >
                {status.submitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                {status.submitting ? "Sending..." : "Send Message"}
              </button>

              {status.msg && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className={cn("text-sm text-center mt-4", status.success ? "text-green-500" : "text-red-500")}
                >
                  {status.msg}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
