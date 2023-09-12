import './globals.css';
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body >
                {children}

            </body>
        </html>
    )
}