import { Flex,Image, OrderedList } from "@chakra-ui/react"
import Cart from "./Cart"
import NavBar from "./NavBar"

function Header(){
    return(
        <Flex h="56px" w="100%" bg='gray.800' justify="space-between">
            <NavBar/>
            <Cart/>
        </Flex>
    )
}
export default Header