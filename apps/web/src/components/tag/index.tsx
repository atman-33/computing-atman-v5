import { TagIcons } from './TagIcons';

/**
 * タグアイコンの定義。タグが増える際は、ここに定義を追加すること。
 */
const tagIcons = {
  csharp: {
    name: 'C#',
    icon: TagIcons.csharp,
  },
  vba: {
    name: 'VBA',
    icon: TagIcons.vba,
  },
  vbs: {
    name: 'VBScript',
    icon: TagIcons.vb,
  },
  css: {
    name: 'CSS',
    icon: TagIcons.css,
  },
  oracle: {
    name: 'Oracle',
    icon: TagIcons.oracle,
  },
  wordpress: {
    name: 'WordPress',
    icon: TagIcons.wordpress,
  },
  powerbi: {
    name: 'Power BI',
    icon: TagIcons.powerbi,
  },
  javascript: {
    name: 'JavaScript',
    icon: TagIcons.javascript,
  },
  python: {
    name: 'Python',
    icon: TagIcons.python,
  },
  googleAdsense: {
    name: 'Google Adsense',
    icon: TagIcons.googleAdsense,
  },
  aws: {
    name: 'AWS',
    icon: TagIcons.aws,
  },
  git: {
    name: 'Git',
    icon: TagIcons.git,
  },
  hexo: {
    name: 'Hexo',
    icon: TagIcons.hexo,
  },
  nestjs: {
    name: 'NestJS',
    icon: TagIcons.nestjs,
  },
  angular: {
    name: 'Angular',
    icon: TagIcons.angular,
  },
  nx: {
    name: 'Nx',
    icon: TagIcons.nx,
  },
  mongodb: {
    name: 'MongoDB',
    icon: TagIcons.mongodb,
  },
  vscode: {
    name: 'VSCode',
    icon: TagIcons.vscode,
  },
  nextjs: {
    name: 'Next.js',
    icon: TagIcons.nextjs,
  },
  react: {
    name: 'React',
    icon: TagIcons.react,
  },
  electron: {
    name: 'Electron',
    icon: TagIcons.electron,
  },
  turborepo: {
    name: 'Turborepo',
    icon: TagIcons.turborepo,
  },
  tailwindcss: {
    name: 'TailwindCSS',
    icon: TagIcons.tailwindcss,
  },
  shadcnui: {
    name: 'shadcn/ui',
    icon: TagIcons.shadcnui,
  },
};

export type TagIconKind = keyof typeof tagIcons;

interface TagIconProps {
  kind: TagIconKind;
  href?: string;
  size?: number;
  className?: string;
}

const Tag = ({ kind, href, size = 6, className }: TagIconProps) => {
  const tagKind = tagIcons[kind];

  if (!tagKind) {
    return (
      <a className="flex h-6 items-center font-normal" href={href}>
        <span>{kind}</span>
      </a>
    );
  }

  const TagIconSvg = tagIcons[kind].icon;

  const TagIconAndName = (
    <div className={`flex items-center space-x-1 font-normal ${className}`}>
      <TagIconSvg className={`h-${size} w-${size}`} />
      <div>{tagIcons[kind].name}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} rel="noopener noreferrer">
        {TagIconAndName}
      </a>
    );
  } else {
    return TagIconAndName;
  }
};

export * from './TagIcons';
export { Tag };
