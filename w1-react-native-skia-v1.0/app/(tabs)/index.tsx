import { Image, StyleSheet, Platform } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes. Press{' '}
          <ThemedText type="defaultSemiBold">{Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}</ThemedText> to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>Tap the Explore tab to learn more about what's included in this starter app.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the
          current <ThemedText type="defaultSemiBold">app</ThemedText> to <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})

// // Imports
// import { useMemo } from 'react'
// import { Paragraph, Skia, useFonts, TextAlign, Canvas } from '@shopify/react-native-skia'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

// // Build a component to render paragraph with custom fonts
// export default function RichText() {
//   // Load custom fonts
//   const customFontMgr = useFonts({
//     Roboto: [require('../../assets/fonts/Roboto-Regular.ttf'), require('../../assets/fonts/Roboto-Medium.ttf')],
//     Bungee: [require('../../assets/fonts/Bungee-Regular.ttf')],
//   })

//   // Used memo so that the paragraph is not built multiple times.
//   const paragraph = useMemo(() => {
//     if (!customFontMgr) {
//       return null
//     }

//     // Define styles
//     const paragraphStyle = {
//       textAlign: TextAlign.Center,
//     }
//     const textStyle = {
//       color: Skia.Color('black'),
//       fontFamilies: ['Roboto'],
//       fontSize: 50,
//     }
//     const textStyleBungee = {
//       color: Skia.Color('black'),
//       fontFamilies: ['Bungee'],
//       fontSize: 45,
//     }

//     // Build paragraph
//     return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
//       .pushStyle(textStyle)
//       .addText('Welcome to RN')
//       .pushStyle({ ...textStyle, fontStyle: { weight: 500 } })
//       .addText(' Skia V1.0. 🚀')
//       .pushStyle({ ...textStyleBungee })
//       .addText(' #RNDev')
//       .pushStyle({ ...textStyle })
//       .addText(' is presenting ')
//       .pushStyle({ ...textStyle, fontStyle: { weight: 500 } })
//       .addText('Skia.')
//       .pop()
//       .build()
//   }, [customFontMgr])

//   // Render the paragraph
//   return (
//     <Canvas
//       style={{
//         width: wp(90),
//         height: hp(70),
//       }}
//     >
//       <Paragraph paragraph={paragraph} x={0} y={0} width={wp(90)} />
//     </Canvas>
//   )
// }

// // Imports
// import React from 'react'
// import { Skia, drawAsImage, Group, Rect, Canvas, Atlas, rect } from '@shopify/react-native-skia'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

// // Create an Image (Rectangle shape)
// const size = { width: 25, height: 11.25 }
// const strokeWidth = 2
// const imageSize = {
//   width: size.width + strokeWidth,
//   height: size.height + strokeWidth,
// }
// const image = drawAsImage(
//   <Group>
//     <Rect rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)} color="cyan" />
//     <Rect rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)} color="blue" style="stroke" strokeWidth={strokeWidth} />
//   </Group>,
//   imageSize
// )

// // Create the ImageWithAtlas component to render Atlas Images
// const ImageWithAtlas = () => {
//   // Create 350 sprites (350 Rectangles)
//   const numberOfBoxes = 350
//   const sprites = new Array(numberOfBoxes).fill(0).map(() => rect(0, 0, imageSize.width, imageSize.height))

//   // Create transformation rules for each sprite
//   const pos = { x: 190, y: 258 }
//   const width = 400

//   const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
//     const tx = 5 + ((i * size.width) % width)
//     const ty = 25 + Math.floor(i / (width / size.width)) * size.width
//     const r = Math.atan2(pos.y - ty, pos.x - tx)
//     return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty)
//   })

//   // Finally create & return the Atlas component to render 350 sprites
//   return (
//     <Canvas
//       style={{
//         width: wp(100),
//         height: hp(60),
//       }}
//     >
//       <Atlas image={image} sprites={sprites} transforms={transforms} />
//     </Canvas>
//   )
// }

// // Export the component
// export default ImageWithAtlas

// // Imports
// import { Skottie } from 'react-native-skottie'
// import LottieAnimationFile from './animation.json'

// // Return the component to render with Skottie animation
// export default function App() {
//   return <Skottie style={styles.flex1} source={LottieAnimationFile} autoPlay={true} />
// }
