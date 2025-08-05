import axios from "axios";
import { useEffect,useState } from "react";

function GoToGif(){

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
        <div>
            {joke}
        </div>
     )
}

export default GoToGif;