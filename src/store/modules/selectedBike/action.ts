type changeOrder={
    payloadId:number,
    orderId:number
}
export function handleSelectecdBike(id:changeOrder){

    switch (id.orderId){
        case 1:{

            const {payloadId}=id
            return{    
                type:'CHANGE_QUADRO',
                payload:{payloadId}
            }
            break;
            }
         case 2:{
            const {payloadId}=id

            return{
                type:'CHANGE_COLOR',
                payload:{payloadId}
            }
            break;
            }
            case 3:{
                const {payloadId}=id

                return{
                    type:'CHANGE_SIZE',
                    payload:{payloadId}
                }
                break;
                }
        }
    
    
}