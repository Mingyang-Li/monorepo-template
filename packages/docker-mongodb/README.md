# 🐘 Local Database - MongoDB

## ❓ What is this template?

**Drag-n-drop type of tool** helping you creating a local MongoDB database using Docker

## 🤔 When to use this template?

1. You need to quickly spin up a MongoDB database for local development
2. The SRE/DevOps engineers at your workplace are too slow at provisioning, _OR_ are unable to provision you a cloud-based MongoDB instance (because of company policies or whatever other reason), but you need a one urgently for your current work

## ☝️ Prerequisites

1. Have docker installed on your machine
2. Have a Node.js-based project on your machine with a `package.json` file

## 📚 How to use this template?

1. Copy & paste `docker-compose-db.yml` file into the same folder as `package.json` of your own project
2. Copy & paste the whole line of commend that contains `docker:db:create` from our `package.json` into the `"script"` section of your own `package.json` file
3. Open docker on your local machine
4. Use the next section to create the database depending on the Node.js package manager that you're already using

### 📝 Commands:

```shell
# Using npm
npm docker:db:create

# Using yarn
yarn docker:db:create

# Using pnpm
pnpm docker:db:create
```

## 🌐 Database URL

```shell
mongodb://username:password@localhost:1111
```

Now that you have your local MongoDB database up and ready, feel free to start creating tables and seeding it using any tools of your choice (MongoDB clients, ORMs, etc)
