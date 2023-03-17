import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState, useEffect ,useContext} from 'react';
import { img ,navigate,Colors} from '../../Components/Config';
import { hp, wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import { Context } from '../../../Shared/Provider';

export default function Subscription({ navigation }) {
  const { Female, GetBuyPlan, setBuyPlan, API, image_base_url } = useContext(Context);
  const [MyPlan, setMyPlan] = useState('')
  const [keyindex, setkeyindex] = useState('');
  const [planlist, setplanlist] = useState({
    "access": true,
    "exercise_program": true,
    "help_chat": false,
    "instructions": true,
    "overview": true,
    "real_audio": false,
    "synthesized_audio": true,
    "tools": true,
    "video": true
  })
  useEffect(() => {
    API.Userdetail(e => {
      setregisterData(e.data.gender)

    },);


  }, [])

  useEffect(() => {
    API.getSubscriptionList(e => {
      setBuyPlan(e.data)

    });
    API.subscriptionplan(e => {
      setMyPlan(e.data)
    });
  }, []);

  const Gold = [
    {
      name: 'Web & Mobile Access',
      margintop: hp(1),
      value: MyPlan?.subscription_plan_detail?.access || planlist.access,
      active: keyindex,
    },
    {
      name: 'Complete Overview',
      value: MyPlan?.subscription_plan_detail?.overview || planlist.overview,
    },
    {
      name: 'In-Depth Instruction',
      value: MyPlan?.subscription_plan_detail?.instructions || planlist.instructions,
    },
    {
      name: 'Physiotherapy Video',
      value: MyPlan?.subscription_plan_detail?.video || planlist.video,
    },
    {
      name: '12 Week Exercise Program',
      value: MyPlan?.subscription_plan_detail?.exercise_program || planlist.exercise_program,
    },
    {
      name: 'Customization Tools',
      value: MyPlan?.subscription_plan_detail?.tools || planlist.tools,
    },
    {
      name: 'Synthesized Audio Coaches',
      value: MyPlan?.subscription_plan_detail?.synthesized_audio || planlist.synthesized_audio,
    },
    {
      name: 'Real Audio Coaches',
      value: MyPlan?.subscription_plan_detail?.real_audio || planlist.real_audio,
    },

  ];

  const [List, setList] = useState();


  let check = 6.5 < hp(1);



  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, zIndex: 5 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: wp(2.2), marginTop: hp(4) }}>
            <Header

              onBackPress={() => navigation.goBack()}
              style={{ marginTop: hp(3) }}
              left
              title={'SUBSCRIPTION'}
            />
            <Card
              style={{
                marginTop: hp(2),
                marginBottom: -hp(1),
              }}>
              <FlatList
                data={Gold}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingLeft: '2%',
                      backgroundColor: 'white',

                      marginTop:
                        item.margintop || check ? hp(1) : hp(0.5),
                      paddingTop: item.margintop,

                      height: check ? hp(5.8) : hp(5.3),
                    }}>
                    {item.value === true ? (
                      <Image
                        source={img.right}
                        style={{
                          height: '40%',
                          width: '15%',
                          resizeMode: 'contain',
                        }}
                      />
                    ) : (
                      <View
                        style={{
                          height: '40%',
                          width: '15%',
                          resizeMode: 'contain',
                        }}
                      />
                    )}

                    <MyText
                      style={{ fontSize: check ? scale(16) : scale(15) }}
                      title={item.name}
                    />
                  </View>
                )}
              />
            </Card>
            {/* ),
            )} */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(15),
                marginTop: -hp(1),
              }}>
              <FlatList
                data={GetBuyPlan?.search_data}
                numColumns={2}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setplanlist(item?.privileges)
                      setkeyindex(index)
                    }}
                    style={{
                      height: hp(22),
                      width: wp(28),
                      backgroundColor: 'white',
                      alignItems: 'center',
                      borderColor: MyPlan?.plan_id == item._id ? '#00B700' : !Female.gender ? Colors.blue : Colors.pink,
                      borderWidth: keyindex == index ? 1 : 0,
                      borderRadius: 10,
                      marginTop: hp(4),
                      marginHorizontal: 10
                    }}>
                    <Image
                      style={{
                        height: hp(10),
                        width: wp(40),
                        resizeMode: 'contain',
                        marginTop: '13%',

                      }}
                      source={{ uri: image_base_url + item?.plan_image }}></Image>
                    <MyText
                      style={{ textAlign: 'center', fontSize: scale(10) }}
                      silver
                      poppinsbold
                      title={item?.plan_name}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        MyPlan?.plan_id == item._id ? null :
                          navigate('Payment', {
                            params: item,
                          })
                      }
                      style={{
                        borderRadius: 5,
                        width: wp(20),
                        height: hp(4),
                        alignItems: 'center',
                        marginTop: hp(1),
                        justifyContent: 'center',
                        backgroundColor: MyPlan?.plan_id == item._id ? '#00B700' : !Female.gender ? Colors.blue : Colors.pink
                      }}>
                      <MyText
                        style={{
                          textAlign: 'center',
                          fontSize: scale(10),
                        }}
                        white
                        poppinmedium
                        title={MyPlan?.plan_id == item._id ? 'Active ' : 'Buy Now'}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                )}
              />
              {/* !Female.gender ? Colors.blue : Colors.pink,<TouchableOpacity
                onPress={() => {
                  setkeyindex(0);
                }}
                style={{
                  height: hp(22),
                  width: wp(28),
                  backgroundColor: 'white',
                  alignItems: 'center',
                  borderColor: Female.color,
                  borderWidth: keyindex == 0 ? 2 : 0,
                  borderRadius: 10,
                  marginTop: hp(4),
                }}>
                <Image
                  style={{
                    height: hp(10),
                    width: wp(40),
                    resizeMode: 'contain',
                    marginTop: '13%',
                    
                  }}
                  source={img.gold}></Image>
                <MyText
                     style={{textAlign: 'center', fontSize: scale(10)}}
                     silver
                     poppinsbold
                  title={'Gold'}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigate('Payment', {
                      params: GetBuyPlan?.search_data[keyindex],
                    })
                  }
                  style={{
                    borderRadius: 5,
                    width: wp(20),
                    height: hp(4),
                    alignItems: 'center',
                    marginTop: hp(1),
                    justifyContent: 'center',
                    backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                  }}>
                  <MyText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(10),
                    }}
                    white
                    poppinmedium
                    title={MyPlan?._id == GetBuyPlan?.search_data[keyindex]._id ? 'Active ': 'Buy Now'}
                  />
                </TouchableOpacity>
              </TouchableOpacity> */}
              {/* 
              <TouchableOpacity
                onPress={() => {
                  setkeyindex(1);
                }}
                style={{
                  height: hp(22),
                  width: wp(28),
                  backgroundColor: 'white',
                  alignItems: 'center',

                  borderRadius: 10,
                  marginTop: hp(4),
                  borderColor: Female.color,
                  borderWidth: keyindex == 1 ? 2 : 0,
                }}>
                <Image
                  style={{
                    height: hp(10),
                    width: wp(40),
                    resizeMode: 'contain',
                    marginTop: '13%',
                    marginRight: hp(2),
                  }}
                  source={img.silver}></Image>
                <MyText
                  style={{textAlign: 'center', fontSize: scale(10)}}
                  silver
                  poppinsbold
                  title={'Platinum'}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigate('Payment', {
                      params: GetBuyPlan?.search_data[keyindex],
                    })
                  }
                  style={{
                    borderRadius: 5,
                    width: wp(20),
                    height: hp(4),
                    alignItems: 'center',
                    marginTop: hp(1),
                    justifyContent: 'center',
                    backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                  }}>
                  <MyText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(10),
                    }}
                    white
                    poppinmedium
                    title={MyPlan?._id == GetBuyPlan?.search_data[keyindex]._id ? 'Active ': 'Buy Now'}
                  />
                </TouchableOpacity>
              </TouchableOpacity> */}
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }}>
        <Image
          source={img.bgSubscription}
          style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
