import { TagIcons } from './TagIcons';

export * from './TagIcons';

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
      <div className="flex h-6 items-center font-normal">
        <span>{kind}</span>
      </div>
    );
  }

  const TagIconSvg = tagIcons[kind].icon;

  const TagIconAndName = (
    <div className="flex h-6 items-center space-x-1 text-xs font-normal">
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
