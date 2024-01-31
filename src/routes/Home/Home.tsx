import { HttpStatusCode } from 'axios';
import {
  AddressDTO,
  ResponseDTO,
  WeatherForecastDTO,
  api,
} from '../../lib/api';
import { PeriodCard } from '../../lib/components/PeriodCard';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Tooltip,
  TooltipProps,
  message,
} from 'antd';
import { useState } from 'react';

const toolTipProps: TooltipProps = {
  trigger: 'focus',
  placement: 'topLeft',
};

export const Home = () => {
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [responseState, setResponseState] =
    useState<ResponseDTO<WeatherForecastDTO>>();

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleFormSubmit = async (values: any) => {
    const dto: AddressDTO = {
      Number: values.number,
      Street: values.street,
      City: values.city,
      State: values.state,
      ZipCode: values.zipCode,
    };

    setResponseState(undefined);
    setIsSendingRequest(true);

    messageApi.open({
      type: 'loading',
      content: 'Searching for data',
      duration: 0,
    });

    api.getForecast(dto).then((resp) => {
      setIsSendingRequest(false);

      if (resp && resp.status === HttpStatusCode.Ok) {
        setResponseState(resp.data);
        messageApi.destroy();
        messageApi.success('Weather forecast ready');
      } else {
        messageApi.destroy();
      }
    });
  };

  const handleFormFailed = () => {
    messageApi.open({
      type: 'warning',
      content: 'Form validation failed',
    });
    setIsSendingRequest(false);
  };

  return (
    <main className='mainContainer'>
      {contextHolder}
      <Row gutter={[15, 15]}>
        <Col sm={24} style={{ width: '100%' }}>
          <Card title='Weather forecast - addres search'>
            <Form
              id='form'
              className='form'
              name='form'
              form={form}
              layout='horizontal'
              onFinish={handleFormSubmit}
              onFinishFailed={handleFormFailed}
            >
              <Row gutter={[5, 0]}>
                <Tooltip {...toolTipProps} title='House number'>
                  <Col xs={6} md={2}>
                    <Form.Item
                      name={'number'}
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input type='number' placeholder='608' />
                    </Form.Item>
                  </Col>
                </Tooltip>
                <Tooltip {...toolTipProps} title='Street name'>
                  <Col xs={18} md={5}>
                    <Form.Item
                      name={'street'}
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input type='text' placeholder='Montana Ave' />
                    </Form.Item>
                  </Col>
                </Tooltip>
                <Tooltip {...toolTipProps} title='City / town'>
                  <Col xs={10} md={4}>
                    <Form.Item
                      name={'city'}
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input type='text' placeholder='Santa Monica' />
                    </Form.Item>
                  </Col>
                </Tooltip>
                <Tooltip {...toolTipProps} title='State'>
                  <Col xs={4} md={2}>
                    <Form.Item
                      name={'state'}
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input type='text' placeholder='CA' />
                    </Form.Item>
                  </Col>
                </Tooltip>
                <Tooltip {...toolTipProps} title='ZIP code'>
                  <Col xs={10} md={4}>
                    <Form.Item
                      name={'zipCode'}
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input type='number' placeholder='90403' />
                    </Form.Item>
                  </Col>
                </Tooltip>
                <Col xs={24} md={7}>
                  <Space style={{ float: 'right' }} size={5}>
                    <Button key={1} onClick={() => form.resetFields()}>
                      RESET
                    </Button>
                    <Button
                      type='primary'
                      htmlType='submit'
                      loading={isSendingRequest}
                      key={2}
                      style={{ width: '135px' }}
                    >
                      {!isSendingRequest ? 'SEARCH' : 'SEARCHING'}
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        {responseState?.responseData.periods && (
          <>
            {responseState?.responseData.periods.map((period) => (
              <Col xs={24} md={8} key={period.number}>
                <PeriodCard data={period} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </main>
  );
};

export default Home;
