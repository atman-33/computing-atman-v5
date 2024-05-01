import { codeToHtml } from 'shiki';

/**
 * Typescript syntax highlighter
 * @param code
 * @returns
 */
export const typescriptHighlight = async (code: string) => {
  return await codeToHtml(code, {
    lang: 'typescript',
    themes: {
      light: 'github-dark',
      dark: 'github-dark',
    },
  });
};
