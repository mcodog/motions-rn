import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

// Styling 
import { defaultStyles, fonts, backgrounds } from '../styles';
import { loadFonts } from '../utils/fonts';

//Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';

import { StatusBar } from 'react-native';

export default function Profile() {
    useEffect(() => {
        loadFonts();
    }, [])

    return (
        <View style={defaultStyles.container}>
            <View style={[backgrounds.profileBackground]}>
            </View>
            <View style={[defaultStyles.titleContainer, defaultStyles.spaceBetween, defaultStyles.alignCenter]}>
                <Icon name="arrow-left" size={50} color="white"/>
                <Text></Text>
            </View>
            <View style={[defaultStyles.alignCenter, defaultStyles.xyCenter]}>
                <Avatar.Icon size={182} icon="account" style={{backgroundColor: 'white'}} />
                <View>
                    <Text style={[fonts.xlFont, fonts.light, fonts.bold]}>Mark Codog</Text>
                    <Text style={[fonts.mdFont, fonts.fade, fonts.center]}>Level 1</Text>
                </View>
            </View>
            <View style={[defaultStyles.xlContainer, defaultStyles.xyCenter]}>
                <View style={defaultStyles.centerCardWrapper}>
                    <View style={[defaultStyles.centerCard]}>

                    </View>
                </View>
            </View>
            <View style={[defaultStyles.xyCenter]}>
                <Text style={[fonts.mdFont, fonts.bold]}>Gym Buddies</Text>
                <Text style={[fonts.mdFont, fonts.fadeLight, ]}>Here are users with the same activities as you!</Text>
                <Text style={[fonts.mdFont, fonts.fadeLight, ]}>Check them out!</Text>
                <View style={[defaultStyles.barWrapper, defaultStyles.margined]}>
                    <View style={defaultStyles.bar}></View>                    
                </View>
            </View>
            {/* <View style={[defaultStyles.fluidContainer, defaultStyles.barStack]}>
                <View style={defaultStyles.barWrapper}>
                    <View style={defaultStyles.bar}></View>                    
                </View>
                <View style={defaultStyles.barWrapper}>
                    <View style={defaultStyles.bar}></View>
                </View>
            </View> */}
        </View>
    )
}