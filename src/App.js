import { LoginRoute, ProtectedRoutes } from "./protectedRoutes";

function App() {
  return (
    <div  
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFAFA",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <LoginRoute />
      <ProtectedRoutes />
    </div>
  );
}

export default App;
