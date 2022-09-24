import { Text } from "../../atoms/Text"
import {
  CommentContainer,
  CommentInfos,
  CommentListContainer,
} from "./index.styles"

type CommentList = {
  comments: {
    id: number
    name: string
    email: string
    body: string
  }[]
}

export function CommentList({ comments }: CommentList) {
  return (
    <CommentListContainer>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentInfos>
            <Text as="strong" capitalize>
              {comment.name}
            </Text>
            <Text as="small" variant="sm" color="gray">
              {comment.email}
            </Text>
          </CommentInfos>

          <Text>{comment.body}</Text>
        </CommentContainer>
      ))}
    </CommentListContainer>
  )
}
