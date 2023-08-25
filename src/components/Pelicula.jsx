function Pelicula({ nombre, director, categoria, anio}) {
  return (
    <>
      <div className="card bg-slate-100 border-2 p-4 mx-4 my-2 md:mx-72 md:my-5 md:grid md:grid-cols-3">
        <div className="md:col-start-1 md:col-end-3">
          <h3>nombre: { nombre }</h3>
          <p>director: { director }</p>
          <p>categoria: { categoria }</p>
          <p>año: { anio }</p>
        </div>
        <div className="flex justify-center gap-2 md:flex-col">
            <button className="bg-blue-600 p-2 text-slate-200 rounded-md hover:bg-blue-800 transition">Editar</button>
            <button className="bg-red-600 p-2 text-slate-200 rounded-md hover:bg-red-800 transition">Eliminar</button>
        </div>
      </div>
    </>
  )
}

export default Pelicula
