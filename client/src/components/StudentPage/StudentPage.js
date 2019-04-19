import React, { Component, Fragment } from 'react';
import PostForm, {FormField} from './QueryForms'

function eventQuery()
{
  return {  name: 'College Visit',
            time: new Date(),
            infoFields: [ "Please list any dietary needs (allergies etc.).",
                          "Tell us your favorite animal." ]
         };
}

function makeDropdown( optionsList )
{
  return optionsList.map( o => <option value={o.toLowerCase()} key={o.toLowerCase()}>
                                {o}
                              </option> );
}

class StudentPage extends Component
{
  constructor( props )
  {
    super(props);
    this.state = { event: eventQuery() };
  }
  makeOptionalFields()
  {
    const fields = this.state.event.infoFields;
    if (fields.length > 0)
    {
      const textAreaStyle = { width: "80%",
                              height: "100px" },
            fieldTemplate = (field, index) => (
                        <div><FormField name={"moreInfo" + index} label={field}>
                          <textarea style={textAreaStyle} />
                        </FormField></div> ),
            textFields = fields.map( fieldTemplate );

      return ( <Fragment>
                <h3>The following additional details have been requested by this
                event's organizer.</h3>
                {textFields}
               </Fragment> );
    }
    else
      return null;
  }
  render()
  {
    return (
      <div className="StudentPage">
        <h1>Sign up for {this.state.event.name}</h1>
        <PostForm props={this.state.event} title="Student Registration">
        <FormField name="studentname" label="Full Name" id="attendanceform" posturl="attendance">
          <input type="text"/>
        </FormField>
        <FormField name="transportation" label="Transportation Method">
          <select>
            {makeDropdown( ['Paratransport', 'Public', 'Pickup'] )}
          </select>
        </FormField>
        {this.makeOptionalFields()}
        <input type="submit" value="Register"/>
        </PostForm>
      </div>
    );
  }
}

export default StudentPage;
