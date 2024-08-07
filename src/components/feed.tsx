import styled from "styled-components";
import { SideBar } from "./sideBar";
import { Post } from "./post";

const WrapperBar = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;

  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeedContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export function Feed() {
  return (
    <WrapperBar>
      <SideBar />
      <FeedContainer>
        <Post
          image="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?t=st=1722455205~exp=1722458805~hmac=c8c42a896c2f7c1aac51cad1ca032b844e55e0b46579d9f00ff6b47e2b9002c6&w=740"
          author="Igor Silva"
          cargo="Auxiliar de suporte TI "
          content="No dia a dia, Igor cuida de toda a trajetória dos colaboradores aqui da empresa, desde a chegada até o desligamento. Sempre pronto para ajudar com qualquer problema nas máquinas ou ferramentas do Workspace, ele é um verdadeiro super-herói do escritório!"
          />
        <Post
          image="https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-icone-da-cafeteria_23-2149878995.jpg?t=st=1722455844~exp=1722459444~hmac=43765b95966eff318fb1dee683aeffc6f5449ecbc914765b5f50931ce8f36a01&w=740"
          author="Bruna Félix"
          cargo="Analista de SDR"
          content="Aqui na IPNET, Bruna faz parte do time de SDR Inbound. Isso significa que ela é a primeira pessoa a fazer contato com aqueles que buscam conhecer ou adquirir os produtos e serviços que oferecemos, incluindo o suporte da IPNET e os produtos da Google Cloud."
        />
      </FeedContainer>
    </WrapperBar>
  );
} 
