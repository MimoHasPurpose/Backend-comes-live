##### DBMS:
Data Storage
Types of dbs-SQL/NoSQL
NoSQL-Mongodb
what and why
terminologies -collection, documents,schemas,keys,models

---

#### MongoDB:
- mongodb installation
    - ```
      echo "deb http://security.ubuntu.com/ubuntu               focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
      sudo apt-get update
      sudo apt-get install libssl1.1
      wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
      echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/           sources.list.d/mongodb-org-5.0.list
      sudo apt-get update 
      sudo apt-get install -y mongodb-org
      sudo systemctl start mongod.service
      sudo systemctl start mongodb
      sudo systemctl daemon-reload
      mongosh
     ```
    
  

- mongodb connection
- schema
- model
- crud


