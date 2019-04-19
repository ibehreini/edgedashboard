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

/*A form with data that will be sent to the server using POST
* Expects the following props:
 - posturl: the last part of a server api call to post to
 - id*/
class PostForm extends Component
{
  constructor( props )
  {
    super( props )
    this.post = this.post.bind( this )
  }
  post( event )
  {
    event.preventDefault();
    const data = { event: 1,
                   user: "me",
                   transportation: 'paratransport',
                   notes: "" }; //new FormData( event.target );
    console.log( "POSTing ", data );
    fetch( `http://localhost:5000/api/` + this.props.posturl,
           { method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify( data )
           }
         )
         .then( res => res.json() )
         .then( res => { this.handleRedirect( res ); } )
  }
  handleRedirect( res )
  {
      if( res.status === 200 )
      {
          // redirect here
          console.log( "Ya did it" );
      }
      else
      {
        console.log( "No!" )
      }

  }
  //Appropriately space children vertically
  spaceChildren()
  {
    return React.Children.map( this.props.children, c => <div>{c}</div> );
  }
  render()
  {
    return (
        <form method="post" encType="multipart/form-data" onSubmit={this.post}>
          {this.spaceChildren()}
        </form>
      );
  }
}

export default PostForm;
