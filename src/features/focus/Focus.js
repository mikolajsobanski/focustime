import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState (null)

  return (
    <View style={styles.container}>
    <View style={styles.titlecontainer}>
    <Text style={styles.title}> what you like to focus on? </Text>
    <View style={styles.Inputcontainer}>
    <TextInput style={{ flex: 1, marginRight: spacing.md}} 
       onSubmitEditing={({ nativeEvent }) => { setTmpItem (nativeEvent.text) }}/>
    <RoundedButton size={50} title="+" onPress={() => { addSubject(tmpItem) }}/>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlecontainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  

  },
   Inputcontainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",

  }
});
