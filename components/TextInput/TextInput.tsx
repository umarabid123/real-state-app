import { Image, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../contexts/theme';

const CustomTextInput = () => {
  const [text, setText] = useState('');

  return (
    <View
      style={[
        styles.wrapper,
        { flexDirection: text ? 'row-reverse' : 'row' }
      ]}
    >
      <Image source={require('../../assets/images/primary-mail-icon.png')} />
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: Colors.softGray,
    gap: 10,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});
