var React = require('react');

var ColorSelect = React.createClass({
		propTypes: {
	        url: React.PropTypes.string.isRequired
	    },
	    getInitialState: function() {
	        return {
	        	colorPatterns: {},
	            options: []
	        }
	    },
	    componentDidMount: function() {
	        $.ajax({
	            url: this.props.url,
	            success: this.successHandler
	        })
	    },
	    successHandler: function(data) {
	    	var options = [];
	        $.each(data.colors, function(i, val) {
	            options.push(
	                <option key={i} value={i}>{i}</option>
	            );
			});
            this.setState({
            	colorPatterns: data.colors,
            	options: options
            });
	    },
	    onColorChange: function() {
	    	var colorPatternName = this.refs.colorselect.getDOMNode().value;
	    	pattern = this.state.colorPatterns[colorPatternName];
	    	this.props.updateColorPattern(pattern);

	    },
        render: function() {
	        return (
	            <select ref="colorselect" onChange={this.onColorChange} >{this.state.options}</select>
	        )
	    }
});

module.exports = ColorSelect;