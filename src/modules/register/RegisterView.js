import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Text>Register Jarbi</Text>
      <Image source={require('../../../assets/images/logo.png')} />
    </View>
  );
}
