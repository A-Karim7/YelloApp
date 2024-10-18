// src/components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Entete: React.FC = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>PlatformEdu</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6200EE',
        padding: 15,
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Entete;
