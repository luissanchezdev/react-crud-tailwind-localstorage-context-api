import { useState, useEffect } from "react";

function useAlmacenamientoLocal( clave, valorInicial ) {

  const [valor, setValor] = useState(() => {
    try {
      const localStorageCustom = window.localStorage.getItem(clave)
      return localStorageCustom ? JSON.parse(localStorageCustom) : valorInicial
    } catch (error) {
      return valorInicial
    }
  })

  useEffect(() => {
    window.localStorage.setItem(clave, JSON.stringify(valor))
  },[clave,valor])

  return [valor, setValor]
}

export default useAlmacenamientoLocal
