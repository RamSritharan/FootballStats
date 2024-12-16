# theScore "the Rush" Interview Challenge

At theScore, we are always looking for intelligent, resourceful, full-stack developers to join our growing team. To help us evaluate new talent, we have created this take-home interview question. This question should take you no more than a few hours.

**All candidates must complete this before the possibility of an in-person interview. During the in-person interview, your submitted project will be used as the base for further extensions.**

### Why a take-home challenge?

In-person coding interviews can be stressful and can hide some people's full potential. A take-home gives you a chance work in a less stressful environment and showcase your talent.

We want you to be at your best and most comfortable.

### A bit about our tech stack

As outlined in our job description, you will come across technologies which include a server-side web framework (like Elixir/Phoenix, Ruby on Rails or a modern Javascript framework) and a front-end Javascript framework (like ReactJS)

### Challenge Background

We have sets of records representing football players' rushing statistics. All records have the following attributes:

- `Player` (Player's name)
- `Team` (Player's team abbreviation)
- `Pos` (Player's postion)
- `Att/G` (Rushing Attempts Per Game Average)
- `Att` (Rushing Attempts)
- `Yds` (Total Rushing Yards)
- `Avg` (Rushing Average Yards Per Attempt)
- `Yds/G` (Rushing Yards Per Game)
- `TD` (Total Rushing Touchdowns)
- `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
- `1st` (Rushing First Downs)
- `1st%` (Rushing First Down Percentage)
- `20+` (Rushing 20+ Yards Each)
- `40+` (Rushing 40+ Yards Each)
- `FUM` (Rushing Fumbles)

In this repo is a sample data file [`rushing.json`](/rushing.json).

##### Challenge Requirements

1. Create a web app. This must be able to do the following steps
   1. Create a webpage which displays a table with the contents of [`rushing.json`](/rushing.json)
   2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
   3. The user should be able to filter by the player's name
   4. The user should be able to download the sorted data as a CSV, as well as a filtered subset
2. The system should be able to potentially support larger sets of data on the order of 10k records.

3. Update the section `Installation and running this solution` in the README file explaining how to run your code

### Submitting a solution

1. Download this repo
2. Complete the problem outlined in the `Requirements` section
3. In your personal public GitHub repo, create a new public repo with this implementation
4. Provide this link to your contact at theScore

We will evaluate you on your ability to solve the problem defined in the requirements section as well as your choice of frameworks, and general coding style.

### Help

If you have any questions regarding requirements, do not hesitate to email your contact at theScore for clarification.

### Installation and running this solution

> There are a number of ways to install and run this application.

The easiest way to do so is by simply using the file at the root of the project.

```bash
docker-compose up -d
```

This will run all the server, ui and mongodb + seed (for mongo data) in separate docker containers on a bridge network. The environment variables the code is all pointing to the right places and should be simple to create images off of.

> If you are developing the server or ui and want to run against your own mongodb container/mongodb service on your machine, then you just need to follow the steps below.

## Installing and running the server

First you will want to be in the server folder

```bash
cd server
```

Then you will want to run the an npm install

```bash
npm install
```

Finally to start the server, you can the npm script to run the server

```bash
npm run dev
```

The service should then be running at `http://localhost:8080`

These environment variables are available to change:
| Variable | Default Value | Description |
|--------------|----------------------------------------|----------------------------------|
| PORT | 8080 | Port running serving the service |
| MONGODB_USER | root | User to authenticate mongodb |
| MONGODB_PASS | example | Password to authenticate mongodb |
| MONGODB_URL | mongodb://root:example@localhost:27017 | URL pointing to mongodb |

## Installing and running the ui

First you will want to be in the ui folder

```bash
cd rush-challengeUI
```

Then you will want to run the an npm install

```bash
npm install
```

Finally to start the ui, you can the npm script to run the ui

```bash
npm start
```

The service should then be running at `http://localhost:3000` (Note there is slight dependency, you'll want to have the server code running as well.)

These environment variables are available to change:
| Variable | Default Value | Description |
|------------|---------------|------------------------------------|
| PROXY_PORT | 8080 | Proxy port running the server code |
