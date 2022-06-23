import { overlay, col, row } from "../../base.styles"
import { useState } from "react";
import { IService } from "../../../domain/types";
import { cardDetailsContainer, cardDetailsInfo, cardDetailsStatus, cardDetailsTitle, cardItemBgImg } from "./card.styles";


interface ICardDetailsProps {
    service: IService
    closeDetails: () => void
}

const CardDetails: React.FC<ICardDetailsProps> = ({ service, closeDetails }: ICardDetailsProps) => {

    const [cardDetails] = useState<IService>(service)

    const onCloseDetails = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        closeDetails()
    }

    return (
        <div className={overlay().className} onClick={e => onCloseDetails(e)}>
            <div className={cardDetailsContainer().className}>
                <div className={row().className}>
                    <div className={col().className}>
                        <div className={cardDetailsTitle().className}>{cardDetails.title}<span className={cardDetailsStatus().className}>{cardDetails.type}</span></div>
                    </div>
                </div>
                <div className={row().className}>
                    <div className={col().className}>
                        <div className={cardDetailsInfo().className}>
                            <label>Endereço</label>
                            <span>{cardDetails.address}</span>
                        </div>
                        <div className={cardDetailsInfo().className}>
                            <label>Horário</label>
                            <span>{cardDetails.time}</span>
                        </div>
                    </div>
                    <div className={col().className}>
                        <div className={cardDetailsInfo().className}>
                            <label>Entrada</label>
                            <span>{cardDetails.ticket}</span>
                        </div>
                        {
                            cardDetails.classification &&
                            <div className={cardDetailsInfo().className}>
                                <label>Classificação Indicativa</label>
                                <span>{cardDetails.classification}</span>
                            </div>
                        }
                    </div>
                </div>
                <div className={row().className}>
                    <div className={col().className}>
                        <div className={cardDetailsInfo().className}>
                            <label>Resumo</label>
                            <span>{cardDetails.description}</span>
                        </div>
                    </div>
                </div>
                <div className={row().className}>
                    <div className={col().className}>
                        <div dangerouslySetInnerHTML={{ __html: cardDetails.location }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;