// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CourseListScreen from '../ecrans/Listcours';
import CourseDetailScreen from '../ecrans/Detailscours';

// Définition des types de paramètres pour la pile de navigation
type RootStackParamList = {
    CourseList: undefined;
    CourseDetail: { courseId: string };
};

// Création de la pile de navigation
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CourseList">
                <Stack.Screen
                    name="CourseList"
                    component={CourseListScreen}
                    options={{ title: 'YelloApp' }}
                />
                <Stack.Screen
                    name="CourseDetail"
                    component={CourseDetailScreen}
                    options={{ title: 'Détail du Cours' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
