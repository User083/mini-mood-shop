import {logo} from "../assets"

const Home = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-screen">
        <img alt="logo" src={logo} className="h-[200px] w-[450px]"/>
        <h1 className="font-title font-bold text-3xl">Under Construction</h1>
        </div>
    )
}

export default Home