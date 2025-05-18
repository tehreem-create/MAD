import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCity('Permission denied');
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const geo = await Location.reverseGeocodeAsync(location.coords);
      if (geo.length > 0) {
        setCity(geo[0].city || 'Unknown');
      }
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.heading}>Your Current City</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#4A90E2" />
        ) : (
          <Text style={styles.city}>{city}</Text>
        )}
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  const [name, setName] = useState(route.params?.name || '');

  useEffect(() => {
    navigation.setOptions({ title: name || 'Edit Profile' });
  }, [name]);

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.heading}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            navigation.setOptions({ title: text || 'Edit Profile' });
          }}
        />
      </View>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.heading}>Settings Page</Text>
        <Text style={{ textAlign: 'center', color: '#888' }}>
          Future settings go here...
        </Text>
      </View>
    </View>
  );
};

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Edit Profile' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4A90E2',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: { backgroundColor: '#fff', paddingBottom: 6, height: 60 },
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') return <Ionicons name="home" size={size} color={color} />;
            if (route.name === 'ProfileTab') return <Feather name="user" size={size} color={color} />;
            if (route.name === 'Settings') return <Ionicons name="settings" size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Profile' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  city: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A90E2',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});
