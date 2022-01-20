import styled from 'styled-components';
import {Container} from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import reacLogo from '../assets/react.png'
import KontulariLogo from '../assets/kontular-2i.png'
import bootsLogo from '../assets/bootstrap.png'

import jsLogo from '../assets/js.png'
import npmLogo from '../assets/npm.png'

const Footer = (() => {
    return (
        <MainFooter>
            <FooterSection>
                <Container>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={
                            {
                                768: {
                                    width: 768,
                                    slidesPerView: 4,
                                    centeredSlides : false,
                                  },
                            }
                        }
                    >
                        <SwiperSlide>
                            <FooterSlide src={KontulariLogo}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FooterSlide src={reacLogo}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FooterSlide src={bootsLogo}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FooterSlide src={jsLogo}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FooterSlide src={npmLogo}/>
                        </SwiperSlide>

                    </Swiper>
                </Container>
            </FooterSection>
            <FooterBar>
                <Container>
                    <FooterLabel>Desenvolvido por : Albert Fonseca</FooterLabel>
                </Container>
            </FooterBar>
        </MainFooter>
    );
});

const MainFooter = styled.section``;

const FooterSection = styled.section`
    background-color:#16303d;
    padding: 40px 0;
`
const FooterSlide = styled.img`
    display:block;
    max-height:70px;
    height:100%;
    max-width:100px;
    object-fit:contain;
    filter: brightness(0) invert(1);
`

const FooterBar = styled.section`
    background-color:rgb(29, 233, 182);
    padding:10px;
`

const FooterLabel = styled.span`
    display:block;
    color:#16303d:
    font-size:16px;
    text-align:center;
`
export default Footer;