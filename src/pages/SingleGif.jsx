import Header from "../components/Header";
import { useParams } from "react-router-dom";

function SingleGif(){

    const {meme_name} = useParams()
    console.log(meme_name)

    const gif_json = [
        {   
            meme_des:"Dancing memes are about dance",
            meme_name:"Dance",
        },
        {
            meme_des:"Swim Swim Swim",
            meme_name:"Swimming",
        },
        {
           meme_des:"get in the car",
            meme_name:"Driving",
        },
        {
            meme_des:"Run Run Run",
            meme_name:"Running",
        },
        {
            meme_des:"Who knows",
            meme_name:"Unpredictable",
        },
    ]

    const gif = gif_json.find(g => g.meme_name === meme_name);

    return(
        <div className="flex flex-col items-center w-screen h-screen bg-blue-400">

            <Header/>
            {gif.meme_des}


        </div>
    )
}

export default SingleGif;