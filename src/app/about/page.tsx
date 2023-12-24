"use client"
import { bai, manrope } from "@/lib/fonts";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function About() {

    const socials = [
        {
            icon: <FaXTwitter />,
            link: "https://twitter.com/sijisaidwhat",
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/oluwasijibomi-ilesanmi-8504b123a/",
        },
        {
            icon: <FaGithub />,
            link: "https://github.com/sijirama",
        },
    ];

    return (
        <main className={`min-h-screen items-center pt-8 md:pt-10 lg:pt-14 -tracking-wider bg-black ${manrope.className} grid grid-cols-1 md:grid-cols-2 grid-rows-5 md:grid-rows-1 text-gray-200`}>
            <div className={`h-full w-full bg-black flex flex-col items-center justify-center gap-2`}>
                <p className={`text-[4rem] lg:text-[6rem] font-bold ${bai.className} -tracking-widest`}>About Me</p>
                <div className="flex gap-3 items-center justify-center">
                {socials.map((social ,index) => (
                    <a key={index} href={`${social.link}`} target="_blank">
                        <div className="p-2 bg-black hover:text-gray-500 hover:border-gray-500 cursor-pointer border border-gray-600 rounded-[0.58rem] flex items-center justify-center text-gray-600 transition-colors duration-200 text-sm md:text-xl" >{social.icon}</div>
                    </a>
                ))}
                </div>
            </div>
            <div className="h-full w-full row-span-4 flex flex-col items-center justify-center px-5 gap-2 py-7 -tracking-wider">
                <div className="mx-auto flex gap-1 flex-col ">
                    <p>
                        Hey there! my name is Oluwasijibomi Ilesanmi, currently software engineering as a final year student at Babcock University. I have a deep passion for crafting applications that not only solve problems but also contribute positively to the well-being of humanity.
                    </p>
                    <p>
                        In my academic pursuit, I have delved into the intricacies of software engineering at Babcock University, honing my skills and building a foundation for my future endeavors. I believe in the power of technology to transform lives, and my goal is to channel that power into applications that might just save lives someday.
                    </p>
                    <p>
                        My dream is to work in an environment where I feel like a superhero, saving lives with the code I write. I aim to build applications that make a real impact and become lifelines for those who need it most.
                    </p>
                </div>
                <div className="w-full">
                    <p>i am currently...</p>
                    <ul className="pl-4 list-disc">
                        <li>studying software engineering at Babcock University (i graduate june 2024!)</li>
                        <li>making preparations to begin reading the Bhagavad Gita, a Hindu holy book.</li>
                        <li>building projects to begin my Job hunt next year</li>
                        <li>my final year project for university.</li>
                    </ul>
                </div>
                <div className="w-full">
                    <p>i am really excited about...</p>
                    <ul className="pl-4 list-disc">
                        <li>the interesting discourse at intersection of science and religion, exploring nuanced discussions on origins, evolution, and ultimate outcomes.</li>
                        <li>engineering that can transform lives.</li>
                        <li>music and people that share music, sharing music is a love language.</li>
                    </ul>
                </div>

            </div>
        </main>
    )
}
