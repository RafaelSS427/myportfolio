import { 
    AspNetSVG, 
    CsharpSVG, 
    CssSVG, 
    DockerSVG, 
    FigmaSVG, 
    GitSVG, 
    HtmlSVG, 
    JavascriptSVG, 
    MySqlSVG, 
    NextSVG, 
    NodejsSVG, 
    PrismaSVG, 
    ReactSVG, 
    TailwindSVG, 
    TypescriptSVG 
} from '@/components'

export const config = {
    skills: {
        main: [
            {
                name: "Nextjs",
                logo: <NextSVG />
            },
            {
                name: "Typescript",
                logo: <TypescriptSVG />
            },
            {
                name: "Figma",
                logo: <FigmaSVG size="60px" />
            },
            {
                name: "Prisma",
                logo: <PrismaSVG size="60px" />
            },
            {
                name: "TailwindCSS",
                logo: <TailwindSVG size="60px" />
            },
            // {
            //     name: "React",
            //     logo: <ReactSVG />
            // },
            
            // {
            //     name: "Javascript",
            //     logo: <JavascriptSVG />
            // },
        ],
        secondary: [
            {
                name: "HTML",
                logo: <HtmlSVG size="44px" />
            },
            {
                name: "CSS",
                logo: <CssSVG size="44px" />
            },
            {
                name: "Javascript",
                logo: <JavascriptSVG size="44px" />
            },
            
            {
                name: "React",
                logo: <ReactSVG size="44px" />
            },
            {
                name: "NodeJS",
                logo: <NodejsSVG size="44px" />
            },
            {
                name: "Git",
                logo: <GitSVG size="44px" />
            },
            {
                name: "Docker",
                logo: <DockerSVG size="44px" />
            },
            {
                name: "C#",
                logo: <CsharpSVG size="44px"/>
            },
            {
                name: "MySQL",
                logo: <MySqlSVG size="44px"/>
            },
            {
                name: "ASP.NET",
                logo: <AspNetSVG size="44px" />
            },
        ]
    },
    socialMedia: {
        linkedin: "https://www.linkedin.com/in/rafael-sequeira-sandoval",
        github: "https://github.com/RafaelSS427",
        frontentmentor: "https://www.frontendmentor.io/profile/RafaelSS427"
    },
    contact: "rafaelss427@gmail.com"
}