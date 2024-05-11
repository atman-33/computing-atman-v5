import './docs-component.css';

import { typescriptHighlight } from '@/lib/syntax-highlighter';
import { Separator } from '@repo/ui';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ComponentKind, components } from './components';

interface DocsComponentProps {
  kind: ComponentKind;
}
const DocsComponent = ({ kind }: DocsComponentProps) => {
  const contents = components[kind];
  const Component = contents.component;

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">{contents.title}</h2>
      <Component />

      <Separator orientation="horizontal" />

      <div className="react-docs">
        <ReactMarkdown
          remarkPlugins={[remarkGfm as any]}
          children={contents.description}
          components={{
            // @ts-ignore: next-line
            async code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');

              let code: string = '';
              if (match) {
                code = await typescriptHighlight(String(children).replace(/\n$/, '') as string);
              }
              return match ? (
                <div className="" dangerouslySetInnerHTML={{ __html: code }} />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export { DocsComponent };
