define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/auth/signin",
    "title": "Generate a token",
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>In order to generate a token, you will need to already have a user in the database.</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript:",
        "content": "const data = {\n  \"username\": \"test@email.com\",\n  \"password\": \"yourpassword\"\n};\n\n$http.post(url, data)\n  .success((res) => doSomethingHere())\n  .error((err) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The token that must be used to access the other endpoints</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>The expiration duration(seconds)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refrehToken",
            "description": "<p>This is used to generate new access token upon its expiry</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n {\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9 ... and the rest of the token here\",\n   \"expiresIn\": 360,\n   \"refreshToken\": \"xn1VuOhBtaNqSDeXS77ZYfvlgZVYw4IBxmNh ... and the rest of the token here\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/Champions/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "Championsmatch",
    "group": "Champions",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n    {\n        \"team1\": {\n            \"name\": \"Donetsk\",\n            \"price\": \"1.97\"\n        },\n        \"team2\": {\n            \"name\": \"Hoffenheim\",\n            \"price\": \"3.65\"\n        },\n        \"pseudoKey\": \"donetsk-hoffenheim\",\n        \"service\": \"Betin\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.75\",\n        \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=19479664\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Donetsk\",\n            \"price\": \"2.00\"\n        },\n        \"team2\": {\n            \"name\": \"Hoffenheim\",\n            \"price\": \"3.70\"\n        },\n        \"pseudoKey\": \"donetsk-hoffenheim\",\n        \"service\": \"Betpawa\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.60\",\n        \"url\": \"https://www.betpawa.co.ke/event-460973-shakhtar-donetsk-hoffenheim\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Donetsk\",\n            \"price\": \"1.97\"\n        },\n        \"team2\": {\n            \"name\": \"Hoffenheim\",\n            \"price\": \"3.66\"\n        },\n        \"pseudoKey\": \"donetsk-hoffenheim\",\n        \"service\": \"Betway\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.72\",\n        \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=30c49c94-b3ac-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Donetsk\",\n            \"price\": \"2.01\"\n        },\n        \"team2\": {\n            \"name\": \"Hoffenheim\",\n            \"price\": \"3.86\"\n        },\n        \"pseudoKey\": \"donetsk-hoffenheim\",\n        \"service\": \"1XBet\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.82\",\n        \"url\": \"https://1xbet.co.ke/en/line/Football/118587-UEFA-Champions-League/30631097-Shakhtar-Donetsk-TSG-1899-Hoffenheim/\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "Champions"
  },
  {
    "type": "get",
    "url": "/Champions",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "Championsmatches",
    "group": "Champions",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n    {\n        \"_id\": \"5ba0ee53b6a0795c2bd85935\",\n        \"pseudoKey\": \"barcelona-psv\",\n        \"sport\": \"Soccer\",\n        \"league\": \"Champions\",\n        \"date\": \"2018-09-18T16:55:00.000Z\",\n        \"team1\": \"Barcelona\",\n        \"team2\": \"PSV\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Barcelona\",\n                    \"price\": \"1.10\"\n                },\n                \"team2\": {\n                    \"name\": \"PSV\",\n                    \"price\": \"20.00\"\n                },\n                \"pseudoKey\": \"barcelona-psv\",\n                \"service\": \"Betin\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"10.00\",\n                \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=19479569\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Barcelona\",\n                    \"price\": \"1.09\"\n                },\n                \"team2\": {\n                    \"name\": \"PSV\",\n                    \"price\": \"22.50\"\n                },\n                \"pseudoKey\": \"barcelona-psv\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"12.50\",\n                \"url\": \"https://www.betpawa.co.ke/event-460965-barcelona-psv-eindhoven\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Barcelona\",\n                    \"price\": \"1.12\"\n                },\n                \"team2\": {\n                    \"name\": \"PSV\",\n                    \"price\": \"16.58\"\n                },\n                \"pseudoKey\": \"barcelona-psv\",\n                \"service\": \"Betway\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"10.24\",\n                \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=56c49c94-b3ac-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Barcelona\",\n                    \"price\": \"1.13\"\n                },\n                \"team2\": {\n                    \"name\": \"PSV\",\n                    \"price\": \"24\"\n                },\n                \"pseudoKey\": \"barcelona-psv\",\n                \"service\": \"1XBet\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"11\",\n                \"url\": \"https://1xbet.co.ke/en/line/Football/118587-UEFA-Champions-League/30631089-Barcelona-PSV-Eindhoven/\"\n            }\n        ],\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5ba0ee53b6a0795c2bd85936\",\n        \"pseudoKey\": \"schalke-porto\",\n        \"sport\": \"Soccer\",\n        \"league\": \"Champions\",\n        \"date\": \"2018-09-18T19:00:00.000Z\",\n        \"team1\": \"Schalke\",\n        \"team2\": \"Porto\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Schalke\",\n                    \"price\": \"2.37\"\n                },\n                \"team2\": {\n                    \"name\": \"Porto\",\n                    \"price\": \"3.10\"\n                },\n                \"pseudoKey\": \"schalke-porto\",\n                \"service\": \"Betin\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.30\",\n                \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=19479599\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Schalke\",\n                    \"price\": \"2.35\"\n                },\n                \"team2\": {\n                    \"name\": \"Porto\",\n                    \"price\": \"3.05\"\n                },\n                \"pseudoKey\": \"schalke-porto\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.35\",\n                \"url\": \"https://www.betpawa.co.ke/event-460974-schalke-04-fc-porto\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Schalke\",\n                    \"price\": \"2.37\"\n                },\n                \"team2\": {\n                    \"name\": \"Porto\",\n                    \"price\": \"3.08\"\n                },\n                \"pseudoKey\": \"schalke-porto\",\n                \"service\": \"Betway\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.30\",\n                \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=a2c49c94-b3ac-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Schalke\",\n                    \"price\": \"2.45\"\n                },\n                \"team2\": {\n                    \"name\": \"Porto\",\n                    \"price\": \"3.168\"\n                },\n                \"pseudoKey\": \"schalke-porto\",\n                \"service\": \"1XBet\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.4\",\n                \"url\": \"https://1xbet.co.ke/en/line/Football/118587-UEFA-Champions-League/30631093-Schalke-04-Porto/\"\n            }\n        ],\n        \"__v\": 0\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "Champions"
  },
  {
    "type": "get",
    "url": "/Europa/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "Europamatch",
    "group": "Europa",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n\n[\n    {\n        \"team1\": {\n            \"name\": \"Dynamo\",\n            \"price\": \"1.72\"\n        },\n        \"team2\": {\n            \"name\": \"Astana\",\n            \"price\": \"5.50\"\n        },\n        \"pseudoKey\": \"dynamo-astana\",\n        \"service\": \"Betpawa\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.50\",\n        \"url\": \"https://www.betpawa.co.ke/event-463537-dinamo-kiev-fc-astana\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Dynamo\",\n            \"price\": \"1.72\"\n        },\n        \"team2\": {\n            \"name\": \"Astana\",\n            \"price\": \"5.36\"\n        },\n        \"pseudoKey\": \"dynamo-astana\",\n        \"service\": \"Betway\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.42\",\n        \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=bc9be7e3-51ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "Europa"
  },
  {
    "type": "get",
    "url": "/Europa",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "Europamatches",
    "group": "Europa",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n    {\n        \"_id\": \"5ba3c25252ad2d0901240f60\",\n        \"pseudoKey\": \"belediyespor-krasnodar\",\n        \"sport\": \"Soccer\",\n        \"league\": \"Europa\",\n        \"date\": \"2018-09-20T16:55:00.000Z\",\n        \"team1\": \"Belediyespor\",\n        \"team2\": \"Krasnodar\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Belediyespor\",\n                    \"price\": \"3.60\"\n                },\n                \"team2\": {\n                    \"name\": \"Krasnodar\",\n                    \"price\": \"2.05\"\n                },\n                \"pseudoKey\": \"belediyespor-krasnodar\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.50\",\n                \"url\": \"https://www.betpawa.co.ke/event-463547-akhisar-belediyespor-fk-krasnodar\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Belediyespor\",\n                    \"price\": \"3.56\"\n                },\n                \"team2\": {\n                    \"name\": \"Krasnodar\",\n                    \"price\": \"2.06\"\n                },\n                \"pseudoKey\": \"belediyespor-krasnodar\",\n                \"service\": \"Betway\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.42\",\n                \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=b4237aff-52ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Belediyespor\",\n                    \"price\": \"3.72\"\n                },\n                \"team2\": {\n                    \"name\": \"Krasnodar\",\n                    \"price\": \"2.15\"\n                },\n                \"pseudoKey\": \"belediyespor-krasnodar\",\n                \"service\": \"1XBet\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.52\",\n                \"url\": \"https://1xbet.co.ke/en/line/Football/118593-UEFA-Europa-League/30668517-Akhisar-Belediyespor-Krasnodar/\"\n            }\n        ],\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5ba3c25252ad2d0901240f61\",\n        \"pseudoKey\": \"besiktas-sarpsborg\",\n        \"sport\": \"Soccer\",\n        \"league\": \"Europa\",\n        \"date\": \"2018-09-20T16:55:00.000Z\",\n        \"team1\": \"Besiktas\",\n        \"team2\": \"Sarpsborg\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Besiktas\",\n                    \"price\": \"1.28\"\n                },\n                \"team2\": {\n                    \"name\": \"Sarpsborg\",\n                    \"price\": \"10.00\"\n                },\n                \"pseudoKey\": \"besiktas-sarpsborg\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"6.00\",\n                \"url\": \"https://www.betpawa.co.ke/event-463536-besiktas-jk-sarpsborg-08-ff\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Besiktas\",\n                    \"price\": \"1.29\"\n                },\n                \"team2\": {\n                    \"name\": \"Sarpsborg\",\n                    \"price\": \"9.27\"\n                },\n                \"pseudoKey\": \"besiktas-sarpsborg\",\n                \"service\": \"Betway\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"5.64\",\n                \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=f6c214dc-51ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Besiktas\",\n                    \"price\": \"1.32\"\n                },\n                \"team2\": {\n                    \"name\": \"Sarpsborg\",\n                    \"price\": \"11.5\"\n                },\n                \"pseudoKey\": \"besiktas-sarpsborg\",\n                \"service\": \"1XBet\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"5.9\",\n                \"url\": \"https://1xbet.co.ke/en/line/Football/118593-UEFA-Europa-League/30668519-Besiktas-Sarpsborg-08/\"\n            }\n        ],\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5ba3c25252ad2d0901240f62\",\n        \"pseudoKey\": \"dynamo-astana\",\n        \"sport\": \"Soccer\",\n        \"league\": \"Europa\",\n        \"date\": \"2018-09-20T16:55:00.000Z\",\n        \"team1\": \"Dynamo\",\n        \"team2\": \"Astana\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Dynamo\",\n                    \"price\": \"1.72\"\n                },\n                \"team2\": {\n                    \"name\": \"Astana\",\n                    \"price\": \"5.50\"\n                },\n                \"pseudoKey\": \"dynamo-astana\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.50\",\n                \"url\": \"https://www.betpawa.co.ke/event-463537-dinamo-kiev-fc-astana\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Dynamo\",\n                    \"price\": \"1.72\"\n                },\n                \"team2\": {\n                    \"name\": \"Astana\",\n                    \"price\": \"5.36\"\n                },\n                \"pseudoKey\": \"dynamo-astana\",\n                \"service\": \"Betway\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.42\",\n                \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=bc9be7e3-51ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n            }\n        ],\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "Europa"
  },
  {
    "type": "get",
    "url": "/LaLiga/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "LaLigamatch",
    "group": "LaLiga",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n    {\n        \"team1\": {\n            \"name\": \"Vigo\",\n            \"price\": \"4.84\"\n        },\n        \"team2\": {\n            \"name\": \"atletico\",\n            \"price\": \"1.79\"\n        },\n        \"pseudoKey\": \"vigo-atletico\",\n        \"service\": \"Sportpesa\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.53\",\n        \"url\": \"https://www.sportpesa.co.ke/games/1429076/markets?league=76837&top=1&sid=5677&sportId=1\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Vigo\",\n            \"price\": \"4.93\"\n        },\n        \"team2\": {\n            \"name\": \"atletico\",\n            \"price\": \"1.77\"\n        },\n        \"pseudoKey\": \"vigo-atletico\",\n        \"service\": \"Betika\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.56\",\n        \"url\": \"https://www.betika.com/mobile/dist/#/prebets/markets/542873\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Vigo\",\n            \"price\": \"4.90\"\n        },\n        \"team2\": {\n            \"name\": \"atletico\",\n            \"price\": \"1.78\"\n        },\n        \"pseudoKey\": \"vigo-atletico\",\n        \"service\": \"Betin\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.55\",\n        \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18909238\"\n    },\n    {\n        \"team1\": {\n            \"name\": \"Vigo\",\n            \"price\": \"4.85\"\n        },\n        \"team2\": {\n            \"name\": \"atletico\",\n            \"price\": \"1.75\"\n        },\n        \"pseudoKey\": \"vigo-atletico\",\n        \"service\": \"Betpawa\",\n        \"region\": \"Kenya\",\n        \"drawPrice\": \"3.70\",\n        \"url\": \"https://www.betpawa.co.ke/event-458952-celta-vigo-atletico-madrid\"\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "LaLiga"
  },
  {
    "type": "get",
    "url": "/LaLiga",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "LaLigamatches",
    "group": "LaLiga",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n\n[\n {\n        \"_id\": \"5b86acb6d6dc2316491e022b\",\n        \"pseudoKey\": \"eibar-sociedad\",\n        \"sport\": \"Soccer\",\n        \"league\": \"La Liga\",\n        \"date\": \"2018-08-31T20:00:00.000Z\",\n        \"team1\": \"Eibar\",\n        \"team2\": \"Sociedad\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Eibar\",\n                    \"price\": \"2.87\"\n                },\n                \"team2\": {\n                    \"name\": \"Sociedad\",\n                    \"price\": \"2.60\"\n                },\n                \"pseudoKey\": \"eibar-sociedad\",\n                \"service\": \"Sportpesa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.19\",\n                \"url\": \"https://www.sportpesa.co.ke/games/1427972/markets?league=76837&top=1&sid=4195&sportId=1\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Eibar\",\n                    \"price\": \"2.83\"\n                },\n                \"team2\": {\n                    \"name\": \"Sociedad\",\n                    \"price\": \"2.6\"\n                },\n                \"pseudoKey\": \"eibar-sociedad\",\n                \"service\": \"Betika\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.21\",\n                \"url\": \"https://www.betika.com/mobile/dist/#/prebets/markets/542334\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Eibar\",\n                    \"price\": \"2.904\"\n                },\n                \"team2\": {\n                    \"name\": \"Sociedad\",\n                    \"price\": \"2.68\"\n                },\n                \"pseudoKey\": \"eibar-sociedad\",\n                \"service\": \"1XBet\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.38\",\n                \"url\": \"https://1xbet.co.ke/en/line/Football/127733-Spain-La-Liga/29986117-Eibar-Real-Sociedad/\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Eibar\",\n                    \"price\": \"2.78\"\n                },\n                \"team2\": {\n                    \"name\": \"Sociedad\",\n                    \"price\": \"2.60\"\n                },\n                \"pseudoKey\": \"eibar-sociedad\",\n                \"service\": \"Betin\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.25\",\n                \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18909232\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Eibar\",\n                    \"price\": \"2.80\"\n                },\n                \"team2\": {\n                    \"name\": \"Sociedad\",\n                    \"price\": \"2.55\"\n                },\n                \"pseudoKey\": \"eibar-sociedad\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.30\",\n                \"url\": \"https://www.betpawa.co.ke/event-458484-eibar-real-sociedad\"\n            }\n        ],\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5b86acb6d6dc2316491e022e\",\n        \"pseudoKey\": \"vigo-atletico\",\n        \"sport\": \"Soccer\",\n        \"league\": \"La Liga\",\n        \"date\": \"2018-09-01T16:30:00.000Z\",\n        \"team1\": \"Vigo\",\n        \"team2\": \"atletico\",\n        \"matchInstances\": [\n            {\n                \"team1\": {\n                    \"name\": \"Vigo\",\n                    \"price\": \"4.84\"\n                },\n                \"team2\": {\n                    \"name\": \"atletico\",\n                    \"price\": \"1.79\"\n                },\n                \"pseudoKey\": \"vigo-atletico\",\n                \"service\": \"Sportpesa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.53\",\n                \"url\": \"https://www.sportpesa.co.ke/games/1429076/markets?league=76837&top=1&sid=5677&sportId=1\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Vigo\",\n                    \"price\": \"4.93\"\n                },\n                \"team2\": {\n                    \"name\": \"atletico\",\n                    \"price\": \"1.77\"\n                },\n                \"pseudoKey\": \"vigo-atletico\",\n                \"service\": \"Betika\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.56\",\n                \"url\": \"https://www.betika.com/mobile/dist/#/prebets/markets/542873\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Vigo\",\n                    \"price\": \"4.90\"\n                },\n                \"team2\": {\n                    \"name\": \"atletico\",\n                    \"price\": \"1.78\"\n                },\n                \"pseudoKey\": \"vigo-atletico\",\n                \"service\": \"Betin\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.55\",\n                \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18909238\"\n            },\n            {\n                \"team1\": {\n                    \"name\": \"Vigo\",\n                    \"price\": \"4.85\"\n                },\n                \"team2\": {\n                    \"name\": \"atletico\",\n                    \"price\": \"1.75\"\n                },\n                \"pseudoKey\": \"vigo-atletico\",\n                \"service\": \"Betpawa\",\n                \"region\": \"Kenya\",\n                \"drawPrice\": \"3.70\",\n                \"url\": \"https://www.betpawa.co.ke/event-458952-celta-vigo-atletico-madrid\"\n            }\n        ],\n        \"__v\": 0\n    },\n  ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "LaLiga"
  },
  {
    "type": "get",
    "url": "/bundesliga/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "bundesligamatch",
    "group": "bundesliga",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n{\nteam1: {\nname: \"Stuttgart\",\nprice: \"8.61\"\n},\nteam2: {\nname: \"Bayern\",\nprice: \"1.34\"\n},\npseudoKey: \"stuttgart-bayern\",\nservice: \"Sportpesa\",\nregion: \"Kenya\",\ndrawPrice: \"5.33\",\nurl: \"https://www.sportpesa.co.ke/games/1429418/markets?league=76390&top=1&sid=3973&sportId=1\"\n},\n{\nteam1: {\nname: \"Stuttgart\",\nprice: \"9.53\"\n},\nteam2: {\nname: \"Bayern\",\nprice: \"1.29\"\n},\npseudoKey: \"stuttgart-bayern\",\nservice: \"Betika\",\nregion: \"Kenya\",\ndrawPrice: \"5.8\",\nurl: \"https://www.betika.com/mobile/dist/#/prebets/markets/542969\"\n},\n{\nteam1: {\nname: \"Stuttgart\",\nprice: \"10.5\"\n},\nteam2: {\nname: \"Bayern\",\nprice: \"1.33\"\n},\npseudoKey: \"stuttgart-bayern\",\nservice: \"1XBet\",\nregion: \"Kenya\",\ndrawPrice: \"6.15\",\nurl: \"https://1xbet.co.ke/en/line/Football/96463-Germany-Bundesliga/28235807-VfB-Stuttgart-Bayern-Munich/\"\n},\n{\nteam1: {\nname: \"Stuttgart\",\nprice: \"11.00\"\n},\nteam2: {\nname: \"Bayern\",\nprice: \"1.27\"\n},\npseudoKey: \"stuttgart-bayern\",\nservice: \"Betpawa\",\nregion: \"Kenya\",\ndrawPrice: \"6.00\",\nurl: \"https://www.betpawa.co.ke/event-458911-stuttgart-bayern-munich\"\n},\n{\nteam1: {\nname: \"Stuttgart\",\nprice: \"9.40\"\n},\nteam2: {\nname: \"Bayern\",\nprice: \"1.30\"\n},\npseudoKey: \"stuttgart-bayern\",\nservice: \"Betin\",\nregion: \"Kenya\",\ndrawPrice: \"5.60\",\nurl: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18398874\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "bundesliga"
  },
  {
    "type": "get",
    "url": "/bundesliga",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "bundesligamatches",
    "group": "bundesliga",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n\n[\n{\n _id: \"5b83e6340818897dc988f578\",\n pseudoKey: \"nurnberg-mainz\",\n sport: \"Soccer\",\n league: \"Bundesliga\",\n date: \"2018-09-01T13:30:00.000Z\",\n team1: \"Nurnberg\",\n team2: \"Mainz\",\n matchInstances: [\n {\n  team1: {\n   name: \"Nurnberg\",\n   price: \"2.42\"\n },\n  team2: {\n   name: \"Mainz\",\n   price: \"3.18\"\n },\npseudoKey: \"nurnberg-mainz\",\nservice: \"Sportpesa\",\nregion: \"Kenya\",\ndrawPrice: \"3.12\",\nurl: \"https://www.sportpesa.co.ke/games/1428636/markets?league=76390&top=1&sid=1835&sportId=1\"\n},\n{\n team1: {\n   name: \"Nurnberg\",\n   price: \"2.39\"\n },\n team2: {\n   name: \"Mainz\",\n   price: \"3.19\"\n },\n pseudoKey: \"nurnberg-mainz\",\n service: \"Betika\",\n region: \"Kenya\",\n drawPrice: \"3.15\",\n url: \"https://www.betika.com/mobile/dist/#/prebets/markets/542710\"\n },\n {\n team1: {\n   name: \"Nurnberg\",\n   price: \"2.49\"\n },\n team2: {\n   name: \"Mainz\",\n   price: \"3.38\"\n },\n pseudoKey: \"nurnberg-mainz\",\n service: \"1XBet\",\n region: \"Kenya\",\n drawPrice: \"3.18\",\n url:  \"https://1xbet.co.ke/en/line/Football/96463-Germany-Bundesliga/28235773-1.-Nurnberg-1.-FSV-Mainz-05/\"\n },\n {\n team1: {\n   name: \"Nurnberg\",\n   price: \"2.30\"\n },\n team2: {\n name: \"Mainz\",\n price: \"3.15\"\n },\n pseudoKey: \"nurnberg-mainz\",\n service: \"Betpawa\",\n region: \"Kenya\",\n drawPrice: \"3.30\",\n url: \"https://www.betpawa.co.ke/event-458949-nurnberg-mainz-05\"\n },\n {\n team1: {\n   name: \"Nurnberg\",\n   price: \"2.42\"\n },\n team2: {\n   name: \"Mainz\",\n   price: \"3.20\"\n },\n pseudoKey: \"nurnberg-mainz\",\n service: \"Betin\",\n region: \"Kenya\",\n drawPrice: \"3.10\",\n url: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18398934\"\n }\n],\n__v: 0\n},\n{\n _id: \"5b83e6340818897dc988f579\",\n pseudoKey: \"stuttgart-bayern\",\n sport: \"Soccer\",\n league: \"Bundesliga\",\n date: \"2018-09-01T16:30:00.000Z\",\n team1: \"Stuttgart\",\n team2: \"Bayern\",\n matchInstances: [\n {\n   team1: {\n     name: \"Stuttgart\",\n     price: \"8.61\"\n },\n   team2: {\n     name: \"Bayern\",\n     price: \"1.34\"\n },\n pseudoKey: \"stuttgart-bayern\",\n service: \"Sportpesa\",\n region: \"Kenya\",\n drawPrice: \"5.33\",\n url: \"https://www.sportpesa.co.ke/games/1429418/markets?league=76390&top=1&sid=3973&sportId=1\"\n},\n{\n   team1: {\n     name: \"Stuttgart\",\n     price: \"9.53\"\n },\n   team2: {\n     name: \"Bayern\",\n     price: \"1.29\"\n },\n   pseudoKey: \"stuttgart-bayern\",\n   service: \"Betika\",\n   region: \"Kenya\",\n   drawPrice: \"5.8\",\n   url: \"https://www.betika.com/mobile/dist/#/prebets/markets/542969\"\n },\n {\n team1: {\n   name: \"Stuttgart\",\n   price: \"10.5\"\n },\n team2: {\n   name: \"Bayern\",\n   price: \"1.33\"\n},\npseudoKey: \"stuttgart-bayern\",\nservice: \"1XBet\",\nregion: \"Kenya\",\ndrawPrice: \"6.15\",\nurl: \"https://1xbet.co.ke/en/line/Football/96463-Germany-Bundesliga/28235807-VfB-Stuttgart-Bayern-Munich/\"\n},\n{\nteam1: {\n   name: \"Stuttgart\",\n   price: \"11.00\"\n},\nteam2: {\n   name: \"Bayern\",\n   price: \"1.27\"\n },\npseudoKey: \"stuttgart-bayern\",\nservice: \"Betpawa\",\nregion: \"Kenya\",\ndrawPrice: \"6.00\",\nurl: \"https://www.betpawa.co.ke/event-458911-stuttgart-bayern-munich\"\n},\n{\nteam1: {\n  name: \"Stuttgart\",\n  price: \"9.40\"\n},\n team2: {\n name: \"Bayern\",\n price: \"1.30\"\n },\n pseudoKey: \"stuttgart-bayern\",\n service: \"Betin\",\n region: \"Kenya\",\n drawPrice: \"5.60\",\n url: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18398874\"\n}\n],\n__v: 0\n},",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "bundesliga"
  },
  {
    "type": "get",
    "url": "/health-check",
    "title": "Verify match endpoints",
    "version": "1.0.0",
    "name": "matchendpoints",
    "group": "health_check",
    "permission": [
      {
        "name": "authenticate user"
      }
    ],
    "description": "<p>Use this to check if the server is online</p>",
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response",
          "content": "HTTPS 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "health_check"
  },
  {
    "type": "get",
    "url": "/leaguecup/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "leaguecupmatch",
    "group": "league_cup",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Retrieves the given EFL(league cup) match</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n  HTTPS 200 OK\n  [\n    {\n    \"team1\": {\n        \"name\": \"Crewe\",\n        \"price\": \"3.71\"\n    },\n    \"team2\": {\n        \"name\": \"Fleetwood\",\n        \"price\": \"2.04\"\n    },\n    \"pseudoKey\": \"crewe-fleetwood\",\n    \"service\": \"Sportpesa\",\n    \"region\": \"Kenya\",\n    \"drawPrice\": \"3.44\",\n    \"url\": \"https://www.sportpesa.co.ke/games/1411326/markets?league=76298&top=1&sid=4851&sportId=1\"\n},\n{\n    \"team1\": {\n        \"name\": \"Crewe\",\n        \"price\": \"3.70\"\n    },\n    \"team2\": {\n        \"name\": \"Fleetwood\",\n        \"price\": \"2.00\"\n    },\n    \"pseudoKey\": \"crewe-fleetwood\",\n    \"service\": \"Betin\",\n    \"region\": \"Kenya\",\n    \"drawPrice\": \"3.45\",\n    \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17587558\"\n},\n{\n    \"team1\": {\n        \"name\": \"Crewe\",\n        \"price\": \"3.54\"\n    },\n    \"team2\": {\n        \"name\": \"Fleetwood\",\n        \"price\": \"1.94\"\n    },\n    \"pseudoKey\": \"crewe-fleetwood\",\n    \"service\": \"Betika\",\n    \"region\": \"Kenya\",\n    \"drawPrice\": \"3.31\",\n    \"url\": \"https://www.betika.com/mobile/dist/#/prebets/markets/535448\"\n},\n{\n    \"team1\": {\n        \"name\": \"Crewe\",\n        \"price\": \"3.82\"\n    },\n    \"team2\": {\n        \"name\": \"Fleetwood\",\n        \"price\": \"2.1\"\n    },\n    \"pseudoKey\": \"crewe-fleetwood\",\n    \"service\": \"1XBet\",\n    \"region\": \"Kenya\",\n    \"drawPrice\": \"3.52\",\n    \"url\": *\"https://1xbet.co.ke/en/line/Football/119237-England-League-Cup/27264633-Crewe-Alexandra-Fleetwood-Town/*\"\n}\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "league_cup",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\":\"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/leaguecup",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "leaguecupmatches",
    "group": "league_cup",
    "permission": [
      {
        "name": "authenticate user"
      }
    ],
    "description": "<p>Retrieves all EFL(league cup) matches</p>",
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sport",
            "description": "<p>The type of sport</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "league",
            "description": "<p>The league name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The match</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "matchInstances",
            "description": "<p>Similar match in different sites</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "   HTTPS 200 OK\n   [\n    {\n      \"_id\": \"5b4f06025d425139b780417f\",\n      \"pseudoKey\": \"crewe-fleetwood\",\n      \"sport\": \"Soccer\",\n      \"league\": \"League Cup\",\n      \"date\": \"2018-08-14T18:45:00.000Z\",\n      \"team1\": \"Crewe\",\n      \"team2\": \"Fleetwood\",\n      \"matchInstances\": [\n          {\n              \"team1\": {\n                  \"name\": \"Crewe\",\n                  \"price\": \"3.71\"\n              },\n              \"team2\": {\n                  \"name\": \"Fleetwood\",\n                  \"price\": \"2.04\"\n              },\n              \"pseudoKey\": \"crewe-fleetwood\",\n              \"service\": \"Sportpesa\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"3.44\",\n              \"url\": \"https://www.sportpesa.co.ke/games/1411326/markets?league=76298&top=1&sid=4851&*sportId=1\"\n          },\n          {\n              \"team1\": {\n                  \"name\": \"Crewe\",\n                  \"price\": \"3.70\"\n              },\n              \"team2\": {\n                  \"name\": \"Fleetwood\",\n                  \"price\": \"2.00\"\n              },\n              \"pseudoKey\": \"crewe-fleetwood\",\n              \"service\": \"Betin\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"3.45\",\n              \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17587558\"\n          },\n          {\n              \"team1\": {\n                  \"name\": \"Crewe\",\n                  \"price\": \"3.54\"\n              },\n              \"team2\": {\n                  \"name\": \"Fleetwood\",\n                  \"price\": \"1.94\"\n              },\n              \"pseudoKey\": \"crewe-fleetwood\",\n              \"service\": \"Betika\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"3.31\",\n              \"url\": \"https://www.betika.com/mobile/dist/#/prebets/markets/535448\"\n          },\n          {\n              \"team1\": {\n                  \"name\": \"Crewe\",\n                  \"price\": \"3.82\"\n              },\n              \"team2\": {\n                  \"name\": \"Fleetwood\",\n                  \"price\": \"2.1\"\n              },\n              \"pseudoKey\": \"crewe-fleetwood\",\n              \"service\": \"1XBet\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"3.52\",\n              \"url\": *\"https://1xbet.co.ke/en/line/Football/119237-England-League-Cup/27264633-Crewe-Alexandra-Fleetwood-Town/*\"\n          }\n      ],\n      \"__v\": 0\n  },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "league_cup",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\":\"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ligue1/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "ligue1match",
    "group": "ligue1",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Retrieves the given lique1 match</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n{\n team1: {\n name: \"Angers\",\n price: \"2.36\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.44\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"1XBet\",\n region: \"Kenya\",\n drawPrice: \"3.3\",\n url: \"https://1xbet.co.ke/en/line/Football/12821-France-Ligue-1/26994339-Angers-SCO-Nimes-Olympique/\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.33\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.37\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Betika\",\n region: \"Kenya\",\n drawPrice: \"3.28\",\n url: \"https://www.betika.com/mobile/dist/#/prebets/markets/534772\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.30\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.30\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Betway\",\n region: \"Kenya\",\n drawPrice: \"3.21\",\n url: \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=facc99ea-bf73-e811-80dc-00155d4cf15f&* marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.30\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.30\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Betin\",\n region: \"Kenya\",\n drawPrice: \"3.20\",\n url: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17533209\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.32\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.30\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Sportpesa\",\n region: \"Kenya\",\n drawPrice: \"3.19\",\n url: \"https://www.sportpesa.co.ke/games/1409490/markets?league=76062&top=1&sid=2738&sportId=1\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "ligue1"
  },
  {
    "type": "get",
    "url": "/ligue1/",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "ligue1matches",
    "group": "ligue1",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Retrieves all ligue1 matches</p>",
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n{\n _id: \"5b4bd463beb8e63b65e7ac93\",\n pseudoKey: \"angers-nimes\",\n sport: \"Soccer\",\n league: \"Ligue 1\",\n date: \"2018-08-11T18:00:00.000Z\",\n team1: \"Angers\",\n team2: \"Nimes\",\n matchInstances: [\n{\n team1: {\n name: \"Angers\",\n price: \"2.36\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.44\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"1XBet\",\n region: \"Kenya\",\n drawPrice: \"3.3\",\n url: \"https://1xbet.co.ke/en/line/Football/12821-France-Ligue-1/26994339-Angers-SCO-Nimes-Olympique/\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.33\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.37\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Betika\",\n region: \"Kenya\",\n drawPrice: \"3.28\",\n url: \"https://www.betika.com/mobile/dist/#/prebets/markets/534772\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.30\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.30\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Betway\",\n region: \"Kenya\",\n drawPrice: \"3.21\",\n url: \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=facc99ea-bf73-e811-80dc-00155d4cf15f&* *  marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.30\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.30\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Betin\",\n region: \"Kenya\",\n drawPrice: \"3.20\",\n url: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17533209\"\n},\n{\n team1: {\n name: \"Angers\",\n price: \"2.32\"\n},\n team2: {\n name: \"Nimes\",\n price: \"3.30\"\n},\n pseudoKey: \"angers-nimes\",\n service: \"Sportpesa\",\n region: \"Kenya\",\n drawPrice: \"3.19\",\n url: \"https://www.sportpesa.co.ke/games/1409490/markets?league=76062&top=1&sid=2738&sportId=1\"\n}\n],\n __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "ligue1"
  },
  {
    "type": "get",
    "url": "/count/:league",
    "title": "Match count per league",
    "version": "1.0.0",
    "name": "matchcount",
    "group": "match_count",
    "permission": [
      {
        "name": "authenticate user"
      }
    ],
    "description": "<p>Retrieves the number of total matches in the given league</p>",
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response",
          "content": "   HTTPS 200\n[\n  {\n      \"_id\": \"\",\n      \"count\": 87\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "match_count"
  },
  {
    "type": "get",
    "url": "/premier-league/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "premierleaguematch",
    "group": "premier_league",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Retrieves the given premier league match</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n   HTTPS 200 OK\n   {\n    \"team1\": {\n        \"name\": \"Man utd\",\n        \"price\": \"1.37\"\n    },\n    \"team2\": {\n        \"name\": \"Leicester\",\n        \"price\": \"8.79\"\n    },\n    \"pseudoKey\": \"manutd-leicester\",\n    \"service\": \"Betway\",\n    \"region\": \"Kenya\",\n    \"drawPrice\": \"4.81\",\n    \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?*eventId=63a8455a-c36f-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "premier_league",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\":\"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/premier-league",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "premierleaguematches",
    "group": "premier_league",
    "permission": [
      {
        "name": "authenticate user"
      }
    ],
    "description": "<p>Retrieves all premier league matches</p>",
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sport",
            "description": "<p>The type of sport</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "league",
            "description": "<p>The league name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The match</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "matchInstances",
            "description": "<p>Similar match in different sites</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "   HTTPS 200 OK\n   [\n    {\n      \"_id\": \"5b44b1c6fdaeeb0a9d4004ce\",\n      \"pseudoKey\": \"manutd-leicester\",\n      \"sport\": \"Soccer\",\n      \"league\": \"Premier League\",\n      \"date\": \"2018-08-10T19:00:00.000Z\",\n      \"team1\": \"Man utd\",\n      \"team2\": \"Leicester\",\n      \"matchInstances\": [\n          {\n              \"team1\": {\n                  \"name\": \"Man utd\",\n                  \"price\": \"1.37\"\n              },\n              \"team2\": {\n                  \"name\": \"Leicester\",\n                  \"price\": \"8.79\"\n              },\n              \"pseudoKey\": \"manutd-leicester\",\n              \"service\": \"Betway\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"4.81\",\n              \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?* * *eventId=63a8455a-c36f-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n          },\n          {\n              \"team1\": {\n                  \"name\": \"Man Utd\",\n                  \"price\": \"1.38\"\n              },\n              \"team2\": {\n                  \"name\": \"Leicester\",\n                  \"price\": \"8.70\"\n              },\n              \"pseudoKey\": \"manutd-leicester\",\n              \"service\": \"Betin\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"4.70\",\n              \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=16701399\"\n          }\n      ],\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5b44b1c6fdaeeb0a9d4004cf\",\n      \"pseudoKey\": \"newcastle-tottenham\",\n      \"sport\": \"Soccer\",\n      \"league\": \"Premier League\",\n      \"date\": \"2018-08-11T11:30:00.000Z\",\n      \"team1\": \"Newcastle\",\n      \"team2\": \"Tottenham\",\n      \"matchInstances\": [\n          {\n              \"team1\": {\n                  \"name\": \"Newcastle\",\n                  \"price\": \"4.17\"\n              },\n              \"team2\": {\n                  \"name\": \"Tottenham\",\n                  \"price\": \"1.86\"\n              },\n              \"pseudoKey\": \"newcastle-tottenham\",\n              \"service\": \"Betway\",\n               \"region\": \"Kenya\",\n              \"drawPrice\": \"3.66\",\n              \"url\": \"https://www.betway.co.ke/Bet/EventMultiMarket?*eventId=c25bccc8-8670-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n          },\n          {\n              \"team1\": {\n                  \"name\": \"Newcastle\",\n                  \"price\": \"4.25\"\n              },\n              \"team2\": {\n                  \"name\": \"Tottenham\",\n                  \"price\": \"1.88\"\n              },\n              \"pseudoKey\": \"newcastle-tottenham\",\n              \"service\": \"Betin\",\n              \"region\": \"Kenya\",\n              \"drawPrice\": \"3.55\",\n              \"url\": \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=16701401\"\n          }\n      ],\n      \"__v\": 0\n  },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "premier_league",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\":\"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/serieA/:pseudoKey",
    "title": "Retrieve match",
    "version": "1.0.0",
    "name": "serieAmatch",
    "group": "serieA",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudoKey",
            "description": "<p>The match id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n {\n_id: \"5b7693228e494e2444bbc2d1\",\npseudoKey: \"cagliari-sassuolo\",\nsport: \"Soccer\",\nleague: \"Serie A\",\ndate: \"2018-08-26T18:30:00.000Z\",\nteam1: \"Cagliari\",\nteam2: \"Sassuolo\",\nmatchInstances: [\n{\nteam1: {\nname: \"Cagliari\",\nprice: \"2.20\"\n},\nteam2: {\nname: \"Sassuolo\",\nprice: \"3.35\"\n},\npseudoKey: \"cagliari-sassuolo\",\nservice: \"Betin\",\nregion: \"Kenya\",\ndrawPrice: \"3.35\",\nurl: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18797601\"\n},\n{\nteam1: {\nname: \"Cagliari\",\nprice: \"2.22\"\n},\nteam2: {\nname: \"Sassuolo\",\nprice: \"3.35\"\n},\npseudoKey: \"cagliari-sassuolo\",\nservice: \"Sportpesa\",\nregion: \"Kenya\",\ndrawPrice: \"3.35\",\nurl: \"https://www.sportpesa.co.ke/games/1422980/markets?league=67358&top=1&sid=5135&sportId=1\"\n},\n{\nteam1: {\nname: \"Cagliari\",\nprice: \"2.21\"\n},\nteam2: {\nname: \"Sassuolo\",\nprice: \"3.34\"\n},\npseudoKey: \"cagliari-sassuolo\",\nservice: \"Betway\",\nregion: \"Kenya\",\ndrawPrice: \"3.36\",\nurl: \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=undefined&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n},\n{\nteam1: {\nname: \"Cagliari\",\nprice: \"2.32\"\n},\nteam2: {\nname: \"Sassuolo\",\nprice: \"3.52\"\n},\npseudoKey: \"cagliari-sassuolo\",\nservice: \"1XBet\",\nregion: \"Kenya\",\ndrawPrice: \"3.36\",\nurl: \"https://1xbet.co.ke/en/line/Football/110163-Italy-Serie-A/29825783-Cagliari-Calcio-Sassuolo-Calcio/\"\n}\n],\n__v: 0\n},\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "serieA"
  },
  {
    "type": "get",
    "url": "/serieA/",
    "title": "Retrieve matches",
    "version": "1.0.0",
    "name": "serieAmatches",
    "group": "serieA",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "examples": [
      {
        "title": "Javascript",
        "content": "$http.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n$http.get(url)\n   .success((res,status) => doSomethingHere())\n   .error((err,status) => doSomethingHere())",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team1",
            "description": "<p>The first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team2",
            "description": "<p>The second team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The bookmaker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Geographical region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drawPrice",
            "description": "<p>Draw odds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The match url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "\n     HTTPS 200 OK\n[\n {\nteam1: {\nname: \"Chievo\",\nprice: \"14.00\"\n},\nteam2: {\nname: \"Juventus\",\nprice: \"1.23\"\n},\npseudoKey: \"chievo-juventus\",\nservice: \"Betin\",\nregion: \"Kenya\",\ndrawPrice: \"6.00\",\nurl: \"https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18068141\"\n},\n{\nteam1: {\nname: \"Chievo\",\nprice: \"11.81\"\n},\nteam2: {\nname: \"Juventus\",\nprice: \"1.29\"\n},\npseudoKey: \"chievo-juventus\",\nservice: \"Sportpesa\",\nregion: \"Kenya\",\ndrawPrice: \"5.37\",\nurl: \"https://www.sportpesa.co.ke/games/1422762/markets?league=67358&top=1&sid=5303&sportId=1\"\n},\n{\nteam1: {\nname: \"Chievo\",\nprice: \"13.49\"\n},\nteam2: {\nname: \"Juventus\",\nprice: \"1.24\"\n},\npseudoKey: \"chievo-juventus\",\nservice: \"Betway\",\nregion: \"Kenya\",\ndrawPrice: \"5.94\",\nurl: \"https://www.betway.co.ke/Bet/EventMultiMarket?eventId=undefined&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001\"\n},\n{\nteam1: {\nname: \"Chievo\",\nprice: \"16\"\n},\nteam2: {\nname: \"Juventus\",\nprice: \"1.26\"\n},\npseudoKey: \"chievo-juventus\",\nservice: \"1XBet\",\nregion: \"Kenya\",\ndrawPrice: \"6.45\",\nurl: \"https://1xbet.co.ke/en/line/Football/110163-Italy-Serie-A/29330901-ChievoVerona-Juventus/\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/match.js",
    "groupTitle": "serieA"
  }
] });
