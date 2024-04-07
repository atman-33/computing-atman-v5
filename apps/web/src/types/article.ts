export interface Article {
  title: string;
  emoji: string;
  tags: [ArticleTag];
  published: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

type ArticleTag =
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
