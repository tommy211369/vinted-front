import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Switch from "react-switch";

const AscDes = ({
  setSort,
  sortSwitch,
  setSortSwitch,
  activeSwitch,
  setActiveSwitch,
}) => {
  useEffect(() => {
    if (sortSwitch === false) {
      setSort("price-asc");
    } else if (sortSwitch === true) {
      setSort("price-desc");
    }

    if (activeSwitch === false) {
      setSort("");
    }
  }, [sortSwitch, setSort, activeSwitch]);

  return (
    <div className="asc-desc">
      <div className="checkbox">
        <input
          type="checkbox"
          style={{ color: "#3bc1c8" }}
          onChange={() => {
            setActiveSwitch(!activeSwitch);
          }}
          checked={activeSwitch}
        />
        <p>Trier par prix</p>
      </div>

      {activeSwitch && (
        <label>
          <span className={sortSwitch === false && "blue"}>
            <FontAwesomeIcon icon="angle-up" />
          </span>
          <Switch
            onChange={() => {
              setSortSwitch(!sortSwitch);
            }}
            checked={sortSwitch}
            onColor="#3bc1c8"
            offColor="#3bc1c8"
            uncheckedIcon={false}
            checkedIcon={false}
            disabled={!activeSwitch}
          />
          <span className={sortSwitch === true && "blue"}>
            <FontAwesomeIcon icon="angle-down" />
          </span>
        </label>
      )}
    </div>
  );
};

export default AscDes;
