export default function Joke({setup, punchline}) {
    return (
        <>
            {/*  */}
            {/* {setup && <p className="joke-setup"> Setup: {setup}</p>} */}
            <p style={{display: setup ? "block" : "none"}}> Setup: {setup}</p>
            <p className="joke-punchline"> Punch line: {punchline}</p>
            <hr/>
        </>
    )
}