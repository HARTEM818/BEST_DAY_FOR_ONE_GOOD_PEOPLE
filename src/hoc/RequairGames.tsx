import { Navigate } from "react-router-dom";


type Children = {
    children: React.ReactNode;
} 

export default function RequairGames({children}: Children) {
  if (
    localStorage.getItem("first") !== "true" &&
    localStorage.getItem("second") !== "true"
  ) {
    return <Navigate to="/"/>
  }
    return <>
        {children}
    </>;
}
