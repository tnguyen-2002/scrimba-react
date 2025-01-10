//* Import React
import { createRoot } from "react-dom/client";

//*1. Create root
const root = createRoot(document.querySelector("#root"));


//*2. Render markup to the root
root.render(<p>This is a paragraph</p>)

