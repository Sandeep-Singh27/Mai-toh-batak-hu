import { Link } from 'react-router-dom';

function GifCard({meme_photo, meme_name}){
    return(
        <Link to={`/watch-meme-gif/${meme_name}`} className='h-full w-full'>
        <div 
        className="flex flex-col gap-5 border-2 border-white bg-blue-500 rounded-2xl p-5 text-center text-2xl text-white font-mono font-bold w-1/3 justify-between items-center">
            
            <img 
                src={meme_photo}
                className="w-30 h-40 object-cover rounded-xl"    
            />
            <h1>{meme_name}</h1>

        </div>
        </Link>
    )
}

export default GifCard;