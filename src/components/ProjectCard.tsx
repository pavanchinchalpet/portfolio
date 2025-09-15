import React from 'react';

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  features: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({
  emoji,
  title,
  description,
  type,
  technologies,
  features
}) => {
  return (
    <div className="card group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent">
      <div className="card-header">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{emoji}</span>
          <h3 className="card-title" style={{ fontFamily: 'var(--font-manrope)' }}>
            {title}
          </h3>
        </div>
        <p className="card-description">{type}</p>
      </div>
      <div className="card-content">
        <p className="text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
