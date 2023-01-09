import { useForm } from "../hooks/useForm"

const formData = {
    mascota:        '',
    propietario:    '',
    email:          '',
    alta:           '',
    sintomas:       '',

  }

export const Formulario = () => {

    const { mascota, propietario, email, alta, sintomas, onInputChange } = useForm( formData )

    const onSubmit = ( event ) => {
        event.preventDefault();

        // Validacion del Formulario

    }


  return (
    <div className="md:w-1/2 lg:w-2/5 mb-8">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-2">
            Añade Pacientes y {''}
            <span className="text-emerald-500 font-bold">Administralos</span>
        </p>

        <form 
            onSubmit={ onSubmit }
            className="bg-gray-50 shadow-md rounded-lg py-10 px-5 md:m-0 m-4"
        >
            
            {/* Nombre Mascota */}
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                    Nombre Mascota
                </label>
                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border w-full rounded-md p-2 mt-2 focus:outline-none focus:ring
                         focus:ring-emerald-500 hover:"
                    name="mascota"
                    value={ mascota }
                    onChange={ onInputChange }
                />
            </div>
            
            {/* Nombre Propietario */}
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                    Nombre Propietario
                </label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propetario"
                    className="border w-full rounded-md p-2 mt-2 focus:outline-none focus:ring
                         focus:ring-emerald-500 "
                    name="propietario"
                    value={ propietario }
                    onChange={ onInputChange }
                />
            </div>
            
            {/* Email */}
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                    Email
                </label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email para Contactar"
                    className="border w-full rounded-md p-2 mt-2 focus:outline-none focus:ring
                         focus:ring-emerald-500 "
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                />
            </div>
            
            {/* Fecha de Alta */}
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                    Día de Ingreso
                </label>
                <input 
                    id="alta"
                    type="date"
                    className="border w-full rounded-md p-2 mt-2 focus:outline-none focus:ring
                         focus:ring-emerald-500 "
                    name="alta"
                    value={ alta }
                    onChange={ onInputChange }
                />
            </div>
            
            {/* Síntomas */}
            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                    Síntomas
                </label>
                <textarea 
                    id="sintomas"
                    placeholder="Describe los Sintomas"
                    className="border w-full rounded-md p-2 mt-2 focus:outline-none focus:ring
                         focus:ring-emerald-500 "
                    name="sintomas"
                    value={ sintomas }
                    onChange={ onInputChange }
                />
            </div>

            <input 
                type="submit"
                value="Agregar Paciente"
                className="bg-emerald-500 w-full rounded-md p-3 text-white uppercase font-bold
                            hover:bg-emerald-700 cursor-pointer transition-colors" 
            />

        </form>
    </div>
  )
}
