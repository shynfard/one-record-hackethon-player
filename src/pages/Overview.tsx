import React from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';
// icons
import { Icon, IconProps } from '@iconify/react';
// @mui
import { Box, Stack, SxProps, Theme, Typography } from '@mui/material';
import JoLPlayer from 'jol-player';

// ----------------------------------------------------------------------

interface Props {}

export default function Overview({}: Props) {
  return (
    <Box sx={{ m: '0 auto' }}>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Typography align="center" variant="h1">
          Welcome to our Video Player{' '}
        </Typography>
        <Box width="720px" height="480px" sx={{ m: '0 auto' }}>
          <video width="720" height="480" controls>
            <source src="https://storage.googleapis.com/random-storage-staging/preFinal.mp4" type="video/mp4" />
          </video>
        </Box>
      </Stack>
    </Box>
  );
}
