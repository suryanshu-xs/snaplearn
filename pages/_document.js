import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='container-snap' >
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className='font-Poppins bg-gradient-to-b from-[#74f7ef] to-[#af60ff]' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}