
import React, { useState, useEffect } from 'react';

const CopyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);


interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  return (
    <div className="bg-gray-800 rounded-lg relative h-full">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 hover:text-white transition-all duration-200 flex items-center space-x-2"
        aria-label="Copy code"
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
        <span className="text-xs font-medium">{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
      <pre className="p-4 pt-12 overflow-auto h-full rounded-lg">
        <code className="text-sm font-code text-gray-200 whitespace-pre-wrap">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
