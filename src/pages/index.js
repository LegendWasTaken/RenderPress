import Head from 'next/head'
import About from "@/components/about";
import BlogList from "@/components/bloglist";

export default function Home() {
  return (
    <>
      <Head>
        <title>RenderPress</title>
        <meta name="description" content="A blog template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <div className={"flex gap-x-24 px-24 pt-24 h-screen"}>
              <About/>
              <div className={"flex-grow"}/>
              <div className={"overflow-y-scroll pb-4"}>
                  <BlogList/>
              </div>
          </div>
      </main>
    </>
  )
}
