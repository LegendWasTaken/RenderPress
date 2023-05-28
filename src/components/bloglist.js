import posts from '../../posts/index.json';
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
    return (<div className={"flex flex-col gap-y-4 overflow-y-scroll"}>
        {posts.map(post => {
            return (
                <Link href={`/post?name=${post.short_name}`}>
                    <div className={"flex bg-stone-200 p-2 rounded-sm gap-x-4"}>
                        <div className={"w-48 h-48"}>
                            <Image src={`/images/profile_picture.png`} alt={"alt"} width={300} height={300}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <h2 className={"text-xl"}>{post.name}</h2>
                            <p>{post.description}</p>
                            <div className={"flex-grow"}/>
                            <div className={"flex gap-x-2"}>
                                {post.tags.map(tag => {
                                    return (<div className={"bg-sky-200 px-1 rounded-md"}>
                                        <p>{tag}</p>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </Link>)
        })}
    </div>)
}