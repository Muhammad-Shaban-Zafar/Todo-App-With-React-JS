import AuthContextProvider from "./context/AuthContext";
import { CustomRoutes } from "./pages/Routes";
import "./App.scss";

function App() {
  return (
    <AuthContextProvider>
      <CustomRoutes />
    </AuthContextProvider>
  );
}

export default App;
