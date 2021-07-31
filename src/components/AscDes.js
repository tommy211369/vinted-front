import React, { useEffect } from "react";
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
          onChange={() => {
            setActiveSwitch(!activeSwitch);
          }}
          checked={activeSwitch}
        />
        <p>Trier par prix</p>
      </div>

      {activeSwitch && (
        <label>
          <span className={sortSwitch === false && "asc"}>up</span>
          <Switch
            onChange={() => {
              setSortSwitch(!sortSwitch);
            }}
            checked={sortSwitch}
            onColor="#1AB245"
            offColor="#2C87F7"
            uncheckedIcon={false}
            checkedIcon={false}
            disabled={!activeSwitch}
          />
          <span className={sortSwitch === true && "desc"}>down</span>
        </label>
      )}
    </div>
  );
};

export default AscDes;
