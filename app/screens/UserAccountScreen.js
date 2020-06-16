import React from "react";
import { StyleSheet } from "react-native";

import SafeScreen from "../components/SafeScreen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

const listItems = [
  {
    id: 1,
    title: "My Profile",
    icon: { name: "face-profile", backgroundColor: colors.secondary },
  },
  {
    id: 2,
    title: "My Reviews",
    icon: { name: "yelp", backgroundColor: colors.primary },
  },
  {
    id: 3,
    title: "Logout",
    icon: { name: "logout", backgroundColor: "#ff9e83" },
  },
];

export default function UserAccountScreen() {
  return (
    <SafeScreen style={styles.screen}>
      <ListItem
        style={styles.userInfo}
        image={require("../assets/IMG_4764.jpg")}
        title="Rabah Babaci"
        subTitle="rbabaci1@gmail.com"
      />

      {listItems.map(({ id, title, icon }) => (
        <ListItem
          key={id}
          style={styles.listItem}
          title={title}
          IconComponent={
            <Icon name={icon.name} backgroundColor={icon.backgroundColor} />
          }
        />
      ))}
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  userInfo: {
    marginVertical: 50,
  },
  listItem: {
    marginVertical: 10,
  },
});
