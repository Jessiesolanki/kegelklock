import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    ScrollView,
  } from 'react-native';
  import React, { useState} from 'react';
  import {hp, wp} from '../../Components/Globalstyle';
  import {img} from '../../Components/Config';
  import MyText from '../../Components/Ctext';
  import {scale} from 'react-native-size-matters';
  import { navigate } from '../../Components/Config';

  import { Greencheck} from '../../Components/Customcheck';
  
  
  
  export default function HomePolicy({navigation}) {
    const [Active, setActive] = useState(true);
     return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#fff6d2',
          alignItems: 'center',
        }}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={{
              height: wp(35),
              width: wp(100),
              alignItems: 'center',
            }}
            source={img.workout_banner}>
            <Image
              style={{
                height: hp(10),
                width: wp(40),
                resizeMode: 'contain',
                marginTop: hp(2),
              }}
              source={img.logo1}></Image>
            <MyText
              style={{
                textAlign: 'center',
                fontSize: scale(20),
                marginTop: -hp(1),
              }}
              white
              poppinsb
              old
              title={'WORKOUTS'}
            />

            <Image 
            style={{
                textAlign:'center',
                fontSize:scale(20),
                marginTop:-hp(1),
            }}
            />
          </ImageBackground>
         
         <MyText
            style={{
              textAlign: 'center',
              paddingTop: hp(3),
              fontSize: scale(17),
              color: 'red',
            }}
            poppinsemibold
            title={'*IMPORTANT - '}
          />
  
          <View style={{paddingHorizontal: 15}}>
            <MyText
              style={{
                textAlign: 'center',
                marginTop: -hp(0.5),
                fontSize: scale(13),
              }}
              poppinsemibold
              title={
                ' Please visit our website and read the complete program "before" beginning this exercise '
              }
            />
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -hp(1),
              }}>
              <MyText
                style={{
                  textAlign: 'center',
  
                  fontSize: scale(13),
                }}
                poppinsemibold
                title={'program: '}
              />
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: scale(14),
                    fontFamily: 'Poppins-ExtraBold',
                    color: '#1a1aff',
                  }}>
                  Kegelklock.com
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: hp(4),
              borderColor: '#707070',
              opacity: 0.2,
            }}></View>
  
          <View style={{paddingHorizontal: 30}}>
            <MyText
              style={{
                textAlign: 'center',
                paddingTop: hp(4),
                fontSize: scale(12),
              }}
              poppinsemibold
              title={
                ' By checking this box, I am confirming that I have visited the Kegelklock.com website and thoroughly read and understand all the content.'
              }
            />
            <TouchableOpacity style={{alignItems: 'center', paddingTop: hp(1.5)}}>
              <Greencheck onCheck={setActive} />
            </TouchableOpacity>
  
            <MyText
              style={{
                textAlign: 'center',
                paddingTop: hp(2.5),
                fontSize: scale(12),
              }}
              poppinsemibold
              title={
                ' To begin your 1st workout, first click the GREEN button below to select your personal settings: '
              }
            />
          </View>
  
          <TouchableOpacity
            onPress={() => navigate('AlarmSetting')}
            style={{
              alignItems: 'center',
              paddingTop: hp(2),
              paddingBottom: hp(5),
            }}>
            <Image
              style={{height: hp(13), width: wp(35), resizeMode: 'contain'}}
              source={img.check_right}></Image>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  