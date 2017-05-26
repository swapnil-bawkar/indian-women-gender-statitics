import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export const TableDataComponent = (props) => (
    <Table>
        <TableBody displayRowCheckbox={false} >
            <TableRow>
                <TableRowColumn>Total Children Ever Born Female</TableRowColumn>
                <TableRowColumn>{props.TotalChildrenEverBornFemale}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Total Children Ever Born Male</TableRowColumn>
                <TableRowColumn>{props.TotalChildrenEverBornMale}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Total Children Ever Born Persons</TableRowColumn>
                <TableRowColumn>{props.TotalChildrenEverBornPersons}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Total Ever Married Women</TableRowColumn>
                <TableRowColumn>{props.TotalEverMarriedWomen}</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Total Women</TableRowColumn>
                <TableRowColumn>{props.TotalWomen}</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);