import React from 'react';
import Dialog from 'material-ui/Dialog';

export const AboutComponent = (props) => (
    <div>
        <Dialog
            modal={false}
            open={true}
            onRequestClose={props.handleClose}
            autoScrollBodyContent={true}
        >
            <h3>Number of women and ever married women by present age, parity and total children ever born by sex, 2011 - MAHARASHTRA</h3>
            <p>
                Ever married women are persons who have been married at least once in their lives although their current marital status may not be “married”.
            </p>
            <p>
                Get data on women and ever married women by present age, parity and total children ever born by sex.
            </p>
        </Dialog>
    </div>
);