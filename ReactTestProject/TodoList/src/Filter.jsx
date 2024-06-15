import React, { useEffect, useState, useMemo } from "react";

function Filter(props){
  return(
    <div className="filter-container" >
      <div>
      <input type="search" placeholder="search here for a task" value={props.query} onChange={(ev) => props.setQuery(ev.target.value)}/>
      </div>
      <select onChange={props.handleFilterChange}>
        <option value="all">Present by original order</option>
        <option value="alphabetical">Present by alphabetical order</option>
        <option value="true">Present active</option>
        <option value="false">Present done</option>
      </select>
   </div>
)}

export default Filter;




