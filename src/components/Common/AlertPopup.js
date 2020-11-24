import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Value, screenWidth} from '../utils';

const AlertPopUp = props => {
  React.useEffect (
    () => {
      if (props.show) {
        turnOff ();
      }
    },
    [props.show]
  );
  const turnOff = () => {
    setTimeout (() => {
      props.setShow ();
    }, 1500);
  };
  return (
    <Modal animationType="fade" transparent={true} visible={props.show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Alert</Text>

          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#e4e3e3'}}
          >
            <Text style={styles.textStyle}>
              {props.message}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create ({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: Value (100),
    backgroundColor: 'white',
    borderRadius: Value (20),
    padding: Value (30),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: screenWidth * 0.6,
  },
  openButton: {
    borderRadius: Value (7),
    padding: Value (6),
    elevation: 2,
  },
  textStyle: {
    color: 'grey',
    textAlign: 'center',
    fontSize: Value (10),
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontWeight: '700',
    letterSpacing: 1,
  },
  modalText: {
    marginBottom: 15,
    color: '#c85b59',
    textAlign: 'center',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: Value (11),
    letterSpacing: 2,
  },
});

export default AlertPopUp;
