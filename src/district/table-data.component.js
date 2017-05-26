import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const ProperyStyle = {
    'whiteSpace': 'normal'
};
const ValueStyle = {
    'textAlign': 'center'
};

export const TableDataComponent = (props) => (
    <Table>
        <TableBody displayRowCheckbox={false} >
            <TableRow>
                <TableRowColumn style={ProperyStyle}>Total Children Ever Born Female</TableRowColumn>
                <TableRowColumn style={ValueStyle}>{parseInt(props.TotalChildrenEverBornFemale, 10).toLocaleString()}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn style={ProperyStyle}>Total Children Ever Born Male</TableRowColumn>
                <TableRowColumn style={ValueStyle}>{parseInt(props.TotalChildrenEverBornMale, 10).toLocaleString()}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn style={ProperyStyle}>Total Children Ever Born Persons</TableRowColumn>
                <TableRowColumn style={ValueStyle}>{parseInt(props.TotalChildrenEverBornPersons, 10).toLocaleString()}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn style={ProperyStyle}>Total Ever Married Women</TableRowColumn>
                <TableRowColumn style={ValueStyle}>{parseInt(props.TotalEverMarriedWomen, 10).toLocaleString()}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn style={ProperyStyle}>Total Women</TableRowColumn>
                <TableRowColumn style={ValueStyle}>{parseInt(props.TotalWomen, 10).toLocaleString()}</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);