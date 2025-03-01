
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: "Skill 1", level: 90 },
    { name: "Skill 2", level: 85 },
    { name: "Skill 3", level: 80 },
    { name: "Skill 4", level: 75 },
    { name: "Skill 5", level: 70 },
    { name: "Skill 6", level: 65 },
  ];

  const experiences = [
    {
      position: "Position Title",
      company: "Company Name",
      duration: "Jan 2020 - Present",
      description: "This is a placeholder for your job description. Describe your responsibilities and achievements in this role.",
    },
    {
      position: "Position Title",
      company: "Company Name",
      duration: "Jan 2018 - Dec 2019",
      description: "This is a placeholder for your job description. Describe your responsibilities and achievements in this role.",
    },
    {
      position: "Position Title",
      company: "Company Name",
      duration: "Jan 2016 - Dec 2017",
      description: "This is a placeholder for your job description. Describe your responsibilities and achievements in this role.",
    },
  ];

  const education = [
    {
      degree: "Computer Science and Engineering",
      institution: "Lehigh Univeristy",
      duration: "2023 - 2027",
      description: "This is a placeholder for your education description. Include your major, achievements, and any relevant information.",
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know more about me, my background, and what I do.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
                <div className="absolute inset-0 image-placeholder"></div>
                {/* Your profile image will replace this placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight">Who I Am</h2>
              <p className="text-muted-foreground">
                This is a placeholder for your personal bio. Write about yourself, your background, your interests, and what drives you. This is your opportunity to let visitors know who you are beyond your professional skills.
              </p>
              <p className="text-muted-foreground">
                This is another paragraph about yourself. You can expand on your interests, hobbies, or personal philosophy here. Help visitors connect with you on a more personal level.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/chris-posivak-954a96298" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the skills I've acquired over the years. This section highlights my technical abilities and expertise.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
                <span className="text-sm text-muted-foreground mt-2 inline-block">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and roles I've held in different organizations.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                  <span className="text-primary font-medium">{edu.institution}</span>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{edu.duration}</span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
