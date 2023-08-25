import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import useAlmacenamientoLocal from "../hooks/useAlmacenamientoLocal"
import { createContext, useContext } from "react"

const peliculasContext = createContext()

export function usePeliculasContext(){
  return useContext(peliculasContext)
}

function Layout() {

  const [peliculas, setPeliculas] = useAlmacenamientoLocal('peliculas', [])
  
  return (
    <peliculasContext.Provider value={[peliculas, setPeliculas]}>
      <div className="mx-auto">
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </peliculasContext.Provider>
  )
}

export default Layout