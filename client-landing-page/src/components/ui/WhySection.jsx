import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';

const reasons = [
  {
    title: "Architecture That Survives Growth",
    desc: "Most MVPs crumble under traffic. I build systems designed to handle 10x scale from Day 1, using static-first principles and edge caching.",
    icon: <Cpu size={32} />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    gradient: "from-blue-500/20 to-transparent",
    tag: "Scalability"
  },
  {
    title: "Killing Technical Debt Early",
    desc: "Cheap code is expensive later. I enforce strict patterns, testing (Jest), and CI/CD pipelines so your team doesn't spend 50% of their time fixing bugs.",
    icon: <ShieldCheck size={32} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    gradient: "from-emerald-500/20 to-transparent",
    tag: "Cost Efficiency"
  },
  {
    title: "Code That Prints Revenue",
    desc: "I don't care about 'clean code' if it doesn't convert. I prioritize Core Web Vitals and UX speed because milliseconds equal money.",
    icon: <TrendingUp size={32} />,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    gradient: "from-purple-500/20 to-transparent",
    tag: "Business ROI"
  }
];

const WhyMeSection = () => {
  return (
    <section id="why-me" className="py-24 border-t border-white/5 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Value Proposition
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Smart Teams <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Bring Me In.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed max-w-2xl"
          >
            Most products don't fail because of missing features. 
            They fail because of <span className="text-white font-medium">poor technical decisions</span> made too early. 
            I prevent the expensive mistakes.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative bg-slate-900/40 backdrop-blur-md border border-white/10 
              rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${item.border}`}
            >
              {/* Hover Gradient Background */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
              />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color} ring-1 ring-white/5`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-950/50 border border-white/5 ${item.color}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>

                {/* Micro Interaction */}
                <div className={`flex items-center text-xs font-bold uppercase tracking-wider ${item.color} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                  Learn More <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;