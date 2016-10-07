
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
    var selectedNumbers = this.props.selectedNumbers.map( function(i){ 
      return (
        <span>{i}</span>
      )
    });

    return (
      <div id="answer-frame">
        <div className="well">
          { selectedNumbers }
        </div>
      </div>
    )
  }
});

var NumbersFrame = React.createClass({
  render: function() {

    var numbers = [], className;
    for (var i =1; i <= 9; i++){
      className = "numbers selected-" + ( this.props.selectedNumbers.indexOf(i) >= 0 )
      numbers.push( 
          <div className={className}>{ i }</div>
        )
    }

    return (
      <div id="numbers-frame">
        <div className="well">
          { numbers }
        </div>
      </div>
    )
  }
});


var Game = React.createClass({

  getInitialState: function() {
    return { 
      selectedNumbers: [ 3, 6]
    };
  },

  render: function() {
    return (
      <div>
        <hr/>
        <h2>Play nine</h2>
        <div className="clearfix">
          <StarsFrame/>
          <ButtonFrame/>
          <AnswerFrame selectedNumbers={ this.state.selectedNumbers } />
        </div>
        <NumbersFrame  selectedNumbers={ this.state.selectedNumbers } />
      </div>
    )
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById("container")
);