import { AspNetSVG, CsharpSVG, CssSVG, DockerSVG, FigmaSVG, GitSVG, HtmlSVG, JavascriptSVG, MySqlSVG, NextSVG, NodejsSVG, PrismaSVG, ReactSVG, TypescriptSVG } from "@/components";

export const config = {
    skills: {
        main: [
            {
                name: "Javascript",
                logo: <JavascriptSVG />
            },
            {
                name: "Nextjs",
                logo: <NextSVG />
            },
            {
                name: "React",
                logo: <ReactSVG />
            },
            {
                name: "Typescript",
                logo: <TypescriptSVG />
            },
        ],
        secondary: [
            {
                name: "HTML",
                logo: <HtmlSVG />
            },
            {
                name: "CSS",
                logo: <CssSVG />
            },
            {
                name: "NodeJS",
                logo: <NodejsSVG />
            },
            {
                name: "Git",
                logo: <GitSVG />
            },
            {
                name: "Figma",
                logo: <FigmaSVG />
            },
            {
                name: "Docker",
                logo: <DockerSVG />
            },
            {
                name: "C#",
                logo: <CsharpSVG />
            },
            {
                name: "MySQL",
                logo: <MySqlSVG />
            },
            {
                name: "Prisma",
                logo: <PrismaSVG />
            },
            {
                name: "ASP.NET",
                logo: <AspNetSVG />
            },
        ]
    }
}