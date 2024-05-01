import { Icons } from './Icons';

const icons = {
  react: {
    name: 'React',
    icon: Icons.react,
  },
};

export type IconKind = keyof typeof icons;

interface IconProps {
  kind: IconKind;
  href?: string;
  size?: number;
  className?: string;
}

const Icon = ({ kind, href, size = 6, className }: IconProps) => {
  const IconSvg = icons[kind].icon;

  const IconComponent = (
    <div className={`items-center space-x-1 font-normal ${className}`}>
      <IconSvg className={`h-${size} w-${size}`} />
    </div>
  );

  if (href) {
    return (
      <a href={href} rel="noopener noreferrer">
        {IconComponent}
      </a>
    );
  } else {
    return IconComponent;
  }
};

export * from './Icons';
export { Icon };
