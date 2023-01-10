import { useEffect, useState } from "react";
import { Error } from "./Error";


export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(paciente).length > 0  ) {
            setMascota(paciente.mascota)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    

    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

         // Validacion del Formulario
         if([mascota, propietario, email, alta, sintomas].includes('') ){

            setError(true)
            setTimeout(() => {
                setError(false)
            }, "4000")
            return
        }
        // setError(false)


        // Objeto de Paciente
        const objetoPaciente = {
            mascota, 
            propietario, 
            email, 
            alta, 
            sintomas,
        }

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( 
                pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState 
            )

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId(); // Creamos el ID
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reiniciar el form
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')

    }


  return (
    <div className="md:w-1/2 lg:w-2/5 mb-8">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-2">
            Añade Pacientes y {''}
            <span className="text-emerald-500 font-bold">Administralos</span>
        </p>

        <form 
            onSubmit={ handleSubmit }
            className="bg-gray-50 shadow-md rounded-lg py-10 px-5 md:m-0 m-4"
        >
            { error && <Error mensaje='Todos los Campos son Obligatorios' /> }
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
                    onChange={ (e) => setMascota(e.target.value) }
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
                    onChange={ (e) => setPropietario(e.target.value) }
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
                    onChange={ (e) => setEmail(e.target.value) }
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
                    onChange={ (e) => setAlta(e.target.value) }
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
                    onChange={ (e) => setSintomas(e.target.value) }
                />
            </div>

            <input 
                type="submit"
                value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                className="bg-emerald-500 w-full rounded-md p-3 text-white uppercase font-bold
                            hover:bg-emerald-700 cursor-pointer transition-colors" 
            />

        </form>
    </div>
  )
}
