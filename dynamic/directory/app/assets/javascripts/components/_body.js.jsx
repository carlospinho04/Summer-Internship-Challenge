var Body = React.createClass({
  getInitialState() {
    return {persons: []  }  
  },

  componentDidMount() {
    $.getJSON('/api/v1/persons.json', (response) => { this.setState({ persons: response  })  });
    console.log('Component mounted');
  },

  handleSubmit(person) {
    var newState = this.state.persons.concat(person);
    this.setState({ persons: newState });
  },
  handleSubmit1() {
    console.log("yolo");
  },
  render() {
    return (
      <div>
        <div className="tables">
          <AllPersons persons={this.state.persons} handleSubmit1={this.handleSubmit1}/>
        </div>
        <NewPerson handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
});
