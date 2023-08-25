import { set } from "lodash"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"


function FormularioPelicula(props) {
  const [pelicula, setPelicula] = useState(
    {
      nombre: props.pelicula ? props.pelicula.nombre : '',
      director: props.pelicula ? props.pelicula.director : '',
      categoria: props.pelicula ? props.pelicula.categoria : '',
      anio: props.pelicula ? props.pelicula.anio : ''
    }
  )

  const [ errorMessage, setErrorMessage] = useState('')
  const {nombre, director, categoria, anio} = pelicula

  const handleOnsubmit = (event) => {
    event.preventDefault()

    const valores = [nombre, director, categoria, anio]
    let errorMessage = ''

    const verificarLlenadodeCampos = valores.every( valor => {
      const caracteristica = `${valor}`.trim()
      return caracteristica !== '' && caracteristica !== '0'
    })

    if(verificarLlenadodeCampos) {
      const pelicula = {
        id: uuidv4(),
        nombre,
        director,
        categoria,
        anio
      }
      props.handleOnSubmit(pelicula)
      setPelicula({
        nombre: '',
        director: '',
        categoria: '',
        anio: ''
      })
    } else {
      errorMessage = 'Rellene todos los campos'
    }
    setErrorMessage(errorMessage)

  }

  const handleInputChange = (event) => {
    
    const { name, value } = event.target
    console.log({ name })
    console.log({ value })
    switch (name) {
      case 'nombre':
        if (value === '' || value.length > 0) {
          setPelicula((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'director':
        if (value === '' || value.length > 0) {
          setPelicula((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'categoria':
        if (value === '' || value.length > 0) {
          setPelicula((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'anio':
        if (parseInt(value) || value === '') {
          setPelicula((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
    default:
        setPelicula((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  }


  return (
    <div className="p-4 md:mx-72">
      { errorMessage && <p className=" bg-red-700 text-slate-100 p-2"> { errorMessage } </p>}
      <form onSubmit={ handleOnsubmit } className="">
        <div className="flex flex-col mb-2">
          <label className="w-full capitalize">nombre</label>
          <input className="h-10 border-2 rounded-md px-2 py-1" name="nombre" value={nombre} type="text" placeholder="Ingrese el nombre" onChange={ handleInputChange }/>
        </div>
        <div className="flex flex-col mb-2">
          <label className="w-full capitalize">director</label>
          <input className="h-10 border-2 rounded-md px-2 py-1" name="director" value={director}  type="text" placeholder="Ingrese el director" onChange={ handleInputChange } />
        </div>
        <div className="flex flex-col mb-2">
          <label className="w-full capitalize">categoría</label>
          <input className="h-10 border-2 rounded-md px-2 py-1" name="categoria" value={categoria} type="text" placeholder="Ingrese la categoría" onChange={ handleInputChange } />
        </div>
        <div className="flex flex-col mb-2">
          <label className="w-full capitalize">Año</label>
          <input className="h-10 border-2 rounded-md px-2 py-1" name="anio" value={anio} type="text" placeholder="Ingrese el año" onChange={ handleInputChange } />
        </div>
        <button className="bg-blue-600 p-2 rounded-md text-slate-100 my-2" type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default FormularioPelicula
