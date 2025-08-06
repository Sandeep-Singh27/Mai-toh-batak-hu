import { useState } from "react";
import dad_joke from "../api services/dad_jokes";
import pfp from "../assets/Goose/goose.jpg"

function About({ name }) {
  const [showMore, setShowMore] = useState(true);
  const [currentjoke, setcurrentjoke] = useState("Indian Politics")

  const handleClick = async()=>{
       const joke = await dad_joke();
       setcurrentjoke(joke)
  }

  return (
    <section className="bg-blue-400 py-6 flex justify-center items-center h-full w-full ">
    <div className="flex justify-between mx-10 border-2 rounded-4xl bg-blue-600 border-white items-center w-3/5 h-2/3">
      <div className="w-1/2 my-5 mx-5 flex flex-col justify-between">
        <h1 className="font-mono font-bold text-white text-5xl">{name}</h1>
        <div className="">
            {
              showMore ? <p
              className="font-mono font-bold text-white mb-5 "
              >Wanna hear a joke ?</p>
              :<p
              className="font-mono font-bold text-white mb-5 text-xl"
                >{currentjoke}</p>
            }
            {/* Buttons */}
            <div className="flex gap-5 ">
                {/* Button 1 */}
                <button onClick={()=>setShowMore(!showMore)
                }
                className="bg-white w-fit px-2 rounded font-bold font-mono hover:bg-blue-400 hover:border-2 hover:border-white hover:text-2xl hover:text-white mt-auto"
                >
                {showMore? "Show More":"Show Less"}
                </button>
                {/* Button 2 */}
                <button onClick={handleClick}
                
                className="bg-white w-fit px-2 rounded font-bold font-mono hover:bg-blue-400 hover:border-2 hover:border-white hover:text-2xl hover:text-white mt-auto"
                >
                New Joke
                </button>

            </div>
        </div>
      </div>
      <div className=" w-1/2 border-3 m-3 rounded-2xl border-white">
        <img 
        src={pfp}
        alt="pfp"
        className="rounded-xl"
        />
      </div>
    </div>
    </section>
  );
}
export default About;
