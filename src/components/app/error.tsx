type Props = {
    errorMessage: string
    errorStatus: string
}

function Error({errorMessage, errorStatus}: Props) {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="grid gap-3">
          <div className="text-8xl text-bold text-center text-red-800">{errorStatus}</div>
          <h1 className="text-5xl text-medium text-center text-red-800">{errorMessage}</h1>
        </div>
    </div>
  )
}

export default Error