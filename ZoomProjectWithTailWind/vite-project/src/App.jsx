import { NavBar } from "./components/NavBar"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Details } from "./components/Details"
import { Middle } from "./components/Middle"

function App() {
  

  return (
    <>
    <div className="px-20">
      <NavBar></NavBar>
      <Main></Main>
      <Details></Details>
      <Middle></Middle>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
