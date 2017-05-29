import React from 'react';
import { DistrictDataComponent } from './district-data.component';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';

export const DistrictListComponent = (props) => {
    let districtEl = null;
    if (props.districts.length > 0) {
        districtEl = props.districts.map((district, index) => <DistrictDataComponent {...district} key={district.id} expanded={index === 0}></DistrictDataComponent>);
    } else {
        districtEl =
            <Card style={{ 'margin': '0 8px' }}>
                <CardHeader
                    title={props.districtText}
                />
                <CardTitle title='Data not found!' />
            </Card>;
    }

    return (<div>{districtEl}</div>);
}