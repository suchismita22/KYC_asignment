import React from 'react';
import { Result } from 'antd';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    //   extra={<SubmitBtn label="Back Home" onClick={()=>window.location.replace('/')} />}
    />
  )
}

export default NotFound