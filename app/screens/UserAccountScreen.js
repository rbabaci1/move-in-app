import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import SafeScreen from "../components/SafeScreen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

const listItems = [
  {
    id: 1,
    title: "Logout",
    icon: { name: "logout", backgroundColor: colors.danger },
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

      <View style={styles.userInfo}>
        <FlatList
          data={listItems}
          keyExtractor={listItem => listItem.id}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
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
});
