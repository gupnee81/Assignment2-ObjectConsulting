import styled from 'styled-components';

const CelebrityListContainer = styled.div`
    border: 1px solid #E1E7E5;
    width: 80%;
    margin: 20px auto;

`;

const CelebrityListBox = styled(CelebrityListContainer)`
    width: 95%;
`;

const CelebrityListRankBox = styled.div`
    background-color: #236186;
    color: #fff;
    text-align: center;
    padding: 15px 0px;
`;

const CelebrityListInfoBox = styled(CelebrityListRankBox)`
    background-color: #fdfdfd;
    padding: 10px 0px;
    color: #423F3F;
`;
const Bold = styled.span`
    font-weight: bold;
`;


export default {
    CelebrityListContainer,
    CelebrityListBox,
    CelebrityListRankBox,
    CelebrityListInfoBox,
    Bold,
}

