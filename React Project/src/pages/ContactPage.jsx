
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get In Touch</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Have a project in mind, a question, or just want to say hi? I'd love to hear from you!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-xl transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
                  <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Yogesh Bhavsar" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
                  <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/90">Message</Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message here..." required rows={5} className="mt-1" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground shadow-lg">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Other Ways to Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="mailto:yogeshbhavsar1994@gmail.com
" className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                <span className="text-foreground/90">yogeshbhavsar1994@gmail.com
</span>
              </a>
              <a href="https://www.linkedin.com/in/yogeshbhavsarui" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors">
                <Linkedin className="h-6 w-6 mr-3 text-blue-600" />
                <span className="text-foreground/90">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/yogeshu" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors">
                <Github className="h-6 w-6 mr-3 text-gray-700 dark:text-gray-300" />
                <span className="text-foreground/90">GitHub Profile</span>
              </a>
            </CardContent>
          </Card>
          <div className="mt-6">
            <img 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              alt="Abstract network or connection graphic"
             src="https://images.unsplash.com/photo-1536116330021-763ece352275" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
  