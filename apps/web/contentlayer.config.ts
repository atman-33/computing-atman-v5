import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (post) => `/${post._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    emoji: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    published: { type: 'boolean', required: true },
  },
  computedFields,
}));

export default makeSource({ contentDirPath: './src/content', documentTypes: [Post] });
