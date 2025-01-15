import Header from "./components/Header"
import Entry from "./components/Entry"
import dataArray from "./data"

export default function App() {
  const placeArray = dataArray.map((place) => {
    return(
      <Entry 
        key = {place.id}
        entry = {place}
      />
    )
  })
  return(
    <>
      <Header />
      <main className="entry-container">
        {placeArray}
      </main>
    </>
  )
}