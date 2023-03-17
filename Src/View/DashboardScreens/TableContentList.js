import {
    View,
    FlatList,
    Image,
    Pressable,
  } from 'react-native';
  import React, { useContext ,useEffect} from 'react';
  import Header from '../../Components/Header';
  import { hp, wp } from '../../Components/Globalstyle';
  import { Colors,img ,navigate } from '../../Components/Config';
  import MyText from '../../Components/Ctext';
  import {Context} from '../../../Shared/Provider';
  
  export default function TableContentList({ navigation }) {
  
    const {getTableList, setTableList,API, setid,} = useContext(Context);
    
    const onPressTable =(item)=>{
      setid(item?.s_no)
  navigate('TableContent')
  
   }
    useEffect(() => {
      API.GetTableList(e => {
        setTableList(e.data);
    }) },[]);
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        
        <View style={{ paddingBottom: hp(2) }}>
          <Header
            left
            onBackPress={() => navigation.goBack()}
            title={'Table of Contents'}
          />
        </View>
        <View style={{ flex: 1, paddingTop: '6%', backgroundColor: 'white' }}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={getTableList}
            renderItem={({ item, index }) => (
              <Pressable
              onPress={()=>onPressTable(item)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingLeft: '5%',
                  backgroundColor: '#fff5de',
                  borderRadius: 8,
                  borderWidth: 0.8,
                  borderColor: Colors.Theme,
                  height: 58,
                  marginHorizontal: wp(4),
                  marginBottom: '2%',
                }}>
                <View style={{width:wp(74)}}>
                 
                <MyText style={{ color: '#444444' }} msemibold title={index == 11 ? item.title + item.type: item.title} />
                </View>
                <Image
                  source={img.image_right}
                  style={{ height: '20%', width: '20%', resizeMode: 'contain' }}
                />
              </Pressable>
            )}
          />
        </View>
        <View style={{height:20}}></View>
      </View>
    );
  }



   
  