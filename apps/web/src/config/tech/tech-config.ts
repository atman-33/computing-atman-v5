interface TechConfig {
  title: string;
  icon: string;
  description: string;
  href: string;
}

export const techConfig: TechConfig[] = [
  {
    title: 'React Samples',
    icon: 'react',
    description: 'Next.js + React + Tailwind CSS + Shadcn のサンプルコード',
    href: '/tech/react',
  },
  {
    title: 'Design Patterns',
    icon: 'design',
    description: 'Gofデザインパターンのサンプルコード',
    href: '/tech/design-patterns',
  },
];
