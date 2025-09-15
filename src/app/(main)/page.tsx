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
              Hi, I'm Pavan Kumar 👋
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Crafting seamless web experiences with modern technologies
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700 px-4">
              Aspiring Full Stack Web Developer with a strong foundation in software development and web technologies. 
              Experienced in working on team-based projects involving deep learning and privacy-focused applications, 
              with active involvement in data collection and presentation. Recognized for problem-solving, adaptability, 
              and communication skills. Focused on building secure, high-performance applications that align with 
              organizational goals and user needs.
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I am an enthusiastic and self-driven Computer Science Engineer (B.Tech – CSE, 2023) with a keen interest
                in Web Development, Cloud Computing, and System Design.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                I enjoy learning new technologies, experimenting with innovative ideas, and working on projects that
                create real impact. Apart from coding, I love reading books, writing stories, playing sports, and
                exploring creative ideas.
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
                    {["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Redux", "Bootstrap", "Tailwind CSS"].map((skill) => (
                      <span key={skill} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">⚙️ Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "RESTful API", "GraphQL"].map((skill) => (
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

      {/* Internship Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-manrope)' }}>
            Internship Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="card-header">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="card-title text-xl mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>Full Stack Web Developer</h3>
                    <p className="card-description text-lg">Datavalley.ai</p>
                  </div>
                  <span className="badge badge-secondary ml-4">May 2025 - Present</span>
                </div>
              </div>
              <div className="card-content">
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gained hands-on experience in building and deploying web applications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Refined RESTful API architectures and worked on integrating third-party services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Collaborated with team members to enhance user experience and meet project objectives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Improved understanding of scalable application design and problem-solving in real-world scenarios.</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              emoji="🏢"
              title="CRM System"
              description="Developed a role-based CRM system for student-faculty interaction and academic management, ensuring secure and structured data handling."
              type="Full-Stack Project"
              technologies={["React.js", "Node.js", "GraphQL", "JWT Auth"]}
              features={[
                "Implemented secure login authentication with role-based access control",
                "Designed modules for admissions, academics, and analytics",
                "Features: announcements, assignment uploads, attendance tracking"
              ]}
            />

            <ProjectCard
              emoji="🚦"
              title="Road Sign Intimation System"
              description="Built a real-time road sign detection and classification system using deep learning models, achieving 90% accuracy in low-visibility conditions."
              type="Deep Learning Project"
              technologies={["Deep Learning", "Computer Vision", "Voice Alerts"]}
              features={[
                "Integrated voice alert functionality for immediate notifications",
                "Optimized deep learning models through rigorous training",
                "Collaborated in data collection and presentation"
              ]}
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <EducationCard
                  icon={GraduationCap}
                  title="B.Tech in Computer Science Engineering"
                  institution="Annamacharya Institute of Technology and Sciences, Hyderabad"
                  period="Aug 2019 - Nov 2023"
                  grade="70%"
                />

                <EducationCard
                  icon={BookOpen}
                  title="Intermediate"
                  institution="Narayana Junior College, Hyderabad"
                  period="Jun 2017 - Mar 2019"
                  grade="87%"
                />

                <EducationCard
                  icon={BookOpen}
                  title="SSC"
                  institution="St. Anthony's High School, Vikarabad"
                  period="2017"
                  grade="8.0 CGPA"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              subtitle="linkedin.com/in/pavanchinchalpet"
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