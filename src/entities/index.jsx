import { useState, useEffect, useMemo, useRef } from "react";

function Test(){

    let bgRef = useRef();

    const Plus = () =>{
        setValue(value+1)
        console.log(value);
        setFlag(!flag)
    }
    const Minus = () =>{
        setValue(value-1)
        console.log(value);
        setFlag(!flag)
    }

    let [value, setValue] = useState(0);
    let [flag, setFlag]=useState(true);
    useMemo(()=>{
        const Sqrt = function(num) {
                let res = num**2
                console.log(res);
            } 
            Sqrt(5);
    },[])

    useEffect(()=>{
        if(flag){
            bgRef.current.style.backgroundColor = "green";
        }else{
            bgRef.current.style.backgroundColor = "red";
        }
        
    },[value, flag])

    return(
    <div>
        <p ref={bgRef}>{value}</p>
        <button onClick={Plus}>plus</button>

            <button onClick={Minus}>minus</button>
    </div>
    )
}

export default Test;