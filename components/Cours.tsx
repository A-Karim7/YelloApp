// src/components/CourseItem.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface CourseItemProps {
    title: string;
    description: string;
    level: 'Débutant' | 'Intermédiaire' | 'Avancé';
    onPress: () => void;
}

const Cours: React.FC<CourseItemProps> = ({ title, description, level, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.level}>Niveau : {level}</Text>
            <Button title="En savoir plus" onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginVertical: 5,
    },
    level: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
    },
});

export default Cours;
