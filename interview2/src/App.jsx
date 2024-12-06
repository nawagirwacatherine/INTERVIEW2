import "./App.css";
import ActiveClient from "./components/ActiveClient"
import Marketing from "./components/Marketing"
import UpComing from "./components/UpComing"
import Client from "./pages/Client"
import CrmAdmin from "./pages/CrmAdmin"
import CrmDashBoard from "./pages/CrmDashBoard"
import Search from "./pages/Search"

function App () {
  return(
    <>
    <div className="App">
    <ActiveClient />
    < Marketing />
    < UpComing />
    < Client  />
    < CrmAdmin />
    < CrmDashBoard />
    < Search />
    </div>
     </>
  )
}

export default App;
