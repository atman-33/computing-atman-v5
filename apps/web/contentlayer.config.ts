import { getHighlighter, loadTheme } from '@shikijs/compat';
import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import { writeFileSync } from 'node:fs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { codeImport } from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import * as themes from 'shiki/themes';
import { visit } from 'unist-util-visit'; // NOTE: unistユーティリティを使用してツリーを移動

/** @type {import('contentlayer/source-files').ComputedFields} */

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- //
// makeSorce 実行後の処理

function createTagCount(allPosts: any) {
  const tagCount: Record<string, number> = {};

  allPosts.forEach((file: any) => {
    if (file.tags && file.published === true) {
      file.tags.forEach((tag: any) => {
        if (tag in tagCount) {
          tagCount[tag] += 1;
        } else {
          tagCount[tag] = 1;
        }
      });
    }
  });
  writeFileSync('./public/tag-data.json', JSON.stringify(tagCount));
  console.log('🔖 tag-data.json generated!!');
}

function createSearchIndex(allPosts: any) {
  const newData = structuredClone(allPosts);

  newData.map((post: any) => {
    delete post.body.code;
    post.body.raw = post.body.raw.replace(/\n/g, ' ');
    return post;
  });
  writeFileSync('./public/search-data.json', JSON.stringify(newData));
  console.log('🔍 search-data.json generated!!');
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- //
// contentlayer のメイン処理

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
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    lastmod: { type: 'date', required: false },
    emoji: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    published: { type: 'boolean', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Post],
  mdx: {
    // NOTE: remarkGfm は、Markdown の拡張機能に対応させるプラグイン。テーブルや打消し線をHTMLに変換することが可能となる。
    remarkPlugins: [remarkGfm, codeImport, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') {
              return;
            }

            // if (codeEl.data?.meta) {
            //   // Extract event from meta and pass it down the tree.
            //   const regex = /event="([^"]*)"/;
            //   const match = codeEl.data?.meta.match(regex);
            //   if (match) {
            //     node.__event__ = match ? match[1] : null;
            //     codeEl.data.meta = codeEl.data.meta.replace(regex, '');
            //   }
            // }

            node.__rawString__ = codeEl.children?.[0].value;
            // node.__src__ = node.properties?.__src__;
            // node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme: any = await loadTheme(themes.bundledThemes['github-dark-dimmed']);
            return await getHighlighter({ theme });
          },
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      () => (tree) => {
        // eslint-disable-next-line no-unused-vars
        visit(tree, (node, index) => {
          // console.log(`node ${index}=> `, node);

          // NOTE: コードブロック（ソースコード）に情報を付与
          if (node?.type === 'element' && node?.tagName === 'figure') {
            // console.log(`data-rehype-pretty-code-check => `, 'data-rehype-pretty-code-figure' in node.properties);
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== 'pre') {
              return;
            }

            preElement.properties['__withMeta__'] = node.children.at(0).tagName === 'div';
            preElement.properties['__rawString__'] = node.__rawString__;
            // console.log(`__rawString__ => `, node.__rawString__);

            // if (node.__src__) {
            //   preElement.properties['__src__'] = node.__src__;
            // }

            // if (node.__event__) {
            //   preElement.properties['__event__'] = node.__event__;
            // }

            // if (node.__style__) {
            //   preElement.properties['__style__'] = node.__style__;
            // }

            // console.log(`node(figure) => `, node);
          }

          // NOTE: インラインコードに情報を付与
          if (node?.type === 'element' && node?.tagName === 'code') {
            if ('data-theme' in node.properties) {
              node.__isInlineCode__ = 'false';
              // console.log(`node(code block) => `, node);
              return;
            }

            node.__isInlineCode__ = 'true';
            // NOTE: propertiesに情報を追加しないと、node.__inInlineCode__の値を扱えないため注意
            node.properties['__isInlineCode__'] = 'true';
            // console.log(`node(inline code) => `, node);
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      rehypeKatex,
      rehypePresetMinify as any,
    ],
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData();
    const publishedPosts = allDocuments.filter((post: any) => {
      // console.log(`${post.slugAsParams} published => `, post.published);
      return post.published;
    });

    console.log(`📚 ${publishedPosts.length} posts are published.`);
    createTagCount(publishedPosts);
    createSearchIndex(publishedPosts);
  },
});
