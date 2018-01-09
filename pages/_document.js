import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0 }}>

          <div className="root">
            {main}
          </div>
          <NextScript />
          <script type="text/javascript" src="https://secure.leadforensics.com/js/113807.js" />
        </body>
      </html>
    )
  }
}
