import { Box,Flex,Heading,Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import VelaButton from '../src/components/VelaButton'


const Home: NextPage = () => {
  return (
    <>
      <Box h="calc(100vh - 56px)" bgSize="cover" backgroundPosition="center" bgImg='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBike-Eletrica-Smart-Vela-Bikes.jpg?alt=media&token=83330a4b-06f4-4931-8b4f-e8afbff476c9'>
        <Flex paddingBottom="48px" height="100%" align="center" flexDir="column" justify="end">
          <Heading fontSize="4rem" paddingBottom="0.5rem">Smartbike Vela 2</Heading>
          <Heading fontSize="1.25rem" paddingBottom="0.5rem">Pedale com a gente para cidades mais saudáveis</Heading>
          <Text textAlign="center" fontSize="1rem" fontWeight="500" paddingBottom="0.5rem">A bicicleta elétrica e smart para quem busca eficiência, qualidade de vida e <br/> deslocamentos menos estressantes.</Text>
          <VelaButton href="/vela2" buttonName="Monte a sua"/>
        </Flex>
      </Box>
    </>
  )
}

export default Home
