import React, { useState } from "react";
function UserStateEx(){
    const [clr,setclr] = useState('red');
    return(
        <div>
            <h1>selected color is <font color={clr}>Colour</font></h1>
            <button onClick={()=>setclr('blue')}>Blue</button>
             <button onClick={()=>setclr('green')}>Green</button>
              <button onClick={()=>setclr('red')}>Red</button>
               <button onClick={()=>setclr('yellow')}>Yellow</button>
        
        </div>
    

        
    )
};
export default UserStateEx;