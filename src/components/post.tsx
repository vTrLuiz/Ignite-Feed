import styled from "styled-components";
import Comentario from "./comentario";

interface PostProps {
  author: string;
  cargo: string;
  content: string;
  image: string;
}

const Avatar = styled.article`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
const AvatarImg = styled.img`
  width: 3rem;
  height: 3rem;
  border: 2px solid var(--gray-800);
  outline: 2px solid var(--green);
  border-radius: 8px;
  object-fit: cover;
`;
const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;

  p {
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    color: var(--gray-400);
  }
`;

const Publicado = styled.time`
  font-size: 0.875rem;
  color: var(--gray-400);
`;

const PostContent = styled.p`
  font-size: 1.125rem;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: var(--green);
  font-weight: 700;
  text-decoration: none;
`;

const PostContainer = styled.div`
  background-color: var(--gray-800);
  padding: 40px;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;

  &:not(:first-child) {
    margin-top: 32px;
  }
`;

export function Post(props: PostProps) {
  return (
    <PostContainer>
      <Avatar>
        <AvatarImg src={props.image} alt="Foto do autor" />
        <AvatarInfo>
          <p>{props.author}</p>
          <span>{props.cargo}</span>
          {/* <p>{props.content}</p> */}
        </AvatarInfo>

        <Publicado title="30 de Julho às 15:45h" dateTime="2024-30-07 15:45:23">
          1h atrás
        </Publicado>
      </Avatar>

      <PostContent>{props.content}</PostContent>
      <Link href="#">Ver mais</Link>
      <Comentario />
    </PostContainer>
  );
}
