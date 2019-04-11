#Prerequisites:
# 1. postresql is installed
# 2. A psql server is running
# 3. The current user has superadmin privileges within psql

#Find out where psql (likely) is
unameOut="$(uname -s)"
case "${unameOut}" in
    Darwin*)    psql="/Applications/Postgres.app/Contents/Versions/11/bin/psql";;
    CYGWIN*)    psql="src/bin/psql";;
    *)          psql="psql";; #guess that this is a valid command
esac


$psql -b -c "CREATE DATABASE edgedb;"
$psql -b -d "edgedb" -f "schema.sql"
