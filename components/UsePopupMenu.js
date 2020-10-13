import React, { createRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    UIManager,
    findNodeHandle,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UsePopupMenu(props) {
    const [icon, setIcon] = useState(null);
    const onRef = createRef(null);

    useEffect(() => {
        setIcon(onRef.current);
    }, [])

    const onError = () => {
        console.log('Show Menu Error');
    };

    const onPress = () => {
        if (icon) {
            UIManager.showPopupMenu(
                findNodeHandle(icon),
                props.actions,
                onError,
                props.onPress
            );
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Icon style={props.iconStyle} name={props.icon} size={props.size} color={props.color} ref={onRef} />
            </TouchableOpacity>
        </View>
    );
}

UsePopupMenu.defaultProps = {
    size: 32,
    color: 'grey',
    icon: 'ellipsis-v'
};

UsePopupMenu.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onPress: PropTypes.func.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    iconStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array])
};
