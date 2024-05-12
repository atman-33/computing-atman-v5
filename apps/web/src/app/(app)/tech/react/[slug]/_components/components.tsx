import { ClickHandlerExample } from './click-handler/Example';
import { ClickHandlerDescription } from './click-handler/description';
import { ContextFileRenderExample } from './context-file-render/Example';
import { ContextFileRenderDescription } from './context-file-render/description';
import { ContextFileExample } from './context-file/Example';
import { ContextFileDescription } from './context-file/description';
import { ContextWithReducerExample } from './context-with-reducer/Example';
import { ContextWithReducerDescription } from './context-with-reducer/description';
import { CustomHookExample } from './custom-hook/Example';
import { CustomHookDescription } from './custom-hook/description';
import { DialogExample } from './dialog/Example';
import { DialogDescription } from './dialog/description';
import { ForwardRefExample } from './forward-ref/Example';
import { ForwardRefDescription } from './forward-ref/description';
import { HoverExample } from './hover/Example';
import { HoverDescription } from './hover/description';
import { InputTextareaExample } from './input-textarea/Example';
import { InputTextareaDescription } from './input-textarea/description';
import { InputExample } from './input/Example';
import { InputDescription } from './input/description';
import { ListAndFilterExample } from './list-and-filter/Example';
import { ListAndFilterDescription } from './list-and-filter/description';
import { ListComponentExample } from './list-component/Example';
import { ListComponentDescription } from './list-component/description';
import { MemoExample } from './memo/Example';
import { MemoDescription } from './memo/description';
import { MultiCheckboxExample } from './multi-checkbox/Example';
import { MultiCheckboxDescription } from './multi-checkbox/description';
import { MultipleStateExample } from './multiple-state/Example';
import { MultipleStateDescription } from './multiple-state/description';
import { RadioExample } from './radio/Example';
import { RadioDescription } from './radio/description';
import { ReminderExample } from './reminder/Example';
import { ReminderDescription } from './reminder/description';
import { SelectExample } from './select/Example';
import { SelectDescription } from './select/description';
import { SingleCheckboxExample } from './single-checkbox/Example';
import { SingleCheckboxDescription } from './single-checkbox/description';
import { StateAndPropsExample } from './state-and-props/Example';
import { StateAndPropsDescription } from './state-and-props/description';
import { StateArrayExample } from './state-array/Example';
import { StateArrayDescription } from './state-array/description';
import { StateObjectExample } from './state-object/Example';
import { StateObjectDescription } from './state-object/description';
import { UseCallbackDepsExample } from './use-callback-deps/Example';
import { UseCallbackDepsDescription } from './use-callback-deps/description';
import { UseCallbackExample } from './use-callback/Example';
import { UseCallbackDescription } from './use-callback/description';
import { UseContextWithStateExample } from './use-context-with-state/Example';
import { UseContextWithStateDescription } from './use-context-with-state/description';
import { UseContextExample } from './use-context/Example';
import { UseContextDescription } from './use-context/description';
import { UseDeferredValueExample } from './use-deferred-value/Example';
import { UseDeferredValueDescription } from './use-deferred-value/description';
import { UseEffectClickExample } from './use-effect-click/Example';
import { UseEffectClickDescription } from './use-effect-click/description';
import { UseEffectInitExample } from './use-effect-init/Example';
import { UseEffectInitDescription } from './use-effect-init/description';
import { UseEffectUpdateExample } from './use-effect-update/Example';
import { UseEffectUpdateDescription } from './use-effect-update/description';
import { UseLayoutEffectExample } from './use-layout-effect/Example';
import { UseLayoutEffectDescription } from './use-layout-effect/description';
import { UseMemoExample } from './use-memo/Example';
import { UseMemoDescription } from './use-memo/description';
import { UseReducerExample } from './use-reducer/Example';
import { UseReducerDescription } from './use-reducer/description';
import { UseRefExample } from './use-ref/Example';
import { UseRefDescription } from './use-ref/description';
import { UseStateExample } from './use-state/Example';
import { UseStateDescription } from './use-state/description';
import { UseTransitionExample } from './use-transition/Example';
import { UseTransitionDescription } from './use-transition/description';

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
  useEffectInit: {
    title: 'useEffect init',
    component: UseEffectInitExample,
    description: UseEffectInitDescription,
  },
  useEffectUpdate: {
    title: 'useEffect update',
    component: UseEffectUpdateExample,
    description: UseEffectUpdateDescription,
  },
  useLayoutEffect: {
    title: 'useLayoutEffect',
    component: UseLayoutEffectExample,
    description: UseLayoutEffectDescription,
  },
  useEffectClick: {
    title: 'useEffect click',
    component: UseEffectClickExample,
    description: UseEffectClickDescription,
  },
  customHook: {
    title: 'Custom Hook',
    component: CustomHookExample,
    description: CustomHookDescription,
  },
  memo: {
    title: 'Memo',
    component: MemoExample,
    description: MemoDescription,
  },
  useCallback: {
    title: 'useCallback',
    component: UseCallbackExample,
    description: UseCallbackDescription,
  },
  useCallbackDeps: {
    title: 'useCallback deps',
    component: UseCallbackDepsExample,
    description: UseCallbackDepsDescription,
  },
  useMemo: {
    title: 'useMemo',
    component: UseMemoExample,
    description: UseMemoDescription,
  },
  useTransition: {
    title: 'useTransition',
    component: UseTransitionExample,
    description: UseTransitionDescription,
  },
  useDeferredValue: {
    title: 'useDeferredValue',
    component: UseDeferredValueExample,
    description: UseDeferredValueDescription,
  },
};

type ComponentKind = keyof typeof components;

export { components };
export type { ComponentKind };
