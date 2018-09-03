import React from 'react';
import FilterPageStyles from '../../styles/FilterPanelStyles';
import DropDownComponent from '../../components/DropDownComponent';
import InputComponent from '../../components/InputComponent';
import {currencyConverterList, orderByList} from '../../constants';
import {populateUniqueContries} from '../../utils/populateUniqueContries';
import FilterPanelStyles from '../../styles/FilterPanelStyles';


class FilterPanel extends React.Component {
  
  render() {
    return (
      <FilterPageStyles.FilterPanelContainer>
        <FilterPageStyles.Row>
          <FilterPanelStyles.Col50>
            <DropDownComponent 
              id='birthPlace'
              name='filter'
              text='Birthplace'
              displayElements={populateUniqueContries()}
              defaultValue={this.props.applicationData.currentBirthPlace}
              handleChange={this.props.filterByBirthPlace}
            />
          </FilterPanelStyles.Col50>
          <FilterPanelStyles.Col50>
            <DropDownComponent 
              id='currentCunvertor'
              name='currentCunvertor'
              text='Current Converter'
              displayElements={currencyConverterList}
              defaultValue={this.props.applicationData.currentCurreny}
              handleChange={this.props.updateCurrencyState}
            />
          </FilterPanelStyles.Col50>
        </FilterPageStyles.Row>
        <FilterPageStyles.Row>
          <FilterPanelStyles.Col50>
            <InputComponent 
              id='search'
              name='search'
              text='Search'
              handleChange={this.props.filterByText}
            />
          </FilterPanelStyles.Col50>
          <FilterPanelStyles.Col50>
            <DropDownComponent 
              id='orderBy'
              name='sort'
              text='Order By'
              displayElements={orderByList}
              defaultValue={this.props.applicationData.currenttRank}
              handleChange={this.props.sortingData}
            />
          </FilterPanelStyles.Col50>
        </FilterPageStyles.Row>
      </FilterPageStyles.FilterPanelContainer>
    );
  }
}



export default FilterPanel;
