import React from 'react';
import CelebrityListStyles from '../../styles/CelebrityListStyles';


class CelebrityList extends React.Component {

  render() {
    const val = this.props.celebrityData[`${this.props.currentCurreny}`];
   
    return (
      <CelebrityListStyles.CelebrityListContainer>
          {
            this.props.celebrityList && this.props.celebrityList.map(list =>
            <CelebrityListStyles.CelebrityListBox key={list.rank}>
              <CelebrityListStyles.CelebrityListRankBox>
                <CelebrityListStyles.Bold>No: </CelebrityListStyles.Bold>
                {list.rank}
              </CelebrityListStyles.CelebrityListRankBox>
              <CelebrityListStyles.CelebrityListInfoBox>
                  <CelebrityListStyles.Bold>Name: </CelebrityListStyles.Bold>
                  {list.name}
              </CelebrityListStyles.CelebrityListInfoBox>
              <CelebrityListStyles.CelebrityListInfoBox>
                <CelebrityListStyles.Bold>Net Worth:  </CelebrityListStyles.Bold>
                {list.netWorth * val}
              </CelebrityListStyles.CelebrityListInfoBox>
              <CelebrityListStyles.CelebrityListInfoBox>
                <CelebrityListStyles.Bold>Age:  </CelebrityListStyles.Bold>
                {list.age}
              </CelebrityListStyles.CelebrityListInfoBox>
              <CelebrityListStyles.CelebrityListInfoBox>
                <CelebrityListStyles.Bold>Country:  </CelebrityListStyles.Bold>
                {list.country}
              </CelebrityListStyles.CelebrityListInfoBox>
            </CelebrityListStyles.CelebrityListBox>
            )
          }
      </CelebrityListStyles.CelebrityListContainer>
    );
  }
}



export default CelebrityList;