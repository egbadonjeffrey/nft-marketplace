import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { View, Text } from "react-native";
import React from "react";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
