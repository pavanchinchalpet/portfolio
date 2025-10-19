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
} from "lucide-react";
import ContactCard from '../../components/ContactCard';
import ProjectCard from '../../components/ProjectCard';
import EducationCard from '../../components/EducationCard';

export default function Portfolio() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="py-20 px-4">
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
      <section className="py-20 px-4">
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
                  <h4 className="font-semibold mb-2 text-primary">🌐 Frontend</h4>
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
                    {["Node.js", "Express.js", "Nest.js", "RESTful API", "GraphQL"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">🗄️ Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "PostgreSQL (Neon)", "Supabase"].map((skill) => (
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-manrope)' }}>
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="card-header">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="card-title text-xl mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>Full Stack Web Developer Intern</h3>
                    <p className="card-description text-lg">Datavalley.ai</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <a href="https://crm.datavalley.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        CRM System
                      </a>
                    </p>
                  </div>
                  <span className="badge badge-secondary ml-4">Jun 2025 - Present</span>
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
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
              description="Developed a full-stack healthcare management platform using modern web technologies, achieving sub-second load times and zero layout shift across all pages."
              type="Full-Stack Healthcare Platform"
              technologies={["React.js", "GraphQL", "PostgreSQL", "Apollo Client"]}
              features={[
                "Optimized performance through GraphQL query tuning and database connection pooling",
                "Reduced load time from 3.72s to under 0.5s",
                "Implemented production-ready features like skeleton loading and responsive UI"
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
      <section className="py-20 px-4">
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

            {/* Achievements & Interests */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                <Trophy className="h-6 w-6 text-primary" />
                Achievements & Interests
              </h3>
              <div className="space-y-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title text-lg">🏆 Achievements</h4>
                  </div>
                  <div className="card-content">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-accent" />
                        1st Prize in Cricket Tournament
                      </li>
                      <li className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-accent" />
                        1st Place in Cultural Activity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">🎓</span>
                        Participated in Tech Fests & Seminars
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title text-lg">💡 Interests</h4>
                  </div>
                  <div className="card-content">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Reading Books
                      </div>
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="h-4 w-4 text-primary" />
                        Playing Sports
                      </div>
                      <div className="flex items-center gap-2">
                        <PenTool className="h-4 w-4 text-primary" />
                        Story Writing
                      </div>
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        Story Telling
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
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
          © 2024 Pavan Kumar Chinchalpet. Built with Next.js and Clean CSS.
        </p>
      </footer>
    </div>
  )
}