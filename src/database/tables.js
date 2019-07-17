

//id, name, location
const ORGS = `
    DROP TABLE IF EXISTS ORGANISATIONS; 
    CREATE TABLE ORGANISATIONS (
        id serial PRIMARY KEY,
        name VARCHAR (400) NOT NULL,
        location VARCHAR (400) NOT NULL
    );
`;

//id, name, gender, orgid
const DOCTORS = `
    DROP TABLE IF EXISTS DOCTORS; 
    CREATE TABLE DOCTORS (
        id serial PRIMARY KEY,
        name VARCHAR (400) NOT NULL,
        gender VARCHAR (15) NOT NULL,
        org_id serial REFERENCES ORGANISATIONS(id)
    );
`;

//id, name, phone, dr, genderPreferance
const QUEUE = `
    DROP TABLE IF EXISTS QUEUE; 
    CREATE TABLE QUEUE (
        id serial PRIMARY KEY,
        name VARCHAR (400) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        genderPreference VARCHAR (15) NOT NULL,
        dr_id serial REFERENCES DOCTORS(id)
    );
`;



module.exports = {
    ORGS,
    DOCTORS,
    QUEUE
}