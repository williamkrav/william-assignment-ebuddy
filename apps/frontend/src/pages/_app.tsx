
import { Provider } from 'react-redux';
import store from '../store/store'; 

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <Provider store={store}>
      
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
