import React, { Component, Fragment } from 'react';

/*Handles accessibility aspects of creating a form field*/
export class FormField extends Component
{
  /*Expects the following fields in props: name, label, children*/
  render()
  {
    const elementName = this.props.name,
          insertProps = c => React.cloneElement( c,
                        { name: elementName, id: elementName } ),
          children = React.Children.map( this.props.children, insertProps );
    return ( <Fragment>
             <label htmlFor={elementName}>
              {this.props.label}
             </label>
             {children}
            </Fragment> );
  }
}

/*A form with data that will either create or update data in our database*/
class CreateUpdateForm extends Component
{
  //Appropriately space children vertically
  spaceChildren()
  {
    return React.Children.map( this.props.children, c => <p>{c}</p> );
  }
  render()
  {
    return (
        <form method="post">
          {this.spaceChildren()}
        </form>
      );
  }
}

export default CreateUpdateForm;
