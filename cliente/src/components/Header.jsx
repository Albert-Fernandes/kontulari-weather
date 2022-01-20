import styled from 'styled-components';
import {Nav, Container} from 'reactstrap';
import logo from '../assets/sun-clouded.png'

const Header = () => {
    return (
        <HeaderMain>
            <Container>
                <Nav>
                    <NavLogo>
                        <HeaderLogo src={logo}/>
                        <HeaderName>Kontulari Weather</HeaderName>
                    </NavLogo>
                </Nav>
            </Container>
        </HeaderMain>
    );
}

const HeaderMain = styled.header`
  background-color:#16303d;
  padding:20px 0;
  margin-bottom:40px;
  `;

const NavLogo = styled.div`
    display:flex;
    align-items:center;
`;
const HeaderLogo = styled.img`
    margin-right:10px;
`;

const HeaderName = styled.h2`
    color:#fff;
    font-weght:700;
    font-size:26px;
`


export default Header;