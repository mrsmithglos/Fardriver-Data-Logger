
import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <label htmlFor={id} className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-5 h-5 bg-gray-700 rounded ring-2 ring-transparent peer-focus:ring-blue-500 transition-all duration-200"></div>
        <svg
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none transition-opacity duration-200 ${checked ? 'opacity-100' : 'opacity-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{label}</span>
    </label>
  );
};

export default Checkbox;
