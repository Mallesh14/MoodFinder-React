import React from "react";
function Mooddisplay({temp}){
    const moods={
        happy:"Keep smiling !😊",
        sad:"Accept what you can't change ,Change what you can't Accept 🤷‍♂️",
        good:"Do something you want👍",
        depressed:"Hope everything will be Fine !!! poi vera vela iruntha paru bro"
    };
    return (
        <div>
            {temp?<p>{moods[temp]}</p>:<p>Select your mood </p>}
        </div>
    );
}
 export default Mooddisplay;

