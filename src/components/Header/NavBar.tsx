import {Box, Flex, Icon, ListItem, OrderedList } from "@chakra-ui/react"
import VelaLink from "../VelaLink"
import Image from 'next/image'

function NavBar(){
    return(
        <Flex>
            <Logo/>
            <VelaLink refName={"Vela 2"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Vela+"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Acessórios"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Peças"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Serviços"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"rede"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Test-ride"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Blog"} href={'https://velabikes.com.br/vela2'}/>
            <VelaLink refName={"Investir"} href={'https://velabikes.com.br/vela2'}/>
        </Flex>
    )
}

function Logo(){
    return(
        <Flex h="56px" width="48px" justify="center" align="center"><Image src="/logo.svg" height={32} width={32}/></Flex>
    )
}

export default NavBar