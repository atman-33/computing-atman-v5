export type SearchData = {
  title: string;
  description: string;
  date: string;
  lastmod?: string;
  emoji: string;
  tags: string[];
  published: boolean;
  body: {
    raw: string;
  };
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: string;
  slug: string;
  slugAsParams: string;
};
