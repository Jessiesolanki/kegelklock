import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from './Config';
import { ScaledSheet } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window")

export const hp = (value) => height / 100 * value

export const wp = (value) => width / 100 * value


export const Globalstyle = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor:Colors.LightYellow,
        padding: scale(25)
    }
    
});















