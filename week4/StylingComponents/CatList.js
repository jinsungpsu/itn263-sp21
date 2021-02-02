import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Cat = (props) => {
    return (
        <View>

            <Image
                source={props.uri}
                style={{ width: 200, height: 200 }}
            />
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
}

const CatList = () => {
    return (
        <View style={styles.catList}>
            <Cat name="Maru" uri={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                name: 'johnny',
                age: 9
            }} />
            <Cat name="Jellylorum" uri={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }} />
            <Cat name="Spot" uri={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Scifresh_-_Apple.jpg/1920px-Scifresh_-_Apple.jpg' }} />
        </View>
    );

}

const styles = StyleSheet.create({
    catList: {
        alignItems: 'center',
    },
});

export { CatList };
