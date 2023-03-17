import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useContext}  from 'react';
import {  hp } from '../../Components/Globalstyle';
import Header from '../../Components/Header';
import { wp } from '../../Components/Globalstyle';
import { scale } from 'react-native-size-matters';
import { Colors, navigate } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { img } from '../../Components/Config';
import {Context} from '../../../Shared/Provider';


export default function MyPlan({ navigation }) {

    const {  Female} = useContext(Context);

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ height: '100%' }}>
                <Header
                    onBackPress={() => {
                        navigation.goBack();
                    }}
                    left
                    title={'MY PLAN'}
                />

                <View
                    style={{
                        height: wp(50),
                        width: wp(90),
                        backgroundColor: '#fff5de',
                        borderRadius: 10,
                        marginTop: hp(4),
                        alignSelf: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <View style={{ width: wp(36), justifyContent: 'center' }}>

                        <MyText
                            style={{
                                textAlign: 'center',

                                fontSize: scale(20),
                                color: !Female.gender ? Colors.blue : Colors.pink,
                            }}
                            poppinsbold
                            title={'Gold'}
                        />

                        <MyText
                            style={{
                                textAlign: 'center',

                                fontSize: scale(13),
                                color: '#707070',
                            }}
                            msemibold
                            title={'Plan Active'}
                        />

                        <TouchableOpacity
                          onPress={() =>navigate('Upgrade_plan')}
                            style={{
                                borderRadius: 3,
                                backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                                width: wp(23),
                                height: wp(7),
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: wp(3),
                                justifyContent: 'center',
                            }}>
                            <MyText
                                style={{
                                    textAlign: 'center',
                                    fontSize: scale(10),
                                }}
                                white
                                poppinsbold
                                title={'Upgrade'}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: wp(54), alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{
                            height: wp(40),
                            width: wp(40),
                            backgroundColor: 'white',
                            borderRadius: 90,
                            alignItems: 'center', justifyContent: 'center'

                        }}>
                            <ImageBackground
                                style={{ height: wp(35.5), width: wp(35.3),  alignItems: 'center', justifyContent: 'center' }}
                                source={!Female.gender ? img.Remaining_Circle_blue : img.Remaining_Circle}
                            >
                                <View style={{
                                    height: wp(25),
                                    width: wp(25),
                                    backgroundColor: '#FFF5DE',
                                    borderRadius: 90,
                                    alignItems: 'center', justifyContent: 'center'

                                }}>
                                    <MyText
                                        style={{
                                            textAlign: 'center',

                                            fontSize: scale(13),
                                            color: !Female.gender ? Colors.blue : Colors.pink,
                                        }}
                                        poppinsbold
                                        title={'2 Months'}
                                    />
                                    
                                    <MyText
                                        style={{
                                            textAlign: 'center',

                                            fontSize: scale(8),
                                            color: '#707070',
                                        }}
                                        msemibold
                                        title={'Remaining'}
                                    />

                                </View>
                            </ImageBackground>

                        </View>
                    </View>

                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({});


