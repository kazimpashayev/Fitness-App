import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="30px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="the logo" />
        <Typography variant="h5" pb="20px" sx={{ fontSize: { xs: '20px' } }}>
          Made with ❤️ by Kazim Pashayev
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
