import { message } from 'antd';
import { HttpStatusCode } from 'axios';

type ErrorType = { [key: string]: string[] };

export const handleErrorStatus = (
  errorObj: ErrorType,
  status: HttpStatusCode
) => {
  console.log(errorObj);

  if (status === HttpStatusCode.InternalServerError)
    message.error('Internal server error');
  else {
    const msgs = getPropertiesAndValues(errorObj);
    message.warning(msgs.join('\n\n'), 7);
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
