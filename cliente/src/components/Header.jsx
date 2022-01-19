import styled from 'styled-components';
import {Nav, NavItem} from 'reactstrap';
import logo from '../assets/logo.png'

function Header() {
    return (
        <HeaderMain>
            <Nav>
                <NavItem>
                    <HeaderLogo src={logo}/>
                </NavItem>
            </Nav>
        </HeaderMain>
    );
}

const HeaderMain = styled.header`
  background-color:#16303d;
  padding:0 20px;
`;

const HeaderLogo = styled.img`
`;

export default Header;