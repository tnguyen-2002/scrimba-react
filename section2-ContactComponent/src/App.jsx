import { ninjaTurtles } from "./data"

export default function App() {
  const listItems = ninjaTurtles.map (nt => 
    <h2 key = {nt.id}>
      {nt.name}
    </h2>

  )
  return(
    <>
      <main>
        {listItems}
      </main>
    </>
  )
}