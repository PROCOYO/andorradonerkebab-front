import OurRestaurant from "@/components/OurRestaurant";
import Header from "@/components/Header";
import { styled } from "styled-components";

const Bg = styled.div`
  background-color: #3F3F3F;
  height: 1000px
`;

export default function HomePage() {
  return(
    <Bg>
      <Header />
      <OurRestaurant />
    </Bg>
  );
}