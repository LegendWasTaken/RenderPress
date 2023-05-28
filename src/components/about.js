import UserData from "../../user/about";
import Image from "next/image";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {GoPerson} from "react-icons/go";
import {AiOutlineGithub, AiOutlineTwitter} from "react-icons/ai";
import Link from "next/link";
import {RiDiscordLine} from "react-icons/ri";

export default function About() {
    const userData = UserData();

    const anyExtra = userData.location || userData.pronouns;

    return (<div className={"w-80"}>
        <Image src={`/images/${userData.profilePicture}`} alt={`Profile picture of ${userData.name}`} width={512} height={512}/>
        <h2 className={"text-2xl"}>{userData.name}</h2>
        <div className={`bg-black w-2/5 h-0.5`}/>
        <p>{userData.description}</p>
        {anyExtra && <div className={`bg-black w-2/5 h-0.5`}/>}
        {userData.pronouns && <div className={"flex gap-x-2 place-items-center"}>
            <GoPerson/>
            <p>{userData.pronouns}</p>
        </div>}
        {userData.location && <div className={"flex gap-x-2 place-items-center"}>
            <HiOutlineLocationMarker/>
            <p>{userData.location}</p>
        </div>}
        {userData.twitter && <div className={"flex gap-x-2 place-items-center"}>
            <AiOutlineTwitter/>
            <Link href={`https://twitter.com/${userData.twitter}`}>
                <p>{userData.twitter}</p>
            </Link>
        </div>}
        {userData.github && <div className={"flex gap-x-2 place-items-center"}>
            <AiOutlineGithub/>
            <Link href={`https://github.com/${userData.github}`}>
                <p>{userData.github}</p>
            </Link>
        </div>}
        {userData.discord && <div className={"flex gap-x-2 place-items-center"}>
            <RiDiscordLine/>
            <p>{userData.discord}</p>
        </div>}
    </div>)
}