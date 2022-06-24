import React, {useState} from "react";

function MemoriesForm({onAddMemory}) {

  const initialMemoryData = {
		name: "",
  
	}
  const [memory, setMemory]= useState(""); 

  function handleSubmit(event) {
    event.preventDefault(); 
    event.target.reset();
    fetch("http://localhost:9292/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ 
        memory: memory
      }),
    })
    .then((resp) => resp.json())
    .then((newMemory) => onAddMemory(newMemory))
  }



  return (
    <div className="new-memory-form">
      <h2 className="memoriespage-title">Collecting Moments, Not Things</h2>
      <hr></hr>
      <form className= "memoriespage-form" onSubmit={handleSubmit}> 
        <input 
        className= "memoriespage-input"
        type="text" 
        name="memory" 
        placeholder="Moments I'd like to remember..." 
        onChange= {(event) => setMemory(event.target.value)}
        />
        <br></br>

        <button className= "memoriespage-button"
        type="submit">Into My Memory Bank</button>
      </form>
    </div>
  );
}

export default MemoriesForm;
