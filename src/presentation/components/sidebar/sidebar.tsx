import { bgContainer, Logo, Button, TextField, Avatar } from "../../base.styles"
import { useEffect, useState } from "react";
import { IService } from "../../../domain/types";
import { cardContainer, cardDate } from "./card.styles";
import CardItem from "./cardItem";

interface ICardProps {
    services: IService[]
}

const CardList: React.FC<ICardProps> = ({ services }: ICardProps) => {

    const [cardItems, setCardItems] = useState<IService[]>(services)

    return (
        <div className={cardContainer().className}>
            <span className={cardDate().className}>Quarta-Feira - 31/02</span>
            {
                cardItems && cardItems.length > 0 && cardItems.map(item => <CardItem service={item} />)
            }
        </div>
    )
}

export default CardList;