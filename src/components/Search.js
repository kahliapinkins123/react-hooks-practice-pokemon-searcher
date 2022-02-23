import React from "react";

function Search({ input, setInput }) {
  

  function changeHandler(e){
    setInput(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={input} onChange={changeHandler}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
