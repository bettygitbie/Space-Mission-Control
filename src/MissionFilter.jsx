import React from "react";

function MissionFilter({ setFilter }) {
  const statuses = ["All", "Planned", "Active", "Completed"];
  return (
    <div>
      {statuses.map((status) => {
        return (
          <button
            className="heading-button"
            onClick={() => {
              setFilter(status);
            }}
          >
            {status}
          </button>
        );
      })}
    </div>
  );
}

export default MissionFilter;
