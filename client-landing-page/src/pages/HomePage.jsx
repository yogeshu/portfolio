import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  AlertTriangle, 
  DollarSign, 
  Rocket, 
  Check, 
  X as XIcon, 
  CheckCircle2, 
  Star, 
  Quote, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  Calendar,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import WhyMeSection from '../components/ui/WhySection';
import { projectMix} from '../lib/caseConstant';

// Animation Wrapper for "Reveal" effect
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ConsultingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Common Styles
  const glassPanelClass = "bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 hover:bg-slate-900/60 transition-all duration-300 shadow-xl";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden relative">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full bg-[#020617] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Yogesh Bhavsar
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Expertise', 'Work', 'Services'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#contact" className="px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 rounded-lg hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/20">
              Book Discovery Call
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 animate-in slide-in-from-right duration-300">
          {['Expertise', 'Work', 'Services'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-indigo-500 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-white text-slate-950 font-bold rounded-lg"
          >
            Book Consultation
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-40 pb-16 px-6 max-w-7xl mx-auto z-10">
        <FadeIn className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Senior Architect | Author | Mentor
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            I fix the technical problems  <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              that are costing you money.
            </span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            I don't just write code. I create your online presense, I architect <strong>high-performance systems</strong> for Fintech and Enterprise scale. 
            Trusted by <span className="text-white">Jio</span>, <span className="text-white">MilliPixels</span>, and <span className="text-white">Quest Global</span> to handle millions of data points.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:-translate-y-1">
              Schedule Technical Audit <ArrowRight size={18} />
            </a>
            <a href="#work" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all border border-slate-700 hover:border-slate-600">
              View Architecture Work
            </a>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-white/5">
            {[
              { val: "$2.4M+", label: "Revenue Enabled" },
              { val: "87% Avg", label: "Performance Boost" },
              { val: "0 Failures", label: "Product Launches" },
              { val: "24-48h", label: "First Response" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-4 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                 <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                 <div className="text-sm text-slate-500 font-mono">{stat.label}</div>
              </FadeIn>
            ))}
        </div>
      </header>
<WhyMeSection/>

      {/* Pain Points */}
      <section id="expertise" className="py-24 border-t border-white/5 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Hire a "Senior Architect"?</h2>
            <p className="text-slate-400">Because junior developers build features. Architects build assets.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <AlertTriangle size={32} className="text-red-400" />, bg: "bg-red-500/10", title: "Performance Bottlenecks", desc: "Is your React app re-rendering unnecessarily? Slow dashboards kill user trust (especially in Fintech).", fix: "I optimize Core Web Vitals" },
              { icon: <DollarSign size={32} className="text-yellow-400" />, bg: "bg-yellow-500/10", title: "Spaghetti Codebase", desc: "Scaling is impossible when your code is fragile. I implement strict architecture, testing (Jest), and CI/CD.", fix: "I enforce Scalable Standards" },
              { icon: <Rocket size={32} className="text-purple-400" />, bg: "bg-purple-500/10", title: "Complex Data Visualization", desc: "As the author of 'Relative Strength With Technical Analysis', I bridge the gap between financial logic and UI.", fix: "I speak 'Fintech' fluently" }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`${glassPanelClass} p-6 rounded-xl`}>
                <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{card.desc}</p>
                <div className="text-xs font-mono text-indigo-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {card.fix}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Engineered for Impact</h2>
          <p className="text-slate-400">Real projects where architecture drove revenue.</p>
        </FadeIn>

       {projectMix.map((project) => (
  <FadeIn 
    key={project.id} 
    className={`${glassPanelClass} rounded-2xl p-6 md:p-8 ${project.mb} group border border-white/5 hover:border-white/10 transition-colors duration-500`}
  >
    {/* Grid Layout Change: 
      1. 'items-stretch' ensures both columns are the same height.
      2. grid-cols-1 on mobile, 3 columns on desktop (2 for text, 1 for visual) 
    */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      
      {/* LEFT COLUMN: Content (Spans 2 columns) */}
      <div className="md:col-span-2 flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <span className={`${project.badgeBg} ${project.badgeText} px-3 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase w-fit`}>
            {project.badgeLabel}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="space-y-5 mb-8">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20">
              <XIcon size={14} className="text-rose-400" />
            </div>
            <div>
              <strong className="block text-white text-sm uppercase tracking-wide opacity-80 mb-1">The Challenge</strong>
              <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
              <Check size={14} className="text-emerald-400" />
            </div>
            <div>
              <strong className="block text-white text-sm uppercase tracking-wide opacity-80 mb-1">{project.solution}</strong>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solutionDesc}</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-950/30 rounded-xl border border-white/5">
            {project.stats.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-0.5">{m.val}</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-full text-xs text-slate-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Visual/Action Area (Spans 1 column) */}
      <div className="md:col-span-1 flex flex-col h-full">
        {/* This container uses 'flex-1'. 
           It will stretch to fill ALL available vertical empty space.
        */}
        <div className={`
          relative flex-1 rounded-xl border border-white/5 overflow-hidden group/card
          flex flex-col items-center justify-center p-6 text-center
          ${project.rightIcon === "book" ? "bg-slate-950" : "bg-slate-950/30"}
        `}>
          
          {/* Ambient Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Icon Logic */}
          {project.rightIcon === "trending" && (
            <>
              <div className="p-4 rounded-full bg-slate-900 border border-white/5 mb-4 relative z-10 group-hover/card:scale-110 transition-transform duration-300">
                <TrendingUp size={48} className="text-slate-600 group-hover/card:text-emerald-400 transition-colors duration-300" />
              </div>
              <p className="text-slate-400 text-sm relative z-10">{project.rightText}</p>
            </>
          )}

          {project.rightIcon === "book" && (
            <div className="relative z-10 transform group-hover/card:-translate-y-1 transition-transform duration-500">
              <BookOpen size={64} className="text-slate-700 group-hover:text-emerald-400 transition-colors duration-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Read Excerpt</p>
            </div>
          )}
        </div>

        {/* Button (If 'book', render button outside the flexible container so it stays at bottom) */}
        {project.rightIcon === "book" && (
          <a 
            href={project.rightLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 w-full py-3 bg-white text-black text-center font-bold rounded-xl hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm shadow-lg shadow-white/5"
          >
            {project.rightLinkText}
          </a>
        )}
      </div>

    </div>
  </FadeIn>
))}
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-white/5 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Engagement Models</h2>
            <p className="text-slate-400">Direct access to a Senior Architect. No middlemen.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Audit */}
            <FadeIn className={`${glassPanelClass} p-8 rounded-xl`}>
              <div className="mb-6">
                <div className="text-sm font-mono text-indigo-400 mb-2">DIAGNOSTIC</div>
                <h3 className="text-2xl font-bold text-white mb-2">Performance Audit</h3>
                <div className="text-3xl font-bold text-white mb-1">$497</div>
                <div className="text-xs text-slate-500">Fixed Price</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {['React Render Analysis', 'Core Web Vitals Report', 'Security Scan', '48-Hour Turnaround'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-400 mt-0.5" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="block w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-center font-semibold rounded-lg transition-all border border-slate-700">Get Audited</a>
            </FadeIn>

            {/* MVP */}
            <FadeIn delay={0.1} className={`${glassPanelClass} p-8 rounded-xl border-2 border-indigo-500 relative`}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg shadow-indigo-500/40">MOST POPULAR</div>
              <div className="mb-6">
                <div className="text-sm font-mono text-indigo-400 mb-2">EXECUTION</div>
                <h3 className="text-2xl font-bold text-white mb-2">MVP Development</h3>
                <div className="text-3xl font-bold text-white mb-1">$5K - $15K</div>
                <div className="text-xs text-slate-500">Project Based</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {['Next.js SaaS Architecture', 'Database & Auth Setup', 'Payment Integration', '4-6 Week Delivery'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-400 mt-0.5" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="block w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/20">Start Your MVP</a>
            </FadeIn>

            {/* Retainer */}
            <FadeIn delay={0.2} className={`${glassPanelClass} p-8 rounded-xl`}>
              <div className="mb-6">
                <div className="text-sm font-mono text-emerald-400 mb-2">PARTNERSHIP</div>
                <h3 className="text-2xl font-bold text-white mb-2">Fractional CTO</h3>
                <div className="text-3xl font-bold text-white mb-1">Custom</div>
                <div className="text-xs text-slate-500">Monthly Retainer</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {['Architecture Strategy', 'Reviewing Junior Code', 'Hiring Interviews', 'Tech Roadmap'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-400 mt-0.5" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="block w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-center font-semibold rounded-lg transition-all border border-slate-700">Apply for Retainer</a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 border-t border-white/5 bg-slate-900/30 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Scalable</h2>
            <p className="text-slate-400">Tell me about your project. I usually respond within 12 hours.</p>
          </FadeIn>

          <FadeIn className={`${glassPanelClass} p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl`}>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="Consulting Inquiry - Yogesh Bhavsar" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name *</label>
                  <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Work Email *</label>
                  <input type="email" name="email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Project Type *</label>
                <select name="service_type" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                  <option value="">Select an option...</option>
                  <option value="audit">Technical Audit ($497)</option>
                  <option value="mvp">New SaaS/MVP Build ($5k+)</option>
                  <option value="cto">Fractional CTO / Retainer</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Project Details</label>
                <textarea name="message" required rows="5" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-slate-600" placeholder="Briefly describe your project, timeline, and current tech stack..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                Send Inquiry <Send size={18} />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-4">Prefer to talk first?</p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700 hover:border-slate-500">
                <Calendar size={18} /> Book a Free Call (Cal.com)
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proof / Testimonials */}
      <section id="proof" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5 relative z-10">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">What Clients Say</h2>
          <p className="text-slate-400">Real feedback from real business owners.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
           {[
             { name: "Arjun Mehta", role: "Founder, EdTech Startup", initial: "A", text: "Yogesh took our idea from Figma mockups to a working product in 4 weeks. The performance is incredible - our bounce rate dropped by 40%. Worth every rupee." },
             { name: "Priya Sharma", role: "CEO, Healthcare SaaS", initial: "P", text: "We were stuck with a half-built app and a developer who vanished. Yogesh cleaned up the mess, finished the project, and it's been running flawlessly for 8 months." }
           ].map((t, i) => (
             <FadeIn key={i} delay={i * 0.1} className={`${glassPanelClass} p-6 rounded-xl`}>
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold">{t.initial}</div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
             </FadeIn>
           ))}
        </div>

        <FadeIn className="mt-12 bg-slate-900/40 border border-white/5 p-8 rounded-xl text-center">
           <Quote size={32} className="text-indigo-500 mb-4 mx-auto" />
           <p className="text-lg text-slate-300 mb-6 italic max-w-2xl mx-auto">
             "Most developers either understand business OR they understand code. Yogesh gets both. He asks about conversion rates before touching CSS. That's the difference."
           </p>
           <div className="inline-flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">R</div>
             <div className="text-left">
               <div className="font-semibold text-white">Rahul Verma</div>
               <div className="text-xs text-slate-500">Serial Entrepreneur, 3 Exits</div>
             </div>
           </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020617] pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Yogesh Bhavsar
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                Technical Partner for businesses that value speed, scalability, and revenue. Let's build systems that work as hard as you do.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a href="https://linkedin.com/in/yogeshbhavsarui" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                <a href="https://github.com/yogeshu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
              </div>
            </div>

            {/* Links Columns (Simplified for React) */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {['Technical Audit', 'MVP Development', 'Code Rescue', 'Fractional CTO'].map(link => (
                  <li key={link}><a href="#contact" className="hover:text-indigo-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
             <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {['Privacy Policy', 'Terms of Service'].map(link => (
                  <li key={link}><a href="#" className="hover:text-indigo-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-slate-500">&copy; 2026 Yogesh Bhavsar. All rights reserved.</div>
            <div className="text-xs text-slate-600 font-mono">
              <a href="https://yogeshbhavsar.com" className="hover:text-indigo-400">← Back to Main Portfolio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultingPage;