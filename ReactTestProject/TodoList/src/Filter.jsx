import React, { useEffect, useState, useMemo } from "react";

function Filter(props){
  
  const {query, setQuery, handleFilterChange} = props
  
  return(
    <div className="filter-container" >
      <input type="search" placeholder="search here for a task" value={query} onChange={(ev) => setQuery(ev.target.value)}/>
      <select className="toggle" onChange={handleFilterChange}>
        <option value="all">Present all</option>
        <option value="alphabetical">Alphabetical order</option>
        <option value="true">Active tasks</option>
        <option value="false">Done tasks</option>
      </select>
   </div>
)}

export default Filter;




