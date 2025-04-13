
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Send, Linkedin, Github, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase"; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const { data, error } = await supabase.from("contact_messages").insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    ]);
  
    console.log("DATA:", data);
    console.log("ERROR:", error); // 👈 very important
  
    if (error) {
      toast({
        title: "Failed to send",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  
    setLoading(false);
  };
  
  
  

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-cyan-400" />,
      title: "Phone",
      value: "9330198537",
    },
    {
      icon: <Mail className="h-6 w-6 text-cyan-400" />,
      title: "Email",
      value: "singhpriyainfo30@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-cyan-400" />,
      title: "Address",
      value: "Kolkata, India",
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/priya-singh3011/", label: "LinkedIn" },
    { icon: <Github size={24} />, url: "https://github.com/PriyaSingh03", label: "GitHub" },
    { icon: <ExternalLink size={24} />, url: "#", label: "Portfolio" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 relative w-full"
      >
        <Navbar />
        
        <main className="pt-24 pb-12 px-4 md:px-8 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <div className="h-1 w-20 mx-auto bg-cyan-500"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 h-full">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <span>Get in Touch</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-3 bg-cyan-500/10 rounded-lg mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400">{info.title}</h3>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="p-3 bg-cyan-500/10 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-300">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 focus:border-cyan-500 text-white"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-300">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 focus:border-cyan-500 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-slate-600 focus:border-cyan-500 text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-300">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 focus:border-cyan-500 text-white resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-pulse mr-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-6xl mx-auto"
          >
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Location</h2>
              <div className="aspect-video w-full bg-slate-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471218.3856203944!2d88.04952648792387!3d22.676385746416156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1680531267694!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kolkata Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </main>
        
        <Footer />
        
        
      </motion.div>
    </div>
  );
};

export default ContactPage;
