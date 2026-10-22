import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <div className="space-y-12 sm:space-y-16 pb-16">
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ActivitiesSection />
      </div>
    </div>
  );
}
