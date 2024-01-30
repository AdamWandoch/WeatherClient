import { message } from 'antd';
import { HttpStatusCode } from 'axios';

type ErrorType = { [key: string]: string[] };

export const handleErrorStatus = (
  errorObj: ErrorType,
  status: HttpStatusCode
) => {
  console.log(errorObj);

  switch (status) {
    case HttpStatusCode.InternalServerError:
      message.error('Internal server error');
      break;
    case HttpStatusCode.Unauthorized:
      message.error('API access denied');
      break;
    case HttpStatusCode.UnprocessableEntity:
      const msgs = getPropertiesAndValues(errorObj);
      message.warning(msgs.join('\n\n'), 7);
      break;
    default:
      break;
  }
};

const getPropertiesAndValues = (obj: ErrorType): string[] => {
  let output: string[] = [];

  for (const [_, values] of Object.entries(obj)) {
    output.push(` ${values.join(' ')}`);
  }

  const NOT_FOUND = 'not found.';

  output = output.map((x) =>
    x
      .replace(`Latitude ${NOT_FOUND}`, `Address ${NOT_FOUND}`)
      .replace(`Longtitude ${NOT_FOUND}`, `Address ${NOT_FOUND}`)
  );

  return output;
};
