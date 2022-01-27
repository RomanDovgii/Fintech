import React from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledHeading1 from "../../styled-components/styled-heading-1/styled-heading-1";
import HistoryListItem from "../../components/history-list-item/history-list-item";

const History = () => {

    // TODO: когда будет апи передавать настоящие данные
    const apiData = [
        {date: '12.12.2021', moneyAmount: 123, timeLeft: '24ч:56м:13с'},
        {date: '12.12.2021', moneyAmount: 123, timeLeft: '24ч:56м:13с'},
        {date: '12.12.2021', moneyAmount: 123, timeLeft: '24ч:56м:13с'},
        {date: '12.12.2021', moneyAmount: 123, timeLeft: '24ч:56м:13с'}
    ];

    const  historyList = apiData.map((item) => {
        return (
            <HistoryListItem historyItem={item}/>
        )
    })

    return (
        <React.Fragment>
            <StyledWrapper>
                <StyledHeading1 style={{marginTop: "15px"}}>История взаимодействия:</StyledHeading1>
                <ul>
                    {historyList}
                </ul>
            </StyledWrapper>
        </React.Fragment>
    );
}

export default History;