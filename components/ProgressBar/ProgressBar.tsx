import React from 'react';

interface ProgressBarProps {
  value: number;
  size: string;
}

const ProgressBar = ({ value, size }: ProgressBarProps) => {
  return <strong>{value}</strong>;
};

export default ProgressBar;
