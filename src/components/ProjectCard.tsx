import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  features: string[];
  projectUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({
  emoji,
  title,
  description,
  type,
  technologies,
  features,
  projectUrl
}) => {
  return (
    <div className="card group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent">
      <div className="card-header">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-2xl flex-shrink-0">{emoji}</span>
            <h3 className="card-title flex-1 min-w-0" style={{ fontFamily: 'var(--font-manrope)' }}>
              {title}
            </h3>
          </div>
          {projectUrl && (
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors flex-shrink-0 ml-2"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
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
