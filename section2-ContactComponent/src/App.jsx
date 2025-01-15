import jokesData from "./jokesData.js"
import Joke from "./components/Joke.jsx"

/**
     * Challenge: See if you can correctly pass the necessary props to the 
     * Joke component in the .map() (and render the jokeElements array) so 
     * the jokes show up on the page again
     */

export default function App() {
  const jokesList = jokesData.map((joke) => {
    return (
      <Joke 
        key = {joke.id}
        setup = {joke.setup}
        punchline={joke.punchline}
      />
    )
  })

  return(
    <>
      <main>
        {jokesList}
      </main>
    </>
  )
}