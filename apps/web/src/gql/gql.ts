/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query queryExample {\n    dummies {\n      id\n      text\n      createdAt\n      updatedAt\n    }\n  }\n": types.QueryExampleDocument,
    "\n  mutation createUser($data: UserCreateInput!) {\n    createUser(data: $data) {\n      id\n      username\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation changeUserPassword($data: ChangeUserPasswordInput!) {\n    changeUserPassword(data: $data) {\n      id\n      username\n    }\n  }\n": types.ChangeUserPasswordDocument,
    "\n  query getCurrentUser {\n    currentUser {\n      id\n      username\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  query getDummies {\n    dummies {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetDummiesDocument,
    "\n  mutation createDummy($data: DummyCreateInput!) {\n    createDummy(data: $data) {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateDummyDocument,
    "\n  mutation updateDummy($data: DummyUpdateInput!, $where: DummyWhereUniqueInput!) {\n    updateDummy(data: $data, where: $where) {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateDummyDocument,
    "\n  mutation deleteDummy($where: DummyWhereUniqueInput!) {\n    deleteDummy(where: $where) {\n      id\n    }\n  }\n": types.DeleteDummyDocument,
    "\n  query getBooks {\n    books {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n": types.GetBooksDocument,
    "\n  mutation createBook($data: BookCreateInput!) {\n    createBook(data: $data) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n": types.CreateBookDocument,
    "\n  mutation updateBook($data: BookUpdateInput!, $where: BookWhereUniqueInput!) {\n    updateBook(data: $data, where: $where) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n": types.UpdateBookDocument,
    "\n  mutation deleteBook($where: BookWhereUniqueInput!) {\n    deleteBook(where: $where) {\n      id\n    }\n  }\n": types.DeleteBookDocument,
    "\n  query getVideos {\n    videos {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n": types.GetVideosDocument,
    "\n  mutation createVideo($data: VideoCreateInput!) {\n    createVideo(data: $data) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n": types.CreateVideoDocument,
    "\n  mutation updateVideo($data: VideoUpdateInput!, $where: VideoWhereUniqueInput!) {\n    updateVideo(data: $data, where: $where) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n": types.UpdateVideoDocument,
    "\n  mutation deleteVideo($where: VideoWhereUniqueInput!) {\n    deleteVideo(where: $where) {\n      id\n    }\n  }\n": types.DeleteVideoDocument,
    "\n  query getVideoTypes {\n    videoTypes {\n      id\n      name\n      sortOrder\n    }\n  }\n": types.GetVideoTypesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryExample {\n    dummies {\n      id\n      text\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query queryExample {\n    dummies {\n      id\n      text\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($data: UserCreateInput!) {\n    createUser(data: $data) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($data: UserCreateInput!) {\n    createUser(data: $data) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeUserPassword($data: ChangeUserPasswordInput!) {\n    changeUserPassword(data: $data) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation changeUserPassword($data: ChangeUserPasswordInput!) {\n    changeUserPassword(data: $data) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentUser {\n    currentUser {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  query getCurrentUser {\n    currentUser {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getDummies {\n    dummies {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query getDummies {\n    dummies {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createDummy($data: DummyCreateInput!) {\n    createDummy(data: $data) {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createDummy($data: DummyCreateInput!) {\n    createDummy(data: $data) {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateDummy($data: DummyUpdateInput!, $where: DummyWhereUniqueInput!) {\n    updateDummy(data: $data, where: $where) {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateDummy($data: DummyUpdateInput!, $where: DummyWhereUniqueInput!) {\n    updateDummy(data: $data, where: $where) {\n      id\n      text\n      int\n      float\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteDummy($where: DummyWhereUniqueInput!) {\n    deleteDummy(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteDummy($where: DummyWhereUniqueInput!) {\n    deleteDummy(where: $where) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getBooks {\n    books {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n"): (typeof documents)["\n  query getBooks {\n    books {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBook($data: BookCreateInput!) {\n    createBook(data: $data) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation createBook($data: BookCreateInput!) {\n    createBook(data: $data) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBook($data: BookUpdateInput!, $where: BookWhereUniqueInput!) {\n    updateBook(data: $data, where: $where) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation updateBook($data: BookUpdateInput!, $where: BookWhereUniqueInput!) {\n    updateBook(data: $data, where: $where) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBook($where: BookWhereUniqueInput!) {\n    deleteBook(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBook($where: BookWhereUniqueInput!) {\n    deleteBook(where: $where) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getVideos {\n    videos {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n"): (typeof documents)["\n  query getVideos {\n    videos {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createVideo($data: VideoCreateInput!) {\n    createVideo(data: $data) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n"): (typeof documents)["\n  mutation createVideo($data: VideoCreateInput!) {\n    createVideo(data: $data) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateVideo($data: VideoUpdateInput!, $where: VideoWhereUniqueInput!) {\n    updateVideo(data: $data, where: $where) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n"): (typeof documents)["\n  mutation updateVideo($data: VideoUpdateInput!, $where: VideoWhereUniqueInput!) {\n    updateVideo(data: $data, where: $where) {\n      id\n      title\n      currentChapter\n      score\n      completed\n      review\n      createdAt\n      updatedAt\n      userId\n      videoTypeId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteVideo($where: VideoWhereUniqueInput!) {\n    deleteVideo(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteVideo($where: VideoWhereUniqueInput!) {\n    deleteVideo(where: $where) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getVideoTypes {\n    videoTypes {\n      id\n      name\n      sortOrder\n    }\n  }\n"): (typeof documents)["\n  query getVideoTypes {\n    videoTypes {\n      id\n      name\n      sortOrder\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;