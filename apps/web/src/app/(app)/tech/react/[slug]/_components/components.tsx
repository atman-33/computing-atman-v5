import { Example as ClickHandlerExample } from './click-handler/Example';
import { description as ClickHandlerDescription } from './click-handler/description';

const components = {
  clickHandler: {
    title: 'Click Handler',
    component: ClickHandlerExample,
    description: ClickHandlerDescription,
  },
};

type ComponentKind = keyof typeof components;

export { components };
export type { ComponentKind };
