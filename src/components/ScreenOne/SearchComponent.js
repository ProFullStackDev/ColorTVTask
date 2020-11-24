import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Value, screenWidth} from '../utils';
import {TextInput, ButtonNeu} from '../Common';

const SearchComponent = props => {
  return (
    <View
      style={styles.container}
      pointerEvents={!props.disable ? 'auto' : 'none'}
    >
      <TextInput
        placeholder="Search...."
        width={screenWidth * 0.6}
        height={Value (32)}
        value={props.search}
        onChange={e => props.onChange (e)}
        borderRadius={Value (8)}
      />
      <ButtonNeu
        btnTitle="SEARCH"
        onPressBtn={() => props.onSearch ()}
        height={Value (32)}
        width={screenWidth * 0.21}
        bgColor={'rgba(255,144,131,0.2)'}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default SearchComponent;
