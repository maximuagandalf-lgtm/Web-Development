## How to host node.js apps on Ubuntu System on hosting machine-->

### Step-1 --> Installing node.js 

"""curl -fsSL https://deb.nodesource.com/ setup_21.x
| sudo -E bash - &&\
sudo apt-get install -y nodejs
"""
### Step-2 --> Now istall build essentials
"""
sudo apt-get isntall build-essentials
""" 

### Step-3 --> Now we will create an sample node.js app in our hosting machine thru terminal('You can also use your own app if you want to host it. Otherwise if you are just trying out, you can use sample app')

"""
npm init -y 

npm i espress@4

create an simple helloworld server --> 

const express = require('express')
const app = express()
const port= 3000

app.get('/', (req, res) => { res. send ('Hello World!')
})

app.listen(port, ()=＞{console.log(' Example app listening on port ${port}')
})

vim index.js

:wq

node index.js

This is just for prototypes. For production level websites we use PM2. This acts as a process manager for node.js application. 

"""

## For production level websites -->

### Step 1 :
"""
sudo npm i -g pm2

pm2 start index.js

this keeps the website running even if we close the terminal.
"""

### Step 2: Install nginx
nginx is a web server which is proxy. 
"""
sudo apt install nginx
"""

Now edit the file at /etc/nginx/sites-available/default using following command 

We want this file to look like this:
'''
location /app1{
proxy_pass http://localhost: 3000 ;
proxy_http_version 1.15
proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache bypass $http_upgrade;
}

for another node.js app --

location /app2{
proxy_pass http://localhost: 3002 ;
proxy_http_version 1.15
proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache bypass $http_upgrade;
}

'''

For the required hosting service, search "how to point a record to ip address in {service_name}, this will make website available with the domain name of choice"

### Step 3 : -->
Test and restart nginx using following commands
'''
sudo nginx -t
'''
Now restart using:
'''
sudo systemctl restart nginx
'''

