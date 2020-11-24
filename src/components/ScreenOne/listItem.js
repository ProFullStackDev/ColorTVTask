import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NeuBorderView} from 'react-native-neu-element';
import {screenWidth, Value} from '../utils';
import ButtonNeu from '../Common/ButtonNeu';
import {useNavigation} from '@react-navigation/native';
const ListItem = props => {
  const navigation = useNavigation ();
  const {name, photo, likes, noOfPic} = props;
  return (
    <View style={styles.container}>
      <NeuBorderView
        color="#f9f9f9"
        width={screenWidth * 0.86}
        height={Value (140)}
        borderRadius={Value (9)}
        borderWidth={Value (18)}
      >
        <View style={styles.btnView}>
          <View
            style={{
              justifyContent: 'center',
              width: '30%',
              height: '100%',
              alignItems: 'center',
            }}
          >
            <Image
              source={{uri: photo}}
              style={styles.imageStyle}
              resizeMethod="auto"
              resizeMode="cover"
            />
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.headerStyle}>Name</Text>
              <Text style={styles.txtStyle}>
                {name}
              </Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.headerStyle}>Likes</Text>
              <Text style={styles.txtStyle}>
                {likes}
              </Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.headerStyle}>Photos</Text>
              <Text style={styles.txtStyle}>
                {noOfPic}
              </Text>
            </View>
            <View style={{bottom: Value (-15), position: 'absolute'}}>
              <ButtonNeu
                btnTitle="See Profile"
                onPressBtn={() =>
                  navigation.navigate ('Screen2', {userName: name})}
                height={Value (32)}
                width={screenWidth * 0.41}
                bgColor={'rgba(197,105 , 23, 0.2)'}
              />
            </View>
          </View>

        </View>
      </NeuBorderView>

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    width: screenWidth * 0.86,
    height: Value (120),
    marginVertical: Value (20),
  },
  btnView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f4f4f4',
    height: Value (120),
    borderRadius: Value (4),
    borderColor: 'white',
    borderWidth: 0.4,
  },
  txtStyle: {
    fontSize: Value (11),
    paddingLeft: Value (2),
    color: 'grey',
    letterSpacing: 0.3,
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },
  imageStyle: {
    width: '98%',
    height: '98%',
    borderRadius: Value (4),
  },
  bodyContainer: {
    flexDirection: 'column',
    width: '70%',
    height: Value (100),
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: Value (8),
    paddingVertical: Value (6),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerStyle: {
    fontSize: Value (12),
    letterSpacing: 1,
    color: 'grey',
    paddingLeft: Value (3),
    fontStyle: 'italic',
  },
});

export default ListItem;
