import styled from "styled-components"
import { SideBar } from "./sideBar"
import { Post } from "./post"


const WrapperBar = styled.div`
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 2rem;

    align-items: flex-start;
`

const FeedContainer = styled.main`
    background-color: var(--gray-800);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    `

export function Feed() {
    return (
        <WrapperBar>
            <SideBar />
            <FeedContainer>
                <Post
                    author="Igor Silva"
                    content="No dia a dia, Igor cuida de toda a trajetória dos colaboradores aqui da empresa, desde a chegada até o desligamento. Sempre pronto para ajudar com qualquer problema nas máquinas ou ferramentas do Workspace, ele é um verdadeiro super-herói do escritório!"
                />
                <Post
                    author="Bruna Félix"
                    content="Aqui na IPNET, Bruna faz parte do time de SDR Inbound. Isso significa que ela é a primeira pessoa a fazer contato com aqueles que buscam conhecer ou adquirir os produtos e serviços que oferecemos, incluindo o suporte da IPNET e os produtos da Google Cloud."
                />
            </FeedContainer>
        </WrapperBar>
    )
}