import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const Setroot = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: name}],
    });
  }
};

export const Colors = {
  Theme: '#ffd634',
  Default: 'black',

  pink: '#f30090',
  blue: '#00b2f5',
};

export const img = {
  logo: require('../images/logo.png'),
  splash: require('../images/splash.png'),
  logo1: require('../images/logo1.png'),
  grandcouple: require('../images/GrandCouple.png'),
  play_blue:require('../images/play_blue.png'),
  female: require('../images/female.png'),
  male: require('../images/male.png'),
  bgSubscription: require('../images/bgSubscription.png'),
  back: require('../images/back.png'),
  back_blue: require('../images/back_blue.png'),
  right: require('../images/right.png'),
  bronze: require('../images/bronze.png'),
  gold: require('../images/gold.png'),
  silver: require('../images/silver.png'),
  credit: require('../images/credit.png'),
  credit_blue: require('../images/credit_blue.png'),
  home: require('../images/home.png'),
  home_blue: require('../images/home_blue.png'),
  workout: require('../images/workout.png'),
  workout_blue: require('../images/workout_blue.png'),
  customize: require('../images/customize.png'),
  customize_blue: require('../images/customize_blue.png'),
  setting: require('../images/setting.png'),
  setting_blue: require('../images/setting_blue.png'),
  image_right: require('../images/image_right.png'),
  edit: require('../images/edit.png'),
  profileb: require('../images/profileb.png'),
  brush: require('../images/brush.png'),
  workout_banner: require('../images/workout_banner.png'),
  check_right: require('../images/check_right.png'),
  check: require('../images/check.png'),
  pink_Circle: require('../images/pink_Circle.png'),
  green_Circle: require('../images/green_Circle.png'),
  blue_Circle: require('../images/blue_Circle.png'),
  reload: require('../images/reload.png'),
  workout_bg: require('../images/workout_bg.png'),
  audiio: require('../images/audio.png'),
  vibrate: require('../images/vibrate.png'),
  Home_banner: require('../images/Home_banner.png'),
  Home_banner_female: require('../images/Home_banner_female.png'),
  table_of_contents: require('../images/table_of_contents.png'),
  right_arrow: require('../images/right_arrow.png'),
  play: require('../images/play.png'),
  male1: require('../images/male1.png'),
  female1: require('../images/female1.png'),
  check_select_female: require('../images/check_select_female.png'),
  check_unselect_female: require('../images/check_unselect_female.png'),
  check_unselect_male: require('../images/check_unselect_male.png'),
  dp: require('../images/dp.png'),
  tap1: require('../images/Tap1.png'),
  pink_tick: require('../images/pink_tick.png'),
  cream: require('../images/cream.png'),
  blue_tick: require('../images/blue_tick.png'),
  Video_banner: require('../images/Video_banner.png'),
  check_right_yellow: require('../images/check_right_yellow.png'),
  bell: require('../images/bell.png'),
  eye: require('../images/eye.png'),
  openeye: require('../images/openeye.png'),
  blue_down: require('../images/blue_down.png'),
  pink_down: require('../images/pink_down.png'),
  logout_symbol: require('../images/logout_symbol.png'),
  warning: require('../images/warning.png'),
  calendar:require('../images/calendar.png'),
  plus:require('../images/plus.png'),
  calendar_blue:require('../images/calendar_blue.png'),
  calendar_big:require('../images/calendar_big.png'),
  plus_blue:require('../images/plus_blue.png'),
  Remaining_Circle:require('../images/Remaining_Circle.png'),
  Remaining_Circle_blue:require('../images/Remaining_Circle_blue.png'),
  tableBanner1:require('../images/tableBanner1.png'),
  tableBanner2:require('../images/tableBanner2.png'),
  workout_list_banner:require('../images/workout_list_banner.png'),
  cancel:require('../images/cancel.png'),
  history:require('../images/history.png'),
  male_programs:require('../images/male_programs.png'),
  edits:require('../images/edits.png'),
  edits_pink:require('../images/edits_pink.png'),
};
