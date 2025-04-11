import { Image, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../contexts/theme';

const CustomTextInput = ({placeholder,source}:{placeholder?:string; source?:any}) => {
  const [text, setText] = useState('');

  return (
    <View
      style={[
        styles.wrapper,
        { flexDirection: text ? 'row-reverse' : 'row', borderWidth: text ? 1 : undefined, borderColor: text ? Colors.primary : undefined },
      ]}
    >
      <Image source={source} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
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
