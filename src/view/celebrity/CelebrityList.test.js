import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CelebrityList from './CelebrityList';

describe('CelebrityList component', () => {

    const testSetup = () => {
        const props = {
            celebrityList: [
                {
                  rank: 1,
                  name: 'John Walton Rupert',
                  netWorth: 21000000000,
                  age: '68',
                  country: 'United States'
                },
                {
                  rank: 2,
                  name: 'Rupert Murdoch',
                  netWorth: 14000000000,
                  age: '84',
                  country: 'Australia'
                },
                {
                  rank: 3,
                  name: 'Donald Ruperth',
                  netWorth: 8400000000,
                  age: '85',
                  country: 'United States'
                }
            ],
            celebrityData: {
                australianDollarValue: '0.78'
            },
            currentCurreny: 'australianDollarValue'
        }

        const shallowWrapper = shallow(
            <CelebrityList props={props} />
        );
    }


    it('CelebrityList should render correctly', () => {
        const {shallowWrapper} = testSetup();
        expect(toJson(shallowWrapper)).toMatchSnapshot();
    });
})