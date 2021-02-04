import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../components/styles/global-styles';

export default function PetList() {
    return (
        <View style={globalStyles.darkTheme}>
            <Text style={globalStyles.darkText}>Pet List</Text>
        </View>
    );
}

export {PetList};
