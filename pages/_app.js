import { createGlobalStyle } from 'styled-components';
import { Helmet } from "react-helmet";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Contrail One', cursive;  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Contrail+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
