
var StarsFrame = React.createClass({
  render: function() {

    var stars = [];
    for (var i =0; i < this.props.numberOfStars; i++){
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

    var disabled = (this.props.selectedNumbers.length === 0),
            correct = this.props.correct,
            button;

    switch( correct ){
      case true:
        button = (
          <button className="btn btn-success btn-lg" onClick={this.props.acceptAnswer}>
            <span className="glyphicon glyphicon-ok"></span> 
          </button>
        );
        break;
      case false:
        button = (
          <button className="btn btn-danger btn-lg">
            <span className="glyphicon glyphicon-remove"></span> 
          </button>
        );
        break;
      default:
          button = (
            <button className="btn btn-primary btn-lg" disabled={disabled} onClick={this.props.checkAnswer}>
              =
            </button>
          );
    }

    return (
      <div id="button-frame"> {button } </div>
    )
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map( function(i){ 
      return (
        <span onClick={ props.unselectNumber.bind(null, i) }> {i} </span>
        // <span> {i} </span>
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

    var numbers = [], className,
            selectNumber = this.props.selectNumber,
            selectedNumbers = this.props.selectedNumbers,
            usedNumbers = this.props.usedNumbers;

    for (var i =1; i <= 9; i++){
      className = "numbers selected-" + ( selectedNumbers.indexOf(i) >= 0 )
      className += " used-" + ( usedNumbers.indexOf(i) >= 0 )
      numbers.push( 
          <div className={className} onClick={ selectNumber.bind(null, i)} >{ i }</div>
        );
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
      numberOfStars: Math.floor( Math.random( ) * 9 ) + 1,
      selectedNumbers: [ ],
      usedNumbers: [ ],
      correct: null
    };
  },

  unselectNumber: function( clickedNumber ) {
    var numberIndex = this.state.selectedNumbers.indexOf( clickedNumber );
    this.state.selectedNumbers.splice( numberIndex, 1);
    this.setState( {
      selectedNumbers: this.state.selectedNumbers ,
      correct: null

    });
  },  

  selectNumber: function( clickedNumber ) {
    if ( this.state.selectedNumbers.indexOf(clickedNumber) < 0 ) {
      this.setState(
        {
          selectedNumbers: this.state.selectedNumbers.concat( clickedNumber ),
          correct: null
        }
      )
    }
  },  

  sumOfSelectedNumbers: function(){
    return this.state.selectedNumbers.reduce( function(p, n){
      return p+n;
    }, 0);
  },

  checkAnswer: function(){
    var correct = (this.state.numberOfStars === this.sumOfSelectedNumbers() );
    this.setState({ correct: correct });
  },

  acceptAnswer: function(){
    var usedNumbers = this.state.usedNumbers.concat( this.state.selectedNumbers );
    this.setState({
      selectedNumbers: [],
      usedNumbers: usedNumbers,
      correct: null,
      numberOfStars: Math.floor( Math.random( ) * 9 ) + 1
    })
  },

  render: function() {
    var selectedNumbers = this.state.selectedNumbers,
            usedNumbers = this.state.usedNumbers,
            numberOfStars = this.state.numberOfStars,
            correct = this.state.correct;

    return (
      <div>
        <hr/>
        <h2>Play nine</h2>
        <div className="clearfix">
          <StarsFrame numberOfStars={numberOfStars}/>
          <ButtonFrame 
            selectedNumbers={selectedNumbers}
            correct={ correct}
            checkAnswer={ this.checkAnswer }
            acceptAnswer={ this.acceptAnswer }
          />
          <AnswerFrame 
            selectedNumbers={ selectedNumbers } 
            unselectNumber={ this.unselectNumber }
          />
        </div>
        <NumbersFrame  
          selectedNumbers={ selectedNumbers } 
          usedNumbers={ usedNumbers } 
          selectNumber={ this.selectNumber }
        />
      </div>
    )
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById("container")
);