var NewPerson= React.createClass({
  handleClick() {
    var name    = this.refs.name.value;
    var company = this.refs.company.value;
    var email = this.refs.email.value;
    var phone = this.refs.phone.value;
    var photo = this.refs.photo.value;
    if(name != '' && company != '' && email !='' && phone != ''){
      $.ajax({
        url: '/api/v1/persons',
        type: 'POST',
        data: { person: { name: name, company: company, email: email, phone: phone, photo: photo}},
        success: (person) => {
          this.props.handleSubmit(person);
        }
      });
    } else{
      console.log("ERRO");
    }
  },
  render() {
    return (
      <div className="form">
        <h1>Add new person</h1>
        <input type="text" ref='name' placeholder="Name"/>
        <input type="text" ref='company' placeholder="Company"/><br/>
        <input type="text" ref='email' placeholder="Email"/>
        <input type="text" ref='phone' placeholder="Phone"/><br/>
        <input type="text" ref='photo' placeholder="Photo"/>
        <button onClick={this.handleClick} className="button">Submit</button>
      </div>
    )
  }
});
