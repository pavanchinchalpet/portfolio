import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EducationCardProps {
  icon: LucideIcon;
  title: string;
  institution: string;
  period: string;
  grade: string;
}

const EducationCard: React.FC<EducationCardProps> = React.memo(({
  icon: Icon,
  title,
  institution,
  period,
  grade
}) => {
  return (
    <div className="card">
      <div className="card-content pt-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary rounded-lg p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-muted-foreground">
              {institution}
            </p>
            <p className="text-sm">
              <strong>{period}</strong> • {grade}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

EducationCard.displayName = 'EducationCard';

export default EducationCard;
