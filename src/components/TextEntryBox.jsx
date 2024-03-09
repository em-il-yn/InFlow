import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextEntryBox = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
      </div>
    </Box>
  );
};

export default TextEntryBox;
