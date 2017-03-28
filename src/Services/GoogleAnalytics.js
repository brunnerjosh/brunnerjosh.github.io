import ReactGA from 'react-ga';
import Constants from '../Constants';

ReactGA.initialize(Constants.googleAnalytics);

export default function logPageView () {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}
