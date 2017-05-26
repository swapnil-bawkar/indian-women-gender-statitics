let data = [];
export class DataStore {
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
}