import { useState } from "react";

import {
  Mail,
  Phone,
  GitFork,
  MapPin,
  Briefcase,
  Code2,
  GraduationCap,
  ChevronRight,
  Terminal,
  Database,
  Server,
  Cpu,
  Globe,
  Rocket,
} from "lucide-react";

import heroImage from "./assets/hero.png";
import brandLogo from "./assets/logo.svg";
import badgeLogo from "./assets/logo-2.svg";
import ContactForm from "./components/ContactForm";


const App = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const skills = {
    backend: [
      "Java (8,11,17,21)",
      "Spring Boot Ecosystem",
      "Golang",
      "Python",
      "FastAPI",
      "Apache Camel",
      "GraphQL",
      "OpenAPI3",
      "Frappe ERPNext",
    ],
    frontend: [
      "HTML5 & CSS3",
      "Svelte",
      "Astro",
      "Angular",
      "RxJS",
      "Javascript/Typescript",
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "MongoDB",
      "MariaDB",
      "SQLite",
      "DuckDB",
    ],
    architecture: [
      "Domain Driven Design",
      "Microservices",
      "Clean Architecture",
      "Reactive Programming",
    ],
    tools: [
      "Docker",
      "Jenkins",
      "Dapr",
      "HashiCorp Vault",
      "Git",
      "IntelliJ IDEA",
      "Tomcat/Undertow/Netty",
      "Telegram",
      "AWS services",
    ],
  };

  const experience = [
    {
      role: "Entrepreneur / Co-founder",
      company: "ShreshtaSMG",
      period: "June 2025 - Present",
      description:
        "Building custom cloud-based software services and SaaS products to help businesses manage customer transactions.",
      highlights: [
        "Developed a CRM application using Golang, SQLite, and Svelte.",
        "Built a domain-specific Chatbot integrating open-source LLMs to generate image captions.",
        "Developed cloud-based accounting and invoicing software utilizing Python and MariaDB.",
        "Created an automated backup management system for AWS S3 using a Golang/MariaDB backend and terminal client.",
        "Implemented e-commerce plugins for GST handling and custom QR code payments.",
        "Built high-performance APIs with FastAPI and customized enterprise workflows using Frappe ERPNext.",
      ],
      tech: [
        "Golang",
        "Python",
        "FastAPI",
        "Frappe ERPNext",
        "Svelte",
        "MariaDB",
        "LLMs",
        "AWS S3",
      ],
    },
    {
      role: "Senior Developer / Lead",
      company: "HCL Technologies",
      period: "Sep 2020 - June 2025",
      description:
        "Led development of core corporate systems for Prudential using cutting-edge architectural patterns.",
      highlights: [
        "Designed Prudential systems using Clean Architecture, DDD, and Java 21 with Spring Boot.",
        "Deployed scalable microservices using DAPR sidecars for secure inter-service communication and token enhancement.",
        "Integrated major Payment Gateways (CyberSource, IPAY88, ABAPay, Acleda).",
        "Engineered a high-performance Python migration pipeline that successfully transferred 800K+ corporate policies.",
        "Mentored new joiners and managed DevOps and production deployment activities.",
      ],
      tech: [
        "Java 21",
        "Spring Boot",
        "Dapr",
        "Python",
        "Microservices",
        "Apache Camel",
      ],
    },
    {
      role: "Software Engineer",
      company: "ViewMyRecords / SVTPL",
      period: "Mar 2018 - Sep 2020",
      description:
        "Full-stack development for enterprise document management and administrative systems.",
      highlights: [
        "Developed REST APIs and UIs using Spring, Alfresco, and PostgresSQL for ViewMyRecords.",
        "Built bulk upload/indexing desktop applications utilizing Spring Boot Batch.",
        "Migrated client-facing apps to Angular with RxJS for high-performance reactive interfaces (Pistaceo & Pistaceo Admin).",
      ],
      tech: ["Angular", "Spring Boot", "RxJS", "PostgreSQL", "Alfresco"],
    },
    {
      role: "Member Technical Staff",
      company: "MAHAT CONSULTING",
      period: "Dec 2014 - Dec 2017",
      description:
        "Architected and developed diverse products ranging from event management to e-commerce and assessment tools.",
      highlights: [
        'Designed microservices architecture for "EventChai" using Spring Boot, Angular 4, and MongoDB.',
        "Built custom e-commerce platforms and automated Aptitude Test systems.",
        'Developed RESTful APIs for "Kona Coach" using Groovy on Grails.',
      ],
      tech: ["Spring Boot", "Angular", "MongoDB", "MySQL", "Groovy on Grails"],
    },
  ];

  const projects = [
    {
      title: "Prudential Core Policy System",
      description:
        "A massive scale corporate insurance platform utilizing Clean Architecture, Domain Driven Design, and DAPR sidecars for multi-region microservices.",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "AI-Powered Business CRM",
      description:
        "A modern CRM featuring a custom LLM-based chatbot for image captioning and domain-specific query resolution, built with FastAPI and Svelte.",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Cloud Accounting & Invoicing",
      description:
        "Python and MariaDB based multi-tenant system handling customer-specific invoices and taxation (GST) plugins.",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "High-Volume Policy Migrator",
      description:
        "Data engineering pipeline written in Python that successfully migrated over 800,000 complex insurance policies between disparate 3rd party systems.",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
      {/* Header / Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-800/60 bg-slate-900/50 pt-20 pb-16">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid gap-10 xl:grid-cols-[1.45fr_0.95fr] xl:items-end">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-3xl border border-emerald-500/20 bg-slate-950 shadow-xl">
                    <img
                      src={brandLogo}
                      alt="Brand mark"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-emerald-400 font-semibold">
                      Senior Full-Stack Developer
                    </p>
                    <p className="text-sm text-slate-400">
                      Cloud-native systems, microservices, AI workflows
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                  <Rocket className="w-4 h-4" /> Available for new opportunities
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                  Chinmai D Bharadwaj
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-400 font-light flex items-center gap-3">
                  Senior Full-Stack Developer & Entrepreneur
                </h2>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
                <a
                  href="mailto:chinmai.bharadwaj@ymail.com"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4" /> chinmai.bharadwaj@ymail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 7975700560
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Shimoga, Karnataka, India
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/whiteblizzard9248"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-slate-600"
                >
                  <GitFork className="w-4 h-4" /> @whiteblizzard9248
                </a>
                <a
                  href="https://github.com/shreshtadev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-slate-600"
                >
                  <GitFork className="w-4 h-4" /> @shreshtadev
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-950 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Illustration of modern engineering workflow"
                  className="w-full h-full object-cover animate-float"
                />
              </div>
              <div className="absolute -top-3 right-3 flex items-center justify-center w-20 h-20 rounded-3xl border border-emerald-500/20 bg-slate-900/90 shadow-xl animate-pulse-slow">
                <img
                  src={badgeLogo}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-400 font-semibold">
                  Featured expertise
                </p>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Microservices, AI integrations, and enterprise-grade cloud
                  architecture built for scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Skills & Education */}
        <div className="lg:col-span-1 space-y-12">
          {/* Skills Section */}
          <section>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <Code2 className="w-6 h-6 text-emerald-500" /> Technical Arsenal
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-md text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-emerald-500" /> Education
            </h3>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="text-white font-medium">
                B.E. in Mechanical Engineering
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Government Engineering College, Hassan
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Affiliated to VTU Belgaum
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Experience & Projects */}
        <div className="lg:col-span-2 space-y-12">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-slate-800 pb-px">
            <button
              onClick={() => setActiveTab("experience")}
              className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === "experience" ? "text-emerald-400" : "text-slate-500 hover:text-slate-300"}`}
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Experience
              </span>
              {activeTab === "experience" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-t-full"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === "projects" ? "text-emerald-400" : "text-slate-500 hover:text-slate-300"}`}
            >
              <span className="flex items-center gap-2">
                <Globe className="w-5 h-5" /> Key Highlights
              </span>
              {activeTab === "projects" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-t-full"></span>
              )}
            </button>
          </div>

          {/* Experience Content */}
          {activeTab === "experience" && (
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-emerald-500/50 before:to-transparent">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-slate-950 bg-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(16,185,129,0.1)] z-10 ml-0.75 md:ml-0"></div>

                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors shadow-sm hover:shadow-emerald-500/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">
                        {job.role}
                      </h4>
                      <span className="text-emerald-400 text-sm font-medium font-mono bg-emerald-500/10 px-2 py-1 rounded">
                        {job.period}
                      </span>
                    </div>
                    <h5 className="text-lg text-slate-400 mb-4">
                      {job.company}
                    </h5>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {job.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-400 flex items-start gap-2"
                        >
                          <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                      {job.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2 py-1 bg-slate-950 border border-slate-800 text-slate-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Content */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <ContactForm />

      {/* Footer */}

      <footer className="border-t border-slate-800/60 bg-slate-950 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Chinmai D Bharadwaj. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/whiteblizzard9248"
              className="hover:text-emerald-400 transition-colors"
            >
              WhiteBlizzard
            </a>
            <a
              href="https://github.com/shreshtadev"
              className="hover:text-emerald-400 transition-colors"
            >
              ShreshtaDEV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
