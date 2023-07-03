import React, { Component, useState } from "react";
import "./styles.css";

function MedicationList({ name, dosageAmount, schedule, dosageTime, checked }) {
  // let numberOfTimes = dosageTime.length;
  // let dosageTimeList = [];

  // for (let i = 0; i < numberOfTimes; i++){
  //   dosageTimeList.push(<>{dosageTime[i]}<br/></>)
  // }

  console.log(dosageTime);
  return (
    <tr>
      <td>{name}</td>
      <td>{dosageAmount}</td>
      <td>{dosageTime.substring(0, 5)}</td>
      <td>
        <input
          className="medication-checkbox"
          type="checkbox"
          setChecked={checked}
          onChange={() => !checked}
        />
      </td>
    </tr>
  );
}

export default MedicationList;
