
import SideBar from "./SideBar"
import Icon from "./Icon"
import AdminPart from "./AdminPart"
import EventsAndProjects from "./EventsAndProjects"
import Utilities from "./Utilities"

function Admin () {
    return(
        <>
        <div className="admin">

    
        <SideBar/>
       <section>
      
        <Icon/>
      
       
       
        <AdminPart/>
      
       <div className="events">
        <EventsAndProjects/>
       
       
        <Utilities />
        </div>
        </section>
        </div>
    
        
        </>
    )
}

export default Admin;