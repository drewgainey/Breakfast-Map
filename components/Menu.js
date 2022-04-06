import { Text, View, Button, ScrollView} from "react-native";
import { menu } from "../menuExample";

export default Menu = ({ route, navigation }) => {
  const { resturant } = route.params;
  const menuDetails = resturant.menus;
  return (
    <ScrollView>
      {menuDetails.map((menu) => {
        return (
          <View key={menu}>
            <Text>{menu.menu_name}</Text>
            {menu.menu_sections.map((section) => {
              return (
                  <Button 
                    title={section.section_name} 
                    onPress={() => navigation.navigate('Menu Section', {
                        section: section
                    })} />
              )
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};
