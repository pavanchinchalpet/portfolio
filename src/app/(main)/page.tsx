import React from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  BookOpen,
} from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pavan Kumar Chinchalpet",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer building scalable web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, and modern cloud tooling.",
  image: "/images/passport size photo.jpg",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  email: "mailto:pavanchinchalpet@gmail.com",
  telephone: "+91 7032832362",
  sameAs: [
    "https://github.com/pavanchinchalpet",
    "https://linkedin.com/in/pavanchinchalpet",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "India",
  },
};

function PortfolioLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 shadow-lg shadow-blue-500/20 ring-1 ring-white/15">
        <span className="text-lg font-extrabold tracking-tight text-white">PC</span>
      </div>
      <div>
        <p className="text-sm font-semibold tracking-[0.24em] text-blue-300">PORTFOLIO</p>
        <p className="text-sm text-white/90 sm:text-base">Pavan Kumar Chinchalpet</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8">
          <a href="#home" aria-label="Go to the homepage hero section">
            <PortfolioLogo />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition-colors hover:text-blue-300">About</a>
            <a href="#experience" className="transition-colors hover:text-blue-300">Experience</a>
            <a href="#projects" className="transition-colors hover:text-blue-300">Projects</a>
            <a href="#contact" className="transition-colors hover:text-blue-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left">
            <p className="text-sm sm:text-base text-blue-400 font-medium">
              Hi, I'm Pavan Kumar Chinchalpet
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-tight sm:leading-snug tracking-tight gradient-text max-w-xl mx-auto lg:mx-0">
              Full-Stack Developer building high-performance, scalable web applications
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
              Architecting enterprise-grade systems with optimized APIs, scalable architecture, and production-ready deployments.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="skill-badge badge-blue text-xs sm:text-sm">🚀 500+ Users</span>
              <span className="skill-badge badge-green text-xs sm:text-sm">⚡ 3.7s → 0.5s</span>
              <span className="skill-badge badge-purple text-xs sm:text-sm">📊 70% Load Reduction</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <a href="#projects" className="btn btn-secondary">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Projects
              </a>
              <a
                href="/images/Pavan-Chinchalpet_Full_Stack_Developer.pdf"
                target="_blank"
                className="btn btn-outline"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Resume
              </a>
              <a
                href="mailto:pavanchinchalpet@gmail.com"
                className="btn btn-outline"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-xl mx-auto lg:mx-0">
              {[
                ["500+", "Users"],
                ["70%", "Load Reduced"],
                ["0.5s", "API Time"],
                ["2+", "Years"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="glass-effect rounded-lg p-2 sm:p-3 text-center"
                >
                  <div className="text-base sm:text-lg font-semibold text-blue-400">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[340px]">
              <img
                src="/images/passport size photo.jpg"
                alt="Pavan Kumar"
                className="rounded-full border-4 border-blue-400 shadow-2xl object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">About Me</h2>
        
        {/* About Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
I’m a Full-Stack Developer specializing in building high-performance, scalable web applications that solve real-world problems. I have hands-on experience architecting and delivering production-ready systems, from robust backend APIs to clean, responsive frontends.

My work focuses on performance optimization, scalable system design, and clean architecture. I’ve improved application load times from seconds to sub-second responses, reduced database load through effective caching strategies, and built systems capable of handling hundreds of concurrent users reliably.

I’m passionate about writing maintainable code, designing efficient data flows, and building systems that are not only functional, but stable, secure, and easy to evolve. I enjoy working across the entire stack and collaborating closely with teams to deliver digital products that meet both technical excellence and business goals.
</p>          
          {/* Personal Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Date of Birth</div>
              <div className="text-blue-400 font-medium">17th June 2001</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">Location</div>
              <div className="text-blue-400 font-medium">Hyderabad, Telangana, India</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-1">🗣️ Languages</div>
              <div className="text-blue-400 font-medium">English, Telugu, Hindi</div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-12 gradient-text">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript (ES6+)", "TypeScript", "Python"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Frontend Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Backend Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "NestJS"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* APIs & Communication */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">APIs and Communication</h4>
              <div className="flex flex-wrap gap-2">
                {["RESTful APIs", "GraphQL", "WebSockets", "API Integration"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "SQL", "NoSQL", "Supabase", "Neon"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* ORM & Caching */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">ORM and Caching</h4>
              <div className="flex flex-wrap gap-2">
                {["Prisma ORM", "Mongoose", "Hibernate", "JDBC", "Redis"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* Auth & Architecture */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Auth and Architecture</h4>
              <div className="flex flex-wrap gap-2">
                {["JWT", "RBAC", "MVC", "Microservices"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">DevOps and Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Postman", "npm", "VS Code", "Vercel", "Render", "CI/CD"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Other Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Responsive Design", "Debugging & Testing", "Performance Optimization"].map((skill) => (
                  <span key={skill} className="skill-badge badge-dark">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Company Header */}
          <div className="glass-effect rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Full Stack Developer</h3>
                <p className="text-lg text-gray-300">Datavalley.ai</p>
              </div>
              <div className="text-sm text-gray-400 mt-2 md:mt-0">
                Current Position
              </div>
            </div>
            
            {/* Projects */}
            <div className="space-y-8">
              
              {/* LMS Project */}
              <div className="border-l-4 border-blue-400 pl-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">Learning Management System (LMS)</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Wasabi S3"].map((tech) => (
                        <span key={tech} className="skill-badge badge-blue text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href="https://learning.datavalley.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-2 lg:mt-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
                
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Architected and deployed a scalable LMS platform with secure multi-role management, high-concurrency handling, and JWT authentication for 500+ users</li>
                  <li>• Implemented automated workflows for video streaming, course management, daily assessments, and realtime coding challenges using Judge0 API and OpenAI-powered adaptive quiz feedback</li>
                  <li>• Built analytics dashboards in Next.js/Tailwind for trainers and admins to track progress, quiz performance, and learning metrics; added bulk upload features for grades and assets</li>
                  <li>• Achieved sub-second API responses by integrating Redis caching and database indexing; enabled scalable media delivery using Wasabi S3 and automated CI/CD on Vercel and Render</li>
                  <li>• Ensured production stability through proactive error handling, health checks, and fast rollback routines, enabling uninterrupted releases and continuous feature updates</li>
                </ul>
              </div>

              {/* CRM Project */}
              <div className="border-l-4 border-green-400 pl-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">CRM Application</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Next.js", "React", "TypeScript", "Tailwind CSS", "Apollo Server", "NestJS", "Node.js", "PostgreSQL", "JWT", "Git"].map((tech) => (
                        <span key={tech} className="skill-badge badge-green text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href="https://crm.datavalley.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 mt-2 lg:mt-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
                
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Built a scalable CRM using Next.js and NestJS (TypeScript) with a modular architecture (Controller, Service, Repository) managing entities, workflows, and user permissions</li>
                  <li>• Implemented OTP email login using Nodemailer and secure JWT-based authentication with RBAC via NestJS Guards</li>
                  <li>• Designed relational database models in PostgreSQL (Neon) for Leads, Contacts, and Organizations, and developed clean REST & GraphQL APIs</li>
                  <li>• Improved API performance through Postgres indexing and in-memory caching; optimized frontend data fetching using TanStack Query</li>
                  <li>• Developed responsive Next.js UI components and added bulk CSV/Excel upload with custom validation and real-time status updates</li>
                </ul>
              </div>

              {/* Certificate Generator Project */}
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">Certificate Generator</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React", "CSV/Excel Processing", "PDF Generation", "QR Codes", "Cloud Storage"].map((tech) => (
                        <span key={tech} className="skill-badge badge-purple text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href="https://datavalley-certificate.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 mt-2 lg:mt-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
                
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Built a scalable certificate automation engine that processes CSV/Excel files in React, featuring real-time validation, error handling, and batch PDF generation for educational institutions</li>
                  <li>• Created a robust verification system supporting both Certificate ID and Student Roll Number searches, connecting QR codes to secure database lookups for instant authenticity validation</li>
                  <li>• Engineered a multi-template PDF system with dynamic image insertion (college logos, signatures) across different certificate types, delivering branded documents through optimized cloud storage and download workflows</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Personal Projects</h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* IoT Asset Dashboard Project */}
          <div className="glass-effect rounded-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-4xl">⚙️</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">IoT Asset Dashboard</h3>
                  <p className="text-lg text-gray-300 mb-3">Full-Stack IoT Platform</p>
                  <p className="text-gray-400 mb-4">Real-time IoT monitoring with WebSockets.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Next.js", "Socket.io", "PostgreSQL"].map((tech) => (
                      <span key={tech} className="skill-badge badge-purple text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a 
                href="https://iot-asset.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 mt-4 lg:mt-0"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>• Real-time device monitoring</li>
                <li>• WebSocket communication</li>
                <li>• Interactive data visualization</li>
              </ul>
            </div>
          </div>

          {/* Healthcare Platform Project */}
          <div className="glass-effect rounded-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-4xl">🏥</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Healthcare Platform</h3>
                  <p className="text-lg text-gray-300 mb-3">Full-Stack Healthcare Platform</p>
                  <p className="text-gray-400 mb-4">Sub-second healthcare system using GraphQL + PostgreSQL.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "GraphQL", "PostgreSQL"].map((tech) => (
                      <span key={tech} className="skill-badge badge-green text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a 
                href="https://healthcare-eight-bay.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 mt-4 lg:mt-0"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
            
            <div className="border-l-4 border-green-400 pl-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>• GraphQL API with optimized queries</li>
                <li>• Sub-second response times</li>
                <li>• Scalable PostgreSQL database design</li>
              </ul>
            </div>
          </div>

          {/* MERN Quest Project */}
          <div className="glass-effect rounded-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-4xl">🎓</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">MERN Quest</h3>
                  <p className="text-lg text-gray-300 mb-3">Full-Stack Learning Platform</p>
                  <p className="text-gray-400 mb-4">Learning platform with quizzes, JWT auth, and analytics.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node", "MongoDB", "Supabase"].map((tech) => (
                      <span key={tech} className="skill-badge badge-blue text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a 
                href="https://learn-mern-pied.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-4 lg:mt-0"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>• Interactive quiz system with real-time scoring</li>
                <li>• JWT authentication and user management</li>
                <li>• Analytics dashboard for progress tracking</li>
              </ul>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* ================= EDUCATION & ACHIEVEMENTS ================= */}
      <section id="education" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Education & Achievements</h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">Education</h3>
            
            <div className="space-y-6">
              {/* Bachelor's Degree */}
              <div className="glass-effect rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-4xl">🎓</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-400 mb-2">Bachelor of Technology in Computer Science Engineering</h4>
                      <p className="text-lg text-gray-300 mb-2">Annamacharya Institute of Technology and Sciences</p>
                      <p className="text-gray-400 text-sm">Aug 2019 - Nov 2023</p>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="skill-badge badge-blue">70%</span>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="glass-effect rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-4xl">📚</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-green-400 mb-2">Intermediate (Mathematics, Physics, Chemistry)</h4>
                      <p className="text-lg text-gray-300 mb-2">Narayana Junior College</p>
                      <p className="text-gray-400 text-sm">Jun 2017 - Mar 2019</p>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="skill-badge badge-green">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">Certificates</h3>
            
            <div className="space-y-6">
              {/* HackerRank Certificate */}
              <div className="glass-effect rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-4xl">🏆</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-yellow-400 mb-2">HackerRank Software Engineer Skill Certificate</h4>
                      <p className="text-lg text-gray-300 mb-3">HackerRank</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Problem Solving", "SQL", "REST API"].map((skill) => (
                          <span key={skill} className="skill-badge badge-yellow text-xs">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.hackerrank.com/certificates/iframe/4aa7fe4d61dc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1 mt-4 lg:mt-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </a>
                </div>
              </div>

              {/* CodeChef Certificate */}
              <div className="glass-effect rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-4xl">🥇</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">CodeChef Frontend Certificate</h4>
                      <p className="text-lg text-gray-300 mb-3">CodeChef</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript"].map((skill) => (
                          <span key={skill} className="skill-badge badge-cyan text-xs">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.codechef.com/certificates/preview/e95b3c5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 mt-4 lg:mt-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Let's Connect</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 text-center mb-12 leading-relaxed">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Email Contact */}
            <div className="glass-effect rounded-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Drop me a line anytime</p>
                  <a 
                    href="mailto:pavanchinchalpet@gmail.com"
                    className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors break-all"
                  >
                    pavanchinchalpet@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="glass-effect rounded-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Call me for quick discussions</p>
                  <a 
                    href="tel:+917032832362"
                    className="text-sm sm:text-base text-gray-400 hover:text-green-400 transition-colors"
                  >
                    +91 7032832362
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="glass-effect rounded-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2">GitHub</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Check out my code repositories</p>
                  <a 
                    href="https://github.com/pavanchinchalpet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1 break-all"
                  >
                    <span className="truncate">github.com/pavanchinchalpet</span>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-effect rounded-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-lg flex-shrink-0">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">LinkedIn</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Let's connect professionally</p>
                  <a 
                    href="https://linkedin.com/in/pavanchinchalpet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 break-all"
                  >
                    <span className="truncate">linkedin.com/in/pavanchinchalpet</span>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="glass-effect rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-3 sm:mb-4">Ready to Start a Project?</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I'm always excited to work on innovative projects and collaborate with talented teams. 
                Whether you need a full-stack developer, technical consultant, or someone to bring your ideas to life, let's talk!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="mailto:pavanchinchalpet@gmail.com"
                  className="btn btn-secondary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
                <a 
                  href="/images/Pavan-Chinchalpet_Full_Stack_Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
            Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Pavan Kumar Chinchalpet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
