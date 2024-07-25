import styled from "styled-components"
import { Logo } from "../assets/icon/logo"

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
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    `

export function Header() {
    return (
        <TagHeader>
            <LogoTipo
                href="/">
                <Logo />
                    Ignite Feed
            </LogoTipo>

        </TagHeader>
    )
}