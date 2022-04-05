import { Text, View, ScrollView } from "react-native";

export default MenuSection = ({ route }) => {
  const { section } = route.params;
  return (
    <ScrollView>
      <Text>{section.section_name}</Text>
      {section.menu_items.map((item) => {
        return (
          <View>
            <Text>{item.name}</Text>
            <Text>
              {item.description}
              {": "}
              {item.pricing[0].priceString}{" "}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};
