import { useState } from "react"

export default function AgeIncrement(props) 
{
    let [age,setAge] = useState(30);

    function increaseAge()
    {
        setAge(age+1);
    }

    return(
        <>
        <button type="submit" onClick={increaseAge}>Click to increase age by 1 year </button>
        <p>New Age: {age}</p>
        </>
    )

}