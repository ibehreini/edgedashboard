/*Drops all the data in all of the tables in the database.  Only use this when
 * the database contains ONLY test data! Otherwise, a migration script must be
 * created & deployed.
 * Note: All sequences are also restarted, but the schema is not altered.*/
TRUNCATE Role, Events, EventNotes, Attendance, MentorHours
  RESTART IDENTITY CASCADE;
