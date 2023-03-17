import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {img} from '../../Components/Config';
import {hp, wp} from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import {scale} from 'react-native-size-matters';


const Tab = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp(9),
        width: wp(100),
        backgroundColor: '#FFF4DE',
        paddingHorizontal: wp(8),
        alignItems: 'center',
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image
          style={{height: hp(4), width: wp(8), resizeMode: 'contain'}}
          source={img.home_blue}
        />
        <MyText
          style={{textAlign: 'center', fontSize: scale(10)}}
          blue
          poppinmedium
          title={'Home'}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image
          style={{height: hp(3.5), width: wp(11), resizeMode: 'contain'}}
          source={img.workout}
        />
        <MyText
          style={{textAlign: 'center', fontSize: scale(10), top: hp(0.2)}}
          black
          poppinmedium
          title={'Workouts'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image
          style={{height: hp(4), width: wp(7), resizeMode: 'contain'}}
          source={img.customize}
        />
        <MyText
          style={{textAlign: 'center', fontSize: scale(10)}}
          black
          poppinmedium
          title={'Customize'}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image
          style={{height: hp(4), width: hp(4), resizeMode: 'contain'}}
          source={img.setting}
        />
        <MyText
          style={{textAlign: 'center', fontSize: scale(10)}}
          black
          poppinmedium
          title={'Settings'}
        />
      
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
