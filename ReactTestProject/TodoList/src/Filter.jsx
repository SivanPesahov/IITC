import React, { useEffect, useState, useMemo } from "react";

function Filter(props){
  return(
    <div className="filter-container" >
      <input type="search" placeholder="search here for a task" value={props.query} onChange={(ev) => props.setQuery(ev.target.value)}/>
      <select onChange={props.handleFilterChange}>
        <option value="all">Present all</option>
        <option value="true">Present active</option>
        <option value="false">Present done</option>
      </select>
   </div>
)}

export default Filter;




