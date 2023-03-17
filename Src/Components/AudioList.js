import { View, Text,FlatList,Image} from 'react-native'
import MyText from './Ctext'
import React from 'react'
import { Malecheck,Femalecheck } from './Customcheck'
import { hp, wp } from './Globalstyle';
import { scale } from 'react-native-size-matters';
import { Colors, img, navigate } from './Config';

const AudioList = ({dataFemale,dataMale,isOn,start,title,audioId}) => {

  return (
    <>
    <View style={{backgroundColor:'#d9d8d7',alignItems:'center',marginTop:10}}>
        <MyText
          style={{
            textAlign: 'center',
            padding: hp(1),
            fontSize: scale(16),
            color: 'black',
          }}
          poppinsbold
          title={title}
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: hp(3),
            marginTop: -hp(2),
          }}>
          <View
            style={{
              height: wp(15),
              width: wp(38),
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: hp(5),
              flexDirection: 'row',
            }}>
            <Image
              style={{height: hp(5), width: wp(15), resizeMode: 'contain'}}
              source={img.female1}></Image>
            <MyText
              style={{textAlign: 'center', fontSize: scale(15)}}
              white
              poppinsbold
              title={'Female'}
            />
          </View>
          <View
            style={{
              height: wp(15),
              width: wp(38),
              backgroundColor: Colors.blue,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: hp(5),
              flexDirection: 'row',
            }}>
            <Image
              style={{height: hp(5), width: wp(15), resizeMode: 'contain'}}
              source={img.male1}></Image>
            <MyText
              style={{textAlign: 'center', fontSize: scale(16)}}
              white
              poppinsbold
              title={'Male'}
            />
          </View>
        </View>
    <View style={{flexDirection: 'row', paddingHorizontal: wp(7)}}>
    <FlatList
      data={dataFemale}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: wp(4),
              paddingTop: hp(2),
            }}>
              {/* start(item,index) */}
            <View style={{flexDirection: 'row', width: '45%'}}>
            { item?.type == 'female'  ? <Femalecheck value={isOn} id={item?._id}    onCheck={e =>{start(item,index)}}  />:null}
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: scale(14),
                  marginTop: hp(0.5),
                  left: wp(2),
                }}
                black
                poppinsemibold
                title={item?.audio_coach_name}
              />
            </View>
          </View>
        );
      }}
    />
    <FlatList
      data={dataMale}
      showsVerticalScrollIndicator={false}
      renderItem={({item ,index}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: wp(4),
              paddingTop: hp(2),
            }}>
            <View style={{flexDirection: 'row', width: -wp(2)}}>
              <Malecheck value={isOn} id={item?._id}  onCheck={e =>{ start(item,index)}}   />
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: scale(15),
                  marginTop: hp(0.5),
                  left: wp(2),
                }}
                black
                poppinsemibold
                title={item?.audio_coach_name}
              />
            </View>
          </View>
        );
      }}
    />
  </View>
  </>
  )
}

export default AudioList