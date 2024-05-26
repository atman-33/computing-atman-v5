import { FactoryMethodExample } from './factory-method/Example';
import { FactoryMethodDescription } from './factory-method/description';
import { StrategyExample } from './strategy/Example';
import { StrategyDescription } from './strategy/description';

const components = {
  factoryMethod: {
    title: 'Factory Method',
    component: FactoryMethodExample,
    description: FactoryMethodDescription,
  },
  strategy: {
    title: 'Strategy',
    component: StrategyExample,
    description: StrategyDescription,
  },
};

type ComponentKind = keyof typeof components;

export { components };
export type { ComponentKind };
