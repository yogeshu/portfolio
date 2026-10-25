
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Users, MessageCircle, Settings, Palette, Code } from 'lucide-react';

const technicalSkills = [
  { name: "JavaScript (ES6+)", level: 90, icon: <Code className="text-yellow-400" /> },
  { name: "React", level: 95, icon: <Code className="text-blue-400" /> },
  { name: "Redux / Redux Toolkit", level: 85, icon: <Code className="text-purple-400" /> },
  { name: "Next.js 13 + ", level: 80, icon: <Code className="text-gray-400" /> },
  { name: "HTML5", level: 95, icon: <Code className="text-orange-500" /> },
  { name: "CSS3 / SASS", level: 90, icon: <Palette className="text-pink-500" /> },
  { name: "TailwindCSS", level: 20, icon: <Palette className="text-teal-400" /> },
  { name: "Git / GitHub", level: 85, icon: <Code className="text-red-500" /> },
  { name: "REST APIs", level: 80, icon: <Settings className="text-green-500" /> },
  { name: "Webpack / Vite", level: 75, icon: <Settings className="text-indigo-500" /> },
];

const softSkills = [
  { name: "Communication", icon: <MessageCircle className="text-sky-500" /> },
  { name: "Teamwork & Collaboration", icon: <Users className="text-emerald-500" /> },
  { name: "Problem-Solving", icon: <Zap className="text-amber-500" /> },
  { name: "Adaptability", icon: <Settings className="text-violet-500" /> },
  { name: "Attention to Detail", icon: <Palette className="text-rose-500" /> },
];
const devTools = [
  { name: "Git & GitHub", icon: <Code className="text-red-500" /> },
 { name: "Bitbucket", icon: <Code className="text-blue-500" /> },
  { name: "Azure DevOps", icon: <Settings className="text-blue-700" /> },
  { name: "Jira", icon: <Settings className="text-indigo-500" /> },
  { name: "Figma", icon: <Palette className="text-pink-400" /> },
  { name: "Postman", icon: <Settings className="text-orange-400" /> },
  { name: "VS Code", icon: <Code className="text-blue-400" /> },
  { name: "Jest", icon: <Code className="text-green-500" /> },
  { name: "Husky", icon: <Settings className="text-gray-500" /> },
  { name: "ESLint", icon: <Settings className="text-yellow-500" /> },
  { name: "Prettier", icon: <Settings className="text-purple-500" /> },
];
const aiTools = [
  { name: "GitHub Copilot", icon: <Settings className="text-green-400" /> },
  { name: "ChatGPT", icon: <MessageCircle className="text-emerald-500" /> },

  { name: "Hugging Face", icon: <Settings className="text-blue-500" /> },
  { name: "Claude 4", icon: <MessageCircle className="text-purple-500" /> },
  { name: "Grammarly", icon: <Palette className="text-pink-500" /> },
  { name: "Google Gemini", icon: <Settings className="text-red-500" /> },

];

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-medium text-foreground/90 flex items-center">
        {React.cloneElement(icon, { className: `${icon.props.className} mr-2 h-5 w-5` })}
        {name}
      </span>
      <span className="text-xs font-medium text-primary">{level}%</span>
    </div>
    <div className="w-full bg-muted rounded-full h-2.5">
      <motion.div
        className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Skills</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          A showcase of my technical proficiency and soft skills, essential for delivering high-quality front-end solutions.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-xl transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <SkillBar name={skill.name} level={skill.level} icon={skill.icon} />
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {softSkills.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center text-foreground/90 text-sm p-3 bg-secondary/30 dark:bg-secondary/20 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  {React.cloneElement(skill.icon, { className: `${skill.icon.props.className} mr-3 h-6 w-6` })}
                  {skill.name}
                </motion.li>
              ))}
            </ul>

          </CardContent>
        </Card>
      </div>  <Card className="shadow-xl transform hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Productivity & Dev Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-4">
            {devTools.map((tool, idx) => (
              <li
                key={tool.name}
                className="flex items-center bg-secondary/30 dark:bg-secondary/20 rounded-lg px-4 py-2 text-foreground/90 text-sm hover:bg-primary/10 transition-colors"
              >
                {React.cloneElement(tool.icon, { className: `${tool.icon.props.className} mr-2 h-5 w-5` })}
                {tool.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>



<Card className="shadow-xl transform hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
  <CardHeader>
    <CardTitle>AI Tools</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="flex flex-wrap gap-4">
      {aiTools.map((tool) => (
        <li
          key={tool.name}
          className="flex items-center bg-secondary/30 dark:bg-secondary/20 rounded-lg px-4 py-2 text-foreground/90 text-sm hover:bg-primary/10 transition-colors"
        >
          {React.cloneElement(tool.icon, { className: `${tool.icon.props.className} mr-2 h-5 w-5` })}
          {tool.name}
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

    </motion.div>
  );
};

export default SkillsPage;
  