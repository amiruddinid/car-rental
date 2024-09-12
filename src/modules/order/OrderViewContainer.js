import { compose, withState } from 'recompose';

import HomeScreen from './OrderView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  HomeScreen,
);
