
var StarsFrame = React.createClass({
  render: function() {
    return (
      <div>
        ....
      </div>
    )
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    return (
      <div>
        ....
      </div>
    )
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div>
        ....
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
        <h2>Play nine</h2>
        <StarsFrame/>
      </div>
    )
  }
});


// ReactDOM.render( <Main />, document.getElementById("root") );

ReactDOM.render(
  <div>
    <Game/>
    <StarsFrame/>
    <ButtonFrame/>
    <AnswerFrame/>
  </div>,
  document.getElementById("container")
);