import styled from "styled-components";

const FormComentario = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const ComentarioInput = styled.input`
  background: var(--black);
  color: var(--gray-400);
  width: 100%;
  height: 6rem;
  padding: 0.5rem;
  border: 1px solid var(--gray-800);
  border-radius: 8px;
  font-size: 1rem;

    &::placeholder {
        color: var(--gray-600);
        position: absolute;
        top: 15px;
        
    }
`;

const ComentarioButton = styled.button`
  background-color: var(--green);
  color: var(--white);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background-color: var(--green-light);
    filter: brightness(0.9);
  }
`;

export default function Comentario() {
  return (
    <div>
      <FormComentario>
        <ComentarioInput type="text" placeholder="Escreva um comentário..." />
      </FormComentario>
      <ComentarioButton>Publicar</ComentarioButton>
    </div>
  );
}
