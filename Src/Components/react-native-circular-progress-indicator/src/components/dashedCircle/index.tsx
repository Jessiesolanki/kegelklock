import React, { useMemo } from 'react';
import { Circle, Defs, Mask } from 'react-native-svg';

import COLORS from '../../utils/colors';
import type { DashedCircleProps } from '../../types';

const DashedCircle: React.FC<DashedCircleProps> = ({
  dashedStrokeConfig = { count: 0, width: 0 },
  circleCircumference,
  inActiveStrokeWidth,
  activeStrokeWidth,
  inactiveCircleRadius,
  resttime,
  value,
  activeCircleRadius,
}: DashedCircleProps) => {
  const strokeDashArray = useMemo(() => {
    const totalDashSpace = dashedStrokeConfig.width * dashedStrokeConfig.count;

    const dashGap =
      (circleCircumference - totalDashSpace) / dashedStrokeConfig.count;

    // console.log(`${dashedStrokeConfig.width} ${dashGap}`)

    return `${dashedStrokeConfig.width} ${dashGap}`;
  }, [circleCircumference, dashedStrokeConfig]);

  const strokeWidth = useMemo(
    () => Math.max(inActiveStrokeWidth, activeStrokeWidth),
    [inActiveStrokeWidth, activeStrokeWidth]
  );
  const radius = useMemo(
    () => Math.max(inactiveCircleRadius, activeCircleRadius),
    [inactiveCircleRadius, activeCircleRadius]
  );
  console.log(typeof strokeDashArray, 'strokeWidth', resttime, "resttime", value, "value")
  
  // let precentage_main = (value/100)*1



  // console.log(precentage_main*resttime,"precentage_main")

  let difference = resttime / value //resttime

  let secondcirclepercentvalue = difference * 100

  console.log(secondcirclepercentvalue, '-->>>----', difference)

  let seconds = 34/100*secondcirclepercentvalue

  let timedistance = 330 + 10 * seconds + ""
  
  if (dashedStrokeConfig?.count > 0 && dashedStrokeConfig?.width > 0) {
    return (
      <Defs>
        <Mask id="dashed-circle">
          <Circle
            cx="50%"
            cy="50%"
            stroke={COLORS.WHITE}
            fill={COLORS.TRANSPARENT}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={1}
            strokeDasharray={500 + ", 0"}         
          // strokeDasharray="576, 15"

//  i think here we only able to do timing for positive circle 

//! 336 is very centered value for positive circle 
// !676 will be the final positive circle value 



          // 336 is initial value --->
          // strokeDasharray={strokeDashArray}
          />
        </Mask>
      </Defs>
    );
  }
  return null;
};

export default React.memo(DashedCircle);
