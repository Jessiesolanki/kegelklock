import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React, { useEffect} from 'react';
import {hp} from '../../Components/Globalstyle';
import {img} from '../../Components/Config';
import {UIActivityIndicator} from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Setroot} from '../../Components/Config';


export default function Splash({navigation}) {
  const Getroute = async () => {
    const data = await AsyncStorage.getItem('Token');
    const jsonobj = JSON.parse(data);
    setTimeout(() => {
      if (data != null) {
        Setroot(jsonobj.route);
      } else {
    
        Setroot("HomeV1");
      }
    }, 1500);
  };

  useEffect(() => {
    Getroute();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={img.splash}>
        <View style={{height: hp(80)}}>
          <UIActivityIndicator color="black" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
