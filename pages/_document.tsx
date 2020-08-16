import Document, { Head, Main, NextScript } from 'next/document'
import '../styles/theme.scss';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="en">
            <meta name="description" content="We are Wonderful test page"/>
            <Head>
                <title>We are Wonderful</title>
            </Head>
            <body className="wonderful">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}