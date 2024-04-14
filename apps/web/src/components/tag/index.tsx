import { TagIcons } from './TagIcons';

export * from './TagIcons';

const tagIcons = {
  csharp: {
    name: 'C#',
    icon: TagIcons.csharp,
  },
};

export type TagIconKind = keyof typeof tagIcons;

type TagIconProps = {
  kind: TagIconKind;
  href?: string;
  size?: number;
};

const Tag = ({ kind, href, size = 6 }: TagIconProps) => {
  const tagKind = tagIcons[kind];

  if (!tagKind) {
    return (
      <div className="h-6 items-center flex">
        <span>{kind}</span>
      </div>
    );
  }

  const TagIconSvg = tagIcons[kind].icon;

  const TagIconAndName = (
    <div className="flex items-center space-x-1 h-6">
      <TagIconSvg className={`h-${size} w-${size}`} />
      <span>{tagIcons[kind].name}</span>
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

export default Tag;
