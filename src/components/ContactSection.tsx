import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-8 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Top decorative line */}
      <div className="absolute left-1/4 right-1/4 top-10 flex justify-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">GET IN TOUCH</h2>
          <p className="text-cyan-400 text-lg italic">Let's Work Together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 mb-4">
              <Phone className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone & Mobile</h3>
            <p className="text-gray-300">9330198537</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 mb-4">
              <Mail className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email & Website</h3>
            <p className="text-gray-300">singhpriyainfo30@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 mb-4">
              <MapPin className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-300">Kolkata, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 mb-4">
              <Heart className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <p className="text-gray-300">@priyasingh</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute left-0 right-0 bottom-10 flex justify-center">
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default ContactSection;