import { bgContainer, Logo, Button, TextField, Avatar, overlay, col } from "../../base.styles"
import { useEffect, useState } from "react";
import { IService } from "../../../domain/types";
import { cardDetailsContainer, cardDetailsInfo, cardDetailsStatus, cardDetailsTitle, cardItemBgImg } from "./card.styles";

interface ICardDetailsProps {
    service: IService
    closeDetails: () => void
}

const CardDetails: React.FC<ICardDetailsProps> = ({ service, closeDetails }: ICardDetailsProps) => {

    const [cardDetails, setCardDetails] = useState<IService>(service)

    useEffect(() => {
        console.log('entrou')
    }, [])

    const onCloseDetails = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        console.log("clicou fora")
        closeDetails()
    }

    return (
        <div className={overlay().className} onClick={e => onCloseDetails(e)}>
            <div className={cardDetailsContainer().className}>
                <div className={col().className}>
                    <div className={cardDetailsTitle().className}>{cardDetails.title}<span className={cardDetailsStatus().className}>ABERTO</span></div>
                    <div className={cardDetailsInfo().className}>
                        <label>Endereço</label>
                        <span>Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;