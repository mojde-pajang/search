import { Button } from "#components/ui/button"

type Props = {
    errorMessage: string | null
    errorStatus: number | undefined
    fallback?: ()=> void
}

function Error({ errorMessage, errorStatus, fallback }: Props) {

  const handleFallback = async ()=> {
    if (fallback) {
      await fallback()
    }
    
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="grid gap-3">
          {
            errorStatus ?
            (<div className="text-8xl text-bold text-center text-red-800">{errorStatus}</div>)
            : null
          }
          <h1 className="text-5xl text-medium text-center text-red-800">{errorMessage || "An unexpected error occurred"}</h1>
         {
          fallback 
          ? (
              <Button 
                variant="destructive"
                className="cursor-pointer" onClick={handleFallback}> 
                Retry
              </Button>
          )
          : null
         }

        </div>
    </div>
  )
}

export default Error