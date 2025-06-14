import { useQuery } from '@tanstack/react-query';
import http from '../api/http';

export const useDestinations = () =>
  useQuery({
    queryKey: ['destinations'],
    queryFn: () => http.get('/destinations').then(r => r.data),
    staleTime: 5 * 60 * 1000, 
  });
