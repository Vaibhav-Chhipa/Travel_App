import { Grid, Skeleton, Typography } from '@mui/material';
import DestinationCard from './DestinationCard';
import { useDestinations } from '../hooks/useDestinations';

export default function PopularDestinations() {
    const { data, isLoading } = useDestinations();

    return (
        <>
            <Typography variant="h4" mb={2} align="center" >
                Explore Most Popular Destinations
            </Typography>
            <Grid container spacing={3} alignItems={'center'} justifyContent={'center'}>
                {(isLoading ? Array.from({ length: 6 }) : data).map((item, idx) => (
                    <Grid item xs={12} sm={4} md={4} key={idx}>
                        {isLoading ? (
                            <Skeleton variant="rectangular" height={240} sx={{ borderRadius: 3 }} />
                        ) : (
                            <DestinationCard dest={item} />
                        )}
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
