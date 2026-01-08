import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Code2, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import YogeshPic from '@/assets/YogeshBhavsar.png';

const HomePage = () => {
  // Animation variants for staggering elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* 1. ENGINEERING BACKGROUND GRID */}
      {/* A subtle grid pattern that signals 'Architecture' */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(var(--primary-rgb),0.15),transparent)]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10"
      >
        
        {/* 2. AVATAR WITH STATUS INDICATOR */}
        <motion.div variants={itemVariants} className="relative mb-8 group">
          {/* Animated Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <Avatar className="w-40 h-40 border-4 border-background shadow-2xl relative">
            <AvatarImage src={YogeshPic} alt="Yogesh Bhavsar" className="object-cover" />
            <AvatarFallback className="bg-muted text-4xl font-bold text-muted-foreground">YB</AvatarFallback>
          </Avatar>

          {/* Seniority Badge - Floating */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -bottom-2 -right-2 bg-background border border-border p-2 rounded-full shadow-lg"
          >
            <div className="bg-green-500 w-4 h-4 rounded-full animate-pulse" title="Available for work" />
          </motion.div>
        </motion.div>

        {/* 3. SOCIAL PROOF BADGE */}
        {/* <motion.div variants={itemVariants} className="mb-6">
          <Badge variant="secondary" className="px-4 py-1 text-sm border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-default">
            <BookOpen className="w-3 h-3 mr-2" />
            Author: "Relative Strength With Technical Analysis"
          </Badge>
        </motion.div> */}

        {/* 4. HEADLINE - POSITIONING */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Senior Frontend <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
           Consultant
          </span>
        </motion.h1>

        {/* 5. SUBTEXT - VALUE PROPOSITION */}
        <motion.p 
          variants={itemVariants}
          className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          I help companies and Startups build 
          <span className="text-foreground font-semibold"> pixel-perfect</span>, 
          <span className="text-foreground font-semibold"> high-performance </span> 
          React/ Web applications. 
          <span className="block mt-2 text-sm opacity-80">
            Specializing in React.js, Next.js, Architecture, Accessibility and Data Visualization.
          </span>
        </motion.p>

        {/* 6. CALL TO ACTION - DUAL PATH */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto text-lg h-12 px-8 group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Link to="/projects">
              View Case Studies 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8 border-2 hover:bg-muted/50">
            <a href="/Yogesh_Bhavsar-React-Next_Developer.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* 7. TECH STACK STRIP - VISUAL AUTHORITY */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border/40 w-full max-w-4xl"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 font-semibold">Powering Applications With</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Tech Icons - Using simple SVGs or Images for logos works best here. 
                 Using Lucide icons as placeholders for the 'feel' */}
             
             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-xs font-medium">React</span>
             </div>

             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                  <Terminal className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs font-medium">Next.js</span>
             </div>

             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-purple-500/10 transition-colors">
                  <Cpu className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-xs font-medium">CSS</span>
             </div>

             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-medium">TypeScript</span>
             </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-yellow-500/10 transition-colors">
                  <Code2 className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="text-xs font-medium">JavaScript</span>
             </div>
          </div>
        </motion.div>

        {/* 8. FLOATING SOCIALS */}
        <motion.div 
          variants={itemVariants}
          className="fixed left-6 bottom-0 hidden xl:flex flex-col gap-4 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-border after:mt-4"
        >
          <a href="https://github.com/yogeshu" target="_blank" rel="noopener noreferrer" className="p-2 hover:-translate-y-1 transition-transform text-muted-foreground hover:text-primary">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yogeshbhavsarui" target="_blank" rel="noopener noreferrer" className="p-2 hover:-translate-y-1 transition-transform text-muted-foreground hover:text-blue-600">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HomePage;