import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from './Globalstyle';

export default function Card({children, style}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 8,
        width: wp(85),

        alignSelf: 'center',
        overflow: 'hidden',
      }}
      {...style}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
