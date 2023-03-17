import { StyleSheet, View, TouchableOpacity,FlatList,Text,Image } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import {  hp,wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import Header from '../../Components/Header';
import { scale } from 'react-native-size-matters';
import { Colors,img } from '../../Components/Config';
import { Context } from '../../../Shared/Provider';
export default function WorkoutHistory({ navigation }) {
    const {  getWorkoutHistory, setWorkoutHistory, API } = useContext(Context);
    const [type, settype] = useState({
        active: true,
        type:0
    })
    useEffect(() => {
        API.GetWorkoutHistory(e => {
            setWorkoutHistory(e.data);
        },
        {
            type:0
        })
    }, []);
    
     useEffect(() => {
            API.GetWorkoutHistory(e => {
                setWorkoutHistory(e.data);
            },
            {
                type:0
            })
        }, [type]);
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ height: '100%' }}>
                <Header
                    onBackPress={() => {
                        navigation.goBack();
                    }}
                    left
                    title={'Workout History'}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: hp(3),
                        marginTop: -hp(2),
                    }}>
                    <TouchableOpacity
                        onPress={() =>settype({
                            active:true ,type:0
                        })
                            // navigate('PresentHistory')
                        }
                        style={{
                            height: wp(17),
                            width: wp(40),
                            backgroundColor: Colors.pink,
                            alignItems: 'center',
                            borderRadius: 10,
                            marginTop: hp(5),
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <MyText
                            style={{ textAlign: 'center', fontSize: scale(15) }}
                            white
                            poppinsbold
                            title={'Current'}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            settype({
                                active:true ,type:1
                            })
                            // navigate('PastHistory')
                        }
                        style={{
                            height: wp(17),
                            width: wp(40),
                            backgroundColor: Colors.blue,
                            alignItems: 'center',
                            borderRadius: 10,
                            marginTop: hp(5),
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>

                        <MyText
                            style={{ textAlign: 'center', fontSize: scale(16) }}
                            white
                            poppinsbold
                            title={'previous'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: wp(4) }}  >
                    <Text style={{textAlign:'center',fontSize:18,color:type.type ==0 ? Colors.pink:Colors.blue,marginTop:10,fontWeight:'500'}} >{ type.type == 0 ?'Current Workout History' :'Previous Workout History'}</Text>
                <FlatList
                        // height="90%"
                        data={getWorkoutHistory?.search_data}
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
                                   
                                    <View style={{ flexDirection: 'row', marginTop: -hp(1.5),height:hp(13) }}>
                                        <View style={{ padding: 13,marginTop:hp(2) }}>
                                            <Image
                                                style={{ height: hp(7), width: hp(8) }}
                                                source={img.history}
                                            />
                                        </View>
                                        <View style={{ width: '90%',marginTop:hp(2.5) }}>

                                            <Text
                                                style={{
                                                    fontSize: scale(11),
                                                    color: 'black',
                                                  
                                                    fontFamily: 'Poppins-SemiBold',
                                                }}>
                                                {'Week: '+item.week}
                                            </Text>

                                            <Text
                                                style={{
                                                    fontSize: scale(11),
                                                    color: 'black',
                                                  
                                                    fontFamily: 'Poppins-SemiBold',
                                                }}>
                                                {'Day: '+item.day}
                                            </Text>

                                            <Text
                                                style={{
                                                    fontSize: scale(11),
                                                    color: 'black',
                                                  
                                                    fontFamily: 'Poppins-SemiBold',
                                                }}>
                                               {'Session: '+item.session}
                                            </Text>

                                           
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                    />

</View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
