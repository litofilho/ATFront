import { bgContainer, Logo, Button, TextField, Avatar } from "../../base.styles"
import { useEffect, useState } from "react";
import { IService } from "../../../domain/types";
import { cardContainer, cardData } from "./card.styles";

interface ICardProps {
    services: IService[]
}

const Header: React.FC<ICardProps> = ({ services }: ICardProps) => {

    const [cardItems, setCardItems] = useState<IService[]>(services)

    return (
        <div className={cardContainer().className}>
            <span className={cardData().className}>Quarta-Feira - 31/02</span>
            {
                cardItems && cardItems.length > 0 && cardItems.map(item => <></>)
            }
        </div>
    )
}

export default Header;