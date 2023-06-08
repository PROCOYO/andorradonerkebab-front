import OurRestaurant from "@/components/OurRestaurant";
import Header from "@/components/Header";
import styled from 'styled-components';
import Footer from "@/components/Footer";

const Bg = styled.div`
  background-color: #3F3F3F;
  height: 1450px
`;

export default function HomePage() {
  return(
    <Bg>
      <Header />
      <OurRestaurant />
      <Footer />
    </Bg>
  );
}