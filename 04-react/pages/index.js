'use strict';

console.log(`
4.
---

We require a 'List' component that will receive an array of dates (formated as ISO Dates (Date-Time))
and it has to render those to 'Row' components.

This 'Row' component can be as simple as you want,
but it must display the dates like the following example: '(12/jun/2013)'
and on click must 'alert()' its index in the list.

Also, the 'List' component should receive an optional child as a header.
Remember to validate the props.

The implementation **must focus on performance**.

Take a look at the MyApp component, you should not modify it.

NOTE: You can use ES7+ here and install any library not tied to React.
Example:
- lodash: OK
- react-dates: NOPE
`);

import React from 'react';

export default class MyApp extends React.Component {
    render() {
        const dates = ['2017-02-20T13:33:52.889Z', '2013-06-25T14:31:24.888Z'];

        return ( 
            <div>
                <h1 > 04 - React </h1> 
                <List dates = { dates }/> 
                <hr/>
                <List dates = { dates }>
                <h1> Optional Header </h1> 
                </List > 
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        const { children, dates } = this.props;
        return ( 
            <ul> 
                { children } {
                    dates.map((date, index) => {
                        return <Row date = { date }
                        index = { index }
                        key = { index } />;
                    })
                } 
            </ul>
        );
    }
}

class Row extends React.Component {
    render() {
        const { index, date } = this.props;
        const moment = require('moment')
        const showAlert = () => alert(`This is the date with index ${index}`);
        return <li onClick = { showAlert } className = "item" > { moment(date).format("DD/MMM/YYYY") } </li>;
    }
}