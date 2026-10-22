export interface ProfileLinks {
  cv: string;
  github: string;
  linkedin: string;
  instagram?: string;
  email: string;
  whatsapp: string;
}

export interface Profile {
  name: string;
  headline: string;
  availability: string;
  summary: string;
  links: ProfileLinks;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
}

export type ProjectType = 'enterprise' | 'academic' | 'community';

export interface ProjectItem {
  id: string;
  title: string;
  type: ProjectType;
  typeLabel?: string;
  problemSolved: string;
  solution?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ActivityItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  activities: ActivityItem[];
}
