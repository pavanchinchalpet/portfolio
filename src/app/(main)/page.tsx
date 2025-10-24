import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Trophy,
  BookOpen,
  Gamepad2,
  PenTool,
  Mic,
  Award,
  Code2,
} from "lucide-react";
import ContactCard from '../../components/ContactCard';
import ProjectCard from '../../components/ProjectCard';
import EducationCard from '../../components/EducationCard';
import CertificateCard from '../../components/CertificateCard';

export default function Portfolio() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/passport size photo.jpg"
              alt="Pavan Kumar Chinchalpet"
              className="w-32 h-32 mx-auto mb-6 border-4 border-black"
              style={{ 
                borderColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '50%',
                objectFit: 'cover',
                imageRendering: 'crisp-edges'
              }}
              loading="lazy"
              decoding="async"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black" style={{ fontFamily: 'var(--font-manrope)' }}>
              Hi, I'm Pavan Kumar Chinchalpet
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Full Stack Web Developer crafting high-performance, scalable applications
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700 px-4">
              Full Stack Web Developer with extensive experience in architecting, developing, and deploying high-performance, 
              scalable, and user-centric web applications. Proven expertise in designing robust backend systems, building 
              responsive and dynamic frontends, and ensuring seamless integration across the full technology stack. 
              Skilled in performance optimization, clean architecture, and delivering reliable, production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:pavanchinchalpet@gmail.com"
                className="btn btn-lg btn-secondary font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-manrope)' }}>
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I am a passionate Full Stack Web Developer with extensive experience in architecting, developing, and 
                deploying high-performance, scalable, and user-centric web applications. I specialize in designing 
                robust backend systems and building responsive, dynamic frontends.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                With proven expertise in performance optimization, clean architecture, and delivering reliable, 
                production-ready solutions, I'm passionate about driving technical excellence and delivering 
                impactful digital products that exceed user and business expectations.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Date of Birth:</strong> 17th June 2001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Location:</strong> Hyderabad, Telangana, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">🗣️</span>
                  <span>
                    <strong>Languages:</strong> English, Telugu, Hindi
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">🌐 Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "Python", "Java"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">🎨 Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React.js", "Next.js"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">⚙️ Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "Nest.js", "RESTful API", "GraphQL API"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">🗄️ Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {["NoSQL", "SQL", "PostgreSQL"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">🛠️ Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Postman", "npm", "VS Code", "Vercel", "Render"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">🔐 Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JWT Authentication", "API Integration", "Responsive Design", "Deployment", "Debugging & Testing"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-manrope)' }}>
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* CRM System */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>CRM System</h3>
                      <p className="card-description text-lg">Datavalley.ai</p>
                    </div>
                    <a 
                      href="https://crm.datavalley.ai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors flex-shrink-0 ml-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="card-content">
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Developed and optimized UI components in Next.js, including the User Management and Manage Registration Fields modules, ensuring responsive design, usability, and efficient handling of student registration data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Implemented OTP-based email authentication using Nodemailer (SMTP method), enhancing security and ensuring reliable user login and verification.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Designed and integrated dynamic email templates within the Nest.js backend, ensuring consistent communication and branding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Integrated GraphQL APIs between Next.js and Nest.js, enabling seamless data exchange and improving overall system performance and scalability.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              {/* Certificate Generator */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>Datavalley Certificate Generator</h3>
                      <p className="card-description text-lg">Datavalley.ai</p>
                    </div>
                    <a 
                      href="https://datavalley-certificate.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors flex-shrink-0 ml-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="card-content">
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Built a scalable certificate automation engine that processes CSV/Excel files in React, featuring real-time validation, error handling, and batch PDF generation for educational institutions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Created a robust verification system supporting both Certificate ID and Student Roll Number searches, connecting QR codes to secure database lookups for instant authenticity validation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Engineered a multi-template PDF system with dynamic image insertion (college logos, signatures) across different certificate types, delivering branded documents through optimized cloud storage and download workflows.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-manrope)' }}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProjectCard
              emoji="🎓"
              title="MERN Quest - Learning Platform"
              description="Developed a full-stack quiz platform using the MERN stack with Supabase integration, interactive assessments, and real-time progress tracking."
              type="Full-Stack Learning Platform"
              technologies={["React.js", "Node.js", "MongoDB", "Supabase", "JWT Auth"]}
              features={[
                "Designed optimized PostgreSQL schemas and integrated JWT authentication",
                "Built scalable admin dashboard and responsive React frontend",
                "Implemented quiz management, scoring systems, and gamification features"
              ]}
              projectUrl="https://learn-mern-pied.vercel.app/"
            />

            <ProjectCard
              emoji="🏥"
              title="Healthcare Management System"
              description="Implemented a high-performance healthcare management platform using modern web technologies, ensuring sub-second load times and zero layout shift across all pages."
              type="Full-Stack Healthcare Platform"
              technologies={["React.js", "GraphQL", "PostgreSQL", "Apollo Client"]}
              features={[
                "Optimized performance through GraphQL query tuning, database connection pooling, and Apollo Client caching",
                "Reduced load time from 3.72s to under 0.5s",
                "Implemented production-ready features like skeleton loading, responsive UI, and seamless data flow"
              ]}
              projectUrl="https://healthcare-eight-bay.vercel.app/"
            />

            <ProjectCard
              emoji="🏢"
              title="CRM System"
              description="Developed and optimized UI components in Next.js for the User Management and Manage Registration Fields modules, ensuring responsive design and efficient data handling."
              type="Professional Project"
              technologies={["Next.js", "Nest.js", "GraphQL", "Nodemailer"]}
              features={[
                "Implemented OTP-based email authentication using Nodemailer",
                "Designed and integrated dynamic email templates",
                "Integrated GraphQL APIs for seamless data exchange"
              ]}
              projectUrl="https://crm.datavalley.ai/"
            />
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-manrope)' }}>
            Education & Achievements
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <EducationCard
                  icon={GraduationCap}
                  title="Bachelor of Technology in Computer Science Engineering"
                  institution="Annamacharya Institute of Technology and Sciences"
                  period="Aug 2019 - Nov 2023"
                  grade="70%"
                />

                <EducationCard
                  icon={BookOpen}
                  title="Intermediate (Mathematics, Physics, Chemistry)"
                  institution="Narayana Junior College"
                  period="Jun 2017 - Mar 2019"
                  grade="87%"
                />
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                <Award className="h-6 w-6 text-primary" />
                Certificates
              </h3>
              <div className="space-y-6">
                <CertificateCard
                  title="HackerRank Software Engineer Skill Certificate"
                  issuer="HackerRank"
                  skills={["Problem Solving", "SQL", "REST API"]}
                  certificateUrl="https://www.hackerrank.com/certificates/iframe/4aa7fe4d61dc"
                  icon={<Code2 className="h-6 w-6 text-primary" />}
                />
                <CertificateCard
                  title="CodeChef Frontend Certificate"
                  issuer="CodeChef"
                  skills={["HTML", "CSS", "JavaScript"]}
                  certificateUrl="https://www.codechef.com/certificates/preview/e95b3c5"
                  icon={<Award className="h-6 w-6 text-primary" />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let's Connect
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ContactCard
              icon={Mail}
              title="Email"
              subtitle="pavanchinchalpet@gmail.com"
              href="mailto:pavanchinchalpet@gmail.com"
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              subtitle="+91 7032832362"
              href="tel:+917032832362"
            />
            <ContactCard
              icon={Github}
              title="GitHub"
              subtitle="github.com/pavanchinchalpet"
              href="https://github.com/pavanchinchalpet"
              isExternal={true}
            />
            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              subtitle="Linkedin.com/in/pavanchinchalpet"
              href="https://linkedin.com/in/pavanchinchalpet"
              isExternal={true}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="mailto:pavanchinchalpet@gmail.com"
              className="btn btn-lg btn-secondary font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
            <a 
              href="https://github.com/pavanchinchalpet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-outline font-semibold"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Pavan Kumar Chinchalpet. Built with Next.js and Clean CSS.
        </p>
      </footer>
    </div>
  )
}