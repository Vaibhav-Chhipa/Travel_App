import { Box } from '@mui/material';

export default function CoverImage({ src, alt, ratio = 16 / 10 }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        pt: `${100 / ratio}%`, 
        overflow: 'hidden',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}
