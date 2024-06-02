import { graphql } from '@/gql';
import { gql } from '@/lib/graphql-client';
import { atom } from 'jotai';

const currentUserGql = graphql(`
  query getCurrentUser {
    currentUser {
      id
      username
    }
  }
`);

/**
 * 認証済みなら true
 */
export const isAuthenticatedAtom = atom(false);

/**
 * currentUserAtom を更新するためのAtom。
 * +1 すれば、currentUserAtom を更新できる。
 */
export const currentUserVersionAtom = atom(0);

/**
 * 現在のユーザ
 */
export const currentUserAtom = atom(async (get) => {
  get(currentUserVersionAtom);

  try {
    const res = await gql.request(currentUserGql);
    // console.log('currentUser => ', res.currentUser);
    return res.currentUser;
  } catch {
    return null;
  }
});

/**
 * ログイン後にリダイレクトするパス
 */
export const redirectPathAtom = atom('/');
