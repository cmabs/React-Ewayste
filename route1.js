import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./app/landingPage";
import Registration1 from "./app/userRegisterPage";
import Login from "./app/loginPage";
import Layout2 from "./app/route2";

const Stack = createNativeStackNavigator();

export default function Layout1() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Landing' component={Landing} options={{headerShown: false}} />
                <Stack.Screen name='UserRegistration' component={Registration1} options={{headerShown:false}} />
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='Route2' component={Layout2} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};