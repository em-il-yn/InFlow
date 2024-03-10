import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const FixedButton = () => {
  return (
    <div className="fixed-button-container">
      <IconButton aria-label="add" size="large">
        <AddCircleTwoToneIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default FixedButton;
