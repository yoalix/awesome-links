import { GraphQLResolveInfo } from 'graphql';
import { User as UserModel, Link as LinkModel } from '@prisma/client/index.d';
import { Context } from '../graphql/context';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Edge = {
  __typename?: 'Edge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Link>;
};

export type Link = {
  __typename?: 'Link';
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users: Array<Maybe<User>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLink?: Maybe<Link>;
  createUserBookmark?: Maybe<User>;
};

export type MutationCreateLinkArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type MutationCreateUserBookmarkArgs = {
  linkId: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  link?: Maybe<Link>;
  links?: Maybe<Response>;
  me?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryLinkArgs = {
  id: Scalars['String'];
};

export type QueryLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type Response = {
  __typename?: 'Response';
  edges?: Maybe<Array<Maybe<Edge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type User = {
  __typename?: 'User';
  bookmarks: Array<Maybe<Link>>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type CreateLinkMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
  imageUrl: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
}>;

export type CreateLinkMutation = {
  __typename?: 'Mutation';
  createLink?: {
    __typename?: 'Link';
    title?: string | null;
    url?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    description?: string | null;
  } | null;
};

export type CreateUserBookmarkMutationVariables = Exact<{
  linkId: Scalars['String'];
}>;

export type CreateUserBookmarkMutation = {
  __typename?: 'Mutation';
  createUserBookmark?: {
    __typename?: 'User';
    id?: string | null;
    name?: string | null;
    image?: string | null;
    bookmarks: Array<{
      __typename?: 'Link';
      title?: string | null;
      url?: string | null;
      imageUrl?: string | null;
      category?: string | null;
      description?: string | null;
    } | null>;
  } | null;
};

export type LinkQueryVariables = Exact<{
  linkId: Scalars['String'];
}>;

export type LinkQuery = {
  __typename?: 'Query';
  link?: {
    __typename?: 'Link';
    id?: string | null;
    title?: string | null;
    description?: string | null;
    url?: string | null;
    category?: string | null;
    imageUrl?: string | null;
    users: Array<{
      __typename?: 'User';
      name?: string | null;
      image?: string | null;
    } | null>;
  } | null;
};

export type AllLinksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;

export type AllLinksQuery = {
  __typename?: 'Query';
  links?: {
    __typename?: 'Response';
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage?: boolean | null;
    } | null;
    edges?: Array<{
      __typename?: 'Edge';
      cursor?: string | null;
      node?: {
        __typename?: 'Link';
        id?: string | null;
        imageUrl?: string | null;
        url?: string | null;
        title?: string | null;
        category?: string | null;
        description?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?: {
    __typename?: 'User';
    id?: string | null;
    name?: string | null;
    image?: string | null;
    bookmarks: Array<{
      __typename?: 'Link';
      id?: string | null;
      title?: string | null;
      description?: string | null;
      url?: string | null;
      category?: string | null;
      imageUrl?: string | null;
    } | null>;
  } | null;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Edge: ResolverTypeWrapper<
    Omit<Edge, 'node'> & { node?: Maybe<ResolversTypes['Link']> }
  >;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Link: ResolverTypeWrapper<LinkModel>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Response: ResolverTypeWrapper<
    Omit<Response, 'edges'> & {
      edges?: Maybe<Array<Maybe<ResolversTypes['Edge']>>>;
    }
  >;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<UserModel>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Edge: Omit<Edge, 'node'> & { node?: Maybe<ResolversParentTypes['Link']> };
  Int: Scalars['Int'];
  Link: LinkModel;
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  Response: Omit<Response, 'edges'> & {
    edges?: Maybe<Array<Maybe<ResolversParentTypes['Edge']>>>;
  };
  String: Scalars['String'];
  User: UserModel;
}>;

export type EdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']
> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']
> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createLink?: Resolver<
    Maybe<ResolversTypes['Link']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateLinkArgs,
      'category' | 'description' | 'imageUrl' | 'title' | 'url'
    >
  >;
  createUserBookmark?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserBookmarkArgs, 'linkId'>
  >;
}>;

export type PageInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = ResolversObject<{
  endCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  link?: Resolver<
    Maybe<ResolversTypes['Link']>,
    ParentType,
    ContextType,
    RequireFields<QueryLinkArgs, 'id'>
  >;
  links?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    Partial<QueryLinksArgs>
  >;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
}>;

export type ResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Edge']>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes['PageInfo']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  bookmarks?: Resolver<
    Array<Maybe<ResolversTypes['Link']>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Edge?: EdgeResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export const CreateLinkDocument = `
    mutation CreateLink($title: String!, $url: String!, $imageUrl: String!, $category: String!, $description: String!) {
  createLink(
    title: $title
    url: $url
    imageUrl: $imageUrl
    category: $category
    description: $description
  ) {
    title
    url
    imageUrl
    category
    description
  }
}
    `;
export const useCreateLinkMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    CreateLinkMutation,
    TError,
    CreateLinkMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<
    CreateLinkMutation,
    TError,
    CreateLinkMutationVariables,
    TContext
  >(
    ['CreateLink'],
    (variables?: CreateLinkMutationVariables) =>
      fetcher<CreateLinkMutation, CreateLinkMutationVariables>(
        client,
        CreateLinkDocument,
        variables,
        headers
      )(),
    options
  );
export const CreateUserBookmarkDocument = `
    mutation CreateUserBookmark($linkId: String!) {
  createUserBookmark(linkId: $linkId) {
    id
    name
    image
    bookmarks {
      title
      url
      imageUrl
      category
      description
    }
  }
}
    `;
export const useCreateUserBookmarkMutation = <
  TError = unknown,
  TContext = unknown
>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    CreateUserBookmarkMutation,
    TError,
    CreateUserBookmarkMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<
    CreateUserBookmarkMutation,
    TError,
    CreateUserBookmarkMutationVariables,
    TContext
  >(
    ['CreateUserBookmark'],
    (variables?: CreateUserBookmarkMutationVariables) =>
      fetcher<CreateUserBookmarkMutation, CreateUserBookmarkMutationVariables>(
        client,
        CreateUserBookmarkDocument,
        variables,
        headers
      )(),
    options
  );
export const LinkDocument = `
    query Link($linkId: String!) {
  link(id: $linkId) {
    id
    title
    description
    url
    category
    imageUrl
    users {
      name
      image
    }
  }
}
    `;
export const useLinkQuery = <TData = LinkQuery, TError = unknown>(
  client: GraphQLClient,
  variables: LinkQueryVariables,
  options?: UseQueryOptions<LinkQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<LinkQuery, TError, TData>(
    ['Link', variables],
    fetcher<LinkQuery, LinkQueryVariables>(
      client,
      LinkDocument,
      variables,
      headers
    ),
    options
  );
export const AllLinksDocument = `
    query AllLinks($first: Int, $after: String) {
  links(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        imageUrl
        url
        title
        category
        description
        id
      }
    }
  }
}
    `;
export const useAllLinksQuery = <TData = AllLinksQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: AllLinksQueryVariables,
  options?: UseQueryOptions<AllLinksQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<AllLinksQuery, TError, TData>(
    variables === undefined ? ['AllLinks'] : ['AllLinks', variables],
    fetcher<AllLinksQuery, AllLinksQueryVariables>(
      client,
      AllLinksDocument,
      variables,
      headers
    ),
    options
  );

export const MeDocument = `
    query Me {
  me {
    id
    name
    image
    bookmarks {
      id
      title
      description
      url
      category
      imageUrl
    }
  }
}
    `;
export const useMeQuery = <TData = MeQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: MeQueryVariables,
  options?: UseQueryOptions<MeQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<MeQuery, TError, TData>(
    variables === undefined ? ['Me'] : ['Me', variables],
    fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
    options
  );