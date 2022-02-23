import {Text ,Image ,Box, Flex, Tabs, TabsProps, TextProps } from "@chakra-ui/react"
import { ReactNode } from "react"
interface SelectButtonProps extends TabsProps{
    children:ReactNode;
    isActived?:boolean;
}
interface HeadingProps extends TextProps{
    children:ReactNode
}
function Montar(){
    return(

        <Box p="2em 2em 2em 2.5em" boxSizing="border-box">
    <Box>
        <Heading1 mt="0">Geometria:</Heading1>
        <Flex wrap="wrap" justify="center" align="center">
            <Flex justify="center" align="center">
                <SelectButton h="36px"><>Quadro Baixo</></SelectButton>
                <SelectButton h="36px"><>Quadro Reto</></SelectButton>
            </Flex>
        </Flex>
    </Box>
    <Box>
        <Heading1>Cor:</Heading1>
            <Flex wrap="wrap" justify="center" align="center">
                    <SelectButton>
                        <Image flexShrink={0} width="22px" height="22px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FGreen.png?alt=media&token=7ccad21a-f7df-4e45-afc6-b2abd5c868c6"></Image>
                        <Text mt="5px" flexShrink={0}>Verde Floresta</Text>
                    </SelectButton>
                    <SelectButton>
                        <Image flexShrink={0} width="22px" height="22px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FGreen.png?alt=media&token=7ccad21a-f7df-4e45-afc6-b2abd5c868c6"></Image>
                        <Text mt="5px" flexShrink={0}>Verde Floresta</Text>
                    </SelectButton>
                    <SelectButton>
                        <Image flexShrink={0} width="22px" height="22px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FGreen.png?alt=media&token=7ccad21a-f7df-4e45-afc6-b2abd5c868c6"></Image>
                        <Text mt="5px" flexShrink={0}>Verde Floresta</Text>
                    </SelectButton>
                    <SelectButton>
                        <Image flexShrink={0} width="22px" height="22px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FGreen.png?alt=media&token=7ccad21a-f7df-4e45-afc6-b2abd5c868c6"></Image>
                        <Text mt="5px" flexShrink={0}>Verde Floresta</Text>
                    </SelectButton>
                </Flex>
    </Box>
    <Box>
        <Heading1>Tamanho:</Heading1>
                <Flex wrap="wrap" boxSizing="border-box" align="center" justify="center">
                        <SelectButton><Image m="0.7em" h="23px" w="20px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2"></Image><Text>1.60 - 1.70m</Text></SelectButton>
                        <SelectButton><Image m="0.7em" h="23px" w="20px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2"></Image><Text>1.60 - 1.70m</Text></SelectButton>
                        <SelectButton><Image m="0.7em" h="23px" w="20px" src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2"></Image><Text>1.60 - 1.70m</Text></SelectButton>
                </Flex>
                       
    </Box>
</Box>
    )
}
function SelectButton({children, isActived,...rest}:SelectButtonProps){
    return(
        <Flex 
        align="center" 
        flexDirection="column" 
        justify="center" 
        flexShrink={0}>
            <Tabs 
            fontSize="0.8em" 
            fontWeight={600} 
            color="#7B7B7B" 

            boxSizing="border-box" 
            p="0.7em" 
            h="75px"
            bg="#EFEFEF" 
            
            my="0.3em"
            mx="0.3em"

            borderRadius="0.6rem" 
            borderColor="#D6D4D4" 
            border="1px"
            
            w="154px"
            {...rest} 

            
            _selected={{
                bg:"green.600"
            }}

            flexDir="column"
            align="center"
            justify="center"

            cursor="pointer"
            >
                {children}
                
            </Tabs>
        </Flex>
    )
}

function Heading1({children, ...rest}:HeadingProps){
    return(
        <Text my="0.7em" fontWeight={500} fontSize="1.1rem" lineHeight="1.5em" {...rest}>{children}</Text>
    )
}
export default Montar