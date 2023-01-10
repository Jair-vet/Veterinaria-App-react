
export const Paciente = ({ paciente }) => {

    const { mascota, propietario, email, alta, sintomas } = paciente

  return (
    <div className="m-4 md:ml-10 bg-gray-50 shadow-md px-5 py-4 rounded-xl hover:scale-105 
                        duration-500 hover:bg-emerald-600 group">
        <p className="font-bold mb-3 uppercase group-hover:text-white">
            Nombre: {''}
            <span className="font-normal normal-case">{ mascota }</span>
        </p>
        <p className="font-bold mb-3 group uppercase group-hover:text-white">
            Propietario: {''}
            <span className="font-normal normal-case">{ propietario }</span>
        </p>
        <p className="font-bold mb-3 uppercase group-hover:text-white">
            Email: {''}
            <span className="font-normal normal-case">{ email }</span>
        </p>
        <p className="font-bold mb-3 uppercase group-hover:text-white">
            Día de Ingreso: {''}
            <span className="font-normal normal-case">{ alta }</span>
        </p>
        <p className="font-bold mb-3uppercase group-hover:text-white">
            Sintomas: {''}
            <span className="font-normal normal-case">{ sintomas }</span>
        </p>
    </div>
  )
}
