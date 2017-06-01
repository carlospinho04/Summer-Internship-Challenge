var AllPersons = React.createClass({ 
  render() {
    var persons= this.props.persons.map((person) => {
      return (
        <div key={person.id}>
          <table>
            <tbody>
              <tr>
                <td> {person.name}</td>
                <td>
                  <img src={person.photo} alt="Photo"  width="42" height="42"/>
                </td>

              </tr>
              <tr>
                <td>{person.company}</td>
              </tr>
              <tr>
                <td>  
                  <a href="mailto:{person.email}" target="_top">{person.email}</a> 
                </td>
              </tr>
              <tr>
                <td>{person.phone}</td>
              </tr>
            </tbody>
          </table>   
        </div>
      )
    });
    return(
      <div>
        {persons}
      </div>
    )
  }
});
