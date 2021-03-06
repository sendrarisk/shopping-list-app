import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';

export default function ({ product, onUpdate, onDelete, onCheck}) {

    const checkItem = (item) => {
        let itemUpdated = Object.assign({}, item);
        itemUpdated.ready = !itemUpdated.ready;
        onCheck(itemUpdated);
    }
    let statusStyle = product.ready ? styles.item_ready : styles.item_not_ready;
    return (
        <View style={[styles.container, statusStyle]}>
            <View style={styles.item}>
                <CheckBox       
                    value={product.ready}
                    onValueChange={() => checkItem(product)}
                    style={styles.item_checkbox}
                />
                <TouchableNativeFeedback onPress={() => onUpdate(product)}>
                    <View style={styles.item_details}>
                        <Text style={styles.item_details_name}>
                            {product.name}
                        </Text>
                        <Text style={styles.item_details_subtotal}>
                            {product.quantity} x ${product.price}
                        </Text>
                    </View>
                </TouchableNativeFeedback >
            </View>
            <TouchableNativeFeedback onPress={() => onDelete(product)}>
                <View style={styles.item_delete}>
                    <MaterialCommunityIcons name="delete" size={24} color="#D7BEBE"/>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 3,
        paddingRight: 8
    },
    item_ready: {
        backgroundColor: '#D7EFB4',
        borderColor: 'rgba(120, 112, 111, 0.3)', 
    },
    item_not_ready: {
        borderColor: 'rgba(221, 221, 221, 0.7)', 
        backgroundColor: '#FFF5F4',
    },
    item: {
        flexDirection: 'row',
        flexGrow: 1
    },
    item_checkbox: {
        justifyContent: 'center',
    },
    item_details: {
        flex: 1,
        paddingLeft: 6,
        color: 'black'
    },
    item_details_name: {
        fontSize: 18
    },
    item_details_subtotal: {
        fontSize: 14,
        color: 'gray'
    },
    item_delete: {
        justifyContent: 'center',
    }
})
