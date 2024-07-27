import styled from "styled-components"
import Logo from "../assets/icon/logo"

const TagHeader = styled.header`
    background-color: var(--gray-800);
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;
    `

const LogoTipo = styled.a`	
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray-50);
    font-size: 1.5625rem;
    font-weight: 700;
    text-decoration: none;
    `
const LogoStyled = styled(Logo)`
    width: 4rem;
    height: auto;
    `

export function Header() {
    return (
        <TagHeader>
            <LogoTipo
                href="/">
                <LogoStyled/>
                    Ignite Feed
            </LogoTipo>

        </TagHeader>
    )
}