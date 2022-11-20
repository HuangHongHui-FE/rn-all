import React, { useState, useEffect } from "react";
import { AccessibilityInfo, View, Text, StyleSheet } from "react-native";
import DescTextCom from '../../../components/DescText'

const App = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      handleReduceMotionToggled
    );
    AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      handleScreenReaderToggled
    );

    AccessibilityInfo.isReduceMotionEnabled().then(
      reduceMotionEnabled => {
        setReduceMotionEnabled(reduceMotionEnabled);
      }
    );
    AccessibilityInfo.isScreenReaderEnabled().then(
      screenReaderEnabled => {
        setScreenReaderEnabled(screenReaderEnabled);
      }
    );

    return () => {
      AccessibilityInfo.removeEventListener(
        "reduceMotionChanged",
        handleReduceMotionToggled
      );
      AccessibilityInfo.removeEventListener(
        "screenReaderChanged",
        handleScreenReaderToggled
      );
    };
  }, []);

  const handleReduceMotionToggled = reduceMotionEnabled => {
    setReduceMotionEnabled(reduceMotionEnabled);
  };

  const handleScreenReaderToggled = screenReaderEnabled => {
    setScreenReaderEnabled(screenReaderEnabled);
  };

  return (
    <View style={styles.container}>
      <DescTextCom>有时候我们希望知道用户的设备是否正在运行读屏应用。AccessibilityInfo正是用于此目的。你可以用它来查询读屏应用的当前状态，并且可以监听其状态变化。</DescTextCom>
      <Text style={styles.status}>
        The reduce motion is {reduceMotionEnabled ? "enabled" : "disabled"}.
      </Text>
      <Text style={styles.status}>
        The screen reader is {screenReaderEnabled ? "enabled" : "disabled"}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  status: {
    margin: 30
  }
});

export default App;