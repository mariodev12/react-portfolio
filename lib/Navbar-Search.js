var React = require('react');

var NavbarSearch = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Brand" src="img/logo.png" width="20"/>
            </a>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavbarSearch;
