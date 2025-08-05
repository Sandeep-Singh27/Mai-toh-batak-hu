import About from "../components/About";
import Header from "../components/Header";
import History from "../components/History";
import {useState, useEffect} from "react";
import axios from "axios";

function Home(){
    console.log("Home component rendering");
    const [joke,setjoke] = useState("Your Mom")

     useEffect(()=>{
        axios.get("https://api.api-ninjas.com/v1/dadjokes",{ headers:{'X-Api-Key': 'zTRCza2w2tJuu8JVKKiapA==LGM5K8v6WHY07Y48'}})
        .then((response)=>{
            console.log(response.data[0].joke)
            setjoke(response.data[0].joke)
        })
        .catch((err)=>{
            console.log(err.message)
        })
     },[])

    return(
        <div className="flex flex-col items-center h-screen  w-screen bg-blue-400">
            <Header />
            <About
                name="Donald Duck"
            />
            <hr className="border-t border-white w-full"/>
            <History/>
        </div>
        
    )
}

export default Home;