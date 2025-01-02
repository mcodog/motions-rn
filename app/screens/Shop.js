import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

// Styling 
import { defaultStyles, fonts, collectionItems } from '../styles';
import { loadFonts } from '../utils/fonts';

//Package Components
import { Searchbar, Chip } from 'react-native-paper';

const sampleData = [
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'John Doe',
        specialization: 'Weight Lifting',
        priceRange: '$4-$20'
    },
]

export default function Shop() {
    const [searchQuery, setSearchQuery] = useState('')

    const renderItem = ({ item }) => (
        <View style={defaultStyles.barWrapper}>
            <View style={[defaultStyles.bar, defaultStyles.lgBar, collectionItems.coachCard]}>
                <View style={defaultStyles.smLeft}>
                    <Image style={[defaultStyles.imageContained, defaultStyles.roundedCorner]} source={{ uri: item.image }}  />
                </View>
                <View style={defaultStyles.lgRight}>
                    <View style={defaultStyles.spaceBetween}>
                        <Text style={[fonts.mdFont, fonts.bold]}>{item.name}</Text>
                        <Text >{item.specialization}</Text>
                    </View>
                    
                    <Text >{item.priceRange}</Text>
                </View>
            </View>
        </View>
    )

    useEffect(() => {
        loadFonts()
    }, [])

  return (
    <View style={defaultStyles.container}>
      <ScrollView>
        <View style={defaultStyles.spaced}>
            <Searchbar 
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search.."
            />
        </View>
        <View style={[defaultStyles.smContainer, defaultStyles.deckRow]}>
            <Chip  onPress={() => console.log('Pressed')}>Weight Lifting</Chip>
            <Chip  onPress={() => console.log('Pressed')}>Basketball</Chip>
            <Chip  onPress={() => console.log('Pressed')}>Yoga</Chip>
            <Chip  onPress={() => console.log('Pressed')}>Calisthenics</Chip>
        </View>
        <View style={[defaultStyles.fluidContainer, defaultStyles.deckCol]}>
                <FlatList
                    style={{ padding: 5 }}
                    data={sampleData}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={renderItem}
                    scrollEnabled={false}
                    // contentContainerStyle={styles.list}
                />
        </View>
      </ScrollView>
    </View>
  )
}