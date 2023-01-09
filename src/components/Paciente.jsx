
export const Paciente = () => {
  return (
    <div className="m-4 md:ml-10 bg-gray-50 shadow-md px-5 py-4 rounded-xl hover:scale-105 
                        duration-500 hover:bg-emerald-600 group">
        <p className="font-bold mb-3 uppercase group-hover:text-white">
            Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 group uppercase group-hover:text-white">
            Propietario: {''}
            <span className="font-normal normal-case">Carlos Jair</span>
        </p>
        <p className="font-bold mb-3 uppercase group-hover:text-white">
            Email: {''}
            <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 uppercase group-hover:text-white">
            Día de Ingreso: {''}
            <span className="font-normal normal-case">10 Diciembre 2022</span>
        </p>
        <p className="font-bold mb-3uppercase group-hover:text-white">
            Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a vero asperiores temporibus ea inventore corrupti, quo consectetur reprehenderit quas, aperiam fugiat sequi voluptatum sit quod molestias dignissimos. Recusandae, iure?</span>
        </p>
    </div>
  )
}
