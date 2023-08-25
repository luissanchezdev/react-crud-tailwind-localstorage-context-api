import { usePeliculasContext } from "./Layout"
import Pelicula from "./Pelicula"
import { v4 as uuidv4 } from "uuid"

function ListaPelicula() {
  
  const [ peliculas, ...props ] = usePeliculasContext()

  return (
    <div>
      {
        peliculas.map(pelicula => {
          const nombre = pelicula.nombre
          const director = pelicula.director
          const categoria = pelicula.categoria
          const anio = pelicula.anio

          return (
            <div key={ uuidv4() }>
              <Pelicula nombre={ nombre } director={ director } categoria={ categoria } anio={ anio } />
            </div>
        )
      }
    )}
    </div>
  )
}

export default ListaPelicula
