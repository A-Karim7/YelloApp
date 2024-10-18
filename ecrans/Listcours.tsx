// src/screens/CourseListScreen.tsx
import React from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Définition des types pour la navigation
type RootStackParamList = {
    CourseList: undefined;
    CourseDetail: { courseId: string };
};

type CourseListScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'CourseList'
>;

type Props = {
    navigation: CourseListScreenNavigationProp;
};

// Définition des données de cours simulées
const courses = [
    { id: '1', title: 'Introduction à la Programmation', description: 'Apprenez les bases de la programmation.', level: 'Débutant' },
    { id: '2', title: 'JavaScript Avancé', description: 'Approfondissez vos compétences en JavaScript.', level: 'Intermédiaire' },
    { id: '3', title: 'React Native', description: 'Créez des applications mobiles avec React Native.', level: 'Avancé' },
    { id: '4', title: 'Introduction à la Programmation', description: 'Apprenez les bases de la programmation.', level: 'Débutant' },
    { id: '5', title: 'JavaScript Avancé', description: 'Approfondissez vos compétences en JavaScript.', level: 'Intermédiaire' },
    { id: '6', title: 'React Native', description: 'Créez des applications mobiles avec React Native.', level: 'Avancé' },
];

const CourseListScreen: React.FC<Props> = ({ navigation }) => {
    const renderCourseItem = ({ item }: { item: typeof courses[0] }) => (
        <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
            <Text style={styles.courseLevel}>Niveau: {item.level}</Text>
            <Button
                title="En savoir plus"
                onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}
            />
        </View>
    );

    return (
            <View style={styles.container}>
                <Text style={styles.header}>Liste des Cours</Text>
                <FlatList
                    data={courses}
                    renderItem={renderCourseItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={true}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    courseItem: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    courseDescription: {
        fontSize: 14,
        marginVertical: 5,
    },
    courseLevel: {
        fontSize: 12,
        color: 'gray',
    },
});

export default CourseListScreen;
