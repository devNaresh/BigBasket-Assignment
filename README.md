# Setup
### **Installation**

Requires [Node.js](https://nodejs.org/) v6.6.0+ to run.  
Required Django and Python 2.7  
Requires Elasticsearch


**Install elasticsearch.**
```sh
$ brew update
$ brew doctor
$ brew install elasticsearch
$ elasticsearch
```
**Steps To start APP**  
 1. Go to client directory.
 2. run below commands
```sh
$ npm install
$ npm run build
```
 3. Create virtual env.  
 4. Go to server directory.
 5. run below commands
```sh
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py rebuild_index
$ python manage.py runserver
```
**DEMO**  

 1. Go to "localhost:8080"  
 2. Type Title of Movie. Eg-- Budding Prospects, Pilot,  Bullitt, About a Boy. There are more than 120 titles on DB.
 3. To get more title of movies go to django admin. Username -- test, Password -- test1234.
 4. Auto suggestion will come select title then you can see locations on gmaps.