import {

  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState ,useEffect} from 'react';
import Header from '../../Components/Header';
import { hp, wp } from '../../Components/Globalstyle';
import { Colors,img } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { navigate, Setroot } from '../../Components/Config';
import { scale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../../../Shared/Provider';

export default function Setting({ navigation }) {

  const {setDetail,  setUserdetail ,setbuttonactive,setBuyPlan,API,setrefresh} = useContext(Context);

   const Myplan=()=>{
    API.getSubscriptionList((e) => {
      setBuyPlan(e.data)
      navigate('Subscription')
    })
   }

  const List = [
    { name: 'Alarm Setting', onPress: () => navigate('AlarmSetting') },
    { name: 'Audio Setting', onPress: () => navigate('AudioSetting') },
    { name: 'Notification', onPress: () => navigate('Notification') },
    { name: 'Workout History', onPress: () => navigate('WorkoutHistory') },
    { name: 'Edit Profile', onPress: () => navigate('UpdateProfile') },
    { name: 'Change Password', onPress: () => navigate('ResetPass') },
    { name: 'My Plan', onPress: Myplan},
    { name: 'Contact Us', onPress: () => navigate('Contactus') },
    { name: 'Log Out',
      onPress: async () => {

        setActive(true);
      },
    },
  ];

  useEffect(() => {
    setrefresh(false)
 
  }, [])

  const [Active, setActive] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      
      <Modal
        statusBarTranslucent
        

        hardwareAccelerated
        animationType="slide"
        transparent={true}
        visible={Active}
        onRequestClose={() => setActive(false)}>
        <View  style={{
            flex: 1,
            backgroundColor: '#00000080',
            alignItems: 'center',
            
            justifyContent:'center'
          }}>
          <View
            style={{
             padding:hp(3),
              width: wp(85),
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <Image
              style={{ height: wp(17.5), width: wp(19), marginTop: -hp(5.5) }}
              source={img.logout_symbol}></Image>
            <View
              style={{
                marginBottom: hp(4),
                alignItems: 'center',
                marginTop: hp(3),
              }}>
              <MyText
                style={{ fontSize: scale(22) }}
                black
                poppinsbold
                title={'Logout?'}
              />

  
            </View>

            <View style={{ alignItems: 'center', marginTop: -hp(1) }}>
              <Text
                style={{
                  fontSize: scale(12),
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Are You Sure You Want To Logout?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: hp(4),
              }}>
              <View style={{ paddingHorizontal: wp(3) }}>
                <TouchableOpacity
                  onPress={() => setActive(!Active)}
                  style={{
                    backgroundColor: Colors.pink,
                    height: wp(10),
                    width: wp(25),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#fff',
                      fontFamily: 'Poppins-Bold',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                
              </View>

              <View style={{ paddingHorizontal: wp(3) }}>
                <TouchableOpacity
                  onPress={async () => {
                    setUserdetail('')
                    setDetail('')
                    setbuttonactive(true)
                    
                   await AsyncStorage.removeItem('Token')
                   await AsyncStorage.removeItem('data')
                    //   JSON.stringify({
                    //     Token: "",
                    //     route: 'Login',
                    //   }),
                    // );
                    Setroot('Login');
                  }}
                    style={{
                    backgroundColor: Colors.blue,
                    height: wp(10),
                    width: wp(25),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#fff',
                      fontFamily: 'Poppins-Bold',
                    }}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        
      </Modal>
      <View style={{ paddingBottom: hp(2) }}>
        <Header
          left
          onBackPress={() => navigation.goBack()}
          title={'Settings'}
        />
      </View>
      <View style={{ flex: 1, paddingTop: '6%', backgroundColor: 'white' }}>
        <FlatList
          data={List}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={item.onPress}
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: '5%',
                backgroundColor: 'white',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.Theme,
                height: 53,
                marginHorizontal: wp(4),
                marginBottom: '1%',
              }}>
              <MyText 
              style={{ color: '#444444' }}
               msemibold 
               title={item.name} 
               />
              <Image
                source={img.image_right}
                style={{ height: '15%', width: '15%', resizeMode: 'contain' }}
              />
              
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
