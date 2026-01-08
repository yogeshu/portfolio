import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: 'opportunity', // Default selection
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yogeshbhavsar1994@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Email Copied",
      description: "Address copied to clipboard.",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (Replace with EmailJS or Formspree logic)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent Successfully",
      description: "Thanks for reaching out. I usually respond within 24 hours.",
      variant: "default", // You can use "success" if you have that variant
    });
    setFormData({ name: '', email: '', subject: 'opportunity', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        
        {/* 1. HEADER SECTION: Status & Intro */}
        <header className="text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent pb-2">
            Let's Build Something Scalable.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need a <strong>Senior Frontend Architect</strong> to lead your team or a <strong>React Expert</strong> for a critical project, I'm ready to discuss technical solutions.
          </p>
        </header>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* 2. CONTACT FORM (Main Column) */}
          <motion.div
            className="md:col-span-7 lg:col-span-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-2xl border-muted/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Please specify the type of inquiry so I can prioritize your request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        required 
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@company.com" 
                        required 
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Inquiry Type</Label>
                    <div className="relative">
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                      >
                        <option value="opportunity">Full-Time Opportunity (HR/Recruiter)</option>
                        <option value="freelance">Freelance / Contract Project</option>
                        <option value="consultation">Technical Consultation</option>
                        <option value="other">General Inquiry</option>
                      </select>
                      {/* Custom Arrow for select */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details / Message</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Tell me about the project scope, tech stack, or the role you are hiring for..." 
                      required 
                      rows={6} 
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full md:w-auto px-8 py-6 text-lg group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 3. SIDEBAR: Direct Info & Socials */}
          <motion.div
            className="md:col-span-5 lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Quick Contact Card */}
            <Card className="border-muted/40 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent w-full" />
              <CardHeader>
                <CardTitle className="text-xl">Quick Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Email with Copy Feature */}
                <div className="group flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-transparent hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-background rounded-lg text-primary shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</span>
                      <span className="text-sm font-semibold truncate">yogeshbhavsar1994@...</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopyEmail}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </Button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="p-2 bg-background rounded-lg text-orange-500 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold">Maharashtra, India (Remote Ready)</span>
                  </div>
                </div>

                {/* Timezone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="p-2 bg-background rounded-lg text-blue-500 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Timezone</span>
                    <span className="text-sm font-semibold">IST (GMT+5:30)</span>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Social Profiles */}
            <Card className="border-muted/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Professional Network</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <a 
                  href="https://www.linkedin.com/in/yogeshbhavsarui" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-transparent hover:border-[#0077b5]/30 transition-all group"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <Linkedin size={22} /> LinkedIn
                  </span>
                  <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </a>
                
                <a 
                  href="https://github.com/yogeshu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-800/10 hover:bg-gray-800/20 text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-500/30 transition-all group"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <Github size={22} /> GitHub
                  </span>
                  <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </a>
              </CardContent>
            </Card>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;