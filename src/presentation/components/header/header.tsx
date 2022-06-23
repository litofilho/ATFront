import { Logo, TextField, Avatar } from "../../base.styles"
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
        <div className={headerStyles().className} role="header">
            <TextField role="search" aria-label="search" search title="Busque por tudo que está ao seu alcance" value={textSearch} onChange={e => settextSearch(e.target.value)} placeholder="Busque por tudo que está ao seu alcance" />
            <Logo size="small" aria-label="Eventaum. logo pequena" home />
            <Avatar alt="avatar" src="https://www.w3schools.com/howto/img_avatar.png" />
        </div>
    )
}

export default Header;