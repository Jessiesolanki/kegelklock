import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {Colors} from './Config';
import MyText from './Ctext';
import {hp,wp} from './Globalstyle';
import {Context} from '../../Shared/Provider';

export default function Buttons({onPress, title, style, fontstyle}) {
  const {Female, setFemale} = useContext(Context);
  console.log(Female.gender, 'FemaleFemaleFemale');
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[    
        {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: wp(15),
          backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
        },
        {...style},
      ]}>
      <MyText
        title={title}
        poppinsemibold
        h4
        white
        style={[{padding: 15, textAlign: 'center'}, {...fontstyle}]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
