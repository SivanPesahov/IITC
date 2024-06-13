import React, { useEffect, useState, useMemo } from "react";

function Filter(props){
  return(<div className="message" >
  <input type="search" placeholder="search here for a task" value={props.query} onChange={(ev) => props.setQuery(ev.target.value)}/>
</div>)
}

export default Filter;