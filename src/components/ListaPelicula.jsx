import { usePeliculasContext } from "./Layout"
import Pelicula from "./Pelicula"
import { v4 as uuidv4 } from "uuid"

function ListaPelicula() {
  const [ peliculas, setPeliculas ] = usePeliculasContext()
  console.log({peliculas})
  
  return (
    <div>
      {
        peliculas.map(pelicula => {
          const id = pelicula.id
          const nombre = pelicula.nombre
          const director = pelicula.director
          const categoria = pelicula.categoria
          const anio = pelicula.anio

          const handleDeleteFilm = (id) => {
            const pelis = JSON.parse(window.localStorage.getItem('peliculas'))
            const newArr = pelis.filter( peli => peli.id !== id)
            setPeliculas(newArr)
          }

          return (
            <div key={ uuidv4() }>
              <Pelicula id={ id } nombre={ nombre } director={ director } categoria={ categoria } anio={ anio } setPeliculas={ setPeliculas } handleDeleteFilm={ handleDeleteFilm } />
            </div>
        )
      }
    )}
    </div>
  )
}

export default ListaPelicula
