import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NeuButton} from 'react-native-neu-element';
import {screenWidth, Value} from '../utils';

const ButtonNeu = props => {
  return (
    <NeuButton
      color="#f9f9f9"
      width={props.width ? props.width : screenWidth * 0.82}
      height={props.height ? props.height : Value (40)}
      borderRadius={Value (11)}
      onPress={() => props.onPressBtn ()}
    >
      <View
        style={{
          width: '98%',
          height: '90%',
          borderRadius: Value (11),
          backgroundColor: props.bgColor
            ? props.bgColor
            : 'rgba(255,144,131,0.2)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={[styles.BtnTxt, {fontSize: Value (9)}]}>
          {props.btnTitle}{' '}
        </Text>
      </View>
    </NeuButton>
  );
};

const styles = StyleSheet.create ({
  BtnTxt: {
    fontWeight: '700',
    color: 'grey',
    letterSpacing: 1,
    fontStyle: 'italic',
  },
});

export default ButtonNeu;
