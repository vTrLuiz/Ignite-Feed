import styled from "styled-components"
import Edit from "../assets/icon/edit"


const SideBarContainer = styled.aside`
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    img {
        width: auto;
        height: 72px;
        object-fit: cover;
    }

    footer {
        border-top: 1px solid var(--gray-600);
        margin-top: 1.5rem;
        display: flex;
        padding: 1.5rem 2rem 2rem;
        align-items: center;
        justify-content: center;
        
    }
    `

const ButtonPerfil = styled.button`
    display: flex;
    align-items: center;
    background-color: var(--gray-800);
    color: var(--green-light);
    border: 1px solid var(--green-light);
    padding: 1rem;
    border-radius: .5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
        color: var(--white);
        background-color: var(--green-light);
        border: 1px solid var(--green-light);
        filter: brightness(0.9);

        svg {
            fill: var(--white);
            }
    }
    `

const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;

    img {
        position: relative;
        margin-top: -1.875rem;
        width: 4rem;
        height: 4rem;
        border: 2px solid var(--gray-800);
        outline: 2px solid var(--green);
        border-radius: 8px;
        object-fit: cover;
    }

    strong {
        margin-top: .5rem;
    }

    span {
        font-size: 0.875rem;
        color: var(--gray-400);
    }
`

const EditStyled = styled(Edit)`
    margin-right: 8px; 
    color: var(--green-light);
`


export function SideBar() {
    return (
        <div>
            <SideBarContainer>

                <img
                    src="https://images.unsplash.com/photo-1600695268275-1a6468700bd5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
                <PerfilContainer>
                    <img
                        src="https://github.com/vtrluiz.png"
                    />
                    <strong>Victor Luiz</strong>
                    <span>Web Developer</span>
                </PerfilContainer>
                <footer>
                    <ButtonPerfil>
                        <EditStyled />
                        Editar seu perfil</ButtonPerfil>
                </footer>
            </SideBarContainer>

        </div>
    )
}