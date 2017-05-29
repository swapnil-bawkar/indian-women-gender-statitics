import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './search.component.css';

export const SearchComponent = (props) => {
    const ageMenus = props.presentAges.map((age, index) => {
        return <MenuItem value={age} primaryText={age} key={index}/>
    });
    const keyDown = function(event) {
        if(event.keyCode === 13) {
            props.onSearchClick();
        }
    };
    return (
        <Card style={{ 'margin': '8px', 'display': 'flex', 'flex': '1 0 auto', 'flexDirection': 'column' }} className="card-wrapper">
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'flex': '1 1 auto' }}>
                <CardText style={{ 'display': 'flex', 'flex': '1 1 auto' }}>
                    <TextField hintText="District Name" style={{ 'flex': '1 1 80%', 'width': 'auto' }}
                        onChange={props.onTextChange} value={props.districtName} onKeyDown={keyDown}/>
                </CardText>
                <CardActions>
                    <RaisedButton style={{ 'minWidth': '50px' }} onClick={props.onSearchClick} onTouchTap={props.onSearchClick}
                        icon={<ActionSearch />}
                        primary={true}
                    />
                </CardActions>
            </div>
            <div style={{ 'padding': '0 16px' }}>
                <SelectField
                    floatingLabelText="Age"
                    value={props.age}
                    onChange={props.onAgeChange}
                >
                   {ageMenus}
                </SelectField>
            </div>
        </Card>
    );
}