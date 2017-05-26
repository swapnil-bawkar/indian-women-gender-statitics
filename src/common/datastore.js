let data = [];
export class DataStore {

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
            const result = json.results.find(address => {
              return address.types.indexOf('administrative_area_level_2') > -1;
            });
            data = json.results;
            return result.address_components[0].long_name;
          });
    }
}