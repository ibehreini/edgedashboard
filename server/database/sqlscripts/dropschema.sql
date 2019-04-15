/*BEWARE: This will drop the ENTIRETY of the database's current schema INCLUDING
 * all declared types AND any existing data!  This should ONLY be used to test
 * the schema creation script, NOT to delete test data!  Use cleartables for
 * that.*/
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
