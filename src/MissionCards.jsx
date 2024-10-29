export default function MissionCards(props) {
  return (
    <div className="mission-card">
      <h3 className="mission-card-name"> {props.name} </h3>
      <p className="mission-card-status">Status: {props.status}</p>
      <p className="mission-card-crew">
        Crew: {props.crew[0]}, {props.crew[1]}
      </p>
    </div>
  );
}
