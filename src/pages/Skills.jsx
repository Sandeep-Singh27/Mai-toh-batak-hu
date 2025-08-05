import Header from "../components/Header";
import SkillCard from "../components/SkillCard";

import danceGif from "../assets/goose/dance-cute-ducky-cute.gif";
import swimGif from "../assets/goose/duck-ducking.gif";
import driveGif from "../assets/goose/duck-with.gif";
import runGif from "../assets/goose/goose-geese.gif";
import seeGif from "../assets/goose/goose-see.gif";

function Skills(){
    const skill_json = [
        {   
            photo : danceGif,
            skillname : "Dance",
        },
        {
            photo : swimGif,
            skillname:"Swimming",
        },
        {
            photo : driveGif,
            skillname:"Driving",
        },
        {
            photo : runGif,
            skillname:"Running",
        },
        {
            photo : seeGif,
            skillname:"Unpredictable",
        },
    ]
    return(
        <div className="flex flex-col items-center h-screen  w-screen bg-blue-400">
            <Header/>
            <div className="flex gap-3 items-center h-full w-full justify-center">
    
                {skill_json.map((skill)=>(
                    <SkillCard photo={skill.photo} skillname={skill.skillname}/>
                ))}
                
            </div>
        <hr className="border-t border-white w-full"/>
        </div>
    )
}

export default Skills;
