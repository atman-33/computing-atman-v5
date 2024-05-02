import { Icon, IconKind } from '@/components/icons';
import { Link } from '@/components/link';
import { techConfig } from '@/config/tech/tech-config';

export const TechList = () => {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      {techConfig.map((tech) => (
        <div key={tech.title} className="hover:bg-primary/10 rounded-md md:p-4">
          <hr className="my-2" />
          <Link href={tech.href}>
            <div className="flex items-center space-x-8">
              <Icon kind={tech.icon as IconKind} size={24} />
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold">{tech.title}</h2>
                <p>{tech.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
