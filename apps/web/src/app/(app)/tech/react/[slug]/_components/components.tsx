import { Example as ClickHandlerExample } from './click-handler/Example';
import { description as ClickHandlerDescription } from './click-handler/description';

import { Example as InputExample } from './input/Example';
import { description as InputDescription } from './input/description';

import { Example as HoverExample } from './hover/Example';
import { description as HoverDescription } from './hover/description';

import { Example as UseStateExample } from './use-state/Example';
import { description as UseStateDescription } from './use-state/description';

import { Example as MultipleStateExample } from './multiple-state/Example';
import { description as MultipleStateDescription } from './multiple-state/description';

import { Example as StateObjectExample } from './state-object/Example';
import { description as StateObjectDescription } from './state-object/description';

import { Example as StateArrayExample } from './state-array/Example';
import { description as StateArrayDescription } from './state-array/description';

import { Example as StateAndPropsExample } from './state-and-props/Example';
import { description as StateAndPropsDescription } from './state-and-props/description';

import { Example as ListComponentExample } from './list-component/Example';
import { description as ListComponentDescription } from './list-component/description';

import { Example as ListAndFilterExample } from './list-and-filter/Example';
import { description as ListAndFilterDescription } from './list-and-filter/description';

import { Example as InputTextareaExample } from './input-textarea/Example';
import { description as InputTextareaDescription } from './input-textarea/description';

import { Example as RadioExample } from './radio/Example';
import { description as RadioDescription } from './radio/description';

import { Example as SingleCheckboxExample } from './single-checkbox/Example';
import { description as SingleCheckboxDescription } from './single-checkbox/description';

import { Example as MultiCheckboxExample } from './multi-checkbox/Example';
import { description as MultiCheckboxDescription } from './multi-checkbox/description';

import { Example as SelectExample } from './select/Example';
import { description as SelectDescription } from './select/description';

import { Example as ReminderExample } from './reminder/Example';
import { description as ReminderDescription } from './reminder/description';

import { Example as DialogExample } from './dialog/Example';
import { description as DialogDescription } from './dialog/description';

import { Example as UseRefExample } from './use-ref/Example';
import { description as UseRefDescription } from './use-ref/description';

import { Example as ForwardRefExample } from './forward-ref/Example';
import { description as ForwardRefDescription } from './forward-ref/description';

import { Example as UseReducerExample } from './use-reducer/Example';
import { description as UseReducerDescription } from './use-reducer/description';

import { Example as UseContextExample } from './use-context/Example';
import { description as UseContextDescription } from './use-context/description';

import { Example as UseContextWithStateExample } from './use-context-with-state/Example';
import { description as UseContextWithStateDescription } from './use-context-with-state/description';

import { Example as ContextFileExample } from './context-file/Example';
import { description as ContextFileDescription } from './context-file/description';

import { Example as ContextFileRenderExample } from './context-file-render/Example';
import { description as ContextFileRenderDescription } from './context-file-render/description';

import { Example as ContextWithReducerExample } from './context-with-reducer/Example';
import { description as ContextWithReducerDescription } from './context-with-reducer/description';

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
    component: UseStateExample,
    description: UseStateDescription,
  },
  multipleState: {
    title: 'Multiple states',
    component: MultipleStateExample,
    description: MultipleStateDescription,
  },
  stateObject: {
    title: 'State of object',
    component: StateObjectExample,
    description: StateObjectDescription,
  },
  stateArray: {
    title: 'State of array',
    component: StateArrayExample,
    description: StateArrayDescription,
  },
  stateAndProps: {
    title: 'State and props',
    component: StateAndPropsExample,
    description: StateAndPropsDescription,
  },
  listComponent: {
    title: 'List component',
    component: ListComponentExample,
    description: ListComponentDescription,
  },
  listAndFilter: {
    title: 'List and filter',
    component: ListAndFilterExample,
    description: ListAndFilterDescription,
  },
  inputTextarea: {
    title: 'Input and Textarea',
    component: InputTextareaExample,
    description: InputTextareaDescription,
  },
  radio: {
    title: 'Radio',
    component: RadioExample,
    description: RadioDescription,
  },
  singleCheckbox: {
    title: 'Single Checkbox',
    component: SingleCheckboxExample,
    description: SingleCheckboxDescription,
  },
  multiCheckbox: {
    title: 'Multi Checkbox',
    component: MultiCheckboxExample,
    description: MultiCheckboxDescription,
  },
  select: {
    title: 'Select',
    component: SelectExample,
    description: SelectDescription,
  },
  reminder: {
    title: 'Reminder',
    component: ReminderExample,
    description: ReminderDescription,
  },
  dialog: {
    title: 'Dialog',
    component: DialogExample,
    description: DialogDescription,
  },
  useRef: {
    title: 'useRef',
    component: UseRefExample,
    description: UseRefDescription,
  },
  forwardRef: {
    title: 'forwardRef',
    component: ForwardRefExample,
    description: ForwardRefDescription,
  },
  useReducer: {
    title: 'useReducer',
    component: UseReducerExample,
    description: UseReducerDescription,
  },
  useContext: {
    title: 'useContext',
    component: UseContextExample,
    description: UseContextDescription,
  },
  useContextWithState: {
    title: 'useContext with state',
    component: UseContextWithStateExample,
    description: UseContextWithStateDescription,
  },
  contextFile: {
    title: 'Context File',
    component: ContextFileExample,
    description: ContextFileDescription,
  },
  contextFileRender: {
    title: 'Context File Render',
    component: ContextFileRenderExample,
    description: ContextFileRenderDescription,
  },
  contextWithReducer: {
    title: 'Context with reducer',
    component: ContextWithReducerExample,
    description: ContextWithReducerDescription,
  },
};

type ComponentKind = keyof typeof components;

export { components };
export type { ComponentKind };
