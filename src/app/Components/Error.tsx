import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function ErrorAlert() {
  return (
    <Stack sx={{ width: '100%',marginTop:'25px' }} spacing={2}>

      <Alert severity="error">
        <AlertTitle >Error</AlertTitle>
        The City You Searched Was Not Found
      </Alert>
    </Stack>
  );
}
