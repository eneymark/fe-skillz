import Document, { Head, Main, NextScript } from 'next/document'
import '../styles/theme.scss';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head>
                <style>{`body { margin: 0 } /* custom! */`}</style>
            </Head>
            <body className="wonderful">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}