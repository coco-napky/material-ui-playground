import {cyan500} from 'material-ui/lib/styles/colors';
import {cyan700} from 'material-ui/lib/styles/colors';
import {lightBlack} from 'material-ui/lib/styles/colors';
import {pinkA200} from 'material-ui/lib/styles/colors';
import {grey100} from 'material-ui/lib/styles/colors';
import {grey500} from 'material-ui/lib/styles/colors';
import {darkBlack} from 'material-ui/lib/styles/colors';
import {white} from 'material-ui/lib/styles/colors';
import {grey300} from 'material-ui/lib/styles/colors';

import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightBlack,
    primary2Color: lightBlack,
    primary3Color: lightBlack,
    accent1Color: lightBlack,
    accent2Color: lightBlack,
    accent3Color: lightBlack,
    textColor: lightBlack,
    alternateTextColor: '#727272',
    canvasColor: white,
    borderColor: grey300,
    disabledColor: ColorManipulator.fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
  }
};