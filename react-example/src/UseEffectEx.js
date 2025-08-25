import React,{useEffect, useState} from "react";

function UseEffectHook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(()=>{
            setCount((count) => count+10);
        },3000)
    });

    return(
        <h1>Count = {count}</h1>
    );
}
export default UseEffectHook;
