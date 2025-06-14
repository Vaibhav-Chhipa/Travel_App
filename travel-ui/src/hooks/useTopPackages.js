import { useQuery } from '@tanstack/react-query';
import http from '../api/http';

export const useTopPackages = () =>
  useQuery({
    queryKey: ['topPackages'],
    queryFn: () => http.get('/packages/top-selling').then(r => r.data),
    staleTime: 5 * 60 * 1000,
  });
