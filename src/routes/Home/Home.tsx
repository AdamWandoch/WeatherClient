import { useQuery } from '@tanstack/react-query';
import { AddressDTO, api } from '../../lib/api';
import { PeriodCard } from '../../lib/components/PeriodCard';

const dto: AddressDTO = {
  Number: 608,
  Street: 'Montana Ave',
  City: 'Santa Monica',
  State: 'CA',
  ZipCode: 90403,
};

export const Home = () => {
  const forecastQuery = useQuery({
    queryKey: ['forecast'],
    queryFn: () => api.getForecast(dto),
    retry: false,
  });

  return (
    <>
      <h1>Forecast Panel</h1>
      {!forecastQuery.isLoading && forecastQuery.data ? (
        <>
          {forecastQuery.data.responseData.periods.map((period) => (
            <PeriodCard data={period} key={period.number} />
          ))}
        </>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
};

export default Home;
