import Header from "../components/Header";
import SkillCard from "../components/SkillCard";

import danceGif from "../assets/Goose/dance-cute-ducky-cute.gif";
import swimGif from "../assets/Goose/duck-ducking.gif";
import driveGif from "../assets/Goose/duck-with.gif";
import runGif from "../assets/Goose/goose-geese.gif";
import seeGif from "../assets/Goose/goose-see.gif";

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
