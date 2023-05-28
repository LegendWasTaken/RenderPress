import Head from 'next/head'
import About from "@/components/about";
import BlogList from "@/components/bloglist";
import {AiOutlineHome} from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>RenderPress</title>
        <meta name="description" content="A blog template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <div className={"flex gap-x-24 px-24 pt-12 h-screen"}>
              <div className={"flex gap-x-2"}>
                  <About/>
                  <Link href={'/'}>
                      <AiOutlineHome size={30}/>
                  </Link>
              </div>
              <div className={"flex-grow"}/>
              <div className={"overflow-y-scroll pb-4"}>
                  <BlogList/>
              </div>
          </div>
      </main>
    </>
  )
}
