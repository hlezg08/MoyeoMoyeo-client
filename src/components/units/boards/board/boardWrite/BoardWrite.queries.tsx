import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
    }
  }
`;

export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      title
      address
      dateStart
      dateEnd
      category
    }
  }
`;

export const UPLOAD_IMAGES = gql`
  mutation uploadImages($files: [Upload!]!) {
    uploadImages(files: $files)
  }
`;
