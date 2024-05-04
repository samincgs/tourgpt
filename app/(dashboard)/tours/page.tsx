import ToursPage from '@/components/ToursPage';
import { getAllTours } from '@/utils/actions';
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from '@tanstack/react-query';

const TourPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['tours', ''],
    queryFn: () => getAllTours(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
};
export default TourPage;
