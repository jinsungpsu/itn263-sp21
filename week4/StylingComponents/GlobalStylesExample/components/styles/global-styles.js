import React from 'react';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkTheme: {
        color: '#fff',
        backgroundColor: '#111',
    },
    darkText: {
        color: '#fff',
    }
});

export { globalStyles };
