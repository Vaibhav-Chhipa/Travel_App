// // components/PackageCard.jsx
// import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
// import { FaPlaneDeparture } from 'react-icons/fa';

// export default function PackageCard({ pack }) {
//   return (
//     <Card elevation={3} sx={{ borderRadius: 3 }}>
//       <CardMedia component="img" height={180} width={220} image={pack.imageUrl} alt={pack.title} />
//       <CardContent>
//         <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <FaPlaneDeparture /> {pack.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {pack.days}days·₹{pack.price.toLocaleString('en-IN')}
//         </Typography>
//         <Button size="small" sx={{ mt: 1 }}>View Details</Button>
//       </CardContent>
//     </Card>
//   );
// }

import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { FaPlaneDeparture } from 'react-icons/fa';

export default function PackageCard({ pack }) {
  return (
    <Card
      elevation={4}
      sx={{
        width: '100%',              // fill the grid cell
        height: '100%',             // equal height for all cards
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
      }}
    >
      {/* Fixed‑height banner image */}
      <CardMedia
        component="img"
        image={pack.imageUrl}
        alt={pack.title}
        sx={{ height: 180, width:350, objectFit: 'cover' }}
      />

      {/* Content grows to fill; button stays at the bottom */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}
        >
          <FaPlaneDeparture /> {pack.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={1}>
          {pack.days} days · ₹{pack.price.toLocaleString('en-IN')}
        </Typography>

        {/* Spacer pushes the button down when text is short */}
        <Box sx={{ flexGrow: 1 }} />

        <Button size="small" fullWidth variant="outlined">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
