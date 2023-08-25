import FormularioPelicula from "./FormularioPelicula"
import { usePeliculasContext } from "./Layout"

function AgregarPelicula() {

  const [ peliculas, setPeliculas ] = usePeliculasContext()

  let historia = []

  const handleOnSubmit = (pelicula) => {
    setPeliculas([pelicula, ...peliculas])
    historia.push('/')
  }

  return (
    <>
      <FormularioPelicula handleOnSubmit={ handleOnSubmit } />
    </>
  )
}

export default AgregarPelicula