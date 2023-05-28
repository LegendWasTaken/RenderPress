import {useSearchParams} from "next/navigation";
import Head from "next/head";
import About from "@/components/about";
import posts from '../../../posts/index.json'
import content from '../../../posts/content.json'
import ReactMarkdown from "react-markdown";
import {AiOutlineHome} from "react-icons/ai";
import Link from "next/link";

let getPostMeta = (shortName) => {
    let filtered = posts.filter(post => post.short_name === shortName);

    if (filtered.length !== 1) {
        return null;
    } else {
        return filtered[0];
    }
}

let getPostContent = (meta) => {
    return content[meta.short_name.replaceAll(" ", "_")];
}

export default function Home() {
    const searchParams = useSearchParams();
    const postMeta = getPostMeta(searchParams.get("name"))
    const content = getPostContent(postMeta);

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
                    <div className={"flex-grow flex justify-center pb-4"}>
                        <div className={"overflow-y-scroll prose w-full"}>
                            <ReactMarkdown>
                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}