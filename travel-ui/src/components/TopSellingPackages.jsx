import { Grid, Skeleton, Typography } from '@mui/material';
import PackageCard from './PackageCard';
import { useTopPackages } from '../hooks/useTopPackages';

export default function TopSellingPackages() {
  const { data, isLoading } = useTopPackages();

  return (
    <>
      <Typography variant="h4" mb={2} mt={4} align="center">Top Selling Tour Packages of India</Typography>
      <Grid container spacing={3} alignItems={'center'} justifyContent={'center'}>
        {(isLoading ? Array.from({ length: 6 }) : data).map((item, idx) => (
          <Grid item xs={12} sm={4} md={4} key={idx}>
            {isLoading ? (
              <Skeleton variant="rectangular" height={240} sx={{ borderRadius: 3 }} />
            ) : (
              <PackageCard pack={item} />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
