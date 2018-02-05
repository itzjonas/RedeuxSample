import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    activateMe,
    closeMe,
} from './actions';

export class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-1">{this.props.me.title || 'Hello World!'}</h1>

                {this.props.me.title ? (
                    <button type="button" class="btn btn-light" onClick={this.props.closeMe}>Exit</button>
                ) : (
                    <button type="button" class="btn btn-dark" onClick={() => this.props.activateMe({ title: 'I clicked it!' })}>Click Me!</button>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    me: state.me,
});

const mapDispatchToProps = {
    activateMe,
    closeMe,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
