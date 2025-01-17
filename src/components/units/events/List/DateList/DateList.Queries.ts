import { gql } from "@apollo/client";

export const FETCH_EVENTS = gql`
  query fetchEvents {
    fetchEvents {
      id
      name
      description
      date
      areaCode
      imgSrc
    }
  }
`;

export const FETCH_POSTS = gql`
  query fetchPosts($page: Float, $pageSize: Float) {
    fetchPosts(page: $page, pageSize: $pageSize) {
      id
      title
      dateStart
      dateEnd
      images {
        id
        src
      }
      category
      uploadedAt
      viewCount
      description
      likedUsers {
        id
      }
    }
  }
`;
