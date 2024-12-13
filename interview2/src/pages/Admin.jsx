
import SideBar from "./SideBar"
import Icon from "./Icon"
import AdminPart from "./AdminPart"
import EventsAndProjects from "./EventsAndProjects"
import Utilities from "./Utilities"
import Items from "./Items"

function Admin () {
    return(
        <>
        <div className="admin">
        <div className="vertical">

       
        <SideBar name= "CRM"
        description = "ADMIN"/>
        </div>
        <div className="first">

<div className="horizontal-container">
      
      <Icon name = 'search'/>
    
     </div>
     <div  className="vertical-container">
       <AdminPart name='CRM Admin Dashboard' description='very detailed and featured Admin'/>
       </div>
    
       <div className="horizontal1">
        
               <div className="utilities">
 <Utilities name='Active client'/>
 <Utilities name='Active Admin'/>
 <Utilities name=' Total expenses'/>
 <Utilities name='Running Projects'/>

 </div>
 <div className="horizontal">

        <EventsAndProjects name= 'Upcoming Events'/>
        <EventsAndProjects name ='Running Projects'/>
        

        <div className="items">
           <Items />
           <Items />
           </div>
           </div>
           </div>
        </div>
        </div>
      
</>


    )
}

export default Admin;
