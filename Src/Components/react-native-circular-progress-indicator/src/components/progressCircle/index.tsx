import React, {useMemo} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import Animated from 'react-native-reanimated';
import {View} from 'react-native'
import useCircleValues from '../../hooks/useCircleValues';
import COLORS from '../../utils/colors';
import type {ProgressCircleProps} from '../../types';
import CircleGradient from '../circleGradient';
import DashedCircle from '../dashedCircle';

import styles from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  circleBackgroundColor = COLORS.TRANSPARENT,
  radius = 60,
  resttime,
  value,
  strokeLinecap = 'round',
  activeStrokeColor = COLORS.GREEN,
  activeStrokeSecondaryColor = null,
  activeStrokeWidth = 10,
  inActiveStrokeColor = COLORS.BLACK_30,
  inActiveStrokeWidth = 10,
  inActiveStrokeOpacity = 1,
  dashedStrokeConfig,
  animatedCircleProps,
  showdash
}: ProgressCircleProps) => {
  const viewBox = useMemo(
    () => radius + Math.max(activeStrokeWidth, inActiveStrokeWidth),
    [radius, activeStrokeWidth, inActiveStrokeWidth]
  );
  const {inactiveCircleRadius, activeCircleRadius, circleCircumference} =
    useCircleValues({
      radius,
      activeStrokeWidth,
      inActiveStrokeWidth,
    });

  const maskId = useMemo(
    () =>
      dashedStrokeConfig &&
      dashedStrokeConfig?.count > 0 &&
      dashedStrokeConfig?.width > 0
        ? 'url(#dashed-circle)'
        : undefined,
    [dashedStrokeConfig]
  );

  const strokeColor = useMemo(
    () => (activeStrokeSecondaryColor ? 'url(#grad)' : activeStrokeColor),
    [activeStrokeSecondaryColor, activeStrokeColor]
  );
 
  console.log(circleCircumference,'animatedCircleProps')
 //270deg
 console.log(value,resttime,'oooollll---->')

  let minusvalue = value - resttime
  if(minusvalue < value/2){
    console.log("yess")

    // 180
  }
 console.log(value/2,minusvalue)
  return (
    <Svg
      testID="progress-circle"
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
      style={{ transform: [{ rotateZ: '270deg' }] }}>       

    {/* 270 will be initial roatation */}
    {/* 450 will be negation circle value ....---> */}
        <CircleGradient
          value={value}
          resttime={resttime}
          activeStrokeColor={activeStrokeColor}//activeStrokeColor
          activeStrokeSecondaryColor={activeStrokeSecondaryColor}//
        />
 
     
      <DashedCircle
        value={value}
        resttime={resttime}
        circleCircumference={circleCircumference}
        inActiveStrokeWidth={inActiveStrokeWidth}
        activeStrokeWidth={activeStrokeWidth}
        inactiveCircleRadius={inactiveCircleRadius}
        activeCircleRadius={activeCircleRadius}
        dashedStrokeConfig={dashedStrokeConfig}
      />
      <G mask={maskId}>
        <Circle
          cx="50%"
          cy="50%"

          stroke={inActiveStrokeColor}
          strokeWidth={inActiveStrokeWidth}
          r={inactiveCircleRadius}
          fill={circleBackgroundColor}
          strokeOpacity={inActiveStrokeOpacity}
        />
        <AnimatedCircle
          cx="50%"
          cy="50%"

          stroke={strokeColor}
          strokeWidth={activeStrokeWidth}
          r={activeCircleRadius}
          fill={COLORS.TRANSPARENT}
          strokeDasharray={circleCircumference}
          // strokeLinecap={strokeLinecap}
          animatedProps={animatedCircleProps}
        />
      </G>
    </Svg>
  );
};

export default ProgressCircle;
