
var StarsFrame = React.createClass({
  render: function() {
    var numberOfStars = Math.floor( Math.random( ) * 9 ) + 1;

    var stars = [];
    for (var i =0; i < numberOfStars; i++){
      stars.push( 
          <span className="glyphicon glyphicon-star"></span> 
        )
    }
    return (
      <div id="stars-frame">
        <div className="well">
          { stars }
        </div>
      </div>
    )
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg">=</button>
      </div>
    )
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div id="answer-frame">
        <div className="well">
          ....
        </div>
      </div>
    )
  }
});

var Game = React.createClass({
  
  // getInitialState: function() {
  //   return { logins: ['zpao', 'fisherwebdev' ] };
  // },

  // addCard: function( loginToAdd ) {
  //   this.setState( { logins: this.state.logins.concat(loginToAdd) });
  // },

  render: function() {
   
    return (
      <div>
        <hr/>
        <h2>Play nine</h2>
        <div className="clearfix">
          <StarsFrame/>
          <ButtonFrame/>
          <AnswerFrame/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById("container")
);