import React from 'react';
import {orderBy, filter} from 'lodash';
import applicationData from '../json/celebrityData.json';
import CelebrityList from './celebrity/CelebrityList';
import FilterPanel from './celebrity/FilterPanel';
import PageStyle from '../styles/MainStyles';
import Title from './appTitle';
import {DefaultCurrencyConverter, DefaultRank, DefaultBirthPlace, DefaultSearchText} from '../constants';



class CelebrityDashboard extends React.Component {

  state = {
    applicationDetails: {
      celebrityList: applicationData.celebrityList,
      currentCurreny: DefaultCurrencyConverter,
      currenttRank: DefaultRank,
      currentBirthPlace: DefaultBirthPlace,
      currentSearchText: DefaultSearchText,
    },
  }

  updateCurrencyState = (event) => {
    const val = event.target.value;
    let copyOfApplicationDetails = this.state.applicationDetails;
    copyOfApplicationDetails.currentCurreny = val;
    this.setState({
      applicationDetails:copyOfApplicationDetails
    });
  }

  sortingData = (event) => {
    const val = event.target.value;
    let copyOfApplicationDetails = this.state.applicationDetails;
    let celebrityList = this.state.applicationDetails.celebrityList;
    celebrityList = orderBy(celebrityList, [`${val}`],['asc']);
    copyOfApplicationDetails.celebrityList = celebrityList;
    copyOfApplicationDetails.currenttRank = val;
    this.setState({
      applicationDetails:copyOfApplicationDetails
    });

  }

  filterByBirthPlace = (event) => {
    const val = event.target.value;
    let copyOfApplicationDetails = this.state.applicationDetails;
    copyOfApplicationDetails.currentBirthPlace = val;
    this.setState({
      applicationDetails:copyOfApplicationDetails
    });
    
    this.updateCelebrityListViaPlace();
  }

  updateCelebrityListViaPlace = () => {
    let copyOfApplicationDetails = this.state.applicationDetails;
    let celebrityList = applicationData['celebrityList'];
    
    if(this.state.applicationDetails.currentBirthPlace !== 'Show All') {
      celebrityList = filter(celebrityList, { 'country': `${this.state.applicationDetails.currentBirthPlace}`});
    }

    if(this.state.applicationDetails.currentBirthPlace === 'Show All') {
      celebrityList = applicationData['celebrityList'];
    }
    

    // If Search box has text in it. Filter data via updateCelebrityListViaText
    if(this.state.applicationDetails.currentSearchText.length > 0) {
      celebrityList = this.updateCelebrityListViaText(celebrityList, this.state.applicationDetails.currentSearchText);
    }

    copyOfApplicationDetails.celebrityList = celebrityList;
    
    this.setState({
      applicationDetails:copyOfApplicationDetails
    });
  }

  updateCelebrityListViaText = (celebrityList, val) => {
    let newList = [];
     for(let i = 0; i<celebrityList.length; i++) {
       const list = celebrityList[i];
       if((`${list.rank}`.indexOf(val) > -1) ||
       (`${list.name}`.toLowerCase().indexOf(val) > -1) ||
       (`${list.netWorth}`.indexOf(val) > -1) ||
       (`${list.age}`.indexOf(val) > -1) ||
       (`${list.country}`.toLowerCase().indexOf(val) > -1)) {
          newList.push(list);
       }
    }

    return newList;
  }


  filterByText = (event) => {
    const val = event.target.value.toLowerCase();

    let copyOfApplicationDetails = this.state.applicationDetails;
    copyOfApplicationDetails.currentSearchText = val;
    this.setState({
      applicationDetails:copyOfApplicationDetails
    });

    let celebrityList;
    // If Birth place has county selected // get data from updateCelebrityListViaPlace // Else use whole data blob
    if(this.state.applicationDetails.currentBirthPlace !== 'Show All') {
      this.updateCelebrityListViaPlace();
      celebrityList = this.state.applicationDetails.celebrityList;
    }
    if(this.state.applicationDetails.currentBirthPlace === 'Show All') {
      celebrityList = applicationData['celebrityList'];
    }

    celebrityList = this.updateCelebrityListViaText(celebrityList, this.state.applicationDetails.currentSearchText);
    
    copyOfApplicationDetails.celebrityList = celebrityList;
    this.setState({
      applicationDetails:copyOfApplicationDetails
    });

   } 

  render() {
    // console.log(this.state.applicationDetails);
    return (
      <PageStyle.PageBody>
          <Title />
          <main>
            <PageStyle.MainDiv>
              <section>
                <FilterPanel
                  applicationData={this.state.applicationDetails}
                  updateCurrencyState={this.updateCurrencyState}
                  filterByBirthPlace={this.filterByBirthPlace}
                  sortingData={this.sortingData}
                  filterByText={this.filterByText}
                />
              </section>
              <section>
                <CelebrityList 
                  celebrityList={this.state.applicationDetails.celebrityList} 
                  celebrityData={applicationData} 
                  currentCurreny={this.state.applicationDetails.currentCurreny} />
              </section>
            </PageStyle.MainDiv>
          </main>
      </PageStyle.PageBody>
    );
  }
}



export default CelebrityDashboard;