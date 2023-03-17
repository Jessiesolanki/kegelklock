import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext,useEffect} from 'react';
import {  hp ,wp} from '../../Components/Globalstyle';
import Header from '../../Components/Header';
import { img } from '../../Components/Config';
import { scale } from 'react-native-size-matters';
import { FlatList } from 'react-native-gesture-handler';
import {Context} from '../../../Shared/Provider';
export default function Notification({ navigation }) {
 const {getNotificationList, setNotificationList,API} = useContext(Context);
    
    
useEffect(() => {
  API.NotificationList(e => {
    setNotificationList(e.data);
    }) },[]);
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ height: '100%' }}>
        <Header
          onBackPress={() => {
            navigation.goBack();
          }}
          left
          title={'Notification'}
        />
        <View style={{ paddingHorizontal: wp(4) }}>
          <FlatList
            height="94%"
            data={getNotificationList?.search_data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff5de',
                    marginTop: hp(1.5),
                    marginBottom: hp(1.5),
                    borderRadius: 10,
                  }}>
                    <Text
                        style={{
                          fontSize: scale(13),
                          color: 'black',
                          marginTop: hp(2),
                          fontFamily: 'Poppins-SemiBold',
                          marginLeft:wp(4)
                        }}>
                       {item.title}
                      </Text>
                    
                  <View style={{ flexDirection: 'row',marginTop:-hp(1.5) }}>
                    <View style={{ padding: 13 }}>
                      <Image
                        style={{ height: hp(9), width: hp(9) }}
                        source={img.bell}
                      />
                    </View>
                    <View style={{ width: '70%' }}>

                      <Text
                        style={{
                          fontSize: scale(11),
                          color: 'black',
                          marginTop: hp(2),
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                     {item.description}
                      </Text>

                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'Poppins-Medium',
                          color: '#575757',
                        }}>
                        {item.created_at}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
