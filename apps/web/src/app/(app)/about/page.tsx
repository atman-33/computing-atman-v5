import { Icons } from '@/components/icons';
import { Image } from '@/components/image';
import { Link } from '@/components/link';
import { siteConfig } from '@/config/site-config';
import { buttonVariants, cn } from '@repo/ui';

const AboutPage = () => {
  return (
    <div className="container my-4 flex flex-col space-y-2 md:w-10/12">
      <h2 className="my-4 text-3xl font-bold">About</h2>

      <div className="items-center md:flex md:space-x-8">
        <Image src={'/avatar.png'} alt="avatar" width={200} height={200} />
        <div className="flex flex-col space-y-2">
          <h3 className="my-4 text-2xl font-bold">Atman</h3>
          <p>
            I am developing websites, desktop applications, and mobile apps as personal projects. To
            share the knowledge I have gained through my learning, I am creating a website.
          </p>
          <div className="ml-2">👇👇👇</div>
          <div className="flex items-center space-x-4">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.gitHub className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.twitter className="h-8 w-8 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
