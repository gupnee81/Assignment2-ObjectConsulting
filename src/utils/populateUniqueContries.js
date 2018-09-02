import applicationData from '../json/celebrityData.json';

export const populateUniqueContries = () => {
    const uniqueCountries = [...new Set( applicationData['celebrityList'].map(obj => obj.country)) ];
    uniqueCountries.splice(0, 0, 'Show All');
    return uniqueCountries.map(value => ({'value': value, 'text': value}));
};

