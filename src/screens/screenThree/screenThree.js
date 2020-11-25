import React from 'react';
import {View, Text, StyleSheet, Image, Platform, FlatList} from 'react-native';

import {Value, screenWidth, screenHeight} from '../../components/utils';

const ScreenThree = props => {
  const [loading, setLoading] = React.useState (false);

  const [imagesData, setImagesData] = React.useState (
    props.route.params.images
  );

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const renderItem = ({index, item}) => {
    return (
      <View
        style={{
          flex: 1,
          width: screenWidth,
          height: screenHeight,
          backgroundColor: 'rgba(255,144,131,0.2)',
        }}
      >
        <Image
          source={{uri: item.urls.regular}}
          style={{width: screenWidth, height: screenHeight}}
          resizeMethod="auto"
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={imagesData}
        horizontal={true}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={16}
        initialScrollIndex={props.route.params.index}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
export default ScreenThree;
