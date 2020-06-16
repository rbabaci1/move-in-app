import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({});
