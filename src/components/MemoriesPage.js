import React, { useState, useEffect } from 'react'

import MemoriesForm from './MemoriesForm';
import MemoriesList from './MemoriesList';
import NavBar from './NavBar';

function MemoriesPage() {
  const [memories, setMemories] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/memories")
      .then((resp) => resp.json())
      .then((memoriesArray) => {
        setMemories(memoriesArray);
      });
  }, []);

  function handleAddMemory(newMemory) {
    const updatedMemoriesArray = [...memories, newMemory];
    setMemories(updatedMemoriesArray);
  }

  function handleDeleteMemory(id) {
    const updatedMemoriesArray = memories.filter((memory) => memory.id !== id);
    setMemories(updatedMemoriesArray);
  }

  function handleUpdateMemory(updatedMemory) {
    const updatedMemoriesArray = memories.map((memory) => {
      if (memory.id === updatedMemory.id) {
        return updatedMemory;
      } else {
        return memory;
      }
    });
    setMemories(updatedMemoriesArray);
  }

  // how does it know that my user is the one posting? 
  const displayId = memories.map((memory) => {
    return memory.user_id //this outputs ID 
  });

  const displayedMemories = memories.filter((memory) => {
    return memory.memory
  });


  return (
    <>
      <NavBar />
<br></br>
      <br></br>
      <br></br>

      <MemoriesForm
        onAddMemory={handleAddMemory}
        memoryId={displayId}

      />

      <div className="memoriespage-text">
        <MemoriesList
          memories={displayedMemories}
          onDeleteMemory={handleDeleteMemory}
          onUpdateMemory={handleUpdateMemory}
        />
      </div>
    </>
  )
}

export default MemoriesPage