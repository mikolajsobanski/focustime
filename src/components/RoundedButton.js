import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";


export const RoundedButton = ({
  style={},
  textStyle={},
  size= 125,
  ...props

  }) => {
    return (
       <TouchableOpacity style={[styles(size).radius, style]}> 
    <Text 
        style={[styles(size).text, textStyle]} 
        onPress={props.onPress}>
            {props.title}
    </Text> 
</TouchableOpacity>
    );
  };

  

  const styles = (size) => StyleSheet.create({
    radius: {
      borderRadius: size/2,
      width: size,
      hight:size,
      alignItems: "center",
      borderColor: 'white',
      borderWidth: 2

    },
    text: { color: '#fff', fontSize: size/3},
  })