import { parse } from "node-html-parser";
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { renderToString } from 'stencil-components/hydrate';


export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const renderToStringOptions = {
            prettyHtml: false,
        };

        const initialProps = await Document.getInitialProps(ctx);
        const document = await renderToString(
            initialProps.html,
            renderToStringOptions
        );

        // Stencil hydrate generate a full page HTML
        // We need only content inside body
        const root = parse(document.html);
        const html = root.querySelector("body")?.innerHTML as string;
        console.log("initialProps.html", initialProps.html)
        console.log("html", html)

        return {
            ...initialProps,
            html,
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}