import {Construction} from "../components"
import { logo, girls, girls2 } from "../assets"

const About = () => {
    return(
        <div className="min-h-screen w-full flex flex-col justify-start items-center mt-5">
            <div className="py-5 border-b mb-10 border-tertiary">
            <h className="font-title text-4xl font-bold">All About...</h>
            <img src={logo} alt="Logo" className="max-w-[600px]"/>       
            </div>   
            <div className="flex gap-10 md:flex-row flex-col px-10">
                <div className="flex flex-col gap-4 items-center md:items-start">
                <h className="font-bold text-2xl">Two <span className="font-title tracking-wide text-highlight">Moody</span> Sisters...</h>
                <img src={girls2} alt="Stock Photo" className="aspect-h-1 aspect-w-1 max-h-[500px] max-w-[300px] rounded"/>
                </div>
                <div className="flex flex-col justify-around items-end md:mt-10">
                    <div className="flex flex-col gap-2 max-w-[500px] text-primary text-lg justify-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex dolores asperiores at, 
                    ipsum molestias praesentium tenetur possimus fugiat eaque, sed saepe omnis reiciendis est sequi atque dolore expedita impedit?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex dolores asperiores at, 
                    ipsum molestias praesentium tenetur possimus fugiat eaque, sed saepe omnis reiciendis est sequi atque dolore expedita impedit?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex dolores asperiores at, 
                    ipsum molestias praesentium tenetur possimus fugiat eaque, sed saepe omnis reiciendis est sequi atque dolore expedita impedit?</p>
                </div>
            <div className="flex flex-col justify-center">
            <p className="font-title text-2xl text-primary">xoxo</p>
            <p className="font-title text-3xl text-primary">Ally & Dina</p>
            </div>
                </div>               
            </div>    


        </div>
    )
}

export default About