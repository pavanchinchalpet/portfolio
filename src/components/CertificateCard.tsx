import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  skills: string[];
  certificateUrl: string;
  icon?: React.ReactNode;
}

const CertificateCard: React.FC<CertificateCardProps> = React.memo(({
  title,
  issuer,
  skills,
  certificateUrl,
  icon
}) => {
  return (
    <div className="card group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent">
      <div className="card-header">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="text-2xl flex-shrink-0">
              {icon || <Award className="h-6 w-6 text-primary" />}
            </div>
            <h3 className="card-title flex-1 min-w-0" style={{ fontFamily: 'var(--font-manrope)' }}>
              {title}
            </h3>
          </div>
          <a 
            href={certificateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors flex-shrink-0 ml-2"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="card-description">{issuer}</p>
      </div>
      <div className="card-content">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="badge badge-outline">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;
