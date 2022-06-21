import { bgContainer, Logo, Button, TextField, Avatar } from "../../base.styles"
import { useEffect, useState } from "react";
import { headerStyles } from "./header.styles";

interface IHeaderProps {
    onSearch: (text: string) => void
}

const Header: React.FC<IHeaderProps> = ({ onSearch }: IHeaderProps) => {

    const [textSearch, settextSearch] = useState<string>("")

    useEffect(() => {
        onSearch(textSearch)
    }, [textSearch])



    return (
        <div className={headerStyles().className}>
            <TextField search value={textSearch} onChange={e => settextSearch(e.target.value)} placeholder="Busque por tudo que está ao seu alcance" />
            <Logo size="small" home />
            <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
        </div>
    )
}

export default Header;