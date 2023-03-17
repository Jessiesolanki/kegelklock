import * as React from 'react';
import {Text} from 'react-native';
import {Colors} from './Config';
import {ScaledSheet} from 'react-native-size-matters';
import {
  scale,
  verticalScale,
  moderateScale,
  vs,
} from 'react-native-size-matters';

const MyText = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  bold,
  italic,
  title,
  style,
  green,
  white,
  black,
  bronze,
  gold,
  silver,
  poppinsbold,
  poppinsitalic,
  mextrabold,
  poppinsemibold,
  poppinmedium,
  mbold,
  msemibold,
  mregular,
  blue,
  ...rest
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {color: Colors.Default},
        
        h1 && {fontSize: scale(45)},
        h2 && {fontSize: scale(32)},
        h3 && {fontSize: scale(19)},
        h4 && {fontSize: scale(18)},
        h6 && {fontSize: 18},
        h5 && {fontSize: scale(16)},
        p && {fontSize: 12},
    
        mextrabold && {fontFamily: 'Montserrat-ExtraBold'},
        mbold && {fontFamily: 'Montserrat-Bold'},
        msemibold && {fontFamily: 'Montserrat-SemiBold'},
        mregular && {fontFamily: 'Montserrat-Regular'},
        poppinsitalic && {fontFamily: 'Poppins-BoldItalic'},
        poppinsbold && {fontFamily: 'Poppins-Bold'},
        poppinsemibold && {fontFamily: 'Poppins-SemiBold'},
        poppinmedium && {fontFamily: 'Poppins-Medium'},
        green && {color: Colors.Theme},
        bold && {fontWeight: 'bold'},
        italic && {fontStyle: 'italic'},
        white && {color: 'white'},
        black && {color: Colors.Default},
        bronze && {color: '#bc925f'},
        gold && {color: '#e6b018'},
        silver && {color: '#c1c1c1'},
        blue && {color: '#00b2f5'},
        style,
      ]}
      {...rest}>
      {title}
    </Text>
  );
};

export default MyText;
