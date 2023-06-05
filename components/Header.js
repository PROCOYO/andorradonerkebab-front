import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #ea8b20;
`;
const Logo = styled(Link)`
    color:#fff;
    text-decoration: none;
    font-size: 20px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`;
const NavLink = styled(Link)`
    color:#fff;
    text-decoration: none;
`;

export default function Header() {
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                <Logo href={'/'}>ANDORRA DONER KEBAB</Logo>
                <StyledNav>
                    <NavLink href={'/'}>Inicio</NavLink>
                    <NavLink href={'/menu'}>Carta</NavLink>
                    <NavLink href={'/account'}>Cuenta</NavLink>
                    <NavLink href={'/cart'}>Carrito (0)</NavLink>
                </StyledNav>
                </Wrapper>  

            </Center>

        </StyledHeader>
    );
}