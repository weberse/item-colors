var React = require('react');
var ColorSelect = require('./components/ColorSelect');
var ColorStyles = require('./components/ColorSelect');

var Colors = React.createClass({
	    updateColorPattern: function(pattern) {
	        var updatePattern = {};
	        $.each(pattern, function(key, value){
	        	updatePattern['@'+key] = value;
	        });
	        less.modifyVars(updatePattern);
	    },
        render: function () {
            return (
                <div styles={ColorStyles.itemColors} >
                	<ColorSelect
	                    url="config/patterns.json"
	                    updateColorPattern={this.updateColorPattern}
	                />
                </div>
            );
        }
});

module.exports = Colors;