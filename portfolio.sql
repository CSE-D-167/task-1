CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE projects(

id INT AUTO_INCREMENT PRIMARY KEY,

title VARCHAR(100),

description TEXT,

technology VARCHAR(100)

);

INSERT INTO projects(title,description,technology)

VALUES

('Portfolio Website',
'Responsive personal portfolio website',
'HTML,CSS,JavaScript'),

('Weather App',
'Weather Forecast Application',
'Node.js'),

('Hospital Management',
'Hospital Database System',
'MySQL'),

('Organ Donation Website',
'Full Stack Organ Donation Project',
'HTML,CSS,Node.js,MySQL');
