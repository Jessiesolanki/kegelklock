
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,

} from 'react-native';
import React, { useContext } from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import { Colors, img } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import { Context } from '../../../Shared/Provider';
import Header from '../../Components/Header';
import TimerClockTwo from '../../Components/TimerClockTwo';
import TimerClockHybrd from '../../Components/TimerClockHybrd';
import TimerClockCustom from '../../Components/TimerClockCustom';
import { Audiotrack } from '@mui/icons-material';

export default function WorkoutTimer({ navigation }) {
  const { Female, GetTimerValue,  fstConstraction ,weekCount,audiotrack, saveAudio} = useContext(Context);
  const data = [
    { id: '01', qus: 'Type Of Workout', ans: GetTimerValue?.type_of_workout },
    { id: '02', qus: 'Contraction Effort', ans:weekCount <= 7 ? `${GetTimerValue?.general_contraction?.contraction_effort}`: weekCount ==='custom' ? `${GetTimerValue?.general_contraction?.contraction_effort} Second`:` ${GetTimerValue?.fast_contraction?.contraction_effort}` },
    { id: '03', qus: 'Work Time', ans:weekCount <= 7 ?  `${GetTimerValue?.general_contraction?.work_time} Second`:weekCount==='custom' ? `${GetTimerValue?.general_contraction?.work_time} Second`: fstConstraction == 1 ? `${GetTimerValue?.fast_contraction?.work_time} Second` :`${GetTimerValue?.slow_contraction?.work_time} Second` },
    { id: '04', qus: 'Rest Time ', ans: weekCount <= 7 ?  `${GetTimerValue?.general_contraction?.rest_time} Second`:weekCount==='custom' ? `${GetTimerValue?.general_contraction?.rest_time} Second`: fstConstraction == 1 ? `${GetTimerValue?.fast_contraction?.rest_time} Second` :`${GetTimerValue?.slow_contraction?.rest_time} Second` },
    { id: '05', qus: 'Quantity', ans: `${GetTimerValue?.reps} Reps and ${GetTimerValue?.sets}Sets` },

  ];
  

  return (
    <View style={{ flex: 1, backgroundColor: '#fff6d2', alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{
            height: wp(35),
            width: wp(100),

          }}
          
          source={img.workout_banner}>
          <View style={{ marginTop: hp(2) }}>
            <Header

              left
              onBackPress={() => navigation.goBack()}

            />
          </View>
          <View style={{ alignItems: 'center', marginTop: -hp(5) }}>
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
              poppinsbold
              title={'WORKOUTS'}
            />
          </View>
        </ImageBackground>

        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            paddingTop: hp(2),
          }}>
          <Text
            style={{
              fontSize: scale(17),
              fontFamily: 'Poppins-Bold',
              color: 'black',
            }}>
            Week
          </Text>
          <Text
            style={{
              fontSize: scale(17),
              fontFamily: 'Poppins-Bold',
              color: '#00b700',
            }}>
            #{GetTimerValue.sessionDetail.week}
          </Text>
          <Text
            style={{
              fontSize: scale(17),
              fontFamily: 'Poppins-Bold',
              color: 'black',
            }}>
            , Day
          </Text>
          <Text
            style={{
              fontSize: scale(17),
              fontFamily: 'Poppins-Bold',
              color: '#00b700',
            }}>
            #{GetTimerValue.sessionDetail.day}
          </Text>
          <Text
            style={{
              fontSize: scale(17),
              fontFamily: 'Poppins-Bold',
              color: 'black',
            }}>
            , Session
          </Text>
          <Text
            style={{
              fontSize: scale(17),
              fontFamily: 'Poppins-Bold',
              color: '#00b700',
            }}>
            #{GetTimerValue.sessionDetail.session}
          </Text>
        </View>
        <Text style={{fontWeight:'bold',fontSize:10,color:'black',textAlign:'center',padding:5}}>NOTE:<Text style={{fontSize:10,fontWeight:'400'}}>{' Workouts are based on completing 4 Sessions per Day to equal 1 complete Day.  7 Days x 4 Sessions per Day = 28 Sessions to equal 1 complete Week"'}</Text></Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(3),
                  marginTop: hp(0.5),
                }}>
                <View
                  style={{
                    width: wp(40),
                    justifyContent: 'center',
                    paddingLeft: wp(6),
                  }}>
                  <MyText
                    style={{ fontSize: scale(12), color: 'black' }}
                    poppinsemibold
                    title={item.qus}
                  />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text
                    style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
                    =
                  </Text> 
                </View>
                <View
                  style={{
                    width: wp(45),
                    justifyContent: 'center',
                    marginLeft: wp(5),
                  }}>
                  <MyText
                    style={{
                      fontSize: scale(16),
                      color: !Female.gender ? Colors.blue : Colors.pink,
                    }}
                    poppinsemibold
                    title={item.ans}
                  />
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            borderBottomWidth: 1,
            paddingTop: hp(3),
            
            opacity: 0.2,
          }}></View>

      {weekCount == 'custom' ? <TimerClockCustom  timerValue ={GetTimerValue} audio={saveAudio}  /> :weekCount> '7' ?  <TimerClockHybrd  timerValue ={GetTimerValue}  audio={saveAudio}/>

     : <TimerClockTwo  timerValue ={GetTimerValue} audio={saveAudio}  />
}

      </ScrollView>
    </View>
  );
}

