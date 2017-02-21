import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class WeatherList extends Component {
	/*
	renderList() {
		var i = 0;
        return this.props.weather.map((val) => {
            return (
                <li key={i++}>
                    {val}
                </li>
            );
        });
    }
	*/
    render() {
        return (
            <h2>
                {this.props.weather.cod} {console.log(this.props.weather)}
            </h2>
        );
    }
}

function mapStateToProps(state){
	return{
		weather: state.weather
	};
}

export default connect(mapStateToProps)(WeatherList);