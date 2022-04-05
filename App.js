import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import Menu from "./components/Menu";
import MenuSection from "./components/MenuSection";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Greek Food" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Menu Section" component={MenuSection}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
