import { useRouteError } from "react-router-dom"
function ErrorPage() {
    const error = useRouteError();
    if(error.status == 404){
        <h1>Page Not Found</h1>
    }
  return (
    <div>
      <h1>Something Went Wromng </h1>
    </div>
  )
}

export default ErrorPage
