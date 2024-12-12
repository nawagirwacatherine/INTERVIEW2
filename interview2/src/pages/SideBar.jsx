function SideBar (prop) {

    return(
      
  <div className="side-bar">
    <h1>{prop.name}</h1>
    <p>{prop.description}</p>
    </div>
   
    )
}

export default SideBar;