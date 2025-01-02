import * as Font from 'expo-font';

const customFonts = {
    'heavitas': require('../assets/fonts/heavitas/Heavitas.ttf'),
    'creato': require('../assets/fonts/creato_display/CreatoDisplay-Regular.otf'),
};

export const loadFonts = async () => {
    await Font.loadAsync(customFonts);
};

export const getFont = (fontFamily) => {
    return customFonts[fontFamily];
};
