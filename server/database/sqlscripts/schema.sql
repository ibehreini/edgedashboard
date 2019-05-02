START TRANSACTION;

CREATE TYPE EdgeRole AS ENUM( 'student', 'mentor', 'staff' );
CREATE TABLE Role (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  edgeRole EdgeRole NOT NULL
);

CREATE TYPE EventType AS ENUM( 'workshop', 'event' );
CREATE TABLE Events (
  id SERIAL PRIMARY KEY,
  eventTime TIMESTAMP,
  eventType EventType NOT NULL,
  eventLocation VARCHAR,
  title VARCHAR,
  description TEXT
);

CREATE TABLE EventNotes (
  event INTEGER REFERENCES Events,
  question TEXT,
  PRIMARY KEY( event, question )
);

CREATE TYPE Transportation AS ENUM( 'paratransport', 'public', 'pickup' );
CREATE TABLE Attendance (
  event INTEGER REFERENCES Events,
  username VARCHAR REFERENCES Role,
  transportNeeds Transportation,
  notes TEXT,
  PRIMARY KEY (event, username)
);

CREATE TABLE MentorHours (
  username VARCHAR REFERENCES Role,
  period DATE,
  hours INTEGER NOT NULL,
  justification TEXT NOT NULL,
  notes TEXT,
  PRIMARY KEY( username, period )
);

COMMIT;
