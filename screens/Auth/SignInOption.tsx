import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import AppText from '../../components/AppText/AppText';
import AppButton from '../../components/AppButton/AppButton';
import { Colors } from '../../contexts/theme';
import { globalStyle } from '../../styles/globalStyle';
import DividerOr from '../../components/DividerOr/DividerOr';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

const SignInScreen = () => {
  const images = [
    require('../../assets/images/login-img.png'),
    require('../../assets/images/login-img.png'),
    require('../../assets/images/login-img-2.png'),
    require('../../assets/images/login-img.png'),
  ];

  return (
    <SafeAreaView style={[globalStyle.container, styles.safeArea]}>
      {/* Image Grid */}
      <View style={styles.imageGrid}>
        {images.map((img, i) => (
          <Image source={img} key={i} style={styles.imageItem} />
        ))}
      </View>

      {/* Text and Button */}
      <View style={styles.centered}>
        <AppText
          text='Ready to'
          fontSize={25}
          fontWeight={400}
          color={Colors.secondary}
          type='subText'
          subText='explore?'
          style={styles.titleText}
          subTextStyle={{ fontWeight: '800' }}
        />
        <AppButton
          iconStyle={styles.icon}
          text='Continue with Email'
          type='icon'
          source={require('../../assets/images/mail-icon.png')}
          containerStyle={styles.emailButton}
        />
      </View>

      {/* OR Divider */}
      <DividerOr />

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <AppButton containerStyle={{ backgroundColor: Colors.softGray, width: 158, borderRadius: 8 }} type='notText' source={(require('../../assets/images/google.png'))} />
        <AppButton containerStyle={{ backgroundColor: Colors.softGray, width: 158, borderRadius: 8 }} type='notText' source={(require('../../assets/images/facebook.png'))} />
      </View>
      {/* Footer Text */}
      <AuthFooter />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: Colors.white,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  imageItem: {
    width: 171,
    height: 174,
    borderRadius: 12,
  },
  centered: {
    width:'100%',
    alignItems: 'center',
    marginTop: 53,
  },
  titleText: {
    alignSelf:'flex-start'
  },
  icon: {
    width: 20,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: 278,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 41
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20
  },
  socialButton: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 12,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});
