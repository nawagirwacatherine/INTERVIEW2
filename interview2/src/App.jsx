import ActiveClient from "./components/ActiveClient"
import Marketing from "./components/Marketing"
import UpComing from "./components/UpComing "
import Client from "./pages/Client"
import CrmAdmin from "./pages/CrmAdmin"
import CrmDashboard from "./pages/CrmAdmin"
import Search from "./pages/Search.jsx"

function App () {
  return(
    <>
    <ActiveClient />
    < Marketing/>
    < UpComing />
    < Client  />
    < CrmAdmin/>
    < CrmDashboard/>
    < Search/>
     </>
  )
}

export default App;
