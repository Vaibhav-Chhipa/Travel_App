// // pages/Home.jsx
// import { Container } from '@mui/material';
// import PopularDestinations from '../components/PopularDestinations';
// import TopSellingPackages from '../components/TopSellingPackages';

// export default function Home() {
//     return (
//         <Container maxWidth="lg" sx={{ py: 6, px: 2}}>
//             <PopularDestinations sx = {{ display: 'flex',alignItems: 'center'}}/>
//             <TopSellingPackages />
//         </Container>
//     );
// }

import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';
import PopularDestinations from '../components/PopularDestinations';
import TopSellingPackages from '../components/TopSellingPackages';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <FeatureStrip />
      <Box sx={{ px: 4, py: 4, align: 'center' }}>
        <PopularDestinations />
        <TopSellingPackages />
      </Box>
    </Box>
  );
}
