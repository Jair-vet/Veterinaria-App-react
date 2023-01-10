import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"

export const App = () => {

  const [pacientes, setPacientes] = useState([])

  return (
    <>
      <div className="container mx-auto mt-14">
        <Header 
          
        />

        <div className="mt-12 md:flex">
          <Formulario 
            setPacientes={ setPacientes }
            pacientes={ pacientes }
          />
          <ListadoPacientes />
        </div>

      </div>
    </>
  )
}

