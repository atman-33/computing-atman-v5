import { Image } from '@/components/image';
import { Link } from '@/components/link';
import { appConfig } from '@/config/app/app-config';

export const AppList = () => {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      {appConfig.map((app) => (
        <div>
          <hr className="my-2" />
          <div key={app.title} className="hover:bg-primary/10 rounded-md md:p-4">
            <Link href={app.href}>
              <div className="flex items-center space-x-8">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={200}
                  height={200}
                  className="rounded-sm"
                />
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold">{app.title}</h2>
                  <p>{app.description}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
