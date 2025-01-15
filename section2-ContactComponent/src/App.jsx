import Header from "./components/Header"
import Entry from "./components/Entry"
import dataArray from "./data"

export default function App() {
  const placeArray = dataArray.map((place) => {
    return(
      <Entry 
        key = {place.id}
        img = {place.img}
        country = {place.country}
        googleMapsLink = {place.googleMapsLink}
        title = {place.title}
        dates = {place.dates}
        placeDesc = {place.text}
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