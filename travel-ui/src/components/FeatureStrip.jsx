import { Box, Container, Stack, Typography } from '@mui/material';

export default function FeatureStrip() {
  const features = ['Easy Booking', 'Curated Destinations', 'Trusted Support'];

  return (
    <Box sx={{ backgroundColor: '#222', color: 'white', py: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
        >
          {features.map((feature, i) => (
            <Typography key={i} variant="subtitle1" sx={{ fontWeight: 500 }}>
              {feature}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
