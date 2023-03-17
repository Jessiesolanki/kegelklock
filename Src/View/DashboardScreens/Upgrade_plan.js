import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  import {img ,Colors} from '../../Components/Config';
  import {hp, wp} from '../../Components/Globalstyle';
  import MyText from '../../Components/Ctext';
  import {scale} from 'react-native-size-matters';
  import Header from '../../Components/Header';
  import Card from '../../Components/Card';
  import {navigate} from '../../Components/Config';
  import {useContext} from 'react';
  import {Context} from '../../../Shared/Provider';
  
  export default function Upgrade_plan({navigation}) {
    const {Female} = useContext(Context);
  
    const L = [
      {name: 'Web & Mobile Access', margintop: hp(1), value: true, active: 0},
      {name: 'Complete Overview', value: true},
      {name: 'In-Depth Instruction', value: true},
      {name: 'Physiotherapy Video', value: true},
      {name: '12 Week Exercise Program', value: true},
      {name: 'Customization Tools', value: true},
      {name: 'Synthesized Audio Coaches', value: true},
      {name: 'Real Audio Coaches', value: true},
      {name: 'Live Help Chat', value: false},
    ];
  
    const Gold = [
      {name: 'Web & Mobile Access', margintop: hp(1), value: true, active: 1},
      {name: 'Complete Overview', value: true},
      {name: 'In-Depth Instruction', value: true},
      {name: 'Physiotherapy Video', value: true},
      {name: '12 Week Exercise Program', value: true},
      {name: 'Customization Tools', value: true},
      {name: 'Synthesized Audio Coaches', value: true},
      {name: 'Real Audio Coaches', value: true},
      {name: 'Live Help Chat', value: true},
    ];
  
    const Bronze = [
      {name: 'Web & Mobile Access', margintop: hp(1), value: true, active: 2},
      {name: 'Complete Overview', value: true},
      {name: 'In-Depth Instruction', value: true},
      {name: 'Physiotherapy Video', value: true},
      {name: '12 Week Exercise Program', value: true},
      {name: 'Customization Tools', value: true},
      {name: 'Synthesized Audio Coaches', value: true},
      {name: 'Real Audio Coaches', value: false},
      {name: 'Live Help Chat', value: false},
    ];
  
  
  
    const [List, setList] = useState(L);
  
    let check = 6.5 < hp(1);
  
  
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, zIndex: 5}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: wp(2), marginTop: hp(1)}}>
              <Header
                 onBackPress={() => navigation.goBack()}
                style={{marginTop: hp(3)}}
                left
                title={'SUBSCRIPTION'}
              />
  
              <Card
                style={{
                  marginTop: hp(2),
                  marginBottom: -hp(1),
                }}>
                <FlatList
                  data={List}
                  renderItem={({item, index}) => (
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingLeft: '2%',
                        backgroundColor: 'white',
                        
                        marginTop: item.margintop || check ? hp(1) : hp(0.5),
                        paddingTop: item.margintop,
                       
                        height: check ? hp(5.8) : hp(5.3),
                      }}>
                      {item.value ? (
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
                        style={{fontSize: check ? scale(16) : scale(15)}}
                        poppinsemibold
                        title={item.name}
                      />
                    </View>
                  )}
                />
              </Card>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
  
                  paddingHorizontal: wp(3),
                  marginTop: -hp(1),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setList(Bronze);
                  }}
                  style={{
                    height: hp(20),
                    width: wp(28),
                    backgroundColor: 'white',
                    alignItems: 'center',
                    borderColor: Female.color,
                    borderWidth: List[0].active == 2 ? 2 : 0,
                    borderRadius: 10,
                    marginTop: hp(4),
                  }}>
                  <Image
                    style={{
                      height: hp(10),
                      width: wp(35),
                      resizeMode: 'contain',
                      marginTop: '8%',
                    }}
                    source={img.bronze}></Image>
                  <MyText
                    style={{textAlign: 'center', fontSize: scale(10)}}
                    bronze
                    poppinsbold
                    title={'Bronze'}
                  />
                  <TouchableOpacity
                    onPress={() => navigate('Payment', 7.95)}
                    style={{
                      justifyContent: 'center',
                      borderRadius: 5,
                      backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                      width: wp(20),
                      height: hp(4),
                      alignItems: 'center',
                      marginTop: hp(1),
                    }}>
                    <MyText
                      style={{textAlign: 'center', fontSize: scale(10)}}
                      white
                      poppinmedium
                      title={'Upgrade'}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                
                <TouchableOpacity
                  onPress={() => {
                    setList(L);
                  }}
                  style={{
                    height: hp(22),
                    width: wp(28),
                    backgroundColor: 'white',
                    alignItems: 'center',
  
                    borderRadius: 10,
                    marginTop: hp(4),
                    borderColor: Female.color,
                    borderWidth: List[0].active == 0 ? 2 : 0,
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
                    title={'Silver'}
                  />
                  <TouchableOpacity
                    onPress={() => navigate('Payment', 8.95)}
                    style={{
                      borderRadius: 5,
                      width: wp(20),
                      height: hp(4),
                      alignItems: 'center',
                      marginTop: hp(1),
                      justifyContent: 'center',
                      backgroundColor: '#20c997'
                    }}>
                    <MyText
                      style={{
                        textAlign: 'center',
                        fontSize: scale(10),
                      }}
                      white
                      poppinmedium
                      title={'Active'}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
  
                <TouchableOpacity
                  onPress={() => {
                    setList(Gold);
                  }}
                  style={{
                    height: hp(20),
                    width: wp(28),
                    backgroundColor: 'white',
                    alignItems: 'center',
                    borderColor: Female.color,
                    borderWidth: List[0].active == 1 ? 2 : 0,
                    borderRadius: 10,
                    marginTop: hp(4),
                  }}>
                  <Image
                    style={{
                      height: hp(10),
                      width: wp(35),
                      resizeMode: 'contain',
                      marginTop: '8%',
                    }}
                    source={img.gold}></Image>
                  <MyText
                    style={{textAlign: 'center', fontSize: scale(10)}}
                    gold
                    poppinsbold
                    title={'Gold'}
                  />
                  <TouchableOpacity
                    onPress={() => navigate('Payment', 14.95)}
                    style={{
                      justifyContent: 'center',
                      borderRadius: 5,
                      width: wp(20),
                      height: hp(4),
                      alignItems: 'center',
                      marginTop: hp(1),
                      backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                    }}>
                    <MyText
                      style={{textAlign: 'center', fontSize: scale(10)}}
                      white
                      poppinmedium
                      title={'Upgrade'}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}>
          <Image
            source={img.bgSubscription}
            style={{height: '100%', width: '100%', resizeMode: 'stretch'}}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  