import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Code2, Layers, Cpu, 
  Check, CheckCircle2, Send, 
  Linkedin, Twitter, Github, Calendar, ExternalLink, 
  Zap, Loader2, MessageSquare, PenTool, Layout
} from 'lucide-react';
import WhyMeSection from '../components/ui/WhySection';
import { projectMix } from '../lib/caseConstant';

// --- Reusable Animation Components ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Static Data ---
// "Middle Ground" Stats - Impressive but realistic for a solo dev
const STATS = [
    { val: "$2.4M+", label: "Revenue Enabled" },
  { val: "100%", label: "Code Ownership" },
  { val: "Top 1%", label: "Performance Scores" },
  { val: "React", label: "Specialist" },
];

// Focus on frameworks/tech you know, rather than big client names
const TECH_STACK = [
  { name: "Next.js", style: "font-bold text-xl" },
  { name: "React Native", style: "font-semibold text-lg" },
  { name: "Supabase", style: "font-medium text-xl" },
  { name: "Tailwind", style: "font-bold text-lg" },
  { name: "Node.js", style: "font-semibold text-xl" }
];

const EXPERTISE_CARDS = [
  { icon: Layout, color: "text-blue-400", bg: "bg-blue-500/10", title: "Pixel-Perfect UI", desc: "I don't just make it work; I make it look exactly like the design. Smooth animations and responsive layouts.", fix: "Frontend Specialist" },
  { icon: Layers, color: "text-orange-400", bg: "bg-orange-500/10", title: "Full-Stack MVP", desc: "From database to deployment. I handle the API, authentication, and database so you don't need a second dev.", fix: "End-to-End Build" },
  { icon: Cpu, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "Performance First", desc: "Slow apps lose users. I write clean, optimized code that loads fast and ranks well on Google.", fix: "Core Web Vitals" }
];

const SERVICES = [
  { 
    id: 'audit', 
    tag: 'FIX', 
    title: 'Code/UI Audit', 
    price: '$299', 
    type: 'One-Time Check', 
    features: ['Review your existing code', 'Find performance issues', 'UI/UX Improvement list', 'Video walkthrough of fixes'] 
  },
  { 
    id: 'mvp', 
    tag: 'BUILD', 
    title: 'Web App Development', 
    price: 'Project Based', 
    type: 'Most Popular',
    popular: true,
    features: ['React/Next.js Application', 'Mobile Responsive', 'Admin Dashboard', 'Deployment Setup'] 
  },
  { 
    id: 'monthly', 
    tag: 'PARTNER', 
    title: 'Dedicated Developer', 
    price: 'Monthly', 
    type: 'Retainer', 
    features: ['Ongoing Feature Development', 'Bug Fixes & Maintenance', 'Direct Slack/WhatsApp Access', 'Flexible Hours'] 
  }
];

// Simplified Process for a Solo Dev
const PROCESS = [
  { 
    title: "Understanding", 
    icon: MessageSquare, 
    desc: "We discuss your idea. I listen to what you need and tell you exactly what is possible within your budget." 
  },
  { 
    title: "Development", 
    icon: Code2, 
    desc: "I start coding. You get a link to view progress every week so you're never guessing where we are." 
  },
  { 
    title: "Refinement", 
    icon: PenTool, 
    desc: "We test the app together. I polish the UI, fix bugs, and ensure it works perfectly on mobile." 
  },
  { 
    title: "Launch", 
    icon: Zap, 
    desc: "I deploy your app to the live server and hand over all the code to you. You own everything." 
  }
];

// FAQ tailored for a Solo Dev
const FAQS = [
  { q: "Are you an agency or a freelancer?", a: "I am a solo specialist. This means you work directly with me—no account managers, no miscommunication, and no overhead costs." },
  { q: "What tech stack do you use?", a: "I build with the modern web stack: Next.js (React), Tailwind CSS, and Node.js. This ensures your app is fast, scalable, and easy to maintain." },
  { q: "How do we communicate?", a: "I believe in deep work. We'll have a weekly sync call, and for everything else, I use email or Loom videos to keep you updated without endless meetings." },
  { q: "Do you do design?", a: "I am a developer with a good eye for design. If you have a Figma file, I build it perfectly. If not, I can create a clean, modern UI for you." }
];

const MixPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        alert("Thanks! I'll be in touch shortly.");
        e.target.reset();
    }, 2000);
  };

  const glassPanelClass = "bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-2xl";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 border-b border-white/5 backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-shadow duration-300"></span>
            Yogesh Bhavsar
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Expertise', 'Work', 'Process', 'Services'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#contact" className="px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 transition-all shadow-lg">
              Start a Project
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white">
              <X size={32} />
            </button>
            {['Expertise', 'Work', 'Process', 'Services'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-slate-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - The "Middle Ground" Positioning */}
      <header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">
        <FadeIn className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            I turn your ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 animate-gradient">
              real, working products.
            </span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            You don't need a bloated agency. You need a **Product Specialist** who can build your web app, dashboard, or MVP with clean code and modern design.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
               Discuss Your Project <ArrowRight size={18} />
            </a>
            <a href="#work" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all border border-slate-700 hover:border-slate-500">
              See My Work
            </a>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 pt-8 border-t border-white/5">
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-4">
                 <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                 <div className="text-sm text-slate-500 font-mono uppercase tracking-wide">{stat.label}</div>
              </FadeIn>
            ))}
        </div>
      </header>
      
      {/* Tech Stack Bar */}
      <section className="border-y border-white/5 bg-slate-950/30 relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 md:mb-0">Expert In</span>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
                {TECH_STACK.map((tech, i) => (
                    <span key={i} className={`text-slate-400 cursor-default ${tech.style}`}>
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
      </section>

      <WhyMeSection />

      {/* Expertise */}
      <section id="expertise" className="py-24 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Bring to the Table</h2>
            <p className="text-slate-400 text-lg">I bridge the gap between "Make it pretty" and "Make it work."</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {EXPERTISE_CARDS.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`${glassPanelClass} p-8 rounded-2xl group`}>
                <div className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon size={32} className={card.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{card.desc}</p>
                <div className="text-xs font-bold font-mono text-indigo-400 flex items-center gap-2 bg-indigo-500/5 py-2 px-3 rounded-md w-fit border border-indigo-500/10">
                  <CheckCircle2 size={14} /> {card.fix}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works - Top 3 */}
      <section id="work" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-slate-400 text-lg">Clean code. Modern UI. Real results.</p>
        </FadeIn>

       {projectMix.slice(0, 3).map((project, index) => (
          <FadeIn 
            key={project.id} 
            className={`${glassPanelClass} rounded-2xl p-6 md:p-8 mb-12 group border border-white/5 hover:border-white/10 transition-colors duration-500`}
          >
             {/* ... (Keep your Project Cards Structure exactly as is, it's good) ... */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                   {/* ... Keep Title and Badge ... */}
                   <span className={`${project.badgeBg} ${project.badgeText} px-3 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase w-fit border border-current opacity-80`}>
                    {project.badgeLabel}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                    {project.title}
                    {project.rightLink && (
                       <a href={project.rightLink} target="_blank" className="text-slate-600 hover:text-white transition-colors"><ExternalLink size={20}/></a>
                    )}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.solutionDesc}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="md:col-span-1 flex flex-col h-full items-center justify-center bg-slate-950/30 rounded-xl border border-white/5 p-6">
                 {/* ... Keep Right Side Icon ... */}
                 {project.rightIcon === "book" ? <BookOpen size={48} className="text-slate-700"/> : <Zap size={48} className="text-slate-700"/>}
                 <a href={project.rightLink} className="mt-4 text-sm font-bold text-indigo-400 hover:text-indigo-300">View Project</a>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Simplified Process */}
      <section id="process" className="py-24 border-t border-white/5 bg-slate-900/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work Together</h2>
            <p className="text-slate-400 text-lg">Simple, transparent, and fast.</p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`${glassPanelClass} p-6 rounded-xl`}>
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-4 text-indigo-400">
                  <step.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-white/5 bg-slate-900/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`${glassPanelClass} p-8 rounded-xl flex flex-col relative ${service.popular ? 'border-indigo-500/50 shadow-indigo-900/20' : ''}`}>
                <div className="mb-6">
                  <div className={`text-xs font-bold font-mono mb-2 text-indigo-400`}>{service.tag}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
                  {service.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 text-indigo-400" /> 
                        <span className="opacity-90">{item}</span>
                      </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full py-3.5 text-center font-bold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all">
                  Inquire Now
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Questions?</h2>
        </FadeIn>
        <div className="space-y-4">
            {FAQS.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05} className={`${glassPanelClass} rounded-xl overflow-hidden p-6`}>
                    <div className="font-bold text-slate-200 mb-2">{faq.q}</div>
                    <div className="text-slate-400 text-sm">{faq.a}</div>
                </FadeIn>
            ))}
        </div>
      </section>

      {/* Contact Form - Clean & Simple */}
      <section id="contact" className="py-24 border-t border-white/5 bg-slate-900/30 relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
            <p className="text-slate-400">Fill this out, and I'll get back to you within 24 hours.</p>
          </FadeIn>

          <FadeIn className={`${glassPanelClass} p-8 rounded-2xl border border-white/10 shadow-2xl`}>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-400 uppercase">Name</label>
                   <input required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Name" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                   <input required type="email" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">How can I help?</label>
                <textarea required rows="4" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none" placeholder="Tell me about your project idea..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                {isSubmitting ? <><Loader2 className="animate-spin" size={20}/> Sending...</> : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020617] py-10 text-center relative z-10">
          <div className="text-white font-bold text-lg mb-2">Yogesh Bhavsar</div>
          <p className="text-slate-500 text-sm mb-6">Building the web, one pixel at a time.</p>
          <div className="flex justify-center gap-6">
             <a href="https://linkedin.com/in/yogeshbhavsarui" target="_blank" className="text-slate-400 hover:text-white"><Linkedin size={20}/></a>
             <a href="https://github.com/yogeshu" target="_blank" className="text-slate-400 hover:text-white"><Github size={20}/></a>
          </div>
      </footer>
    </div>
  );
};

export default MixPage;