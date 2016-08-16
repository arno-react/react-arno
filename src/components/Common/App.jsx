import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

export default class App extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
            );
    }
}
