import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { title } from "./_document";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'BebasNeue Regular';
  font-weight: 100;
  src: url(../static/fonts/BebasNeue-Regular.ttf) format('truetype');
}
@font-face {
  font-family: 'BebasNeue';
  src: url(../static/fonts/BebasNeue-Thin.ttf) format('truetype');
  font-weight: thin;
  font-style: normal;
}
  :root {
    font-family: 'BebasNeue Regular';
  }

  body {
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
