import GifCard from "../components/GifCard";
import Header from "../components/Header";

function GoToGif(){

    const gif_json = [
        {   
            meme_photo:"src/assets/goose/dance-cute-ducky-cute.gif",
            meme_name:"Dance",
        },
        {
            meme_photo:"src/assets/goose/duck-ducking.gif",
            meme_name:"Swimming",
        },
        {
           meme_photo:"src/assets/goose/duck-with.gif",
            meme_name:"Driving",
        },
        {
            meme_photo:"src/assets/goose/goose-geese.gif",
            meme_name:"Running",
        },
        {
            meme_photo:"src/assets/goose/goose-see.gif",
            meme_name:"Unpredictable",
        },
    ]

    return(
        <div className="flex flex-col items-center w-screen bg-blue-400">
            <Header/>
            <div className="flex flex-col gap-3 justify-center items-center mt-10 h-full w-full m-10">
                {   
                    gif_json.map((meme)=>(
                            <GifCard meme_photo={meme.meme_photo} meme_name={meme.meme_name}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default GoToGif;