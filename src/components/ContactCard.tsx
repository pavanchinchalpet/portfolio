import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
  isExternal?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = React.memo(({ 
  icon: Icon, 
  title, 
  subtitle, 
  href, 
  isExternal = false 
}) => {
  const linkProps = isExternal 
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a 
      href={href}
      className="card contact-card hover:shadow-lg transition-all duration-300 cursor-pointer"
      {...linkProps}
    >
      <div className="card-content pt-6 text-center">
        <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </a>
  );
});

ContactCard.displayName = 'ContactCard';

export default ContactCard;
