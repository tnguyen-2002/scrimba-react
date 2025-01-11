export default function Joke({setup, punchline, width}) {
    return (
        <>
            {/*  */}
            {/* {setup && <p className="joke-setup"> Setup: {setup}</p>} */}
            <p style={{display: setup ? "block" : "none"}}> Setup: {setup}</p>
            <p style={{width: width}} className="joke-punchline"> Punch line: {punchline}</p>
            <hr/>
        </>
    )
}