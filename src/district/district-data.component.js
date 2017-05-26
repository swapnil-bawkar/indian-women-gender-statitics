import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export class DistrictDataComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }
    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        const title = `Present Age - ${this.props.PresentAge}`;
        return (
            <Card style={{ 'margin': '0 8px' }} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardTitle title={this.props.AreaName} subtitle="Area Name" expandable={true} />
                <CardText expandable={true}>
                    <Table>
                        <TableBody displayRowCheckbox={false} >
                            <TableRow>
                                <TableRowColumn>Total Children Ever Born Female</TableRowColumn>
                                <TableRowColumn>{this.props.TotalChildrenEverBornFemale}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Total Children Ever Born Male</TableRowColumn>
                                <TableRowColumn>{this.props.TotalChildrenEverBornMale}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Total Children Ever Born Persons</TableRowColumn>
                                <TableRowColumn>{this.props.TotalChildrenEverBornPersons}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Total Ever Married Women</TableRowColumn>
                                <TableRowColumn>{this.props.TotalEverMarriedWomen}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Total Women</TableRowColumn>
                                <TableRowColumn>{this.props.TotalWomen}</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
        );
    }
}