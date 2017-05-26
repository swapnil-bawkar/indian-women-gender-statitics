import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import './search.component.css';

export const SearchComponent = (props) => (
    <Card style={{ 'margin': '8px', 'display': 'flex','flex': '1 1 auto'}} className="card-wrapper">
        <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'flex': '1 1 auto' }}>
            <CardText style={{ 'display': 'flex', 'flex': '1 1 auto' }}>
                <TextField hintText="District Name" style={{ 'flex': '1 1 80%', 'width': 'auto' }} onChange={props.onTextChange}/>
            </CardText>
            <CardActions>
                <RaisedButton style={{'minWidth': '50px'}} onClick={props.onSearchClick} onTouchTap={props.onSearchClick}
                    icon={<ActionSearch />}
                    secondary={true}
                />
            </CardActions>
        </div>
    </Card>
);