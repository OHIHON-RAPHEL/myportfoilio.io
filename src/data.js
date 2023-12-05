import {BsApple} from 'react-icons/bs'
import {RiHtml5Fill} from 'react-icons/ri'
import {PiFileCssFill} from 'react-icons/pi'
import {DiJavascript1} from 'react-icons/di'
import {BiLogoReact} from 'react-icons/bi'
import {SiSimilarweb} from 'react-icons/si'
import {SiInfluxdb} from 'react-icons/si'
import {SiTurbosquid} from 'react-icons/si'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallary",
        path: '/gallary'
    },
    {
        name: "Projects",
        path: '/projects'
    },
    {
        name: "Contact",
        path: '/contact'
    },
]


export const services = [
    {
        id: 1,
        icon: <SiTurbosquid/>,
        title: "UI DESIGN",
        info: "This is the day the lord has made for us all. We will all rejioce in his name",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiInfluxdb/>,
        title: "UX DESIGN",
        info: "This is the day the lord has made for us all. We will all rejioce in his name",
        path: "/programs/222"
    },
    {
        id: 3,
        icon:  <SiSimilarweb/>,
        title: "WEB DESIGN",
        info: "This is the day the lord has made for us all. We will all rejioce in his name",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <BsApple/>,
        title: "APP DESI",
        info: "This is the day the lord has made for us all. We will all rejioce in his name",
        path: "/programs/444"
    },
]


export const skills = [
    {
        id: 1,
        icon: <RiHtml5Fill/>,
        title: "HTML",
        desc: "tubaskinoni is a good boy"
    },
    {
        id: 2,
        icon: <PiFileCssFill/>,
        title: "CSS",
        desc: "tubaskinoni is a good boy"
    },
    {
        id: 3,
        icon: <DiJavascript1/>,
        title: "JAVASCRIPT",
        desc: "tubaskinoni is a good boy"
    },
    {
        id: 4,
        icon: <BiLogoReact/>,
        title: "REACT",
        desc: "tubaskinoni is a good boy"
    },
]


export const faqs = [
    {
        id: 1,
        question: "How often should i excercise",
        answer: "Consideration"
    },
    {
        id: 2,
        question: "How often should i excercise",
        answer: "Consideration"
    },
    {
        id: 3,
        question: "How often should i excercise",
        answer: "Consideration"
    },
    {
        id: 4,
        question: "How often should i excercise",
        answer: "Consideration"
    }
]

export const testimonials = [
    {
        id: 1,
        name: "OHIHON RAPHEL",
        quote: "There is no limit to what you cant achieve in life",
        job: "Fontend developer",
        games: require("./images/game.jpg")
    },
    {
        id: 2,
        name: "Dayo",
        quote: "There is no limit to what you can acheive in life",
        job: "tubaskinoni",
        games: require("./images/game.jpg")
    },
    {
        id: 3,
        name: "Mattew",
        quote: "There is no limit to what you can achieve in life",
        job: "raphking",
        games: require("./images/game.jpg")
    },
    {
        id: 4,
        name: "John",
        quote: "There is no limit to what you can achieve in life",
        job: "starboy",
        games: require("./images/game.jpg")
    }
]