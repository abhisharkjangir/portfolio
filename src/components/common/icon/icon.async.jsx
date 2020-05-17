import universal from 'react-universal-component';
import universalOptions from '../../../utils/universalOptions';

export default universal(
  // eslint-disable-next-line extra-rules/no-commented-out-code
  import(/* webpackChunkName: "icons" */ './icon'),
  universalOptions
);
