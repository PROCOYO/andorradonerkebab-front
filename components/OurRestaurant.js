import styled from 'styled-components';
import Center from "./Center";

const Bg = styled.div`
    background-color: #e28522;
    color: #fff;
`;
const Title = styled.h1`
    font-weight:normal;
    font-size: 44px;
`;
const Desc = styled.p`
    color: #e8e1da;
    margin-bottom:60px;
    font-size:20px
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:40px;

`;
const Imagen = styled.img`
    min-width: 200px;
    margin:0;
    

`;
const Column = styled.div`
    display:flex;
    align-items: center;
`;
const Text = styled.div`
    margin-left: 100px;
`;


export default function OurRestaurant() {
    return(
        <Bg>
                <Wrapper>
                    <Column>
                        <Text>
                            <Title>
                            Sabores auténticos, momentos deliciosos                            </Title>
                            <Desc>

                                Andorra Doner Kebab fusiona la autenticidad de la cocina oriental con la comodidad de estar en Andorra. Sus sabrosos kebabs, platos tradicionales y atención amigable te sumergirán en una experiencia culinaria única. Ingredientes frescos, sabores auténticos y un ambiente acogedor hacen de este lugar un destino imperdible para los amantes de la comida deliciosa y auténtica.                            
                            </Desc>
                        </Text>
                    </Column>

                    <Column>
                        <Imagen src='https://lh3.googleusercontent.com/p/AF1QipNTftF6czVKy4_Ms5378XvtIDf-SZC5I_lt3yvl=w1080-h608-p-no-v0' />
                    </Column>
                </Wrapper>

        </Bg>

    );
}