import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"

export const App = () => {

  const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});
 
  // Obtiene los pacientes en el localStorage
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
 

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id ); // Los que sean diferentes
    setPacientes( pacientesActualizados )
  }

  return (
    <>
      <div className="container mx-auto mt-14">
        <Header 
          
        />

        <div className="mt-12 md:flex">
          <Formulario 
            setPacientes={ setPacientes }
            pacientes={ pacientes }
            paciente={ paciente }
            setPaciente={ setPaciente }
          />
          <ListadoPacientes 
            pacientes={ pacientes }
            setPaciente={ setPaciente }
            eliminarPaciente={ eliminarPaciente }
          />
        </div>

      </div>
    </>
  )
}

