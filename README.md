# Overview

This section should contain an overview of the data provided and the API purpose.

#### USING THE API

We built this API to have an unlimited supply of dad jokes for our [DadJokes](https://github.com/KegenGuyll/Dad_Jokes) application.
If you find yourself overwhelmed, we organized this documentation into four major areas.

- [Getting started](#getting-started) introduces you to the operations offered by the API.
- [API calls](#api-calls) gives you examples of those operations
- [Field reference](#field-reference) Lists and describes the type of information provided by the API

# Getting Started

The current version of the API lives at `https://dad-jokes.p.rapidapi.com`

#### Endpoints

| Endpoint                                  |                                What it does                                 |
| ----------------------------------------- | :-------------------------------------------------------------------------: |
| `GET` [`/random/joke`](#randomjoke)       | Returns a joke object that contains a `setup`, `punchline`, `type` and `id` |
| `GET` [`/joke/:id`](#jokeid)              |                  Returns a joke object with a specific id.                  |
| `GET` [`/joke/type/:type`](#joketypetype) |            Returns a joke object randomly with a specific type.             |
| `GET` [`/joke/search`](#jokesearch)       |                 Returns a list of jokes matching your term                  |

#### Types

| Type        |
| ----------- |
| General     |
| Knock-Knock |
| Programming |

# API calls

This API supports a data response in JSON format.

### /random/joke

```json
{
  "success": true,
  "body": [
    {
      "_id": "5f80ccd641785ba7c7d27ba2",
      "type": "general",
      "setup": "Did you hear about the guy who invented Lifesavers?",
      "punchline": "They say he made a mint."
    }
  ]
}
```

### /joke/:id

`/joke/5f80ccd641785ba7c7d27ba2`

```json
{
  "success": true,
  "body": {
    "_id": "5f80ccd641785ba7c7d27ba2",
    "type": "general",
    "setup": "Did you hear about the guy who invented Lifesavers?",
    "punchline": "They say he made a mint."
  }
}
```

### /joke/type/:type

`/joke/type/knock-knock`

```json
{
  "success": true,
  "body": [
    {
      "_id": "5f80ccd641785ba7c7d27b55",
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
      "punchline": "Never mind. It's pointless."
    },
    {
      "_id": "5f80ccd641785ba7c7d27b6b",
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n Opportunity.",
      "punchline": "That is impossible. Opportunity doesn’t come knocking twice!"
    },
    {
      "_id": "5f80ccd641785ba7c7d27b56",
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
      "punchline": "No, cows go moo."
    },
    {
      "_id": "5f80ccd641785ba7c7d27b57",
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
      "punchline": "I didn't know you could yodel!"
    },
    {
      "_id": "5f80ccd641785ba7c7d27b86",
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n Hatch. \n Hatch who?",
      "punchline": "Bless you!"
    }
  ]
}
```

### /joke/search

`/joke/search?term=frog`

```json
{
  "success": true,
  "body": [
    {
      "_id": "5f80ccd641785ba7c7d27c3a",
      "type": "general",
      "setup": "What happens to a frog's car when it breaks down?",
      "punchline": "It gets toad."
    },
    {
      "_id": "5f80ccd641785ba7c7d27b68",
      "type": "general",
      "setup": "What happens to a frog's car when it breaks down?",
      "punchline": "It gets toad away"
    }
  ]
}
```

# Field reference

| Field name |      Description       | Data type |
| :--------: | :--------------------: | :-------: |
|     ID     |   Unique identifier    |  string   |
|    TYPE    |   Identifer of group   |  string   |
|   COUNT    | Number of wanted items |  string   |
