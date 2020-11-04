import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../utils/configure-store';
import '../../styles/antd.less';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  )  
}

export default MyApp;
