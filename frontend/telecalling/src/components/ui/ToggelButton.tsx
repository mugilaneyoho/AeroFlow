import React, { useState } from 'react';

const ToggleSwitch:React.FC<{onToggle?:(data:boolean)=>void,checked:boolean}> = ({ onToggle,checked }) => {

  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleToggle = () => {
    const newState:boolean = !isChecked;
    setIsChecked(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isChecked ? 'bg-[#1F338C]' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
