import React from "react";

class LeftSpan extends React.Component {
  render() {
    var spanStyle = {
      height: "100vh",
      width: "50%",
      display: "inline-flex"
    };
    var wrapDivStyle = {
      textAlign: "center",
      height: "100%",
      width: "100%"
    };

    var formStyle = {
      position: "absolute",
      height: "84vh",
      width: "50vw"
    };

    var dateStyle = {
      display: "inline"
    };

    var dateLabelStyle = {
      display: "block",
      marginTop: "37vh"
    };

    return (
      <span style={spanStyle}>
        <div style={wrapDivStyle}>
          <form style={formStyle} action="">
            <label for="date" style={dateLabelStyle}>
              Please Select the Current Date
            </label>
            <input style={dateStyle} type="date" name="date" />
          </form>
        </div>
      </span>
    );
  }
}

class RightSpan extends React.Component {
  render() {
    var spanStyle = {
      height: "100vh",
      width: "50%",
      display: "inline-flex"
    };
    var wrapDivStyle = {
      textAlign: "center",
      height: "100vh",
      width: "100%"
    };
    var formStyle = {
      position: "absolute",
      height: "84vh",
      width: "50vw"
    };
    var hoursLabelStyle = {
      display: "block",
      marginTop: "13%"
    };
    var hoursInputStyle = {
      marginBottom: "15%"
    };
    var justifyLabelStyle = {
      display: "block"
    };
    var justifyInputStyle = {
      marginBottom: "15%"
    };
    var notesLabelStyle = {
      display: "block"
    };
    var submitStyle = {
      display: "block",
      position: "relative",
      top: "5vh",
      left: "22vw",
      border: "none",
      padding: "10px",
      background: "#4CAF50"
    };
    var hours = "Input Hours Worked: ";
    var justify = "Justify Hours Worked: ";
    var notes = "Notes on Student: ";
    return (
      <span style={spanStyle}>
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
            <input type="submit" value="Submit" style={submitStyle} />
          </form>
        </div>
      </span>
    );
  }
}

class MAIN extends React.Component {
  render() {
    var mainStyle = {
      color: "white",
      background: "black",
      height: "100vh",
      width: "100vw"
    };

    var titleStyle = {
      color: "white",
      background: "black",
      textAlign: "center"
    };

    var hrStyle = {
      width: "1",
      size: "90vh"
    };

    return (
      <div style={mainStyle}>
        <h1 style={titleStyle}>Mentors Hours</h1>
        <LeftSpan />
        <RightSpan />
      </div>
    );
  }
}

export default MAIN;
