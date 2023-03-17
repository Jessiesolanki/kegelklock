import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { View } from 'react-native'
import type { CircleGradientProps } from '../../types';

const CircleGradient: React.FC<CircleGradientProps> = ({
  activeStrokeSecondaryColor,
  activeStrokeColor,
  value,
  resttime
}: CircleGradientProps) => {

  console.log(
    value,
    resttime
  )
  let percentdifference = resttime / value
  let percent = percentdifference * 100
  console.log(percent, 'percentpercentpercent')
  // value = { value }
  // resttime = { resttime }
  if (activeStrokeSecondaryColor) {
    // console.log(activeStrokeSecondaryColor,'/activeStrokeSecondaryColor')
    // one will be in plus and secont will be in minus.....
    return (
      <>
        <Defs >
          <LinearGradient  id="grad" x1="10%" y1="0%" x2="10%" y2="100%">
            <Stop offset="35%" stopColor={activeStrokeSecondaryColor} />
            <Stop offset="50%" stopColor={activeStrokeColor} />
          </LinearGradient>
        </Defs>
        {/* <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "red" }}></View> */}
      </>
    );
  }
  return null;
};
{/* <Stop offset="10%" stopColor={"Blue"} /> */ }
{/* <Stop offset="50%" stopColor={activeStrokeSecondaryColor} />
          <Stop offset="50%" stopColor={activeStrokeColor} /> */}
export default React.memo(CircleGradient);
