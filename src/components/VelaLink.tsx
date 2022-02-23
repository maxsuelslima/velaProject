import { Flex } from "@chakra-ui/react"
import Link, { LinkProps } from "next/link"
import { ReactElement } from "react"

interface VelaLinkProps extends LinkProps{
    refName:string,
    href:string
}

function VelaLink({refName,href, ...rest}:VelaLinkProps){
    return(

            <Flex px="20px" align="center" justify="center">
                <Link href={href} passHref>
                    <a {...rest}>{refName}</a> 
                </Link>
            </Flex>

    )
}
export default VelaLink