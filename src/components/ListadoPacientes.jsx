import { Paciente } from "./Paciente"

export const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-2">
            Administra tus {''}
            <span className="text-emerald-500 font-bold">Pacientes y Citas</span>
        </p>

        {
          pacientes.map( paciente => (
              <Paciente 
              key={index}
              paciente={paciente}
              />        
          ))
        }    

    </div>
  )
}
