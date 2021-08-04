import React from "react";
import "../../styles/Header.css";

interface HeaderProps {
    title: any;
    subtitle: any;
    banner:any
}
const Header: React.FC<HeaderProps> = (props: any): JSX.Element => {
    return (
        <>
            <div className="header-container">
                <h2>{props.title}</h2>
            </div>
            <div className="sub-header-background">
                <div className="sub-header">
                    <div className="header-subtitle">{props.subtitle}</div>
                    <div className="banner">{props.banner}</div>
                </div>
            </div>
        </>
    );
};

export default Header;
