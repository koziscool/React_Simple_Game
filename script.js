

// var Main = React.createClass({
  
//   getInitialState: function() {
//     return { logins: ['zpao', 'fisherwebdev' ] };
//   },

//   addCard: function( loginToAdd ) {
//     this.setState( { logins: this.state.logins.concat(loginToAdd) });
//   },

//   render: function() {
//     var cards = this.state.logins.map( function(login){
//       return <Card login={login} />
//     });

//     return (
//       <div>
//       <Form addCard={this.addCard} />
//         { cards }
//       </div>
//     )
//   }
// });


// ReactDOM.render( <Main />, document.getElementById("root") );

ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById("container")
);