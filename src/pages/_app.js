import '../../styles/globals.css';
import { ConfigProvider } from "../context/configContext";

import AppLayout from '../components/AppLayout'

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from '../translations/es/global.json';
import global_en from '../translations/en/global.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
})

function App({ Component, pageProps }) {
  // return <Component {...pageProps} /> //original
  //modo mantenimiento
  // if (process.env.MAINTENANCE) {
  //   return <Maintenance />;
  // }
  // return <Component {...pageProps} />;
  return (
      <ConfigProvider>
        <I18nextProvider i18n={i18next}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </I18nextProvider>
      </ConfigProvider>
    );
}

export default App
