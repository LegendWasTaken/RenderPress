import Head from 'next/head'
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>RenderPress</title>
        <meta name="description" content="A blog template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <div>
              <About/>
          </div>
      </main>
    </>
  )
}
