import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Appearance } from 'react-native';

const SettingsScreen = () => {
  
  const colorScheme = Appearance.getColorScheme(); 
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark'); 
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); 


  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>Página de Configurações</Text>

  
      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>Notificações</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications} 
        />
      </View>

     
      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eefafc'
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default SettingsScreen;
