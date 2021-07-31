import React, { useEffect } from "react";
import Switch from "react-switch";

const AscDes = ({
  sort,
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

      {/* <div>
        <input
          type="radio"
          onChange={() => {
            setSort("price-asc");
          }}
          name="sort"
          id="asc"
          value={sort}
        />
        <label for="asc">Croissant</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={() => {
            setSort("price-desc");
          }}
          name="sort"
          id="desc"
          value={sort}
        />
        <label for="desc">Décroissant</label>
        </div> */}
    </div>
  );
};

export default AscDes;
