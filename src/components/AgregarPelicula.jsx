import FormularioPelicula from "./FormularioPelicula"
import { usePeliculasContext } from "./Layout"

function AgregarPelicula() {

  const [ peliculas, setPeliculas ] = usePeliculasContext()
  console.log({ peliculas })
  console.log({ setPeliculas })

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