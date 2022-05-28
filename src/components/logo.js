import React from "react";

const Logo = ({ src, alt}) => {
    return <a href="/">
        <img src={src} alt={alt} />
    </a>
}

export default Logo;