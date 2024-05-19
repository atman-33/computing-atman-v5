import { FactoryMethodExample } from './factory-method/Example';
import { FactoryMethodDescription } from './factory-method/description';

const components = {
  factoryMethod: {
    title: 'Factory Method',
    component: FactoryMethodExample,
    description: FactoryMethodDescription,
  },
};

type ComponentKind = keyof typeof components;

export { components };
export type { ComponentKind };
