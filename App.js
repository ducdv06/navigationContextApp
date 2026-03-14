import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { AuthProvider, AuthContext } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

function AppNavigator() {

  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {user == null ? (
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
            />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}