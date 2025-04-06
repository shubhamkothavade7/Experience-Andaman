# Experience Andaman

This project consists of a Laravel backend using MongoDB and a React.js frontend. Follow the steps below to set up and run both the backend and frontend simultaneously on your local system.

First, clone the project from GitHub using the command:


git clone https://github.com/yourusername/experience-andaman.git

cd experience-andaman
cd backend
Install all PHP dependencies using Composer:
composer install
Next, create a .env file by copying the example file:
cp .env.example .env

Open the .env file and update the database configuration to use MongoDB like so:
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=ExpAndaman
DB_USERNAME=
DB_PASSWORD=

Make sure MongoDB is installed and running locally. Create the database ExpAndaman in MongoDB (you can do this via MongoDB Compass or CLI).

Now generate the Laravel application key:
php artisan key:generate

Once done, start the Laravel development server:

php artisan serve


This will run the backend at http://127.0.0.1:8000.

Now open a new terminal tab or window, and go to the frontend directory:
cd ../frontend
npm install
cp .env.example .env
REACT_APP_API_BASE_URL=http://127.0.0.1:8000/api
npm start

