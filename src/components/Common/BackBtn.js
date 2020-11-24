import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import {backIcon, Value} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {NeuButton} from 'react-native-neu-element';
const BackBtn = props => {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
      <NeuButton
        color="#f4f4f4"
        width={Value (38)}
        height={Value (38)}
        borderRadius={Value (12)}
        onPress={() => navigation.pop ()}
      >
        <Image source={backIcon} style={styles.iconStyle} />
      </NeuButton>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? Value (32) : Value (10),
    left: Value (20),
    zIndex: 10,
  },
  iconStyle: {
    height: Value (24),
    width: Value (24),
    resizeMode: 'contain',
    opacity: 0.4,
  },
});

export default BackBtn;
