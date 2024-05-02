import { Example as ClickHandlerExample } from './click-handler/Example';
import { description as ClickHandlerDescription } from './click-handler/description';
import { Example as HoverExample } from './hover/Example';
import { description as HoverDescription } from './hover/description';
import { Example as InputExample } from './input/Example';
import { description as InputDescription } from './input/description';
import { Example as useStateExample } from './use-state/Example';
import { description as useStateDescription } from './use-state/description';

const components = {
  clickHandler: {
    title: 'Click Handler',
    component: ClickHandlerExample,
    description: ClickHandlerDescription,
  },
  input: {
    title: 'Input',
    component: InputExample,
    description: InputDescription,
  },
  hover: {
    title: 'Hover',
    component: HoverExample,
    description: HoverDescription,
  },
  useState: {
    title: 'useState',
    component: useStateExample,
    description: useStateDescription,
  },
};

type ComponentKind = keyof typeof components;

export { components };
export type { ComponentKind };
