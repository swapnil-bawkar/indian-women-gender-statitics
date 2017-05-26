import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { TableDataComponent } from './table-data.component';

export class DistrictDataComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded,
        };
    }
    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        const title = `${this.props.PresentAge} : ${this.props.TotalRuralUrban}`;
        return (
            <Card style={{ 'margin': '0 8px' }} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardTitle title={this.props.TotalRuralUrban} subtitle={this.props.AreaName} expandable={true} />
                <CardText expandable={true}>
                    <TableDataComponent {...this.props}></TableDataComponent>
                </CardText>
            </Card>
        );
    }
}