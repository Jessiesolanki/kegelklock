import React, { forwardRef, useImperativeHandle, useMemo,useState } from 'react';
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native';

import ProgressCircle from '../components/progressCircle';
import useAnimatedValue from '../hooks/useAnimatedValue';
import COLORS from '../utils/colors';
import type { CircularProgressProps, ProgressRef } from '../types';
import ProgressValue from '../components/progressValue';

import styles from './styles';

// eslint-disable-next-line max-len, prettier/prettier
const CircularProgress = forwardRef<ProgressRef, CircularProgressProps>((props, ref) => {
  
  const [isHalf, setHalf] = useState(false)
  
  const {
    value,
    initialValue = 0,
    circleBackgroundColor = COLORS.TRANSPARENT,
    radius = 60,
    duration = 500,
    delay = 0,
    maxValue = 100,
    strokeLinecap = 'round',
    onAnimationComplete = () => null,
    activeStrokeColor = COLORS.GREEN,
    activeStrokeSecondaryColor = null,
    activeStrokeWidth = 10,
    inActiveStrokeColor = COLORS.BLACK_30,
    inActiveStrokeWidth = 10,
    inActiveStrokeOpacity = 1,
    clockwise = true,
    rotation = 0,
    title = '',
    titleStyle = {},
    titleColor,
    titleFontSize,
    progressValueColor,
    progressValueStyle = {},
    progressValueFontSize,
    resttime,
    transparentcircle,
    valuePrefix = '',
    valueSuffix = '',
    showProgressValue = true,
    subtitle = '',
    subtitleStyle = {},
    subtitleColor,
    subtitleFontSize,
    Progressvalue,
    progressFormatter = (v: number) => {
      'worklet';
      return Math.round(v);
    },
    allowFontScaling = true,
    dashedStrokeConfig = { count: 0, width: 0 },
    Toptitle,
    onLPress,
    onRPress,
    reverse,
    Buttons,
    showdash,
    valuePrefixStyle = {},
    valueSuffixStyle = {},
    strokeColorConfig = undefined,
  } = props;



  const [ctiveStrokeColor, setctiveStrokeColor] = useState(activeStrokeColor)


const ColorChnage= ()=>{
  setctiveStrokeColor(activeStrokeColor)
  // here was a red color
}

  const ColorAgain = () => {
    setctiveStrokeColor(activeStrokeColor)
  }




// setTimeout(() => {
 
// }, 3000);

  const { 
    animatedCircleProps,
    animatedTextProps,
    progressValue,
    play,
    pause,
    // onValue,
    reAnimate,
  } = useAnimatedValue({
      initialValue,
      radius,
      reverse,
      maxValue,
      isHalf,
       setHalf,
      clockwise,
      delay,
      value,
      duration,
      Progressvalue,
      onAnimationComplete,
      activeStrokeWidth,
      inActiveStrokeWidth,
      progressFormatter,
      strokeColorConfig,
    });

  useImperativeHandle(ref, () => ({
    play,
    pause,
    reAnimate,
    ColorChnage,
    ColorAgain
  }));

  const styleProps = useMemo(
    () => ({
      radius,
      rotation,
      progressValueColor,
      progressValueFontSize,
      progressValueStyle,
      ctiveStrokeColor,
      titleStyle,
      titleColor,
      titleFontSize,
      showProgressValue,
      subtitleColor,
      subtitleFontSize,
      subtitleStyle,
    }),
    [
      radius,
      rotation,
      progressValueColor,
      progressValueFontSize,
      progressValueStyle,
      ctiveStrokeColor,
      titleStyle,
      titleColor,
      titleFontSize,
      showProgressValue,
      subtitleColor,
      subtitleFontSize,
      subtitleStyle,
    ]
  );
  // console.log(TimerValue(),'TimerValueTimerValueTimerValue')
  return (
    <View style={styles(styleProps).container} testID="progress-bar">
      <View style={styles(styleProps).rotatingContainer}>
        {!transparentcircle&& <ProgressCircle
        
          resttime={resttime}
          value={value}
          circleBackgroundColor={circleBackgroundColor}
          radius={radius}
          strokeLinecap={strokeLinecap}
          activeStrokeColor={ctiveStrokeColor}//
          activeStrokeSecondaryColor={ctiveStrokeColor}//
          activeStrokeWidth={activeStrokeWidth}
          inActiveStrokeColor={inActiveStrokeColor}
          inActiveStrokeWidth={inActiveStrokeWidth}
          inActiveStrokeOpacity={inActiveStrokeOpacity}
          animatedCircleProps={animatedCircleProps}
          dashedStrokeConfig={dashedStrokeConfig}
        />}
      </View>
     
      <View
        style={[
          StyleSheet.absoluteFillObject,
          styles(styleProps).valueContainer,
        ]}>
        <Text style={{ fontSize: 20, color: "black",marginBottom:-15 }}   >{Toptitle}</Text>
        {showProgressValue && (
          <View style={styles(styleProps).valueContainerRow}>
            {/* {!!valuePrefix && (
              <Text
                testID="progress-bar-value-prefix"
                style={[
                  styles(styleProps).input,
                  progressValueStyle,
                  styles(styleProps).fromProps,
                  valuePrefixStyle,
                ]}
                allowFontScaling={allowFontScaling}>
                {valuePrefix}
              </Text>
            )} */}
            {inActiveStrokeColor !== "transparent" && <ProgressValue
              initialValue={initialValue}
              radius={80} //radius
              activeStrokeColor={ctiveStrokeColor}
              progressValueColor={progressValueColor}
              progressValueStyle={progressValueStyle}
              progressValueFontSize={progressValueFontSize}
              progressValue={progressValue}
              animatedTextProps={animatedTextProps}
            // allowFontScaling={allowFontScaling}
            />}
           
           
            {/* {!!valueSuffix && (
              <Text
                testID="progress-bar-value-suffix"
                style={[
                  styles(styleProps).input,
                  progressValueStyle,
                  styles(styleProps).fromProps,
                  valueSuffixStyle,
                ]}
                allowFontScaling={allowFontScaling}>
                {"valueSuffix"}
              </Text>
            )} */}
          </View>
        )}
        <Buttons/>
        {/* {Buttons &&} */}
       
        {/* {title && title !== '' ? (
          <Text
            testID="progress-title-text"
            style={[styles(styleProps).title, titleStyle]}
            numberOfLines={1}
            allowFontScaling={allowFontScaling}>
            {title}
          </Text>
        ) : null}
        {subtitle && subtitle !== '' ? (
          <Text
            testID="progress-subtitle-text"
            style={[
              styles(styleProps).title,
              styles(styleProps).subtitle,
              subtitleStyle,
            ]}
            numberOfLines={1}
            allowFontScaling={allowFontScaling}>
            {"subtitle"}
          </Text>
        ) : null} */}
      </View>
    </View>
  );
});

export default CircularProgress;
