import styled from 'styled-components';
import Center from "./Center";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import { WhatsApp } from "@mui/icons-material";
import CallIcon from '@mui/icons-material/Call';
import Facebook from '@mui/icons-material/FaceBook';


const General = styled.div`
    display:flex;
`;

const InfoTitle = styled.p`
    color: #fff;
    font-size= 18px;
    margin-top: 50px;
    margin-left: 100px;


`;

const InfoAma = styled.div`
    color: #FFF33D;
    width: 320px;
    font-size: 17px;
    margin-top: 50px;
    margin-left: 100px;

`;
const InfoBla = styled.div`
    color: #fff;
    width: 320px;
    font-size: 17px;
    margin-left: 100px;
    padding-bottom: 40px

`;
const Info1 = styled.p`
    margin-left: 30px;
`;
const Email = styled.div`
    color: #FFFF37;
`;
const SocialLinks = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-top: 3px;
    margin-left: 5px
`;
const EmailDiv = styled.div`
    display: flex;

`;
const WhatsAppDiv = styled.div`
    display: flex;

`;
const WhatsAppIcon = styled.div`
    color: #1EBE64;
`;
const PhoneIcon = styled.div`
    color: #FFFF37;
`;

const PhoneDiv = styled.div`
    display: flex;

`;
const FacebookIcon = styled.div`
    color: #fff;
`;

const FacebookDiv = styled.div`
    display: flex;

`;
const SocialMedia = styled.div`
    display: block;
    margin-top: 100px;
    margin-left: -80px
`;
const Copyright = styled.p`
    margin-left: -559px;
    padding: 30px
    background-color: #EA8B20;
    color: #fff;
    width: 1850px;
    text-align: center;

    

`;
const SocialTitle = styled.p`
color: #fff;
font-size= 18px;
margin-top: 50px;
margin-left: 100px;


`;


export default function Footer() {
    return(
        <Center>
            <General>
                <div>
                    <InfoTitle>Domicilio</InfoTitle>
                    <InfoAma>Nuestro horario de domicilio es el siguiente:
                    <br />
                    -De lunes a viernes: de las 19:30 h hasta las 23:00 h
                    <br />
                    -Sábado y domingo:
                        <Info1>- Mediodía: de las 12:00 h hasta 15:30 h</Info1>
                        <Info1>- Noche: de las 19:30 h hasta las 23:00 h</Info1>- Noche: de las 19:30 h hasta las 23:00 h
                    <br />
                    Por favor respete el horario indicado, ya que en caso de que haga el pedido fuera de este horario, no podemos garantizar su reparto.
                    <br />
                    <br />
                    Pedido mínimo a Encamp, la Massana, y Sant Julià es de 15 euros. Pedido mínimo a Andorra la vella, Escaldes y Santa Coloma es de 10 euros.
                    <br />
                    Le rogamos que si pide online cumpla las condiciones establecidas, en caso contrario no le entregaremos su pedido. Gracias.

                    </InfoAma>
                    <br />
                    <br />
                    <InfoBla>
                        hola servicio a domicilio a las siguientes parroquias: Andorra La vella, Santa Coloma, Escaldes Engordany, Sant Juliá, Encamp y La Massana.
                    </InfoBla>
                </div>
                <SocialTitle>Contáctenos</SocialTitle>
        
                <SocialMedia>
                    <EmailDiv>
                        <Email>
                            <EmailIcon />
                        </Email>
                        <SocialLinks href={'mailto:andorradonerkebab@gmail.com'}>Andorradonerkebab@gmail.com</SocialLinks>
                    </EmailDiv>
                    <WhatsAppDiv>
                        <WhatsAppIcon>
                            <WhatsApp />
                        </WhatsAppIcon>
                        <SocialLinks href={'https://wa.me/376682473'}>+376 682473</SocialLinks>
                    </WhatsAppDiv>
                    <PhoneDiv>
                        <PhoneIcon>
                            <CallIcon />
                        </PhoneIcon>
                        <SocialLinks href={'tel:+376817963'}>+376 817963</SocialLinks>
                    </PhoneDiv>
                    <FacebookDiv>
                        <FacebookIcon>
                            <Facebook />
                        </FacebookIcon>
                        <SocialLinks href={'https://www.facebook.com/andorra.d.kabab/?__tn__=%2Cd%2CP-R&eid=ARAZlsXA1gsqKluZMyuCKK5Mny3dn9EjVtF8gyWZbzp4-mPZ7LWFnFohtY0-0OA_wHvH2RclDYHfhoFY'}>Andorra Doner Kebab</SocialLinks>
                    </FacebookDiv>
                </SocialMedia>
                
        </General>
        <Copyright> Copyright  &copy; 2023 Andorra Doner Kebab. All rights reserved.</Copyright>

        </Center>
        
    
    );
}