import React from "react";

class LEFT_SPAN extends React.Component {
  render() {
    var divStyle = {
      background: "blue",
      height: "100%",
      width: "50%",
      display: "inline-flex"
    };
    return <span style={divStyle} />;
  }
}

class RIGHT_SPAN extends React.Component {
  render() {
    var divStyle = {
      background: "red",
      height: "100%",
      width: "50%",
      display: "inline-flex"
    };
    var wrapDivStyle = {
      textAlign: "center",
      height: "100%",
      width: "100%",
      background: "yellow"
    };
    var formStyle = {
      position: "absolute",
      background: "green",
      height: "84vh",
      width: "50vw"
    };
    var hoursLabelStyle = {
      display: "inline"
    };
    var hoursInputStyle = {
      marginTop: "13%",
      marginBottom: "15%"
    };
    var justifyLabelStyle = {
      display: "inline"
    };
    var justifyInputStyle = {
      marginBottom: "15%"
    };
    var notesLabelStyle = {
      display: "block"
    };
    var inputStyle = {
      display: "block"
    };
    var hours = "Hours: ";
    var justify = "Justify: ";
    var notes = "Notes on Student: ";
    return (
      <span style={divStyle}>
        <div style={wrapDivStyle}>
          <form style={formStyle}>
            <label for="hours" style={hoursLabelStyle}>
              {hours}
            </label>
            <input
              style={hoursInputStyle}
              type="text"
              name="hours"
              id="hours"
              placeholder="Hours Worked"
            />

            <br />

            <label for="justify" style={justifyLabelStyle}>
              {justify}
            </label>
            <input
              style={justifyInputStyle}
              type="text"
              name="justify"
              id="justify"
              placeholder="Justify Hours"
            />

            <label for="justify" style={notesLabelStyle}>
              {notes}
            </label>
            <textarea
              name="notes"
              id="notes"
              placeholder="Enter notes here"
              rows="5"
              cols="40"
            />
            <input type="submit" value="Submit" style={inputStyle} />
          </form>
        </div>
      </span>
    );
  }
}

class MAIN extends React.Component {
  render() {
    var mainStyle = {
      background: "lightblue",
      height: "84vh",
      width: "100vw"
    };

    var titleStyle = {
      background: "green",
      height: "7%"
    };
    return (
      <div style={mainStyle}>
        <h1 style={titleStyle}>Mentors</h1>
        <LEFT_SPAN />
        <RIGHT_SPAN />
      </div>
    );
  }
}

export default MAIN;
