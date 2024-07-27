import styled from "styled-components"

const WrapperBar = styled.div`
    background-color: var(--gray-800);
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;
    `

const AsideBar = styled.aside`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray-50);
    font-size: 1.5625rem;
    font-weight: 700;
    text-decoration: none;
    `

export function SideBar(){
    return(
        <WrapperBar>
            <AsideBar>
                
            </AsideBar>
        </WrapperBar>
    )
}