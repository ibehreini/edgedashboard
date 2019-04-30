/*Inject test data into the database.  Note that this will happen however
 * many times you run this script!  Running it 3 times will result in 3 copies
 * of the data being pushed to the database, for example.*/

 START TRANSACTION;

 INSERT INTO Role VALUES ( 'behreini.ida@egmail.com', 'staff'  ),
                         ( 'ibehreini@drew.edu', 'student' ),
                         ( 'andrewrupkey@gmail.com', 'mentor' );

INSERT INTO Events (title, eventTime, eventType, eventLocation, description) VALUES
  ( 'Evie Care', '2019-03-14 14:00:00', 'workshop', 'Evie',
    'Care for Evie, provide pets' ),
  ( 'People Food', '2019-04-22 11:30:00', 'workshop', 'Commons',
    'There will be food. We must eat it at any cost.' ),
  ( 'Face Licking Seminar', '2019-05-01 16:15:00', 'workshop','Hall of Sciences',
    'A guest speaker (Evie) will be providing advice on how best to get to lick'
    ' human faces.' ),
  ( 'Shopping', '2019-04-22 11:30:00', 'event', 'A Mall', 'Buy things.' ),
  ( 'Mustaches', '2019-05-16 20:0:00', 'event', 'Your face', 'Grow mustaches.' );

INSERT INTO EventNotes VALUES
  ( (SELECT id FROM Events WHERE title = 'People Food'),
    'Please report any allergies and/or dietary restrictions you may have.  '
    'They will be ignored because I am a dog, but please tell us anyway.' ),
  ( (SELECT id FROM Events WHERE title = 'Mustaches'),
    'If you are unable to naturally grow mustache hair, please indicate what '
    'your current level of coverage is so that we may provide appropriate '
    'prosthetics.' );

INSERT INTO Attendance VALUES
  ( (SELECT id FROM Events WHERE title = 'Evie Care'), 'ibehreini@drew.edu', 'pickup', NULL ),
  ( (SELECT id FROM Events WHERE title = 'Shopping'), 'ibehreini@drew.edu', 'public', NULL );

INSERT INTO MentorHours VALUES ( 'andrewrupkey@gmail.com', '2019-01-22', 6,
  'Potato & I walked around his house and worked on not bumping into things.',
  'Potato''s navigational skills really seem to be improving, despite the '
  'number of times we banged our shins on the coffe table.' );

COMMIT;
