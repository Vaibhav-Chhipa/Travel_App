import { Box, Typography, Button, Stack, Container, useTheme } from '@mui/material';

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { xs: '100vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Choose from our curated experiences, customized for every kind of traveler.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#FFC107',
              },
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
