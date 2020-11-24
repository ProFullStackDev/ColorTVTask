import React from 'react';
import {View, StyleSheet, Platform, Image, Text} from 'react-native';
import {Value, appIcon} from '../utils';

import {NeuView, NeuButton} from 'react-native-neu-element';
const AppIconView = props => {
  return (
    <View style={styles.container}>
      <NeuView
        color="#f9f9f9"
        width={Value (100)}
        height={Value (42)}
        borderRadius={Value (11)}
        convex
      >
        <View style={styles.btnView}>

          <Image source={appIcon} style={styles.iconStyle} />

          <Text style={styles.txtStyle}>
            UNSPLASH{' '}
          </Text>
        </View>

      </NeuView>

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    top: Platform.OS === 'ios' ? Value (42) : Value (20),
    left: Value (20),
    zIndex: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    height: Value (24),
    width: Value (24),
    resizeMode: 'contain',
    opacity: 0.4,
  },
  btnView: {
    flexDirection: 'row',
    height: '92%',
    width: '97%',
    paddingHorizontal: Value (8),
    borderRadius: Value (11),
    alignItems: 'center',
    backgroundColor: 'rgba(255,144,131,0.2)',
    alignSelf: 'center',
  },
  txtStyle: {
    fontSize: Value (8.5),
    paddingLeft: Value (6),
    color: 'grey',
    letterSpacing: 0.7,
    fontWeight: '700',
    fontStyle: 'italic',
  },
});

export default AppIconView;
