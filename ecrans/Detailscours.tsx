// src/screens/CourseDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Définition des types pour la navigation
type RootStackParamList = {
    CourseDetail: { courseId: string };
    // Ajoutez d'autres écrans ici si nécessaire
};

type CourseDetailScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'CourseDetail'
>;

type CourseDetailScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

type Props = {
    navigation: CourseDetailScreenNavigationProp;
    route: CourseDetailScreenRouteProp;
};

const CourseDetailScreen: React.FC<Props> = ({ route }) => {
    const { courseId } = route.params;

    // Simule les données détaillées ici (pour l'instant, juste l'ID).
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails du cours</Text>
            <Text style={styles.content}>Cours ID: {courseId}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
    },
});

export default CourseDetailScreen;
