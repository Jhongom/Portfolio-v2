import BancodB from '../icons/LogoBanco.png'
 import FiduLogo from '../img/fiduciaria-bogota.jpg'
 import { FaAws, FaJava, FaJenkins } from "react-icons/fa";
 import { BiLogoTypescript } from "react-icons/bi";

 export interface WorkExp {
    id : number;
    avatar: string;
    company : string;
    time : string;
    img : string;
    possition: string;
    techExp: React.ElementType[]
    responsabilities: string
}
interface Techstack {
    icon1: React.ElementType;
    icon2: React.ElementType;
    icon3: React.ElementType;
}
export const workExp : WorkExp = {
    id : 1,
    avatar: BancodB,
    company : "Fiduciaria de Bogotá",
    time : "November 7, 2023 - Currentlly",
    img : FiduLogo,
    possition: "Currentlly working as a Junior Full Stack Developer.",
    techExp : [
        FaJava,
        FaAws,
        FaJenkins,
        BiLogoTypescript,
    ],
    responsabilities: "Designs, develops, modifies, documents, tests, implements, installs and supports software applications and systems."
}