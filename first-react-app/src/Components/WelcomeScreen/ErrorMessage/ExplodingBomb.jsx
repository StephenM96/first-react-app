import { useState } from "react"

function Bomb() {
    throw new Error('Big badda boom')
    // console.log("Bomb")
}

function ExplodingBomb(){
    const [exploded, setExploded] = useState(false)

    return(
        <div>
            <button onClick={()=> setExploded(!exploded)}>
                DANGER ZONE: Click here!
            </button>

            {exploded ? <Bomb /> : null}
        </div>
    )
}
export default ExplodingBomb