
function MissionAction(props) {


   
  return (
    <div className="mission-card-btn">
          <button id="launch" onClick={() =>props.updateStatus(props.id,"Active")}>Launch</button>
          <button id="complete" onClick={()=> props.updateStatus(props.id,"Completed")}>Complete</button>
    </div>
  )
}

export default MissionAction;
