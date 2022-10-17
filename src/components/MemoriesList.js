import React from 'react'
import MemoryCard from './MemoryCard'

function MemoriesList({ memories, onDeleteMemory, onUpdateMemory }) {
  return (
    <ul className="memory-list">
      {memories.map((memory) => {
        return (
          <MemoryCard
            key={memory.id}
            memoryList={memory}
            onDeleteMemory={onDeleteMemory}
            onUpdateMemory={onUpdateMemory}
          />
        );
      })}
    </ul>
  );
}

export default MemoriesList