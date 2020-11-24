import React from 'react';
import {Image} from 'react-native';
import { NeuInput } from 'react-native-neu-element';
import { screenWidth, Value } from '../utils';


const TextInput = props =>{
    return(
       <>
      
       <NeuInput
        prefix={
          props.imageIcon?  <Image source={props.imageIcon}
            style={{width: Value(22), height: Value(22)}}
          />:<></>
        }
        onChangeText={(e) => props.onChange(e)} value={props.value} placeholder={props.placeholder}
        width={props.width ? props.width :screenWidth*0.82}
        height={props.height? props.height :Value(40)}
        color={'#f9f9f9'}
        borderRadius={Value(11)}
      /></>
    )
}

export default TextInput;