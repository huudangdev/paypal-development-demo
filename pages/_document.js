import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head >
          <script
            src="https://www.paypal.com/sdk/js?client-id=ARCLsMmueveln5GNFerxTXFo_vwOxJuDYZKRsPQHSlo0iILiFrFaAASpJpMmnxcH-oEXBTD8kpL1CI2b">
          </script>

          {/* <script src="https://www.paypalobjects.com/api/checkout.js" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument