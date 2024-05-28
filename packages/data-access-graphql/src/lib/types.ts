import { GraphQLClient, RequestOptions } from 'graphql-request';
import { gql } from 'graphql-request';
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
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
  type: VideoType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
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
  type: VideoTypeCreateNestedOneWithoutVideoInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type VideoCreateManyTypeInput = {
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

export type VideoCreateManyTypeInputEnvelope = {
  data: Array<VideoCreateManyTypeInput>;
};

export type VideoCreateNestedManyWithoutTypeInput = {
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VideoCreateOrConnectWithoutTypeInput>>;
  create?: InputMaybe<Array<VideoCreateWithoutTypeInput>>;
  createMany?: InputMaybe<VideoCreateManyTypeInputEnvelope>;
};

export type VideoCreateOrConnectWithoutTypeInput = {
  create: VideoCreateWithoutTypeInput;
  where: VideoWhereUniqueInput;
};

export type VideoCreateWithoutTypeInput = {
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
  Video?: InputMaybe<VideoCreateNestedManyWithoutTypeInput>;
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
  Video?: InputMaybe<VideoUpdateManyWithoutTypeNestedInput>;
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
  type?: InputMaybe<VideoTypeUpdateOneRequiredWithoutVideoNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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

export type VideoUpdateManyWithWhereWithoutTypeInput = {
  data: VideoUpdateManyMutationInput;
  where: VideoScalarWhereInput;
};

export type VideoUpdateManyWithoutTypeNestedInput = {
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VideoCreateOrConnectWithoutTypeInput>>;
  create?: InputMaybe<Array<VideoCreateWithoutTypeInput>>;
  createMany?: InputMaybe<VideoCreateManyTypeInputEnvelope>;
  delete?: InputMaybe<Array<VideoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VideoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  set?: InputMaybe<Array<VideoWhereUniqueInput>>;
  update?: InputMaybe<Array<VideoUpdateWithWhereUniqueWithoutTypeInput>>;
  updateMany?: InputMaybe<Array<VideoUpdateManyWithWhereWithoutTypeInput>>;
  upsert?: InputMaybe<Array<VideoUpsertWithWhereUniqueWithoutTypeInput>>;
};

export type VideoUpdateWithWhereUniqueWithoutTypeInput = {
  data: VideoUpdateWithoutTypeInput;
  where: VideoWhereUniqueInput;
};

export type VideoUpdateWithoutTypeInput = {
  completed?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentChapter?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type VideoUpsertWithWhereUniqueWithoutTypeInput = {
  create: VideoCreateWithoutTypeInput;
  update: VideoUpdateWithoutTypeInput;
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
  type?: InputMaybe<VideoTypeRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
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
  type?: InputMaybe<VideoTypeRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_title?: InputMaybe<VideoUserIdTitleCompoundUniqueInput>;
  videoTypeId?: InputMaybe<StringFilter>;
};

export type CreateUserVariables = Exact<{
  data: UserCreateInput;
}>;

export type CreateUser = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'User'; id: string; username: string };
};

export type GetCurrentUserVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUser = {
  __typename?: 'Query';
  currentUser: { __typename?: 'User'; id: string; username: string };
};

export type ChangeUserPasswordVariables = Exact<{
  data: ChangeUserPasswordInput;
}>;

export type ChangeUserPassword = {
  __typename?: 'Mutation';
  changeUserPassword: { __typename?: 'User'; id: string; username: string };
};

export type GetDummiesVariables = Exact<{ [key: string]: never }>;

export type GetDummies = {
  __typename?: 'Query';
  dummies: Array<{
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    int?: number | null;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreateDummyVariables = Exact<{
  data: DummyCreateInput;
}>;

export type CreateDummy = {
  __typename?: 'Mutation';
  createDummy: {
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    int?: number | null;
    createdAt: any;
    updatedAt: any;
  };
};

export type UpdateDummyVariables = Exact<{
  data: DummyUpdateInput;
  where: DummyWhereUniqueInput;
}>;

export type UpdateDummy = {
  __typename?: 'Mutation';
  updateDummy: {
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    int?: number | null;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeleteDummyVariables = Exact<{
  where: DummyWhereUniqueInput;
}>;

export type DeleteDummy = {
  __typename?: 'Mutation';
  deleteDummy: { __typename?: 'Dummy'; id: string };
};

export type GetBooksVariables = Exact<{ [key: string]: never }>;

export type GetBooks = {
  __typename?: 'Query';
  books: Array<{
    __typename?: 'Book';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    userId: string;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreateBookVariables = Exact<{
  data: BookCreateInput;
}>;

export type CreateBook = {
  __typename?: 'Mutation';
  createBook: {
    __typename?: 'Book';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    userId: string;
    createdAt: any;
    updatedAt: any;
  };
};

export type UpdateBookVariables = Exact<{
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
}>;

export type UpdateBook = {
  __typename?: 'Mutation';
  updateBook: {
    __typename?: 'Book';
    id: string;
    title: string;
    currentChapter?: number | null;
    score: number;
    completed: number;
    review?: string | null;
    userId: string;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeleteBookVariables = Exact<{
  where: BookWhereUniqueInput;
}>;

export type DeleteBook = {
  __typename?: 'Mutation';
  deleteBook: { __typename?: 'Book'; id: string };
};

export type GetVideoTypesVariables = Exact<{ [key: string]: never }>;

export type GetVideoTypes = {
  __typename?: 'Query';
  videoTypes: Array<{
    __typename?: 'VideoType';
    id: string;
    name: string;
    sortOrder: number;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type GetVideosVariables = Exact<{ [key: string]: never }>;

export type GetVideos = {
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
    type: { __typename?: 'VideoType'; id: string; name: string };
  }>;
};

export type CreateVideoVariables = Exact<{
  data: VideoCreateInput;
}>;

export type CreateVideo = {
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
    type: { __typename?: 'VideoType'; id: string; name: string };
  };
};

export type UpdateVideoVariables = Exact<{
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
}>;

export type UpdateVideo = {
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
    type: { __typename?: 'VideoType'; id: string; name: string };
  };
};

export type DeleteVideoVariables = Exact<{
  where: VideoWhereUniqueInput;
}>;

export type DeleteVideo = {
  __typename?: 'Mutation';
  deleteVideo: { __typename?: 'Video'; id: string };
};

export type QueryExampleVariables = Exact<{ [key: string]: never }>;

export type QueryExample = {
  __typename?: 'Query';
  dummies: Array<{
    __typename?: 'Dummy';
    id: string;
    text?: string | null;
    createdAt: any;
    updatedAt: any;
  }>;
};

export const CreateUserDocument = /*#__PURE__*/ gql`
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      username
    }
  }
`;
export const GetCurrentUserDocument = /*#__PURE__*/ gql`
  query getCurrentUser {
    currentUser {
      id
      username
    }
  }
`;
export const ChangeUserPasswordDocument = /*#__PURE__*/ gql`
  mutation changeUserPassword($data: ChangeUserPasswordInput!) {
    changeUserPassword(data: $data) {
      id
      username
    }
  }
`;
export const GetDummiesDocument = /*#__PURE__*/ gql`
  query getDummies {
    dummies {
      id
      text
      int
      createdAt
      updatedAt
    }
  }
`;
export const CreateDummyDocument = /*#__PURE__*/ gql`
  mutation createDummy($data: DummyCreateInput!) {
    createDummy(data: $data) {
      id
      text
      int
      createdAt
      updatedAt
    }
  }
`;
export const UpdateDummyDocument = /*#__PURE__*/ gql`
  mutation updateDummy($data: DummyUpdateInput!, $where: DummyWhereUniqueInput!) {
    updateDummy(data: $data, where: $where) {
      id
      text
      int
      createdAt
      updatedAt
    }
  }
`;
export const DeleteDummyDocument = /*#__PURE__*/ gql`
  mutation deleteDummy($where: DummyWhereUniqueInput!) {
    deleteDummy(where: $where) {
      id
    }
  }
`;
export const GetBooksDocument = /*#__PURE__*/ gql`
  query getBooks {
    books {
      id
      title
      currentChapter
      score
      completed
      review
      userId
      createdAt
      updatedAt
    }
  }
`;
export const CreateBookDocument = /*#__PURE__*/ gql`
  mutation createBook($data: BookCreateInput!) {
    createBook(data: $data) {
      id
      title
      currentChapter
      score
      completed
      review
      userId
      createdAt
      updatedAt
    }
  }
`;
export const UpdateBookDocument = /*#__PURE__*/ gql`
  mutation updateBook($data: BookUpdateInput!, $where: BookWhereUniqueInput!) {
    updateBook(data: $data, where: $where) {
      id
      title
      currentChapter
      score
      completed
      review
      userId
      createdAt
      updatedAt
    }
  }
`;
export const DeleteBookDocument = /*#__PURE__*/ gql`
  mutation deleteBook($where: BookWhereUniqueInput!) {
    deleteBook(where: $where) {
      id
    }
  }
`;
export const GetVideoTypesDocument = /*#__PURE__*/ gql`
  query getVideoTypes {
    videoTypes {
      id
      name
      sortOrder
      createdAt
      updatedAt
    }
  }
`;
export const GetVideosDocument = /*#__PURE__*/ gql`
  query getVideos {
    videos {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
      videoTypeId
      type {
        id
        name
      }
    }
  }
`;
export const CreateVideoDocument = /*#__PURE__*/ gql`
  mutation createVideo($data: VideoCreateInput!) {
    createVideo(data: $data) {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
      videoTypeId
      type {
        id
        name
      }
    }
  }
`;
export const UpdateVideoDocument = /*#__PURE__*/ gql`
  mutation updateVideo($data: VideoUpdateInput!, $where: VideoWhereUniqueInput!) {
    updateVideo(data: $data, where: $where) {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
      videoTypeId
      type {
        id
        name
      }
    }
  }
`;
export const DeleteVideoDocument = /*#__PURE__*/ gql`
  mutation deleteVideo($where: VideoWhereUniqueInput!) {
    deleteVideo(where: $where) {
      id
    }
  }
`;
export const QueryExampleDocument = /*#__PURE__*/ gql`
  query queryExample {
    dummies {
      id
      text
      createdAt
      updatedAt
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
  action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(
      variables: CreateUserVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateUser> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUser>(CreateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createUser',
        'mutation',
        variables,
      );
    },
    getCurrentUser(
      variables?: GetCurrentUserVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetCurrentUser> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCurrentUser>(GetCurrentUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCurrentUser',
        'query',
        variables,
      );
    },
    changeUserPassword(
      variables: ChangeUserPasswordVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ChangeUserPassword> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ChangeUserPassword>(ChangeUserPasswordDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'changeUserPassword',
        'mutation',
        variables,
      );
    },
    getDummies(
      variables?: GetDummiesVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetDummies> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDummies>(GetDummiesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getDummies',
        'query',
        variables,
      );
    },
    createDummy(
      variables: CreateDummyVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateDummy> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateDummy>(CreateDummyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createDummy',
        'mutation',
        variables,
      );
    },
    updateDummy(
      variables: UpdateDummyVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateDummy> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateDummy>(UpdateDummyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateDummy',
        'mutation',
        variables,
      );
    },
    deleteDummy(
      variables: DeleteDummyVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteDummy> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteDummy>(DeleteDummyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'deleteDummy',
        'mutation',
        variables,
      );
    },
    getBooks(
      variables?: GetBooksVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetBooks> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBooks>(GetBooksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getBooks',
        'query',
        variables,
      );
    },
    createBook(
      variables: CreateBookVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateBook> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateBook>(CreateBookDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createBook',
        'mutation',
        variables,
      );
    },
    updateBook(
      variables: UpdateBookVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateBook> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateBook>(UpdateBookDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateBook',
        'mutation',
        variables,
      );
    },
    deleteBook(
      variables: DeleteBookVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteBook> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteBook>(DeleteBookDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'deleteBook',
        'mutation',
        variables,
      );
    },
    getVideoTypes(
      variables?: GetVideoTypesVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetVideoTypes> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetVideoTypes>(GetVideoTypesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getVideoTypes',
        'query',
        variables,
      );
    },
    getVideos(
      variables?: GetVideosVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetVideos> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetVideos>(GetVideosDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getVideos',
        'query',
        variables,
      );
    },
    createVideo(
      variables: CreateVideoVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateVideo> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateVideo>(CreateVideoDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createVideo',
        'mutation',
        variables,
      );
    },
    updateVideo(
      variables: UpdateVideoVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateVideo> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateVideo>(UpdateVideoDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateVideo',
        'mutation',
        variables,
      );
    },
    deleteVideo(
      variables: DeleteVideoVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteVideo> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteVideo>(DeleteVideoDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'deleteVideo',
        'mutation',
        variables,
      );
    },
    queryExample(
      variables?: QueryExampleVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<QueryExample> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<QueryExample>(QueryExampleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'queryExample',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
