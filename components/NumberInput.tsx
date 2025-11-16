
import React from 'react';

interface NumberInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ id, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  );
};

export default NumberInput;
