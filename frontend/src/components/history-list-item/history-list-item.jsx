import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledText from "../../styled-components/styled-text/styled-text";
import StyledLi from "../../styled-components/styled-li/styled-li";

const HistoryListItem = ({historyItem}) => {
    const {date, moneyAmount, timeLeft} = historyItem;

    return (
        <StyledLi>
            <StyledWrapper isFlex justifyContent={"space-between"}>
                <StyledText>{date}</StyledText>
                <StyledText>{moneyAmount}</StyledText>
                <StyledText>{timeLeft}</StyledText>
            </StyledWrapper>
        </StyledLi>
    );
};

export default HistoryListItem;