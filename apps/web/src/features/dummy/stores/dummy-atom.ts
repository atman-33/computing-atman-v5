import { Dummy } from '@repo/data-access-graphql';
import { PrimitiveAtom, atom, useAtomValue } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const dummyAtomFamily = atomFamily<Partial<Dummy>, PrimitiveAtom<Dummy>>(
  (dummy: Partial<Dummy>) => atom(dummy as Dummy),
  (a: Partial<Dummy>, b: Partial<Dummy>) => a.id === b.id,
);

export const dummyIdsAtom = atom<string[]>([]);

export const dummiesAtom = atom<Dummy[]>((get) => {
  const ids = get(dummyIdsAtom);
  return ids.map((id) =>
    get(
      dummyAtomFamily({
        id,
      }),
    ),
  );
});

export const dummySelectors = {
  useGetDummies: () => useAtomValue(dummiesAtom),
  useGetDummy: (id: string) => useAtomValue(dummyAtomFamily({ id })),
};
