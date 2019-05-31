import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { title } from "./_document";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
  }
  @font-face {
    font-family: 'Lato';
    src: url(../static/fonts/Lato-Light.ttf) format('truetype');
    font-weight: light;
    font-style: normal;
  }
  body {
    font-family: 'Lato';
    background: var(--background--1);
    margin: 0;
    padding: 0;
  }
`;


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <main>
            <Component {...pageProps} router={router} />
          </main>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}
