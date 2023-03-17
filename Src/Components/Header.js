import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useContext} from 'react';
import {Colors} from './Config';
import {hp, wp} from './Globalstyle';
import MyText from './Ctext';

import {img} from './Config';
import {Context} from '../../Shared/Provider';
import { scale } from 'react-native-size-matters';

export default function Header({
  left,
  right,
  title,
  onBackPress,
  onRightPress,
  placeholder,
  search,
  onChangeSearch,
  height,
  srcBack,
}) {
  const {Female, setFemale} = useContext(Context);
  console.log(Female.gender, 'FemaleFemaleFemale');
  const Button = ({src, width, height, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: wp(2)}}>
      <Image
        source={src}
        style={{
          height: width || 20,
          width: height || 20,
          marginLeft: wp(3),
          marginTop: hp(1),
        }}></Image>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        height: height,
      }}>
      {left && (
        <Button
          onPress={onBackPress}
          width={height}
          height={height}
          src={srcBack || !Female.gender ? img.back_blue : img.back}
        />
      )}

      <View
        style={{
          zIndex: -1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
        <Text
          style={{
            fontSize:scale(19),
            paddingBottom: '4%',

            fontFamily: 'Poppins-Bold',
            color: !Female.gender ? Colors.blue : Colors.pink,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
