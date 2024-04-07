export interface Post {
  title: string;
  emoji: string;
  tags: [PostTag];
  published: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

type PostTag =
  | 'React'
  | 'Next.js'
  | 'NestJS'
  | 'VBScript'
  | 'VBA'
  | 'TypeScript'
  | 'JavaScript'
  | 'C'
  | 'C++'
  | 'C#'
  | 'SQL'
  | 'Python'
  | 'WordPress'
  | 'Git'
  | 'GitHub'
  | 'GraphQL';
