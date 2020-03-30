import '../styles.scss'

import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import initializeStore from '../redux/store';
import Helmet from 'react-helmet'

class MyApp extends App {

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="The Everything"
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1',
            },
            { property: 'og:title', content: 'Hello next.js!' },
          ]}
        >
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"></link>
        </Helmet>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//withRedux wrapper that passes the store to the App Component
export default withRedux(initializeStore)(MyApp);