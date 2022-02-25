import { Flex,Image } from "@chakra-ui/react"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VelaContext from "../../Context/vela2context";
import { IState } from "../../store";
import { IBikeState } from "../../store/modules/selectedBike/type";

type BikePhoto={
    bpURL:[
        {payload:[{}]}
    ]
}

const api = axios.create({
    baseURL: "http://localhost:3333/",
});
function MonteASUA(){
    const [bikePhotos,setBikePhotos]=useState<BikePhoto>()
    
    const bike=useSelector<IState, IBikeState>(state=>state.bike)

    useEffect(() => {
        api
        .get<BikePhoto>("/bikePhoto")
        .then((response) => setBikePhotos(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    const imageIndex=bike.colorId
    console.log(imageIndex)
    const sizeIndex=bike.sizeId
    console.log(bikePhotos)
    const teste=bikePhotos?.bpURL[0].payload[0]
return(
    <Flex align="center" justify="center" w="100%" bg="#EFEFEF" pt="16px">
        <Image objectFit="cover" alt="bike daohora" maxH="825px" src={`${teste}`}/>
    </Flex>
)
}
export default MonteASUA