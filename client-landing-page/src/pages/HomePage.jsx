import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, AlertTriangle, DollarSign, Rocket, 
  Check, X as XIcon, CheckCircle2, Send, 
  Linkedin, Twitter, Github, Calendar, TrendingUp, BookOpen, 
  Loader2, ExternalLink, GitBranch, Shield, Zap, HelpCircle, Code2, PenTool,
  Plus, Minus, AlertCircle
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { db } from '../firebase'; // Ensure you have created this file as discussed
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

// --- NEW: Custom Toaster Component ---
const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl border shadow-2xl backdrop-blur-md ${
        type === 'success' 
          ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-200' 
          : type === 'error'
          ? 'bg-red-950/80 border-red-500/30 text-red-200'
          : 'bg-indigo-950/80 border-indigo-500/30 text-indigo-200'
      }`}
    >
      {type === 'success' && <CheckCircle2 size={20} className="text-emerald-400" />}
      {type === 'error' && <AlertCircle size={20} className="text-red-400" />}
      {type === 'warning' && <AlertTriangle size={20} className="text-indigo-400" />}
      
      <span className="font-medium text-sm">{message}</span>
      
      <button onClick={onClose} className="ml-4 hover:opacity-70">
        <X size={16} />
      </button>
    </motion.div>
  );
};

// --- Static Data ---
const STATS = [
  { val: "$2.4M+", label: "Revenue Enabled" },
  { val: "100%", label: "Code Ownership" },
  { val: "Top 1%", label: "Performance Scores" },
  { val: "React", label: "Specialist" },
];

const BRAND_LOGOS = [
  { name: "Jio Platforms", style: "font-extrabold tracking-tighter text-xl" },
  { name: "Quest Global", style: "font-bold tracking-widest uppercase text-lg" },
  { name: "MilliPixels", style: "font-semibold tracking-wide text-xl" },
];

const EXPERTISE_CARDS = [
  { icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10", title: "Performance Bottlenecks", desc: "Is your React app re-rendering unnecessarily? Slow dashboards kill user trust.", fix: "Optimized Core Web Vitals" },
  { icon: DollarSign, color: "text-yellow-400", bg: "bg-yellow-500/10", title: "Spaghetti Codebase", desc: "Scaling is impossible when code is fragile. I implement strict architecture & CI/CD.", fix: "Scalable Standards Enforced" },
  { icon: Rocket, color: "text-purple-400", bg: "bg-purple-500/10", title: "Complex Visualization", desc: "Bridging the gap between raw financial data and intuitive UI components.", fix: "Fintech Fluent" }
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

const PROCESS = [
  { 
    title: "Discovery & Strategy", 
    icon: HelpCircle, 
    desc: "We discuss your idea. I listen to what you need and tell you exactly what is possible within your budget." 
  },
  { 
    title: "The Architecture Blueprint", 
    icon: GitBranch, 
    desc: "I don't just start coding. I design a scalable system map, choosing the right database, state management, and infrastructure." 
  },
  { 
    title: "Development & Weekly Builds", 
    icon: Code2, 
    desc: "Development begins. You get a link to view progress every Friday so you're never guessing where we are." 
  },
  { 
    title: "Refinement & QA", 
    icon: PenTool, 
    desc: "We test the app together. I polish the UI, fix bugs, ensure mobile responsiveness, and run performance scores." 
  },
  { 
    title: "Launch & Handoff", 
    icon: Zap, 
    desc: "I deploy your app to the live server and hand over all the code to you. You own everything." 
  }
];

const FAQS = [
  { q: "Are you an agency or a freelancer?", a: "I am a solo specialist. This means you work directly with me—no account managers, no miscommunication, and no overhead costs." },
  { q: "Do you work with agencies or directly with founders?", a: "Both. I often partner with agencies as a specialist architect for complex projects, and I work directly with non-technical founders to build their MVPs correctly from day one." },
  { q: "What is your tech stack?", a: "I specialize in the React ecosystem: Next.js, TypeScript, Tailwind CSS, and Node.js. For databases, I prefer PostgreSQL (Supabase) or MongoDB." },
  { q: "How do you charge?", a: "For audits, it's a fixed fee. For development, I prefer project-based pricing so you know exactly what you're paying. For ongoing advisory, I work on a monthly retainer." },
  { q: "What if I'm not happy with the code?", a: "I work in milestones. You review and approve every stage (Design, Alpha, Beta) before we move forward. You are never stuck with a final product you didn't see coming." },
  { q: "How do we communicate?", a: "I believe in deep work. We'll have a weekly sync call, and for everything else, I use email or Loom videos to keep you updated without endless meetings." },
  { q: "Do you do design?", a: "I am a developer with a good eye for design. If you have a Figma file, I build it perfectly. If not, I can create a clean, modern UI for you." }
];

const ConsultingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  // NEW: Toast State
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // NEW: Spam Protection Refs
  const loadTime = useRef(Date.now());
  const [isBot, setIsBot] = useState(false);

  // --- ANALYTICS TRACKER HELPER ---
  const trackEvent = (action, category, label, value = null) => {
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        });
      }
    } catch (err) {
      console.warn("Tracking Error:", err);
    }
  };

  // Helper to show toast
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 5000);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- FORM HANDLER WITH FIREBASE & SPAM CHECK ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // 1. HONEYPOT CHECK
    const formData = new FormData(e.target);
    const honeypot = formData.get('bot_field'); 
    
    if (honeypot) {
      // Fake success for bots
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        showToast("Inquiry sent successfully!", "success");
        e.target.reset();
      }, 1500);
      return; 
    }

    // 2. SPEED LIMIT CHECK (3 seconds)
    const timeElapsed = Date.now() - loadTime.current;
    if (timeElapsed < 3000) {
       showToast("You're typing incredibly fast! Please wait a moment.", "warning");
       return;
    }
    // 3. Message Should be more than 10 chars
    const message = formData.get('message') || '';
    if (message.length < 10) {
        showToast("Please provide more details in your message.", "warning");
        return;
    }

    setIsSubmitting(true);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service_type: formData.get('service_type'),
      budget: formData.get('budget'),
      message: formData.get('message'),
      timestamp: serverTimestamp(),
    };

    try {
      // Send to Firebase
      await addDoc(collection(db, "contacts"), data);
      
      // Track Event
      trackEvent('form_submit', 'Contact', `Inquiry: ${data.service_type}`, null);
      
      // Show Success Toast
      showToast("Message received! I'll reply within 12 hours.", "success");
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      showToast("Something went wrong. Please email me directly.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const glassPanelClass = "bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-2xl";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative">
      
      {/* Toast Notification Container */}
      <AnimatePresence>
        {toast.show && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(prev => ({ ...prev, show: false }))} 
          />
        )}
      </AnimatePresence>

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 border-b border-white/5 backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={() => trackEvent('click_logo', 'Navigation', 'Home')} className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-shadow duration-300"></span>
            Yogesh Bhavsar
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Expertise', 'Work', 'Process', 'Services'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => trackEvent('click_nav_link', 'Navigation', item)}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
                href="https://app.cal.eu/yogeshbhavsar/discovery-call-project-fit" 
                target="_blank"
                onClick={() => trackEvent('click_cta', 'Navbar', 'Book Discovery Call')}
                className="px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
            >
              Book Discovery Call
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white">
              <X size={32} />
            </button>
            {['Expertise', 'Work', 'Process', 'Services'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => {
                    trackEvent('click_mobile_nav', 'Navigation', item);
                    setIsMobileMenuOpen(false);
                }}
                className="text-3xl font-bold text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
                href="https://app.cal.eu/yogeshbhavsar/discovery-call-project-fit" 
                target="_blank"
                onClick={() => {
                    trackEvent('click_cta', 'Mobile Menu', 'Book Consultation');
                    setIsMobileMenuOpen(false);
                }}
                className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg mt-4"
            >
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
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
            You don't need a bloated agency. You need a <strong> Product Specialist</strong> who can build your web app, dashboard, or MVP with clean code and modern design.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
                href="#contact" 
                onClick={() => trackEvent('click_cta', 'Hero', 'Discuss Project')}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1"
            >
               Discuss Your Project <ArrowRight size={18} />
            </a>
            <a 
                href="#work" 
                onClick={() => trackEvent('click_cta', 'Hero', 'See My Work')}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all border border-slate-700 hover:border-slate-500"
            >
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

      {/* Experience Bar */}
      <section className="border-y border-white/5 bg-slate-950/30 relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 md:mb-0">Previous Experience At</span>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {BRAND_LOGOS.map((logo, i) => (
                    <span key={i} className={`text-slate-400 hover:text-white transition-colors cursor-default ${logo.style}`}>
                        {logo.name}
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

      {/* Works */}
      <section id="work" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineered for Impact</h2>
          <p className="text-slate-400 text-lg">Selected works where architecture drove revenue.</p>
        </FadeIn>

       {projectMix.slice(0, 3).map((project, index) => (
          <FadeIn 
            key={project.id} 
            className={`${glassPanelClass} rounded-2xl p-6 md:p-8 mb-12 group border border-white/5 hover:border-white/10 transition-colors duration-500`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <span className={`${project.badgeBg} ${project.badgeText} px-3 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase w-fit border border-current opacity-80`}>
                    {project.badgeLabel}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                    {project.title}
                    {project.rightLink && (
                       <a 
                        href={project.rightLink} 
                        target="_blank" 
                        onClick={() => trackEvent('click_external_link', 'Case Study', project.title)}
                        className="text-slate-600 hover:text-white transition-colors"
                        >
                            <ExternalLink size={20}/>
                        </a>
                    )}
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4 group/item">
                    <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20 mt-0.5">
                      <XIcon size={14} className="text-rose-400" />
                    </div>
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-widest opacity-60 mb-1">The Challenge</strong>
                      <p className="text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group/item">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20 mt-0.5">
                      <Check size={14} className="text-emerald-400" />
                    </div>
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-widest opacity-60 mb-1">{project.solution}</strong>
                      <p className="text-slate-300 text-sm leading-relaxed">{project.solutionDesc}</p>
                    </div>
                  </div>
                </div>

                {project.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-6 p-5 bg-slate-950/50 rounded-xl border border-white/5">
                    {project.stats.map((m, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">{m.val}</div>
                        <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-1 flex flex-col h-full">
                <div className={`
                  relative flex-1 rounded-xl border border-white/5 overflow-hidden group/card
                  flex flex-col items-center justify-center p-6 text-center
                  min-h-[200px] transition-all duration-500
                  ${project.rightIcon === "book" ? "bg-gradient-to-br from-slate-900 to-slate-950" : "bg-slate-950/30"}
                `}>
                  {project.rightIcon === "trending" && (
                    <>
                      <div className="p-5 rounded-full bg-slate-900 border border-white/5 mb-4 relative z-10 shadow-xl group-hover/card:scale-110 group-hover/card:border-emerald-500/30 transition-all duration-300">
                        <TrendingUp size={48} className="text-slate-600 group-hover/card:text-emerald-400 transition-colors duration-300" />
                      </div>
                      <p className="text-slate-400 text-sm relative z-10 font-medium">{project.rightText}</p>
                    </>
                  )}
                  {project.rightIcon === "book" && (
                    <div className="relative z-10 transform group-hover/card:-translate-y-2 transition-transform duration-500">
                      <BookOpen size={64} className="text-slate-700 group-hover:text-indigo-400 transition-colors duration-500 mx-auto mb-3" />
                      <p className="text-xs text-indigo-300/50 uppercase tracking-widest font-bold">Read Excerpt</p>
                    </div>
                  )}
                </div>

                {project.rightIcon === "book" && (
                  <a 
                    href={project.rightLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackEvent('click_external_link', 'Case Study', project.rightLinkText)}
                    className="mt-4 w-full py-3.5 bg-white text-slate-950 text-center font-bold rounded-xl hover:bg-indigo-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    {project.rightLinkText}
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn className="text-center mt-8">
            <a 
                href="#" 
                onClick={() => trackEvent('click_view_archive', 'Work', 'View Full Archive')}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors border-b border-transparent hover:border-indigo-500 pb-1 text-sm font-medium"
            >
                View Full Project Archive <ArrowRight size={16} />
            </a>
        </FadeIn>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 border-t border-white/5 bg-slate-900/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-2">The Blueprint</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How I Deliver Certainty</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Most projects fail due to poor communication and vague requirements. My 4-step process eliminates that risk.</p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative group">
                {/* Connector Line (Desktop) */}
                {i !== PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-indigo-500/20 to-transparent z-0"></div>
                )}
                
                <div className={`${glassPanelClass} p-6 rounded-xl relative z-10 h-full hover:-translate-y-2 duration-300`}>
                  <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:text-indigo-400 text-slate-400 transition-all shadow-xl">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-t border-white/5 bg-slate-900/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Engagement Models</h2>
            <p className="text-slate-400">Direct access to a Senior Architect. No middlemen, no jargon.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`${glassPanelClass} p-8 rounded-xl flex flex-col relative ${service.popular ? 'border-indigo-500/50 shadow-indigo-900/20' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 px-4 py-1 rounded-full text-[10px] font-bold text-white shadow-lg shadow-indigo-500/40 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`text-xs font-bold font-mono mb-2 ${service.id === 'cto' ? 'text-emerald-400' : 'text-indigo-400'}`}>
                    {service.tag}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{service.type}</div>
                </div>

                <ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
                  {service.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className={`mt-0.5 ${service.id === 'cto' ? 'text-emerald-400' : 'text-indigo-400'}`} /> 
                        <span className="opacity-90">{item}</span>
                      </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  onClick={() => trackEvent('click_service_select', 'Services', service.title)}
                  className={`block w-full py-3.5 text-center font-bold rounded-lg transition-all ${
                    service.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {service.id === 'audit' ? 'Get Audited' : service.id === 'mvp' ? 'Start Your MVP' : 'Apply for Retainer'}
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - REPOSITIONED ABOVE CONTACT FORM */}
      <section className="py-24 max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-slate-400">Everything you need to know before booking a call.</p>
        </FadeIn>
        
        <div className="space-y-4">
            {FAQS.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05} className={`${glassPanelClass} rounded-xl overflow-hidden`}>
                    <button 
                        onClick={() => {
                            setOpenFaq(openFaq === i ? null : i);
                            if(openFaq !== i) trackEvent('toggle_faq', 'FAQ', `Open: ${faq.q}`);
                        }}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                        <span className="font-bold text-slate-200">{faq.q}</span>
                        {openFaq === i ? <Minus size={20} className="text-indigo-400"/> : <Plus size={20} className="text-slate-500"/>}
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </FadeIn>
            ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 border-t border-white/5 bg-slate-900/30 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Scalable</h2>
            <p className="text-slate-400">Tell me about your project. I usually respond within 12 hours.</p>
          </FadeIn>

          <FadeIn className={`${glassPanelClass} p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl`}>
            
            <div className="mb-8 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
               <div className="flex items-center gap-4">
                   <div className="bg-indigo-600 p-3 rounded-full text-white shadow-lg shadow-indigo-500/30">
                     <Calendar size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-white text-lg">Skip the email tag.</h3>
                     <p className="text-sm text-indigo-300">Book a 15-min intro call directly on my calendar.</p>
                   </div>
               </div>
               <a 
                href="https://app.cal.eu/yogeshbhavsar/discovery-call-project-fit" 
                target="_blank"
                onClick={() => trackEvent('click_cta', 'Contact', 'Book Calendar')}
                className="px-6 py-3 bg-white text-indigo-950 font-bold rounded-lg hover:bg-indigo-50 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Book Time Now
               </a>
            </div>

            <div className="relative flex py-6 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink-0 mx-4 text-slate-500 text-xs uppercase font-bold tracking-widest">Or send a message</span>
                <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 relative">
              
              {/* --- HONEYPOT FIELD (SPAM PROTECTION) --- */}
              <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}>
                  <label htmlFor="bot_field">Website</label>
                  <input type="text" name="bot_field" id="bot_field" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Your Name</label>
                  <input type="text" name="name" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-700" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Work Email</label>
                  <input type="email" name="email" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-700" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Project Type</label>
                <select name="service_type" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all appearance-none">
                  <option value="">Select an option...</option>
                  <option value="audit">Code Audit & Consultation</option>
                  <option value="mvp">MVP / New Product Build / Website</option>
                  <option value="retainer">Ongoing Technical Advisory</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Estimated Budget</label>
                <select name="budget" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all appearance-none">
                  <option value="">Select your budget range...</option>
                  <option value="under_5k">Under $5,000</option>
                  <option value="5k_15k">$5,000 - $15,000</option>
                  <option value="15k_30k">$15,000 - $30,000</option>
                  <option value="30k_plus">Over $30,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Project Details</label>
                <textarea name="message" required rows="5" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-700" placeholder="Briefly describe your project, timeline, and current tech stack..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                    <><Loader2 className="animate-spin" size={20}/> Sending...</>
                ) : (
                    <>Send Inquiry <Send size={18} /></>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020617] pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
            <div className="text-center md:text-left">
              <a href="#" className="text-2xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Yogesh Bhavsar
              </a>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Technical Partner for businesses that value speed, scalability, and revenue.
              </p>
            </div>
            
            <div className="flex gap-6">
               {[
                   { icon: Linkedin, link: "https://linkedin.com/in/yogeshbhavsarui", name: "LinkedIn" },
                   { icon: Twitter, link: "#", name: "Twitter" },
                   { icon: Github, link: "https://github.com/yogeshu", name: "GitHub" }
               ].map((s, i) => (
                   <a 
                    key={i} 
                    href={s.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackEvent('click_social', 'Footer', s.name)}
                    className="p-3 rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
                    >
                       <s.icon size={20} />
                   </a>
               ))}
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
            <div>&copy; 2026 Yogesh Bhavsar. All rights reserved.</div>
            <a href="https://yogeshbhavsar.com" className="hover:text-indigo-400 transition-colors">← Back to Main Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultingPage;