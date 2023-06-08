import Link from "next/link";
import styled from 'styled-components';
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #ea8b20;
`;
const Logo = styled(Link)`
    color:#fff;
    text-decoration: none;
    font-size: 30px;
    margin-left: 100px
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
    margin-right: 100px
    font-size:20px
    padding-top: 5px;
`;
const NavLink = styled(Link)`
    color:#fff;
    text-decoration: none;
`;

export default function Header() {
    return(
        <StyledHeader>
                <Wrapper>
                <Logo href={'/'}>ANDORRA DONER KEBAB</Logo>
                <StyledNav>
                    <NavLink href={'/'}>Inicio</NavLink>
                    <NavLink href={'/menu'}>Carta</NavLink>
                    <NavLink href={'/account'}>Cuenta</NavLink>
                    <NavLink href={'/cart'}>Carrito (0)</NavLink>
                </StyledNav>
                </Wrapper>  


        </StyledHeader>
    );
}