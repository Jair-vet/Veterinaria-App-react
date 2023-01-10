
export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { mascota, propietario, email, alta, sintomas, id } = paciente

    const handleEliminar = () => {
        const resp = confirm('Seguro que deseas Eliminar Este Paciente')

        if( resp){
            eliminarPaciente(id)
        }
    }
    
  return (
    <div className="mr-8 ml-8 mb-3 md:ml-10 bg-gray-50 shadow-md px-5 py-4 rounded-xl hover:scale-105 
                        duration-500 group hover:bg-emerald-100">
        
        {/* Boton Eliminar */}
        <div className="absolute right-[-6px] top-[-12px]">
            <button 
                type="button"
                className="group-hover:bg-red-600 rounded-full px-[15px] py-[7px] text-gray-200"
                onClick={ handleEliminar }
            >X</button>
        </div>

        <p className="font-bold mb-3 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{ mascota }</span>
        </p>
        <p className="font-bold mb-3 group uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{ propietario }</span>
        </p>
        <p className="font-bold mb-3 uppercase">
            Email: {''}
            <span className="font-normal normal-case">{ email }</span>
        </p>
        <p className="font-bold mb-3 uppercase">
            Día de Ingreso: {''}
            <span className="font-normal normal-case">{ alta }</span>
        </p>
        <p className="font-bold mb-3uppercase ">
            Sintomas: {''}
            <span className="font-normal normal-case">{ sintomas }</span>
        </p>

        {/* Boton Editar */}
        <div>
            <button 
                type="button"
                className="py-1 w-1/2 bg-emerald-500 hover:bg-emerald-700 text-white rounded-md 
                    mt-2 uppercase font-bold transition-colors"
                onClick={ () => setPaciente( paciente ) }
            >Editar</button>
        </div>

    </div>
  )
}
