import React from 'react';
import { PeriodDTO } from '../../api';
import { Card, Col, Row, Typography } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { getWindRotation } from '../../../routes/Home/Home.logic';

interface IProps {
  data: PeriodDTO;
}

const { Paragraph } = Typography;

export const PeriodCard: React.FC<IProps> = ({ data }) => {
  return (
    <Card
      title={`${data.name} - ${data.shortForecast}`}
      style={{ height: '100%' }}
    >
      <img src={data.icon} className='icon' alt='' />
      <Paragraph style={{ textAlign: 'center' }}>
        {`From ${new Date(data.startTime).toLocaleString()}`}
      </Paragraph>
      <Paragraph style={{ textAlign: 'center' }}>
        {`To ${new Date(data.endTime).toLocaleString()}`}
      </Paragraph>

      <Row>
        <Col xs={12}>
          <Paragraph>{`Temperature ${data.temperature} ${
            data.temperatureUnit !== 'K' && '°'
          }${data.temperatureUnit}`}</Paragraph>
        </Col>
        <Col xs={12}>
          <Paragraph>{`Humidity ${data.relativeHumidity.value} %`}</Paragraph>
        </Col>
        <Col xs={24}>
          <Paragraph>
            {`Wind ${data.windSpeed} ${data.windDirection}`}
            <ArrowDownOutlined
              style={{
                rotate: getWindRotation(data.windDirection),
                border: 'solid 1px',
                borderRadius: '100%',
                padding: '3px',
                marginLeft: '0.5rem',
              }}
            />
          </Paragraph>
        </Col>
        <Col xs={24}>
          <Paragraph>{data.detailedForecast}</Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default PeriodCard;
