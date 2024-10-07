import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const Points = () => {
    const [pointName, setPointName] = useState(''); // state for user input
    const [pointsList, setPointsList] = useState([]); // state for list of points (events attended)  
    
    const addPoint = () => {
        if (pointName) {
            setPointsList([...pointsList, pointName]); // add event attended to the points list
            setPointName(''); // clears input after adding.
        }
    };

    const deletePoint = (index) => {
        const newPointsList = pointsList.filter((_, i) => i !== index); // filter out the event at the given index
        setPointsList(newPointsList); // update
    };

    return (
        <View style={styles.container}>
            {/* Input Section */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Enter event code"
                    value={pointName}
                    onChangeText={setPointName}
                    placeholderTextColor="lightgray" 
                />
                <View style={styles.addButtonContainer}>
                    <Button title="Add Point" onPress={addPoint} />
                </View>
            </View>

            {/* View Section */}
            <FlatList
                data={pointsList} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.view}>
                        <Text style={styles.eventText}>{item}</Text>
                        <View style={styles.deleteButtonContainer}>
                            <Button title="Delete" onPress={() => deletePoint(index)} />
                        </View>
                    </View>
                )}
            />    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    
    inputContainer: {
        flexDirection: 'row', 
        marginBottom: 20,
    },
    
    inputBox: {
        width: '60%', 
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        color: 'black', 
    },
    
    addButtonContainer: {
        marginLeft: 30, 
    },

    view: {
        flexDirection: 'row', 
        justifyContent: 'space-between', // Space between text and button
        alignItems: 'center', // Center vertically
        paddingTop: 10, // Add padding for better spacing
        paddingLeft: 5,
        width: '80%', // Set a fixed width for the items
    },
    
    eventText: {
        color: 'black', // Text color for the events
        flex: 1, // Make text take the available space
        textAlign: 'left', // Align text to the left
        marginRight: 10, // Add margin to the right of the text
    },
    
    deleteButtonContainer: {
        marginLeft: 10, // Add margin to the left of the delete button for greater space
    },
});

export default Points;
