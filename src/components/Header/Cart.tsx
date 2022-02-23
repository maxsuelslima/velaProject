import { Box, Flex, Icon } from "@chakra-ui/react"
import {ImCart} from 'react-icons/im'

function cart(){
    return(
        <Flex justify="center" align="center" bg="green.500" h="56px" w="56px">
            <Icon as={ImCart}  w="17px" h="17px" />
        </Flex>
    )
}
export default cart