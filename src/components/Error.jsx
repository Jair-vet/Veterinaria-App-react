
export const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-200 text-red-800 text-center p-2 mb-2 rounded-md">
        <p className="uppercase">{ mensaje }</p>
    </div>
  )
}
