import React from 'react';
import { PeriodDTO } from '../../api';

interface IProps {
  data: PeriodDTO;
}

export const PeriodCard: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <div>
      <h3>
        {data.name} - {data.shortForecast}
      </h3>
      <p>{`Temperature ${data.temperature + data.temperatureUnit}`}</p>
    </div>
  );
};

export default PeriodCard;
