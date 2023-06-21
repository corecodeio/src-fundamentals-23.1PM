import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  const [session, setSession] = useState({
    name: "",
    email: "",
    isAuth: false,
    token: "",
  });
  return (
    <div>
      {session.isAuth ? (
        <h2>{`${session.email} esta logeado correctamente su token es: ${session.token}`}</h2>
      ) : (
        <h2>Falta Acceso</h2>
      )}
      {session.isAuth ? (
        <Dashboard data={session} />
      ) : (
        <Login setSession={setSession} />
      )}
    </div>
  );
};

export default App;
