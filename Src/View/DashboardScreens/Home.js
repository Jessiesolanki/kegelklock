import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import Buttons from '../../Components/Buttons';
import { Context } from '../../../Shared/Provider';
import VideoPlayer from 'react-native-video-player';
import { navigate,img ,Colors} from '../../Components/Config';
export default function Home({ }) {

  const {
    Female,
    setFemale,
    API, setfirsttime,
    setLoader,
    Udetail,
    setUserdetail,
    Buttonactive,
    setbuttonactive,
    setrefresh, setid,
    getTableList, setTableList, image_base_url
  } = useContext(Context);

  const { Userdetail, removeFirstTimeUser } = API;
  useEffect(() => {
    setLoader(true)
    API.GetTableList(e => {
      setTableList(e.data);
      setLoader(false)
    })
  }, []);
  useEffect(() => {
    setrefresh(true);
  }, []);

  useEffect(() => {
    Userdetail(e => {
      setUserdetail(e.data);

      if (e.data.gender == 'male') {
        setFemale({ gender: false, color: Colors.blue, type: 'male' });
      } else {
        setFemale({
          gender: true,
          color: Colors.pink,
          type: 'female',
          source: img.pink_tick,
        });
      }
    });
  }, []);
  const onPressTable = (item) => {

    setid(item?.s_no)
    navigate('TableContent')

  }
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <StatusBar translucent={false} backgroundColor={'white'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: wp(5) }}>
          <ImageBackground
            borderRadius={10}
            style={{
              height: wp(50),
              width: wp(90),
              marginTop: hp(2),
              alignItems: 'center',
              borderRadius: 10,
            }}
            source={!Female.gender ? img.Home_banner : img.Home_banner_female}>
            <MyText
              style={{
                textAlign: 'center',
                paddingTop: hp(4),
                fontSize: scale(20),
              }}
              white
              poppinsbold
              title={'Kegel Klock Exercise '}
            />
            <View style={{ height: hp(21), paddingHorizontal: 15 }}>
              <MyText
                style={{
                  textAlign: 'center',

                  fontSize: scale(10.6),
                }}
                white
                msemibold
                title={
                  'Maintain your focus. For best result, focus on tightining only your pelvic floor muscles. Be careful not to flex the muscles in your abdomen, thighs or buttocks. Avoid holding your breath, instead, breathe freely and naturally during the exercises.  '
                }
              />
            </View>
          </ImageBackground>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <MyText
              style={{ fontSize: scale(17), marginTop: hp(3), color: 'black' }}
              black
              poppinsbold
              title={'Table of Contents'}
            />
            <TouchableOpacity
              onPress={() => navigate('TableContentList')}
              style={{
                borderRadius: 5,
                backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                width: wp(25),
                height: wp(8),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: hp(3),
              }}>
              <MyText
                style={{ textAlign: 'center', fontSize: scale(10) }}
                white
                poppinsbold
                title={'See All'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          horizontal
          data={getTableList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => onPressTable(item)}
                style={{ padding: wp(5) }}
              >
                <ImageBackground
                  borderRadius={10}
                  style={{
                    height: wp(50),
                    width: wp(90),
                    borderRadius: 10,
                    paddingHorizontal: wp(3),
                  }}
                  imageStyle={{ opacity: 0.2,backgroundColor:'black'}}
             
                  source={{ uri: image_base_url + item?.image }}
                  >
                  <MyText
                    style={{ 
                      paddingTop: hp(3),
                      fontSize: scale(12),
                      color: Colors.Theme, 
                      
                    }}
                    
                    title={item.title}
                  />
                  <MyText
                    style={{ paddingTop: hp(0.5), fontSize: scale(10)}}
                    black
                    
                    title={item.short_description}
                  />

                  <Image
                    style={{
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                      marginTop: hp(1),
                      
                    }}
                    blurRadius={100}
                    source={img.right_arrow}></Image>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{ paddingHorizontal: wp(5) }}>

          <View
            style={{ borderRadius: 15, overflow: "hidden" }}
          >
            <VideoPlayer
              video={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              videoWidth={1600}
              videoHeight={890}
              defaultMuted={false}
              autoplay={false}
              thumbnail={img.Video_banner}
              disableFullscreen={false}

            />
          </View>


          <View style={{ marginBottom: hp(5), marginTop: hp(5) }}>
            {Udetail?.first_time && Buttonactive && (
              <Buttons
                onPress={() => {
                  setfirsttime(2)
                  navigate('HomePolicy', { choose: false });
                  setbuttonactive(false);
                  removeFirstTimeUser(e => { });
                }}
                title={'Go to Setting'}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
