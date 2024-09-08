import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
        <p>Jhon Sebastian Gomez Torres.</p>
        <p>Full Stack Engineer.</p>
    </Box>
  );
}