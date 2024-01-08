import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return(
    <div style={{textAlign: "center"}}>
      <h3>{error.status}</h3>
      <h5>{error.statusText || 'Something goes wrong!'}</h5>
    </div>
  )
} /* first variant */

// function ErrorPage() {
//   const error = useRouteError();
//
//   if (isRouteErrorResponse(error)) {
//     return(
//       <div style={{textAlign: "center"}}>
//         <h3>{error.status}</h3>
//         <h5>{error.data.message || 'Something goes wrong!'}</h5>
//         <p>{error.data.reason}</p>
//       </div>
//     )
//   }
//   throw error;
// } /* second variant (don't work) */

export default ErrorPage;