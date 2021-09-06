import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { Timer } from './src/features/timer/timer';
import { fontSizes, spacing } from "./src/utils/sizes";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory]=useState([]);

const STATUTES ={
  COMPLETE:1,
  CANCELED: 2,
}
const addFocusHistorySubejctWithState = (subject, status) => {
  setFocusHistory([...focusHistory,{subject, status}])
}
const onClear= () => {
  setFocusHistory([]);
}
const saveFocusHistory = async () => {
  try {
    AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
  } catch (e){
    console.log(e);
  }
  };
  const loadFocusHistory = async () => {
    try{
      const history = await AsyncStorage.getItem("focusHistory");
      if(history && JSON.parse(history).length){
        setFocusHistory(JSON.parse(history));
      }

    }catch(e){
  }console.log(e);
  };

   useEffect(() => {
    loadFocusHistory();
  },[])



  useEffect(() => {
    saveFocusHistory();
  },[focusHistory])

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} onTimerEnd={() => {
          addFocusHistorySubejctWithState(focusSubject,STATUTES.COMPLETE);
          setFocusSubject(null);

        }}
        clearSubject={() => {
          addFocusHistorySubejctWithState(focusSubject, STATUTES.CANCELED);
          setFocusSubject(null);
          }}
        />
      ) : (
      <>
        <Focus addSubject={setFocusSubject}/>
        <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
      </>
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: '#252250',
  },
});
