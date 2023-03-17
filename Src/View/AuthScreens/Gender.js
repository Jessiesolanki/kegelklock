import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext} from 'react';
import {hp, wp} from '../../Components/Globalstyle';
import {Colors,img,navigate} from '../../Components/Config';
import MyText from '../../Components/Ctext';
import {scale} from 'react-native-size-matters';
import Buttons from '../../Components/Buttons';
import {Context} from '../../../Shared/Provider';
export default function Gender(props) {
    const {Female, setFemale, API,genderId,  user_id,setDetail, setplanGendar,setBuyPlan,} = useContext(Context);
  const {SelectGender} = API;
 


  
  const Select_Gender = (gender, props) => {
    setplanGendar(gender)
  
   
    SelectGender(
      gender => {
        let a = {
          Token: gender?.data?.token,
          route: '',
        };
        setDetail(a);
        navigate('Subscription',gender)
      },
      {
        user_id:  genderId || user_id,
        gender:  Female.type || gender,
      },
    );
  };
  const SubmitValue = () =>{
 
    API.getSubscriptionList((e) => {
      setBuyPlan(e.data)
      navigate('Subscription')
    })
    
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: wp(6),
            paddingTop: hp(6),
            alignItems: 'center',
          }}>
          <MyText
            style={{textAlign: 'center', marginTop: hp(3), fontSize: scale(30)}}
            black
            poppinsbold
            title={'Please Select Your ' + '\n' + 'Gender Binary '}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setFemale({
              gender: true,
              color: Colors.pink,
              type: 'female',
              source: img.pink_tick,
            });
          }}
          style={{
            height: hp(23),
            width: hp(23),
            backgroundColor: '#fff5de',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: wp(10),
            borderWidth: 2,
            borderColor: !Female.gender ? 'white' : Colors.pink,
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              alignSelf: 'flex-end',
              marginRight: wp(4),
              marginTop: hp(1),
            }}
            source={Female.gender ? img.pink_tick : img.cream}
          />
          <Image
            style={{height: hp(13), width: wp(40), resizeMode: 'contain'}}
            source={img.female}></Image>
          <MyText
            style={{textAlign: 'center', fontSize: scale(16)}}
            black
            poppinsbold
            title={'Female'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setFemale({gender: false, color: Colors.blue, type: 'male'});
          }}
          style={{
            height: hp(23),
            width: hp(23),
            backgroundColor: '#fff5de',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: hp(4),
            borderWidth: 2,
            borderColor: Female.gender ? 'white' : Colors.blue,
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              alignSelf: 'flex-end',
              marginRight: wp(4),
              marginTop: hp(1),
            }}
            source={Female.gender ? '' : img.blue_tick}
          />
          <Image
            style={{height: hp(13), width: wp(40), resizeMode: 'contain'}}
            source={img.male}></Image>
          <MyText
            style={{textAlign: 'center', fontSize: scale(16)}}
            black
            poppinsbold
            title={'Male'}
          />
        </TouchableOpacity>
        <View style={{paddingHorizontal: wp(6), paddingTop: hp(8)}}>
          <Buttons
            onPress={() => {
              const {type} = Female;
              
              Select_Gender(type);
            }}
            title={'Submit'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
