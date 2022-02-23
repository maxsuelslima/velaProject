import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        gray:{
            800:"#2D2D2D"
        }
    },
    styles: {
      global: {
        body: {
          color: '#EFEFEF',
          fontFamily:'Barlow',
          bg:"#EFEFEF"
        },
        fonts:{
            body:'Barlow',
            heading:'Barlow'
        },
        a: {
          fontWeight:'bold',
          fontSize:'1rem',
        },
      },
    },
  })
  