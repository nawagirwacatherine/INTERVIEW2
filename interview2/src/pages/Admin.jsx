
import SideBar from "./SideBar"
import Icon from "./Icon"
import AdminPart from "./AdminPart"
import EventsAndProjects from "./EventsAndProjects"
import Utilities from "./Utilities"

function Admin () {
    return(
        <>
        <div className="admin">
        <div className="vertical">

       
        <SideBar/>
        </div>
        <div className="first">
       
       <div className="horizontal-container">
      
        <Icon/>
      
       </div>

       <div className="vertical-container">
       
        <AdminPart/>

       </div>
    
       <div className="horizontal">
               <div className="utilities">
 <Utilities name='Active client'/>
 <Utilities name='Active Admin'/>
 <Utilities name=' Total expenses'/>
 <Utilities name='Running Projects'/>

 </div>
   <div>
        <EventsAndProjects name= 'Upcoming Events'/>
        <EventsAndProjects name ='Running Projects'/>
        </div>
        </div>
        </div>
        </div>
</>


    )
}

export default Admin;
