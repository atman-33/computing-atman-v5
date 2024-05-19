import { Icons } from './Icons';

/**
 * アイコンを表示するためのコンポーネント。
 * 文字列からアイコンを特定する場合は、こちらに追加する。
 */
const icons = {
  react: {
    name: 'React',
    icon: Icons.react,
  },
  design: {
    name: 'Design',
    icon: Icons.design,
  },
};

export type IconKind = keyof typeof icons;

interface IconProps {
  kind: IconKind;
  href?: string;
  size?: number;
  className?: string;
}

/**
 * 指定した kind のアイコンを表示する。
 * 直接 `Icons` から呼び出すこともできるため、こちらは文字列からアイコンを特定する場合に利用する。
 * @param param0
 * @returns
 */
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
