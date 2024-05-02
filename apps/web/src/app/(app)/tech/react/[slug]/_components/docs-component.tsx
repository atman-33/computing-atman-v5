import './docs-component.css';

import { typescriptHighlight } from '@/lib/syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { ComponentKind, components } from './components';

interface DocsComponentProps {
  kind: ComponentKind;
}
const DocsComponent = ({ kind }: DocsComponentProps) => {
  const contents = components[kind];
  const Component = contents.component;

  return (
    <div>
      <h2 className="text-2xl font-bold">{contents.title}</h2>
      <Component />

      <hr className="my-4" />

      <ReactMarkdown
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
  );
};

export { DocsComponent };
