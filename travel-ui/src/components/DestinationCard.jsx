// components/DestinationCard.jsx
// import { Card, CardMedia, CardContent, Typography } from '@mui/material';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// export default function DestinationCard({ dest }) {
//   return (
//     <Card elevation={3} sx={{ borderRadius: 3 }}>
//       <CardMedia component="img" height={200} image={dest.imageUrl} alt={dest.name} />
//       <CardContent>
//         <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <FaMapMarkerAlt /> {dest.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Starting from ₹{dest.priceFrom.toLocaleString('en-IN')}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// import { Card, CardContent, Typography } from '@mui/material';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import CoverImage from './CoverImage'; // ✅ new import

// export default function DestinationCard({ dest }) {
//   return (
//     <Card elevation={3} sx={{ borderRadius: 3, height: '100%' }}>
//       <CoverImage src={dest.imageUrl} alt={dest.name} ratio={16 / 10} /> {/* ✅ replaces CardMedia */}
//       <CardContent>
//         <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <FaMapMarkerAlt /> {dest.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Starting from ₹{dest.priceFrom.toLocaleString('en-IN')}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function DestinationCard({ dest }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: '100%',               // so all cards stretch equally
        display: 'flex',
        flexDirection: 'column',
        
      }}
    >
      <CardMedia
        component="img"
        image={dest.imageUrl}
        alt={dest.name}
        sx={{
          height: 180,                // 🔒 fixed image height
          width: 350,              // fills grid cell width
          objectFit: 'cover',         // crops to keep aspect, no stretching
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <FaMapMarkerAlt /> {dest.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Starting from ₹{dest.priceFrom.toLocaleString('en-IN')}
        </Typography>
      </CardContent>
    </Card>
  );
}


