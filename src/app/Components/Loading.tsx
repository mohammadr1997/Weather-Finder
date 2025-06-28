import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';





function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={(theme) => ({
          color: theme.palette.grey[200],
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[800],
          }),
        })}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={(theme) => ({
          color: '#1a90ff',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          ...theme.applyStyles('dark', {
            color: '#308fe8',
          }),
        })}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}


export default function Loading() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1,margin:'25px auto' }}>
      <FacebookCircularProgress />
    
      <br />
     
    </Stack>
  );
}
