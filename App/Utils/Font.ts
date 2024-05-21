import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Red Hat Text': require('@/assets/fonts/Red-Hat-Text.ttf'),
  });
};

export default loadFonts;