import React from "react";
import Card from "./Card";

function CardList({robots}){
    const cardComponent = robots.map((robot, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })

    return(
        <>
           {cardComponent}
        </>
    );
}

export default CardList;