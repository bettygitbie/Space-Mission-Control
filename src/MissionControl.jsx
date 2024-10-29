import MissionCards from "./MissionCards";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";
import { useState } from "react";

export default function MissionControl({ initialMission }) {
  const [missions, setMissions] = useState(initialMission);
  const [filter, setFilter] = useState("All");
  console.log(missions);
  function updateStatus(id, newStatus) {
    setMissions((missions) =>
      missions.map((mission) =>
        mission.id === id ? { ...mission, status: newStatus } : mission
      )
    );
  }
  const missionsFilter = missions.filter(
    (mission) => filter == "All" || filter === mission.status
  );
  return (
    <div>
      <MissionFilter setFilter={setFilter} />
      <div>
        {missionsFilter.map((mission) => {
          return (
            <div className="mission-control">
              <div>
                <MissionCards
                  name={mission.name}
                  status={mission.status}
                  crew={mission.crew}
                />
              </div>

              <MissionAction id={mission.id} updateStatus = {updateStatus}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
