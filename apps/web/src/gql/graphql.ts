/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type Book = {
  __typename?: 'Book';
  completed: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentChapter?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  review?: Maybe<Scalars['String']['output']>;
  score: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type BookAvgAggregate = {
  __typename?: 'BookAvgAggregate';
  completed?: Maybe<Scalars['Float']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int']['output'];
  completed: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  currentChapter: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  review: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BookCreateInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  completed?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  completed?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookSumAggregate = {
  __typename?: 'BookSumAggregate';
  completed?: Maybe<Scalars['Int']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type BookUpdateInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BookUserIdTitleCompoundUniqueInput = {
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  completed?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentChapter?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  review?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  completed?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentChapter?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_title?: InputMaybe<BookUserIdTitleCompoundUniqueInput>;
};

export type ChangeUserPasswordInput = {
  password: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Dummy = {
  __typename?: 'Dummy';
  createdAt: Scalars['DateTime']['output'];
  float?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  int?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DummyAvgAggregate = {
  __typename?: 'DummyAvgAggregate';
  float?: Maybe<Scalars['Float']['output']>;
  int?: Maybe<Scalars['Float']['output']>;
};

export type DummyCountAggregate = {
  __typename?: 'DummyCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  float: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  int: Scalars['Int']['output'];
  text: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type DummyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  float?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  int?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DummyMaxAggregate = {
  __typename?: 'DummyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  float?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  int?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DummyMinAggregate = {
  __typename?: 'DummyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  float?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  int?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DummySumAggregate = {
  __typename?: 'DummySumAggregate';
  float?: Maybe<Scalars['Float']['output']>;
  int?: Maybe<Scalars['Int']['output']>;
};

export type DummyUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  float?: InputMaybe<Scalars['Float']['input']>;
  int?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DummyWhereInput = {
  AND?: InputMaybe<Array<DummyWhereInput>>;
  NOT?: InputMaybe<Array<DummyWhereInput>>;
  OR?: InputMaybe<Array<DummyWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  float?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  int?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DummyWhereUniqueInput = {
  AND?: InputMaybe<Array<DummyWhereInput>>;
  NOT?: InputMaybe<Array<DummyWhereInput>>;
  OR?: InputMaybe<Array<DummyWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  float?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  int?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeUserPassword: User;
  createBook: Book;
  createDummy: Dummy;
  createUser: User;
  createVideo: Video;
  createVideoType: VideoType;
  deleteBook: Book;
  deleteDummy: Dummy;
  deleteVideo: Video;
  deleteVideoType: VideoType;
  updateBook: Book;
  updateDummy: Dummy;
  updateVideo: Video;
  updateVideoType: VideoType;
};

export type MutationChangeUserPasswordArgs = {
  data: ChangeUserPasswordInput;
};

export type MutationCreateBookArgs = {
  data: BookCreateInput;
};

export type MutationCreateDummyArgs = {
  data?: InputMaybe<DummyCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateVideoArgs = {
  data: VideoCreateInput;
};

export type MutationCreateVideoTypeArgs = {
  data: VideoTypeCreateInput;
};

export type MutationDeleteBookArgs = {
  where: BookWhereUniqueInput;
};

export type MutationDeleteDummyArgs = {
  where: DummyWhereUniqueInput;
};

export type MutationDeleteVideoArgs = {
  where: VideoWhereUniqueInput;
};

export type MutationDeleteVideoTypeArgs = {
  where: VideoTypeWhereUniqueInput;
};

export type MutationUpdateBookArgs = {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
};

export type MutationUpdateDummyArgs = {
  data: DummyUpdateInput;
  where: DummyWhereUniqueInput;
};

export type MutationUpdateVideoArgs = {
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
};

export type MutationUpdateVideoTypeArgs = {
  data: VideoTypeUpdateInput;
  where: VideoTypeWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
  currentUser: User;
  dummies: Array<Dummy>;
  dummy: Dummy;
  token: Scalars['String']['output'];
  user: User;
  video: Video;
  videoType: VideoType;
  videoTypes: Array<VideoType>;
  videos: Array<Video>;
};

export type QueryBookArgs = {
  where: BookWhereUniqueInput;
};

export type QueryDummyArgs = {
  where: DummyWhereUniqueInput;
};

export type QueryTokenArgs = {
  loginUserData: LoginUserInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryVideoArgs = {
  where: VideoWhereUniqueInput;
};

export type QueryVideoTypeArgs = {
  where: VideoTypeWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Video = {
  __typename?: 'Video';
  completed: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentChapter?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  review?: Maybe<Scalars['String']['output']>;
  score: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  videoType: VideoType;
  videoTypeId: Scalars['String']['output'];
};

export type VideoAvgAggregate = {
  __typename?: 'VideoAvgAggregate';
  completed?: Maybe<Scalars['Float']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type VideoCountAggregate = {
  __typename?: 'VideoCountAggregate';
  _all: Scalars['Int']['output'];
  completed: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  currentChapter: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  review: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  videoTypeId: Scalars['Int']['output'];
};

export type VideoCreateInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
  videoType: VideoTypeCreateNestedOneWithoutVideoInput;
};

export type VideoCreateManyVideoTypeInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type VideoCreateManyVideoTypeInputEnvelope = {
  data: Array<VideoCreateManyVideoTypeInput>;
};

export type VideoCreateNestedManyWithoutVideoTypeInput = {
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VideoCreateOrConnectWithoutVideoTypeInput>>;
  create?: InputMaybe<Array<VideoCreateWithoutVideoTypeInput>>;
  createMany?: InputMaybe<VideoCreateManyVideoTypeInputEnvelope>;
};

export type VideoCreateOrConnectWithoutVideoTypeInput = {
  create: VideoCreateWithoutVideoTypeInput;
  where: VideoWhereUniqueInput;
};

export type VideoCreateWithoutVideoTypeInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type VideoListRelationFilter = {
  every?: InputMaybe<VideoWhereInput>;
  none?: InputMaybe<VideoWhereInput>;
  some?: InputMaybe<VideoWhereInput>;
};

export type VideoMaxAggregate = {
  __typename?: 'VideoMaxAggregate';
  completed?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  videoTypeId?: Maybe<Scalars['String']['output']>;
};

export type VideoMinAggregate = {
  __typename?: 'VideoMinAggregate';
  completed?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  videoTypeId?: Maybe<Scalars['String']['output']>;
};

export type VideoScalarWhereInput = {
  AND?: InputMaybe<Array<VideoScalarWhereInput>>;
  NOT?: InputMaybe<Array<VideoScalarWhereInput>>;
  OR?: InputMaybe<Array<VideoScalarWhereInput>>;
  completed?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentChapter?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  review?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  videoTypeId?: InputMaybe<StringFilter>;
};

export type VideoSumAggregate = {
  __typename?: 'VideoSumAggregate';
  completed?: Maybe<Scalars['Int']['output']>;
  currentChapter?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type VideoType = {
  __typename?: 'VideoType';
  Video?: Maybe<Array<Video>>;
  _count: VideoTypeCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VideoTypeAvgAggregate = {
  __typename?: 'VideoTypeAvgAggregate';
  sortOrder?: Maybe<Scalars['Float']['output']>;
};

export type VideoTypeCount = {
  __typename?: 'VideoTypeCount';
  Video: Scalars['Int']['output'];
};

export type VideoTypeCountAggregate = {
  __typename?: 'VideoTypeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  sortOrder: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type VideoTypeCreateInput = {
  Video?: InputMaybe<VideoCreateNestedManyWithoutVideoTypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sortOrder: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VideoTypeCreateNestedOneWithoutVideoInput = {
  connect?: InputMaybe<VideoTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VideoTypeCreateOrConnectWithoutVideoInput>;
  create?: InputMaybe<VideoTypeCreateWithoutVideoInput>;
};

export type VideoTypeCreateOrConnectWithoutVideoInput = {
  create: VideoTypeCreateWithoutVideoInput;
  where: VideoTypeWhereUniqueInput;
};

export type VideoTypeCreateWithoutVideoInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sortOrder: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VideoTypeMaxAggregate = {
  __typename?: 'VideoTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VideoTypeMinAggregate = {
  __typename?: 'VideoTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VideoTypeRelationFilter = {
  is?: InputMaybe<VideoTypeWhereInput>;
  isNot?: InputMaybe<VideoTypeWhereInput>;
};

export type VideoTypeSumAggregate = {
  __typename?: 'VideoTypeSumAggregate';
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type VideoTypeUpdateInput = {
  Video?: InputMaybe<VideoUpdateManyWithoutVideoTypeNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VideoTypeUpdateOneRequiredWithoutVideoNestedInput = {
  connect?: InputMaybe<VideoTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VideoTypeCreateOrConnectWithoutVideoInput>;
  create?: InputMaybe<VideoTypeCreateWithoutVideoInput>;
  update?: InputMaybe<VideoTypeUpdateToOneWithWhereWithoutVideoInput>;
  upsert?: InputMaybe<VideoTypeUpsertWithoutVideoInput>;
};

export type VideoTypeUpdateToOneWithWhereWithoutVideoInput = {
  data: VideoTypeUpdateWithoutVideoInput;
  where?: InputMaybe<VideoTypeWhereInput>;
};

export type VideoTypeUpdateWithoutVideoInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VideoTypeUpsertWithoutVideoInput = {
  create: VideoTypeCreateWithoutVideoInput;
  update: VideoTypeUpdateWithoutVideoInput;
  where?: InputMaybe<VideoTypeWhereInput>;
};

export type VideoTypeWhereInput = {
  AND?: InputMaybe<Array<VideoTypeWhereInput>>;
  NOT?: InputMaybe<Array<VideoTypeWhereInput>>;
  OR?: InputMaybe<Array<VideoTypeWhereInput>>;
  Video?: InputMaybe<VideoListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type VideoTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<VideoTypeWhereInput>>;
  NOT?: InputMaybe<Array<VideoTypeWhereInput>>;
  OR?: InputMaybe<Array<VideoTypeWhereInput>>;
  Video?: InputMaybe<VideoListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type VideoUpdateInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  videoType?: InputMaybe<VideoTypeUpdateOneRequiredWithoutVideoNestedInput>;
};

export type VideoUpdateManyMutationInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type VideoUpdateManyWithWhereWithoutVideoTypeInput = {
  data: VideoUpdateManyMutationInput;
  where: VideoScalarWhereInput;
};

export type VideoUpdateManyWithoutVideoTypeNestedInput = {
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VideoCreateOrConnectWithoutVideoTypeInput>>;
  create?: InputMaybe<Array<VideoCreateWithoutVideoTypeInput>>;
  createMany?: InputMaybe<VideoCreateManyVideoTypeInputEnvelope>;
  delete?: InputMaybe<Array<VideoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VideoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  set?: InputMaybe<Array<VideoWhereUniqueInput>>;
  update?: InputMaybe<Array<VideoUpdateWithWhereUniqueWithoutVideoTypeInput>>;
  updateMany?: InputMaybe<Array<VideoUpdateManyWithWhereWithoutVideoTypeInput>>;
  upsert?: InputMaybe<Array<VideoUpsertWithWhereUniqueWithoutVideoTypeInput>>;
};

export type VideoUpdateWithWhereUniqueWithoutVideoTypeInput = {
  data: VideoUpdateWithoutVideoTypeInput;
  where: VideoWhereUniqueInput;
};

export type VideoUpdateWithoutVideoTypeInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type VideoUpsertWithWhereUniqueWithoutVideoTypeInput = {
  create: VideoCreateWithoutVideoTypeInput;
  update: VideoUpdateWithoutVideoTypeInput;
  where: VideoWhereUniqueInput;
};

export type VideoUserIdTitleCompoundUniqueInput = {
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  completed?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentChapter?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  review?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  videoType?: InputMaybe<VideoTypeRelationFilter>;
  videoTypeId?: InputMaybe<StringFilter>;
};

export type VideoWhereUniqueInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  completed?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentChapter?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_title?: InputMaybe<VideoUserIdTitleCompoundUniqueInput>;
  videoType?: InputMaybe<VideoTypeRelationFilter>;
  videoTypeId?: InputMaybe<StringFilter>;
};

export type QueryExampleQueryVariables = Exact<{ [key: string]: never }>;

export type QueryExampleQuery = {
  __typename?: 'Query';
  dummies: Array<{
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'User'; id: string; username: string };
};

export type ChangeUserPasswordMutationVariables = Exact<{
  data: ChangeUserPasswordInput;
}>;

export type ChangeUserPasswordMutation = {
  __typename?: 'Mutation';
  changeUserPassword: { __typename?: 'User'; id: string; username: string };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  currentUser: { __typename?: 'User'; id: string; username: string };
};

export type GetDummiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetDummiesQuery = {
  __typename?: 'Query';
  dummies: Array<{
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    int?: number | null;
    float?: number | null;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreateDummyMutationVariables = Exact<{
  data: DummyCreateInput;
}>;

export type CreateDummyMutation = {
  __typename?: 'Mutation';
  createDummy: {
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    int?: number | null;
    float?: number | null;
    createdAt: any;
    updatedAt: any;
  };
};

export type UpdateDummyMutationVariables = Exact<{
  data: DummyUpdateInput;
  where: DummyWhereUniqueInput;
}>;

export type UpdateDummyMutation = {
  __typename?: 'Mutation';
  updateDummy: {
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    int?: number | null;
    float?: number | null;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeleteDummyMutationVariables = Exact<{
  where: DummyWhereUniqueInput;
}>;

export type DeleteDummyMutation = {
  __typename?: 'Mutation';
  deleteDummy: { __typename?: 'Dummy'; id: string };
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = {
  __typename?: 'Query';
  books: Array<{
    __typename?: 'Book';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    createdAt: any;
    updatedAt: any;
    userId: string;
  }>;
};

export type CreateBookMutationVariables = Exact<{
  data: BookCreateInput;
}>;

export type CreateBookMutation = {
  __typename?: 'Mutation';
  createBook: {
    __typename?: 'Book';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    createdAt: any;
    updatedAt: any;
    userId: string;
  };
};

export type UpdateBookMutationVariables = Exact<{
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
}>;

export type UpdateBookMutation = {
  __typename?: 'Mutation';
  updateBook: {
    __typename?: 'Book';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    createdAt: any;
    updatedAt: any;
    userId: string;
  };
};

export type DeleteBookMutationVariables = Exact<{
  where: BookWhereUniqueInput;
}>;

export type DeleteBookMutation = {
  __typename?: 'Mutation';
  deleteBook: { __typename?: 'Book'; id: string };
};

export type GetVideosQueryVariables = Exact<{ [key: string]: never }>;

export type GetVideosQuery = {
  __typename?: 'Query';
  videos: Array<{
    __typename?: 'Video';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    createdAt: any;
    updatedAt: any;
    userId: string;
    videoTypeId: string;
  }>;
};

export type CreateVideoMutationVariables = Exact<{
  data: VideoCreateInput;
}>;

export type CreateVideoMutation = {
  __typename?: 'Mutation';
  createVideo: {
    __typename?: 'Video';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    createdAt: any;
    updatedAt: any;
    userId: string;
    videoTypeId: string;
  };
};

export type UpdateVideoMutationVariables = Exact<{
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
}>;

export type UpdateVideoMutation = {
  __typename?: 'Mutation';
  updateVideo: {
    __typename?: 'Video';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    createdAt: any;
    updatedAt: any;
    userId: string;
    videoTypeId: string;
  };
};

export type DeleteVideoMutationVariables = Exact<{
  where: VideoWhereUniqueInput;
}>;

export type DeleteVideoMutation = {
  __typename?: 'Mutation';
  deleteVideo: { __typename?: 'Video'; id: string };
};

export const QueryExampleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'queryExample' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dummies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryExampleQuery, QueryExampleQueryVariables>;
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const ChangeUserPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'changeUserPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChangeUserPasswordInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'changeUserPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;
export const GetCurrentUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCurrentUser' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetDummiesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getDummies' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dummies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'int' } },
                { kind: 'Field', name: { kind: 'Name', value: 'float' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDummiesQuery, GetDummiesQueryVariables>;
export const CreateDummyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createDummy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DummyCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createDummy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'int' } },
                { kind: 'Field', name: { kind: 'Name', value: 'float' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateDummyMutation, CreateDummyMutationVariables>;
export const UpdateDummyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateDummy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DummyUpdateInput' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DummyWhereUniqueInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateDummy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'int' } },
                { kind: 'Field', name: { kind: 'Name', value: 'float' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateDummyMutation, UpdateDummyMutationVariables>;
export const DeleteDummyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteDummy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DummyWhereUniqueInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteDummy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteDummyMutation, DeleteDummyMutationVariables>;
export const GetBooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getBooks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'books' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentChapter' } },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'review' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;
export const CreateBookDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createBook' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BookCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBook' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentChapter' } },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'review' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;
export const UpdateBookDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateBook' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BookUpdateInput' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BookWhereUniqueInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateBook' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentChapter' } },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'review' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateBookMutation, UpdateBookMutationVariables>;
export const DeleteBookDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteBook' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BookWhereUniqueInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteBook' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteBookMutation, DeleteBookMutationVariables>;
export const GetVideosDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getVideos' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'videos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentChapter' } },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'review' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'videoTypeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVideosQuery, GetVideosQueryVariables>;
export const CreateVideoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createVideo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'VideoCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createVideo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentChapter' } },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'review' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'videoTypeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateVideoMutation, CreateVideoMutationVariables>;
export const UpdateVideoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVideo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'VideoUpdateInput' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'VideoWhereUniqueInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateVideo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentChapter' } },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'review' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'videoTypeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateVideoMutation, UpdateVideoMutationVariables>;
export const DeleteVideoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteVideo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'VideoWhereUniqueInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteVideo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteVideoMutation, DeleteVideoMutationVariables>;
