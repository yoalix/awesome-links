/* 955550590082da0e362e70e15687323e8bbc4351
 * This file is automatically generated by graphql-let. */

import * as Types from '../../__types__';

import { useQuery, UseQueryOptions } from 'react-query';

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type AllLinksQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  after?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type AllLinksQuery = { __typename?: 'Query', links?: { __typename?: 'Response', pageInfo?: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'Edge', cursor?: string | null, node?: { __typename?: 'Link', id?: string | null, imageUrl?: string | null, url?: string | null, title?: string | null, category?: string | null, description?: string | null } | null } | null> | null } | null };


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
export const useAllLinksQuery = <
      TData = AllLinksQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: AllLinksQueryVariables,
      options?: UseQueryOptions<AllLinksQuery, TError, TData>
    ) =>
    useQuery<AllLinksQuery, TError, TData>(
      variables === undefined ? ['AllLinks'] : ['AllLinks', variables],
      fetcher<AllLinksQuery, AllLinksQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AllLinksDocument, variables),
      options
    );