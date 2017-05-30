let data = [];
//let offset = 0;
export class DataStore {

    static districts = [
        'Nandurbar', 'Dhule', 'Jalgaon', 'Buldana', 'Akola', 'Washim', 'Amravati', 'Wardha',
        'Nagpur', 'Bhandara', 'Gondiya', 'Gadchiroli', 'Chandrapur', 'Yavatmal', 'Nanded', 'Hingoli', 
        'Parbhani', 'Jalna', 'Aurangabad', 'Nashik', 'Thane', 'Mumbai', 'Raigarh', 'Pune', 'Ahmadnagar',
        'Bid', 'Latur', 'Osmanabad', 'Solapur', 'Satara', 'Ratnagiri', 'Sindhudurg', 'Kolhapur', 'Sangli'
    ];

    static getData() {
        return data;
    }

    static searchDataByDistrict(district) {
        return fetch(`https://data.gov.in/api/datastore/resource.json?resource_id=ebea8f81-f5b9-46ab-a4ad-55585f37e79f&api-key=81c128b80db710ef41858a6671f44829&filters[AreaName]=District%20-%20${district}`)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                data = json.records;
                return data;
            }).catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    static searchDataByLocation(position) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=true`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                const result = json.results[0].address_components.find(address => {
                    return address.types.indexOf('locality') > -1;
                });
                data = json.results;
                return result ? result.long_name : '';
            });
    }

    /*static fetchDistrictsByState(offset = 0) {
        const urls = [
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=0`,
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=1`,
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=2`,
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=3`,
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=4`,
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=5`,
            `https://data.gov.in/api/datastore/resource.json?resource_id=92e7b0a1-1462-47ba-b8e1-f66784a720b4&api-key=81c128b80db710ef41858a6671f44829&offset=6`
        ];
        const grabContent = url => fetch(url);
            let array = [];
        return Promise.all(urls.map(grabContent)).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(data => {
            data.forEach(json => {
                const arrayDistrict = json.records.map((record) => {
                    return record['DISTRICT NAME'];
                });
                array.push(...arrayDistrict);
            });
            districts = [...Array.from(new Set(array))];
            console.log(districts);
            return districts;
        })
    }*/
    
}