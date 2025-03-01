
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  
  const projectsData = [
    {
      id: 1,
      title: "Project Title 1",
      category: "web",
      description: "This is a placeholder for your project description. Write about what the project is, the technologies used, and your role in it.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 2,
      title: "Project Title 2",
      category: "app",
      description: "This is a placeholder for your project description. Write about what the project is, the technologies used, and your role in it.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Project Title 3",
      category: "design",
      description: "This is a placeholder for your project description. Write about what the project is, the technologies used, and your role in it.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 4,
      title: "Project Title 4",
      category: "web",
      description: "This is a placeholder for your project description. Write about what the project is, the technologies used, and your role in it.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 5,
      title: "Project Title 5",
      category: "app",
      description: "This is a placeholder for your project description. Write about what the project is, the technologies used, and your role in it.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 6,
      title: "Project Title 6",
      category: "design",
      description: "This is a placeholder for your project description. Write about what the project is, the technologies used, and your role in it.",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my work, projects, and contributions.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "web"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("app")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "app"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              App
            </button>
            <button
              onClick={() => setFilter("design")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "design"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Design
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 image-placeholder"></div>
                  {/* Project image will replace this placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-75 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary link-underline"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
