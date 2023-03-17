
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {hp, wp} from '../../Components/Globalstyle';
import {Colors, img} from '../../Components/Config';
import MyText from '../../Components/Ctext';
import {scale} from 'react-native-size-matters';
import Tab from '../Splash/Tab';
import {navigate} from '../../Components/Config';

import LinearGradient from 'react-native-linear-gradient';

export default function HomeV1({}) {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff4de',
        alignItems: 'center',
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          borderRadius={10}
          style={{
            height: wp(50),
            width: wp(95),
            alignItems: 'center',
            marginTop: hp(5),
          }}
          source={img.grandcouple}>
          <Image
            style={{
              height: hp(10),
              width: wp(40),
              resizeMode: 'contain',
              marginTop: wp(6.5),
            }}
            source={img.logo1}></Image>

          <MyText
            style={{
              textAlign: 'center',
              marginTop: wp(1),
              fontSize: scale(14),
            }}
            white
            poppinsbold
            title={'[Incontinence Exercise Program]'}
          />
          <View style={{flexDirection: 'row', marginTop: -wp(1)}}>
            <MyText
              style={{textAlign: 'center', fontSize: scale(15)}}
              white
              poppinsbold
              title={'Strengthen your'}
            />
            <MyText
              style={{textAlign: 'center', fontSize: scale(15)}}
              white
              poppinsitalic
              title={' "Pelvic Floor Muscles"'}
            />
          </View>
        </ImageBackground>

        <ImageBackground
          borderRadius={10}
          style={{height: wp(50), width: wp(95), marginTop: hp(3)}}
          source={img.tap1}>
          <View style={{marginTop: hp(0.5)}}>
            <MyText
              style={{marginTop: hp(4), fontSize: scale(16), marginLeft: wp(4)}}
              black
              mextrabold
              title={'Learn How To SHUT OFF' + '\n' + 'The Valve and Regain '}
            />
            <MyText
              style={{fontSize: scale(16), marginLeft: wp(4)}}
              black
              mextrabold
              title={'Control Of Your Life '}
            />
            <TouchableOpacity
             onPress={() => 
              navigate('WebHome')}
              style={{
                borderRadius: 3,
                backgroundColor: Colors.pink,
                width: wp(25),
                height: wp(8),
                alignItems: 'center',
                marginTop: wp(7),
                marginLeft: hp(2),
                justifyContent: 'center',
              }}>
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: scale(10),
                }}
                white
                poppinsbold
                title={'Read More'}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View
          style={{
            height: wp(45),
            width: wp(95),
            backgroundColor: Colors.Theme,
            borderRadius: 10,
            marginTop: hp(3),
          }}>
          <View style={{marginTop: hp(2), alignItems: 'center'}}>
            <MyText
              style={{
                textAlign: 'center',
                marginTop: hp(1.5),
                fontSize: scale(16),
              }}
              black
              mextrabold
              title={
                'This is the BEST Kegel’s Exercise ' +
                '\n' +
                'Program ever produced!  Click here '
              }
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <MyText
                style={{textAlign: 'center', fontSize: scale(16)}}
                black
                mextrabold
                title={'and start getting healthier '}
              />
              
              <MyText
                style={{textAlign: 'center', fontSize: scale(17)}}
                black
                mextrabold
                title={'TODAY.'}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
              
                navigate('Register')
          
            }
              style={{
                borderRadius: 3,
                backgroundColor: Colors.pink,
                width: wp(25),
                height: wp(8),
                alignItems: 'center',
                marginTop: hp(3),
                justifyContent: 'center',
              }}>
              <MyText
                style={{textAlign: 'center', fontSize: scale(10)}}
                white
                poppinsbold
                title={'Buy Plan'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <MyText
          style={{
            textAlign: 'center',
            fontSize: scale(18),
            marginTop: hp(2),
            color: Colors.pink,
          }}
          poppinsemibold
          title={'IMPORTANT:'}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: hp(1),
          }}>
          <MyText
            style={{
              textAlign: 'center',
              fontSize: scale(14),
              color: '#444444',
            }}
            poppinsemibold
            title={'The Mobile APP is for daily use '}
          />

          <MyText
            style={{fontSize: scale(15), color: Colors.pink}}
            italic
            bold
            title={'"'}
          />

          <MyText
            style={{fontSize: scale(14), color: Colors.pink}}
            poppinsbold
            title={'After'}
          />

          <MyText
            style={{fontSize: scale(15), color: Colors.pink}}
            italic
            bold
            title={'" '}
          />
          <MyText
            style={{textAlign: 'center', fontSize: scale(14), color: '#444444'}}
            poppinsemibold
            title={'you'}
          />
        </View>

        <MyText
          style={{
            textAlign: 'center',
            fontSize: scale(14),
            marginTop: -hp(1),
            color: '#444444',
          }}
          poppinsemibold
          title={
            'have familiarized yourself with The Complete ' +
            '\n' +
            'Online Program.  Please visit our website for  ' +
            '\n' +
            'The Complete Program.'
          }
        />

        <TouchableOpacity
           onPress={() => 
            navigate('WebHome')}
        >
          <MyText
            style={{
              textAlign: 'center',
              fontSize: scale(20),
              marginTop: hp(2),
              color: 'blue',
              paddingBottom: hp(3.5),
            }}
            poppinsbold
            title={'Kegelklock.com'}
          />
        </TouchableOpacity>
      </ScrollView>
      <LinearGradient
        colors={['transparent', 'black']}
        style={{
          position: 'absolute',
          bottom: hp(9),
          height: hp(5),
          width: wp(100),
          opacity: 0.1,
        }}></LinearGradient>
      <Tab />
    </View>
  );
}

const styles = StyleSheet.create({});