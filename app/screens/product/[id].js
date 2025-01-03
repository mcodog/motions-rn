import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

//Stylings
import { collectionItems, defaultStyles, fonts } from '../../styles'
import { loadFonts } from '../../utils/fonts'

//Package Components
import { Appbar, Avatar, Button, Card  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const plans = [
    {
        name: 'Sample Plan',
        price: '$5',
        perks: ['Meal Planning', 'Consultations'],
        duration: '6 Months'
    },
    {
        name: 'Trial Plan',
        price: '$5',
        perks: ['Meal Planning', 'Consultations'],
        duration: '6 Months'
    },
]

const Product = ({ id }) => {
    useEffect(() => {
        loadFonts();
    }, [])

    const [activeTab, setActiveTab] = useState('Packages')

    const getButtonStyles = (tabName) => ({
        buttonStyle: {
            backgroundColor: activeTab === tabName ? '#6851a4' : 'white',
        },
        labelStyle: {
            color: activeTab === tabName ? 'white' : '#6851a4',
        },
    });

    const renderItems = ({ item }) => (    
        <View style={[defaultStyles.barWrapper, { gap: 15 }]}>  
            <Card style={[defaultStyles.bar, {height: 180, padding: 0}]}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <View style={{borderRadius: 16,padding: 10, paddingLeft: 30, paddingRight: 30,position: 'absolute', bottom: 20, left:20, color: 'white', backgroundColor: 'rgba(102, 51, 153, .35),', maxWidth:'90%'}}>
                    <Text style={[{color:'white'}, fonts.mdFont]}>Simple Package</Text>
                </View>
            </Card>
        </View>
    )
    

    return (
        <ScrollView>
            <View style={[defaultStyles.container, { paddingTop: 10 }]}>
                    <Appbar.Header style={{backgroundColor: '#f7f6fb', }}>
                        <Appbar.BackAction onPress={() => {}} />
                        <Text>Title</Text>
                    </Appbar.Header>
                    <View style={defaultStyles.xlContainer}>
                        <View style={[defaultStyles.displayCardWrapper,]}>
                            <View style={[defaultStyles.centerCard, collectionItems.displayCard, { alignItems: 'center' }]}>
                                <Avatar.Icon icon="account" size={100} style={{ backgroundColor: 'lightgray' }} />
                                <View style={defaultStyles.spaced}>
                                    <Text style={[fonts.center, fonts.xlFont, fonts.bold, fonts.emphasize]}>Mark Codog</Text>
                                    <Text style={[fonts.center, fonts.mdFont, fonts.fadeLight]}>Transform Your Body, Elevate Your Life.</Text>
                                </View>
                                <View style={[defaultStyles.row, defaultStyles.smSpaced]}>
                                    <Icon name="star" size={35} color="gold" />
                                    <Icon name="star" size={35} color="gold" />
                                    <Icon name="star" size={35} color="gold" />
                                    <Icon name="star" size={35} color="gold" />
                                    <Icon name="star" size={35} color="gold" />
                                </View>
                                <View style={defaultStyles.spaced}>
                                    <Text style={[fonts.mdFont]}>
                                        Price Range: $4 - $20
                                    </Text>
                                </View>
                                <View style={[defaultStyles.lgSpaced, defaultStyles.spannedRow]}>
                                    <View>
                                        <Icon style={[ fonts.center, defaultStyles.spaced ]} name="camera" size={35} color="gray" />
                                        <Text style={[ fonts.center ]}>Some Detail</Text>
                                    </View>
                                    <View>
                                        <Icon style={[ fonts.center, defaultStyles.spaced ]} name="event" size={35} color="gray" />
                                        <Text style={[ fonts.center ]}>Some Detail</Text>
                                    </View>
                                    <View>
                                        <Icon style={[ fonts.center, defaultStyles.spaced ]} name="schedule" size={35} color="gray" />
                                        <Text style={[ fonts.center ]}>Some Detail</Text>
                                    </View>
                                </View>
                                <View style={[defaultStyles.spannedRow, { gap: 10, paddingLeft: '40', paddingRight: '40'}]}>
                                    <Button 
                                        contentStyle={{ height: 50 }} 
                                        labelStyle={{ fontSize: 16 }} 
                                        style={[{ flex: 1 }]} 
                                        icon="account-arrow-up" 
                                        mode="contained" 
                                        onPress={() => console.log('Pressed')}>
                                        Book Now
                                    </Button>
                                    <Button 
                                        contentStyle={{ height: 50,  }} 
                                        labelStyle={{ fontSize: 16 }} 
                                        style={[{ flex: 1, borderWidth: 2, borderColor: '#663399' }]} 
                                        icon="message-arrow-right-outline" 
                                        mode="outlined" 
                                        onPress={() => console.log('Pressed')}>
                                        Message
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[defaultStyles.fluidContainer]}>
                        <View style={[defaultStyles.navigationTabs, defaultStyles.lgSpaced]}>
                            {['Packages', 'Reviews'].map((tab) => {
                                const { buttonStyle, labelStyle } = getButtonStyles(tab);
                                return (
                                    <Button
                                        key={tab}
                                        style={buttonStyle}
                                        labelStyle={labelStyle}
                                        mode="elevated"
                                        onPress={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </Button>
                                );
                            })}
                        </View>
                        <View style={[defaultStyles.fluidContainer]}>
                            <View style={[defaultStyles.deckCol]}>
                                <FlatList 
                                    style={{padding: 5}}
                                    data={plans}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderItems}
                                    scrollEnabled={false}
                                />
                            </View>
                        </View>
                    </View>
            </View>
        </ScrollView>
  )
}

export default Product