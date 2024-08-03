import React, { useEffect, useState, useMemo } from "react";
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useOutletContext, useSearchParams } from "react-router-dom";

function Filter(props){
  
  const { handleFilterChange, } = props
  const [searchParams, setSearchParams] = useSearchParams({query : ''})
  const query = searchParams.get('query')
  
  return(
    <div className="filter-container" >
      <TextField id="outlined-basic" label="Search here" variant="outlined" value={query} onChange={(ev) => setSearchParams(prev => {prev.set('query', ev.target.value); return prev},{replace : true})} />
      <select className="toggle" onChange={handleFilterChange}>
        <option value="all">Present all</option>
        <option value="true">Active tasks</option>
        <option value="false">Done tasks</option>
      </select>  
   </div>
)}

export default Filter;




