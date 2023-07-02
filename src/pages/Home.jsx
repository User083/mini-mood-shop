import {logo} from "../assets"
import Collections from "../components/Collections"

const Home = () => {
    return(
        <div className="flex flex-col justify-start items-center w-full h-screen bg-white">    
        <img alt="logo" src={logo} className="h-[200px] w-[450px] my-5"/>
        <Collections/>
        </div>
    )
}

export default Home