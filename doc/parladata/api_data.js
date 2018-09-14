define({ "api": [
  {
    "type": "get",
    "url": "getAllMPsSpeeches/{?date}/",
    "title": "All MPs' speeches",
    "name": "getAllMPsSpeeches",
    "group": "MPs",
    "description": "<p>This function returns all MPs' speeches up until today (or an optional date) as an array of objects.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Date up until which speeches should be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "speech",
            "description": "<p>A speech.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speech.valid_from",
            "description": "<p>Start time of the speech's validity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speech.start_time",
            "description": "<p>Start time of the speech's transcript.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speech.valid_to",
            "description": "<p>End time of the speech's validity (expiration date).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "speech.order",
            "description": "<p>The speech's order in its transcript.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speech.content",
            "description": "<p>The speech's content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "speech.session",
            "description": "<p>The speech's session Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "speech.speaker",
            "description": "<p>The speech's speaker Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "speech.end_time",
            "description": "<p>Placeholder field for a piece of data we do not possess yet. Returns null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "speech.party",
            "description": "<p>The speech's speaker's party Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "speech.id",
            "description": "<p>The speech's Parladata id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[{\n   \"valid_from\": \"2014-08-01T02:00:00\",\n   \"start_time\": \"2014-08-01T02:00:00\",\n   \"valid_to\": \"2017-02-06T01:59:52.624\",\n   \"order\": 30,\n   \"content\": \"Najlep\\u0161a hvala.\\nIzvolite.\",\n   \"session\": 7610,\n   \"speaker\": 33,\n   \"end_time\": null,\n   \"party\": 1,\n   \"id\": 880492\n }, {\n   \"valid_from\": \"2014-08-01T02:00:00\",\n   \"start_time\": \"2014-08-01T02:00:00\",\n   \"valid_to\": \"9999-12-31T23:59:59.999\",\n   \"order\": 180,\n   \"content\": \"Hvala lepa, ponovno. \\nPoglejte, gospa predsedujo\\u010da, vi ste povedali, da ste na osnovi ustne obrazlo\\u017eitve Zakonodajno-pravne slu\\u017ebe napisali tisto, kar imate in kar berete. Nas ta va\\u0161a interpretacija ne zadovolji, ker se mi zdi nekorektno, da sku\\u0161a predsedujo\\u010di skupaj z generalno sekretarko Dr\\u017eavnega zbora tudi zdaj, ko za to ni potrebe, sku\\u0161a stvari peljati na nek neposlovni\\u0161ki na\\u010din in nas peljati preko to\\u010dk dnevnega reda v dvomu, da je zadeva pripravljena v skladu z zakonom. Mislim, da je to nekorektno. \\nPrva naloga predsedujo\\u010dega Dr\\u017eavnega zbora in generalne sekretarke Dr\\u017eavnega zbora je, da se postopki speljejo korektno, da na njih ni sence dvoma, da nih\\u010de ne dvomi, da je karkoli v tem postopku narobe. In zato predlagamo oziroma zahtevamo, da dobimo pisno mnenje Zakonodajno-pravne slu\\u017ebe. Zato zahtevamo. Tisto, kar so na\\u0161e obveznosti, ne skrbite, jih bomo izpolnili , ko bo \\u010das za to in ko bo soglasje v Dr\\u017eavnem zboru za to. Ta trenutek ni. Zato predlagam, da, ne vem, namesto, da mu\\u010dite dr\\u017eavni zbor, da naredite to prekinitev, da naredite tisto, kar se pri\\u010dakuje od predsedujo\\u010dega, to se pravi, da zagotovi vse podlage, ki so potrebne za to, da se pri tej to\\u010dki opravi odlo\\u010danje, da se opravi odlo\\u010danje tudi pri naslednjih dveh to\\u010dkah dnevnega reda, to, da bomo imeli mandatno komisijo, ki bo sestavljena res v skladu z zakonom, in da bodo odlo\\u010ditve skladne z zakonom o poslancih. To materijo ureja ve\\u010d aktov, poslovnik je en od aktov, ampak neposredno dolo\\u010dbo o tem, kako mora biti Mandatno-volilna komisija sestavljena, pa dolo\\u010da zakon. Vi nam ne govoriti in razlagati pravic poslanske skupine in poslancev, mi zahtevamo interpretacijo oziroma mnenje Zakonodajno-pravne slu\\u017ebe v zvezi z dolo\\u010dbo 7. \\u010dlena Zakona o poslancih. Mi ne \\u017eelimo va\\u0161e interpretacije, gospa, mi ne \\u017eelimo interpretacije generalne sekretarke Dr\\u017eavnega zbora, mi \\u017eelimo interpretacijo, obrazlo\\u017eitev, obrazlo\\u017eeno mnenje Zakonodajno-pravne slu\\u017ebe Dr\\u017eavnega zbora. In ni\\u010d drugega. Od tam naprej pa se bomo odlo\\u010dili, kako bomo ravnali, ko bomo to mnenje dobili. Hvala lepa.\",\n   \"session\": 6684,\n   \"speaker\": 78,\n   \"end_time\": null,\n   \"party\": 5,\n   \"id\": 597620\n }]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllMPsSpeeches",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllMPsSpeeches/5.2.2017",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getAllTimeMemberships",
    "title": "Get all membership times of all MPs",
    "name": "getAllTimeMemberships",
    "group": "MPs",
    "description": "<p>This function returns a list of objects representing membership streaks for individual MPs. Iterating through these objects will give you a complete picture of when an MP was a member of the national assembly.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.start_time",
            "description": "<p>Membership start time (from).</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.end_time",
            "description": "<p>Membership end time (to).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>The person's Parladata id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"start_time\": \"2014-08-01T00:00:00\",\n        \"end_time\": null,\n        \"id\": 69\n    }, {\n        \"start_time\": \"2014-08-01T00:00:00\",\n        \"end_time\": null,\n        \"id\": 80\n    }, {\n        \"start_time\": \"2014-08-01T00:00:00\",\n        \"end_time\": null,\n        \"id\": 82\n    }, {\n        \"start_time\": \"2014-08-01T00:00:00\",\n        \"end_time\": null,\n        \"id\": 3\n    }, {\n        \"start_time\": \"2014-08-01T00:00:00\",\n        \"end_time\": null,\n        \"id\": 14\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllTimeMemberships",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getBallotsCounterOfPerson/{id}/{?date}",
    "title": "Get MP's ballot counts",
    "name": "getBallotsCounterOfPerson",
    "group": "MPs",
    "description": "<p>This function returns a list of objects representing monthly ballot counts for a specific MP.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of BalloutCounter objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.ni",
            "description": "<p>Number of times the MP didn't participate in a voting event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.proti",
            "description": "<p>Number of times the MP voted against the motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.date_ts",
            "description": "<p>UTF-8 date for easier sorting. The first of the month signifies the month in which we're counting ballots.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.za",
            "description": "<p>Number of times the MP voted for the motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.kvorum",
            "description": "<p>Number of times the MP abstained.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.date",
            "description": "<p>Human-readable &quot;Slovenian&quot; date. The first of the month signifies the month in which we're counting ballots.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.total",
            "description": "<p>Total number of ballots for this person</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"ni\": 2,\n        \"proti\": 3,\n        \"date_ts\": \"2014-08-01T00:00:00\",\n        \"za\": 7,\n        \"kvorum\": 5,\n        \"date\": \"01.08.2014\",\n        \"total\": 17\n    }, {\n        \"ni\": 2,\n        \"proti\": 8,\n        \"date_ts\": \"2014-09-01T00:00:00\",\n        \"za\": 2,\n        \"kvorum\": 3,\n        \"date\": \"01.09.2014\",\n        \"total\": 15\n    }, {\n        \"ni\": 1,\n        \"proti\": 1,\n        \"date_ts\": \"2014-10-01T00:00:00\",\n        \"za\": 2,\n        \"kvorum\": 0,\n        \"date\": \"01.10.2014\",\n        \"total\": 4\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getBallotsCounterOfPerson/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getBallotsCounterOfPerson/2/12.12.2014",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getMPParty/{id}/",
    "title": "MP's party",
    "name": "getMPParty",
    "group": "MPs",
    "description": "<p>This function returns MP's party affiliation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>MP's Parladata id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acronym",
            "description": "<p>Party acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name of the party.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"acronym\": \"SDS\",\n    \"name\": \"PS Slovenska Demokratska Stranka\",\n    \"id\": 5\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPParty",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getMPSpeechesIDs/{id}/{?date}",
    "title": "Get all MP's speeches ids",
    "name": "getMPSpeechesIDs",
    "group": "MPs",
    "description": "<p>This function returns a list of all MP's speeches up until a specific date. If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of speech ids as integers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[592488, 580811, 567944, 567950, 538605]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPSpeechesIDs/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPSpeechesIDs/2/12.12.2014",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getMPStatic/{id}/{?date}",
    "title": "MP's static info",
    "name": "getMPStatic",
    "group": "MPs",
    "description": "<p>This function returns an object with all &quot;static&quot; data belonging to an MP. By static we mean that it is entered and maintained by hand and rarely, if ever, changes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>MPs Parladata id.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gov_id",
            "description": "<p>MP's &quot;government id&quot;. The ID this particular MP is given on http://www.dz-rs.si</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "voters",
            "description": "<p>The number of voters the MP was elected with.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acronym",
            "description": "<p>MP's party acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mandates",
            "description": "<p>Total number of mandates this MP has held, including (if applicable) their current one.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "party_id",
            "description": "<p>MP's current party Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Working bodies the MP is a member of.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the working body.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Working body's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>MPs education.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "working_bodies_functions",
            "description": "<p>Functions the MP holds in working bodies.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "working_bodies_functions.role",
            "description": "<p>MP's role in this working body.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "working_bodies_functions.id",
            "description": "<p>Working body's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previous_occupation",
            "description": "<p>MP's previous occupation. Previous in this case means before their current term, not before their political career.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "district",
            "description": "<p>Parladata id of district (or districts) the MP was elected in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>MP's gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "age",
            "description": "<p>MP's age.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "social",
            "description": "<p>MP's social profiles.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social.twitter",
            "description": "<p>MP's Twitter profile. Returns false (as type boolean) if no profile is on record.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social.facebook",
            "description": "<p>MP's Facebook profile. Returns false (as boolean) if no profile is on record.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social.linkedin",
            "description": "<p>MP's LinkedIn profile. Returns false (as boolean) if no profile is on record.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "party",
            "description": "<p>Full name of MP's party.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"gov_id\": \"P244\",\n    \"voters\": 2043,\n    \"acronym\": \"SDS\",\n    \"mandates\": 1,\n    \"party_id\": 5,\n    \"groups\": [{\n        \"name\": \"Komisija za poslovnik\",\n        \"id\": 14\n    }, {\n        \"name\": \"Odbor za notranje zadeve, javno upravo in lokalno samoupravo\",\n        \"id\": 23\n    }, {\n        \"name\": \"Odbor za zdravstvo\",\n        \"id\": 27\n    }, {\n        \"name\": \"Odbor za finance in monetarno politiko\",\n        \"id\": 17\n    }, {\n        \"name\": \"Odbor za izobra\\u017eevanje, znanost, \\u0161port in mladino\",\n        \"id\": 20\n    }, {\n        \"name\": \"Preiskovalna komisija o ugotavljanju zlorab v slovenskem zdravstvenem sistemu na podro\\u010dju prodaje in nakupa \\u017eilnih opornic\",\n        \"id\": 106\n    }],\n    \"education\": \"specialistka javne uprave\",\n    \"working_bodies_functions\": [{\n        \"role\": \"vice_president\",\n        \"org_id\": 27\n    }],\n    \"previous_occupation\": \"direktorica ob\\u010dinske uprave \",\n    \"name\": \"Nada Brinov\\u0161ek\",\n    \"district\": [35],\n    \"gender\": \"f\",\n    \"age\": 55,\n    \"social\": {\n        \"twitter\": \"https://twitter.com/nadabrinovsek\",\n        \"facebook\": \"https://www.facebook.com/nada.brinovsek\",\n        \"linkedin\": false\n    },\n    \"party\": \"PS Slovenska Demokratska Stranka\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPStatic/12",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPStatic/12/21.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getMPs/{?date}",
    "title": "List of MPs active today",
    "name": "getMPs",
    "group": "MPs",
    "description": "<p>This function returns all MPs active on a given day. It returns an array of MP objects.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mp",
            "description": "<p>MP object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.gov_id",
            "description": "<p>MP's &quot;government id&quot;. The ID this particular MP is given on http://www.dz-rs.si</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.hovorific_suffix",
            "description": "<p>MP's honorific suffix, such as &quot;PhD&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.image",
            "description": "<p>URL to MPs image on http://www.dz-rs.si.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.patronymic_name",
            "description": "<p>MP's patronymic name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.sort_name",
            "description": "<p>MP's sorting name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mp.id",
            "description": "<p>MP's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.biography",
            "description": "<p>MP's biography if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.classification",
            "description": "<p>MP's classification if applicable. If not returns empty string. Sometimes used for internal sorting purposes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "mp.district",
            "description": "<p>Name of the district (or districts) the MP was elected in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.additional_name",
            "description": "<p>MP's additional name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mp.voters",
            "description": "<p>The number of voters the MP was elected with.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.honorific_prefix",
            "description": "<p>MP's honorific prefix name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.given_name",
            "description": "<p>MP's given name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.email",
            "description": "<p>MP's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.acronym",
            "description": "<p>MP's party acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.membership",
            "description": "<p>MP's current party.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mp.party_id",
            "description": "<p>MP's current party Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "mp.active",
            "description": "<p>MP's active state.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.family_name",
            "description": "<p>MP's family name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.name",
            "description": "<p>MP's full/display name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.gov_picture_url",
            "description": "<p>URL to MPs image on http://www.dz-rs.si.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.summary",
            "description": "<p>MP's summary if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mp.birth_date",
            "description": "<p>MP's date of birth. Returns time as well, so that all objects are datetime, but the time can be ignored.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[{\n    \"gov_id\": \"P280\",\n    \"honorific_suffix\": \"\",\n    \"image\": \"http://www.dz-rs.si/wps/PA_DZ-LN-Osebe/CommonRes?idOseba=P280\",\n    \"patronymic_name\": \"\",\n    \"sort_name\": \"\",\n    \"id\": 69,\n    \"biography\": \"\",\n    \"classification\": \"\",\n    \"district\": [\"Maribor VII\"],\n    \"additional_name\": \"\",\n    \"voters\": 1245,\n    \"honorific_prefix\": \"\",\n    \"given_name\": \"Uro\\u0161\",\n    \"email\": \"uros.prikl@dz-rs.si\",\n    \"acronym\": \"DeSUS\",\n    \"membership\": \"PS Demokratska Stranka Upokojencev Slovenije\",\n    \"party_id\": 3,\n    \"active\": true,\n    \"family_name\": \"Prikl\",\n    \"name\": \"Uro\\u0161 Prikl\",\n    \"gov_picture_url\": \"http://www.dz-rs.si/wps/PA_DZ-LN-Osebe/CommonRes?idOseba=P280\",\n    \"gender\": \"male\",\n    \"death_date\": \"None\",\n    \"gov_url\": \"http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/PoslankeInPoslanci/poslanec?idOseba=P280\",\n    \"summary\": \"\",\n    \"birth_date\": \"1972-09-18 01:00:00\"\n}, {\n    \"gov_id\": \"P289\",\n    \"honorific_suffix\": \"\",\n    \"image\": \"http://www.dz-rs.si/wps/PA_DZ-LN-Osebe/CommonRes?idOseba=P289\",\n    \"patronymic_name\": \"\",\n    \"sort_name\": \"\",\n    \"id\": 80,\n    \"biography\": \"\",\n    \"classification\": \"\",\n    \"district\": [\"Ljubljana - center\"],\n    \"additional_name\": \"\",\n    \"voters\": 1421,\n    \"honorific_prefix\": \"\",\n    \"given_name\": \"Violeta\",\n    \"email\": \"violeta.tomic@dz-rs.si\",\n    \"acronym\": \"ZL\",\n    \"membership\": \"PS Zdru\\u017eena Levica\",\n    \"party_id\": 8,\n    \"active\": true,\n    \"family_name\": \"Tomi\\u0107\",\n    \"name\": \"Violeta Tomi\\u0107\",\n    \"gov_picture_url\": \"http://www.dz-rs.si/wps/PA_DZ-LN-Osebe/CommonRes?idOseba=P289\",\n    \"gender\": \"female\",\n    \"death_date\": \"None\",\n    \"gov_url\": \"http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/PoslankeInPoslanci/poslanec?idOseba=P289\",\n    \"summary\": \"\",\n    \"birth_date\": \"1963-01-21 01:00:00\"\n}]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPs",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getMPs/21.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getMembersWithFunction/",
    "title": "MPs with functions in DZ",
    "name": "getMembersWithFunction",
    "group": "MPs",
    "description": "<p>This function returns all MPs that have a function in DZ. That means president or vice president of the national council.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "members_with_function",
            "description": "<p>Parladata ids of MPs with functions in DZ.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"members_with_function\": [\n        29,\n        11,\n        62\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersWithFunction/",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getMembershipsOfMember/{id}/{?date}",
    "title": "Get memberships of an MP",
    "name": "getMembershipsOfMember",
    "group": "MPs",
    "description": "<p>This function returns an object with keys representing groups of organisations this person belongs to. If no date is specified it is assumed the date is today, otherwise the results returned correspond to the state of the MPs memberships on that specific date.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.delegacija",
            "description": "<p>List of membership objects in &quot;delegations&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.delegacija.url",
            "description": "<p>The organizations public URL if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.delegacija.org_type",
            "description": "<p>The organization type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.delegacija.org_id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.delegacija.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.odbor",
            "description": "<p>List of membership objects in &quot;delegations&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.odbor.url",
            "description": "<p>The organizations public URL if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.odbor.org_type",
            "description": "<p>The organization type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.odbor.org_id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.odbor.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.poslanska_skupina",
            "description": "<p>List of membership objects in &quot;delegations&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.poslanska_skupina.url",
            "description": "<p>The organizations public URL if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.poslanska_skupina.org_type",
            "description": "<p>The organization type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.poslanska_skupina.org_id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.poslanska_skupina.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.komisija",
            "description": "<p>List of membership objects in &quot;delegations&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.komisija.url",
            "description": "<p>The organizations public URL if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.komisija.org_type",
            "description": "<p>The organization type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.komisija.org_id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.komisija.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.skupina_prijateljstva",
            "description": "<p>List of membership objects in &quot;delegations&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.skupina_prijateljstva.url",
            "description": "<p>The organizations public URL if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.skupina_prijateljstva.org_type",
            "description": "<p>The organization type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.skupina_prijateljstva.org_id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.skupina_prijateljstva.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.members",
            "description": "<p>List of Parladata ids for all members of this PG in the current timespan.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.start_date",
            "description": "<p>This range's start date (from).</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.end_date",
            "description": "<p>This range's end date (to).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"delegacija\": [{\n        \"url\": \"http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/StalnaDelegacija?idSD=SD003\",\n        \"org_type\": \"delegacija\",\n        \"org_id\": 32,\n        \"name\": \"Delegacija Dr\\u017eavnega zbora v Parlamentarni skup\\u0161\\u010dini Organizacije za varnost in sodelovanje v Evropi\"\n    }],\n    \"odbor\": [{\n        \"url\": null,\n        \"org_type\": \"odbor\",\n        \"org_id\": 25,\n        \"name\": \"Odbor za pravosodje\"\n    }, {\n        \"url\": null,\n        \"org_type\": \"odbor\",\n        \"org_id\": 23,\n        \"name\": \"Odbor za notranje zadeve, javno upravo in lokalno samoupravo\"\n    }, {\n        \"url\": null,\n        \"org_type\": \"odbor\",\n        \"org_id\": 22,\n        \"name\": \"Odbor za kulturo\"\n    }, {\n        \"url\": null,\n        \"org_type\": \"odbor\",\n        \"org_id\": 24,\n        \"name\": \"Odbor za obrambo\"\n    }],\n    \"poslanska skupina\": [{\n        \"url\": \"https://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/PoslanskaSkupina?idPS=PS012\",\n        \"org_type\": \"poslanska skupina\",\n        \"org_id\": 5,\n        \"name\": \"PS Slovenska Demokratska Stranka\"\n    }],\n    \"komisija\": [{\n        \"url\": null,\n        \"org_type\": \"komisija\",\n        \"org_id\": 15,\n        \"name\": \"Mandatno-volilna komisija\"\n    }],\n    \"skupina prijateljstva\": [{\n        \"url\": \"http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/SkupinaPrijateljstva?idSP=SP044\",\n        \"org_type\": \"skupina prijateljstva\",\n        \"org_id\": 79,\n        \"name\": \"Skupina prijateljstva z Veliko Britanijo\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembershipsOfMember/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembershipsOfMember/2/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getNumberOfAllMPAttendedSessions/{date}/",
    "title": "Percentage of attended sessions and votes",
    "name": "getNumberOfAllMPAttendedSessions",
    "group": "MPs",
    "description": "<p>This function returns all MPs and the percentage of sessions and votes they attended up until a given date.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Date up until which attendance percentage should be calculated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "votes",
            "description": "<p>MPs' vote attendance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": ":id",
            "description": "<p>MP's attendance. Key is MP's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sessions",
            "description": "<p>MPs' vote attendance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"votes\": {\n        \"2\": 75.10416666666667,\n        \"3\": 99.6875,\n        \"4\": 55.00000000000001,\n        \"7\": 64.0625,\n        \"8\": 93.64583333333333,\n        \"9\": 45.520833333333336,\n        \"10\": 71.77083333333333,\n    },\n    \"sessions\": {\n        \"2\": 87.17948717948718,\n        \"3\": 100.0,\n        \"4\": 64.1025641025641,\n        \"7\": 97.43589743589743,\n        \"8\": 97.43589743589743,\n        \"9\": 71.7948717948718,\n        \"10\": 79.48717948717949,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getNumberOfAllMPAttendedSessions/5.2.2017",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getNumberOfPersonsSessions/{id}/{?date}",
    "title": "Get MP's number of attended sessions",
    "name": "getNumberOfPersonsSessions",
    "group": "MPs",
    "description": "<p>This function returns an object with the calculated presence for a specific person up until a given date. If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.sessions_with_speeches",
            "description": "<p>The number of sessions this person spoke at at least once.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.all_sessions",
            "description": "<p>The number of sessions this person either voted or spoke at.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session_with_vote",
            "description": "<p>The number of sessions this person voted on at least once.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"sessions_with_speech\": 107,\n    \"all_sessions\": 119,\n    \"sessions_with_vote\": 39\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getNumberOfPersonsSessions/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getNumberOfPersonsSessions/2/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getSpeeches/{id}/{?date}",
    "title": "MP's speeches as objects",
    "name": "getSpeeches",
    "group": "MPs",
    "description": "<p>This function returns an array of objects, each object contains the corresponding speech's Parladata id and it's content. Optionally it returns speeches up until the optionally passed date.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>MP's Parladata id.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>An array of all speeches as objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.content",
            "description": "<p>The speach's content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.speech_id",
            "description": "<p>The speach's Parladata id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"content\": \"Hvala za besedo. \\nSlovenija je, vsaj po mojem mnenju, na neki to\\u010dki, poudarjam, na to\\u010dki, na kateri si nikakor ne moremo privo\\u0161\\u010diti bohotenja javnega sektorja oziroma javne uprave. Kot smo \\u017ee danes sli\\u0161ali v razpravi, imamo okrog 4 tiso\\u010d na\\u0161ih dr\\u017eavljanov, ki \\u017eivijo na robu socialne stiske, okrog 120 tiso\\u010d je brezposelnih, in te bo tudi to pove\\u010danje ministrstev kar precej obremenilo. \\u0160e najbolj obremenilo v negativnem smislu pa bo to na\\u0161e gospodarstvo. Moram re\\u010di, da sem pri\\u010dakovala, da si bo ta vlada zamislila nek koncept vitke in produktivne javne uprave. To so pri\\u010dakovali tudi na\\u0161i dr\\u017eavljani, ki so to tudi izrazili v svoji anketi, pa kljub temu, da nismo navedli oziroma ne navajam vira ankete, ampak je bila objavljena v ponedeljek zjutraj. Predlog sprememb zakona, ki ga imamo pred seboj, je tudi brez neke vsebinske analize in brez finan\\u010dne konstrukcije. Pravite, da ta reorganizacija oziroma pove\\u010danje \\u0161tevila ministrstev ne bo imelo finan\\u010dnih posledic. Pa \\u0161e kak\\u0161ne finan\\u010dne posledice bodo. Upam, da bomo dobili na koncu poro\\u010dilo o u\\u010dinkovitosti tega va\\u0161ega zakona, kot smo to tudi z na\\u0161o pobudo oziroma z vlo\\u017eitvijo tega amandmaja zahtevali. Menim, da bi morali razmi\\u0161ljati predvsem v smeri zdru\\u017eevanja ministrstev in se tako nekako poenotiti oziroma poistovetiti z drugimi dr\\u017eavami, kot je \\u017ee bilo danes v razpravi omenjeno, primerljivimi evropskimi dr\\u017eavami. \\u010ce pa bi \\u017ee razmi\\u0161ljali o pove\\u010danju \\u0161tevila ministrstev, bi bilo pa verjetno dobro, da bi razmi\\u0161ljali o ministrstvih, ki prina\\u0161ajo neko dodano vrednost, ministrstvo za gospodarske, evropske zadeve in tako naprej. Moram pa re\\u010di, da sem danes vesela, glede na to, da se v\\u010deraj na odboru za notranjo politiko nih\\u010de iz SMC ni oglasil, danes je pa zelo lepo, da ste se vsi razpravljavci prijavili. Hvala.\",\n        \"speech_id\": 524506\n    }, {\n        \"content\": \"Hvala za besedo. Lepo pozdravljeni vsi.\\nGlede na dano situacijo v kateri se nahajamo in vsi vemo, da ni prav ro\\u017enata, moram re\\u010di, da sem bila prepri\\u010dana, da bo vlada \\u0161la prav v nasprotno smer, se pravi v kr\\u010denje ministrstva ne pa v \\u0161iritev. Pri\\u010dakovala sem tudi, da se bo zavzela za koncept vitke in produktivne javne uprave. Prav tako mislim, da so to pri\\u010dakovali od te vlade tudi na\\u0161i dr\\u017eavljani, na\\u0161i davkopla\\u010devalci tako kot je rekel kolega Vinko, so se izrekli tudi na anketi, ki je bila objavljena v ponedeljek, kar nekaj \\u010dez 80% so proti \\u0161iritvi javne uprave. Nikakor pa se ne morem dati prepri\\u010dati oziroma me ne morete prepri\\u010dati, da ta predlog sprememb ne bo imel finan\\u010dnih posledic, kot je zapisano. Pri\\u010dakovala sem tudi neko finan\\u010dno konstrukcijo. \\u010ce povem za primer kako smo to delali na lokalni samoupravi. \\u010ce smo \\u017eeleli ustanoviti nek odbor s petimi \\u010dlani, smo morali narediti temeljito finan\\u010dno konstrukcijo in potem tudi \\u010dez \\u010das poro\\u010dati o realizaciji. Prav zanimivo bi bilo videti meseca januarja, februarja, ko bodo nova ministrstva prevzela vse svoje naloge, kak\\u0161na bi bila ta slika s finan\\u010dnega in seveda kadrovskega podro\\u010dja. Hvala.\",\n        \"speech_id\": 580777\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getSpeeches/12",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getSpeeches/12/21.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getSpeechesInRange/{id}/{date_from}/{date_to}",
    "title": "Get all MP's speeches between two dates",
    "name": "getSpeechesInRange",
    "group": "MPs",
    "description": "<p>This function returns an array of objects, each object contains the corresponding speech's Parladata id and it's content. All the speeches have happened between the two dates set in the url.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>An array of objects containing speech's content and Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.content",
            "description": "<p>The speach's content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.speech_id",
            "description": "<p>The speach's Parladata id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[{\n    \"content\": \"Hvala za besedo, predsedujo\\u010di. Lep pozdrav vsem tukaj v dvorani! \\nDejstvo je, da na\\u0161a vlada ne vlada. To ni samo moje mnenje, to je mnenje tudi mnogih, mnogih dr\\u017eavljanov. Oziroma bom rekla tako, da ko gre za sprejem nekih ukrepov, ki jih Vlada sprejema in s katerimi se \\u0161e bolj praznijo \\u017eepi na\\u0161ih dr\\u017eavljanov ali pa \\u0161e bolj slabijo na\\u0161e gospodarstvo, \\u0161e nekako kar ob\\u010dutimo delo te vlade. Ko pa gre za to, da bi naj ta vlada nekako za\\u0161\\u010ditila svoje dr\\u017eavljane, pa vidimo, da ta vlada tega nikakor ne zmore. \\nDanes smo \\u017ee ve\\u010dkrat sli\\u0161ali, da je na\\u0161a stranka pet ali \\u0161estkrat zahtevala sklic seje na to temo. Seveda smo sklicali seje na to temo, ampak vse to z namenom, da nekako izvemo, kak\\u0161no je mnenje, kak\\u0161ni so predlogi in pa seveda tudi ukrepi te vlade. \\u017dal moram re\\u010di, da smo poslu\\u0161ali, kot je \\u017ee bilo danes tudi ugotovljeno, v bistvu samo poro\\u010dila oziroma to, kaj se ne bo v Sloveniji zgodilo. Ampak moram re\\u010di, glej ga vraga, vse, kar je Vlada napovedala, da se ne bo zgodilo, se je zgodilo. \\n\\u010ce malo pogledamo po medijih oziroma \\u010dasopisih nekatere izjave predstavnikov vlade, lahko vidimo, da je avgusta predsednik Cerar rekel: \\\"Slovenija je pripravljena na prihod ve\\u010djega \\u0161tevila migrantov.\\\" Migranti so pa pre\\u010dkali hrva\\u0161ko-slovensko mejo preko nezavarovanih obmo\\u010dij, \\u0161li so \\u010dez gozdove, sadovnjake, prebivalci Rigonc pa so bili na koncu z \\u017eivci in potrpljenjem. Avgusta lanskega leta je dr\\u017eavni sekretar \\u0160efic rekel, da bodo migranti Slovenijo zgolj pre\\u010dkali. Ja, zgodila pa se je razlika v \\u0161tevilu migrantov. Septembra lanskega leta ste prav tako rekli: \\\"Poskrbljeno bo za varnost tako znotraj centrov kot v dr\\u017eavi\\\". Dogajali pa so se pretepi znotraj nastanitvenih centrov, za\\u017eiganje \\u0161otorov, kraje na bencinskih \\u010drpalkah in \\u010de so to za vas, gospod dr\\u017eavni sekretar, okoli\\u0161\\u010dine, ki so zna\\u010dilne za varno dr\\u017eavo, za nas to niso. V septembru je predsednik Vlade rekel: Slovenija se je odli\\u010dno soo\\u010dila z begunsko migrantsko krizo in postavila primer dobre prakse v EU. Zaskrbljeni ob\\u010dani obmejnih krajev, smeti in \\u010dlove\\u0161ki iztrebki ter seveda opozorila EU in gro\\u017enja z mini Schengenom, zaradi tega me mo\\u010dno skrbi, \\u010de je to dobra praksa za Slovenijo. Januarja leto\\u0161njega leta je predsednik Vlade tudi rekel, da so za postavljanje tehni\\u010dnih ovir krivi Hrvati. Prosim, to je va\\u0161a ocena, o tem ocenjujete vi. Rekla bom, da me je kar po\\u0161teno strah, ker je Vlada v mnenju za dana\\u0161njo sejo zapisala bojazen, da bo Republika Slovenija prejela nazaj vse migrante, ki jih bodo v ciljnih dr\\u017eavah zavrnili, je odve\\u010d. Glede na vse navedbe prej, ki sem jih prebrala in ne dr\\u017eijo, me mo\\u010dno skrbi, da bomo vse te migrante pa\\u010d dobili oziroma se bo to zgodilo. \\nKo smo na mati\\u010dnih delovnih telesih opozarjali na migrantsko krizo ste nam nekako vsi o\\u010ditali, da se gremo populizem. Ko je na\\u0161 predsednik, predsednik na\\u0161e stranke, ob koncu avgusta podal sedem ukrepov za re\\u0161itev iz teh krize, jih je Vlada lepo in \\u010dedno prezrla, Evropa pa jih je seveda malo kasneje tudi vse povzela. \\u010ce grem \\u0161e naprej, konec oktobra se predsednik na\\u0161e stranke ni udele\\u017eil seje Sveta za nacionalno varnost. V pismu, ki ga je poslal Svetu, je opozoril na vse napake te vlade in podal osem predlogov oziroma ukrepov. Predlagal je: da Slovenija oblikuje operativno koordinacijsko skupino za obvladovanje migrantskih valov po vzoru koordinacijske skupine iz leta 1991; da Slovenija vzpostavi tehni\\u010dne mo\\u017enosti za nastavitev zapornih ograj na najbolj izpostavljenih delih meje; da Slovenija pospe\\u0161eno dopolni oziroma ukrepi in pa usposobi prostovoljno rezervo Slovenske vojske in policije; da Slovenija takoj zagotovi izpla\\u010dilo izrednih dodatkov policistom in vojakom ter ostalim zaposlenim, ki so izjemno obremenjeni z obvladovanjem migrantskih valov; da Slovenija preneha na\\u010drtovati velike begunske centre za namestitev 5 tiso\\u010d ali ve\\u010d ljudi; da Slovenija zagotovi razbremenitev prebivalstva ob\\u010dine Bre\\u017eice in drugih obmejnih ob\\u010din s prenosom administrativnih postopkov v ve\\u010dje \\u0161tevilo tranzitnih zbirnih centrov po celi dr\\u017eavi; da se pospe\\u0161eno zmanj\\u0161uje razlika med \\u0161tevilom migrantov, ki vstopajo v dr\\u017eavo in pa tistimi, ki jo zapu\\u0161\\u010dajo; da se ob sprejemu migrantov iz humanitarnih in varnostnih razlogov takoj in dosledno lo\\u010duje \\u017eenske in otroke oziroma dru\\u017eine kot najbolj ranljive skupine ter da se jih obravnava prednostno. Pismo je takrat predsednik na\\u0161e stranke zaklju\\u010dil s tem stavkom: \\\"Naj slovenska diplomacija kon\\u010dno spet zaslu\\u017ei denar, ki ga zanjo namenjajo davkopla\\u010devalci.\\\" Na to njegovo pismo oziroma predloge se je odzval predsednik Vlade 28. oktobra na tiskovni konferenci, ko je to njegovo pisanje ocenil kot nedr\\u017eavotvorno in poskus delitve Slovencev. Prebrala sem malo prej teh osem predlogov in vas zdaj spra\\u0161ujem: Kateri od teh ukrepov je nedr\\u017eavotvoren in kateri od teh ukrepov se vam zdi, da deli Slovence? To je tudi vpra\\u0161anje za spo\\u0161tovano ministrico.\\nZa konec bom rekla tole, da je na\\u0161e dr\\u017eavljane strah. Strah jih je za njihovo varnost, blaginjo in nenazadnje \\u2013priznajmo si \\u2013 tudi za na\\u0161o kulturo. Hvala lepa.\",\n    \"speech_id\": 520693\n    }, {\n    \"content\": \"Predsednik, hvala lepa za besedo. Lep pozdrav vsem prisotnim. Za\\u010dela bom s takimi besedami, kot sem za\\u010dela pri razpravi na Dr\\u017eavnem zboru ob sprejemanju prora\\u010duna za leto 2016 in 2017 in sicer, da \\u017ee samo Ministrstvo za zdravje potrebuje zdravnika, pa je \\u010disto vseeno ali to koncesionar ali pa je iz javnega zdravstva. Zakaj tako mislim? \\u017de kolegica Jelka Godec je prej omenila kaj se je dogajalo s pravilnikom o nujni medicinski pomo\\u010di. Najprej kako je potekal postopek in tu se bom ustavila predvsem na objavi tega pravilnika in pa na priporo\\u010dilo sklepa Dr\\u017eavnega zbora in pa tega mati\\u010dnega odbora.\",\n    \"speech_id\": 534332\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getSpeechesInRange/12/10.12.2015/1.2.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getSpeechesOfMP/{id}/{?date}",
    "title": "MP's speeches as strings",
    "name": "getSpeechesOfMP",
    "group": "MPs",
    "description": "<p>This function returns an array of strings, each string being the full contents of one of your chosen MP's speeches. Optionally it returns speeches up until the optionally passed date.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>MP's Parladata id.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/",
            "description": "<p>An array of all speeches as strings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    \"Hvala za besedo. Lep pozdrav vsem. Predsednik, upam, da boste dovolili, da pa\\u010d nekaj na splo\\u0161no o tem Zakonu.\\nPoglejte, ko smo se 10. novembra tule pogovarjali in smo nekako se strinjali, da se ta Zakon umakne z dnevnega reda, pa\\u010d zaradi tega, ker je koalicija menila, da je bilo pomanjkanje \\u010dasa za pripravo amandmajev, ki jih je bilo kar veliko. In s tem se strinjam, ker spet imamo primer, da je tri \\u010detrt \\u010dlenov tega Zakona amandmiranih. Ampak poglejte, \\u0161e danes nimamo enega takega primernega \\u010distopisa, \\u010de smo poslu\\u0161ali gospo Kurent iz Zakonodajno-pravne slu\\u017ebe, pravi, da je \\u0161e Zakon vedno nepopoln, nejasen, nepregleden, da si nekatere dolo\\u010dbe nasprotujejo. \\nPoslu\\u0161ali smo tudi oziroma tudi predstavnik Zdravni\\u0161ke zbornice je podal svoje pomisleke in predstavil njihovo sodelovanje pri pripravi tega Zakona in pa tudi, zdajle smo kolega poslu\\u0161ali, da \\u0161e je nekaj odprtih dilem v zvezi s tem Zakonom.\\nAmpak, kar pa ho\\u010dem re\\u010di, poglejte, nobeden pa ni omenil tega, Evropska komisija nas je namre\\u010d 30. 9. opozorila, da je potrebno prenesti to Direktivo oziroma spremeniti ta Zakon od 30. 11. In v nasprotnem primeru, \\u010de se to ne zgodi, da bodo lahko tudi finan\\u010dne posledice. Jaz bi tele predstavnice Ministrstva vpra\\u0161ala, kdo bo v tem primeru nosil finan\\u010dne posledice. Ni zanemarljivo, pi\\u0161e, sam pi\\u0161ete tule v va\\u0161emu pisanju k tej to\\u010dki, da je to lahko od 710 evrov do 14.000 evrov dnevno. To bi res rada odgovor na to vpra\\u0161anje.\\nIn pa \\u0161e eno vpra\\u0161anje imam. Mislim, da je bila to zadnja seja na\\u0161ega Odbora, ko smo se pogovarjali o reviziji oziroma prenovi srednje\\u0161olskih programov oziroma srednje\\u0161olskega programa zdravstvena nega in tudi tu se je omenjala ta Direktiva 2013/55/EU, tak ko je tu, in tu bi tudi rada, \\u010de mi lahko res jasno odgovorite, ali se to nana\\u0161a tudi kaj na te srednje medicinske sestre oziroma karkoli. Hvala lepa.\",\n    \"Hvala za besedo, predsedujo\\u010di. Spo\\u0161tovani navzo\\u010di!\\n\\u017divimo v dr\\u017eavi, kjer nam vlada tak\\u0161na vlada, ki ne spo\\u0161tuje odlo\\u010db Ustavnega sodi\\u0161\\u010da, ne spo\\u0161tuje odlo\\u010db sodi\\u0161\\u010d, kjer ministrstva ne spo\\u0161tujejo zakonov in kjer se ne kaznuje tistih, ki naredijo oziroma povzro\\u010dijo neko \\u0161kodo, ampak tiste, ki na to opozarjajo.\\nPa se bom ustavila le na primeru, kjer se zavestno ne upo\\u0161teva odlo\\u010dbe Ustavnega sodi\\u0161\\u010da, kar s to interpelacijo o\\u010ditamo tudi ministrici za izobra\\u017eevanje, znanost in \\u0161port dr. Maji Makovec Bren\\u010di\\u010d. To, kar ji o\\u010ditamo mi, ji o\\u010dita tudi prej\\u0161nji predsednik Ustavnega sodi\\u0161\\u010da Miroslav Mozeti\\u010d, ki je ob predstavitvi Poro\\u010dila o delu Ustavnega sodi\\u0161\\u010da za leto 2015 opozoril, da politika v zadnjih dveh letih odlaga izvr\\u0161itev odlo\\u010db Ustavnega sodi\\u0161\\u010da, ker se z njimi ne strinja. Opozoril je \\u0161e, da je to z vidika pravne dr\\u017eave zelo problemati\\u010dno, zlasti \\u010de je neizvr\\u0161itev pogojena politi\\u010dno in ideolo\\u0161ko. Med odlo\\u010dbami Ustavnega sodi\\u0161\\u010da je posebej omenil \\u0161e primer, da \\u0161e vedno ni izvr\\u0161ena odlo\\u010dba o financiranju zasebnih osnovnih \\u0161ol. \\nKonec leto\\u0161njega leta bo torej minilo \\u017ee kar dve leti, odkar je Ustavno sodi\\u0161\\u010de Republike Slovenije na pobudo star\\u0161ev \\u0161oloobveznih otrok, ki obiskujejo zasebno osnovno \\u0161olo, v svojem postopku za oceno ustavnosti 4. decembra 2014 ugotovilo, da je prvi stavek drugega odstavka 86. \\u010dlena Zakona o organizaciji in financiranju vzgoje in izobra\\u017eevanja, v delu, ki se nana\\u0161a na javno veljavne programe osnovno\\u0161olskega izobra\\u017eevanja, v neskladju z Ustavo Republike Slovenije. Zakaj protiustavnost zakona? Pobudniki, ki so vlo\\u017eili zahtevo za oceno ustavnosti na Ustavno sodi\\u0161\\u010de, so namre\\u010d izpodbijali ta prvi stavek drugega odstavka 86. \\u010dlena tega zakona, ki zasebnim \\u0161olam, ki izvajajo javno veljavne izobra\\u017eevalne programe, za izvedbo programa zagotavlja le 85 % sredstev, ki jih dr\\u017eava zagotavlja za izvajanje teh programov. Ustavno sodi\\u0161\\u010de je torej ugotovilo, da je to diskriminatorno do otrok v zasebnih \\u0161olah. Star\\u0161i otrok, ki obiskujejo zasebne osnovne \\u0161ole, morajo namre\\u010d pla\\u010devati 15 % za program, kar znese okoli 60 evrov mese\\u010dno. Tega zneska, ki ga pla\\u010dujejo star\\u0161i, glede na odlo\\u010ditev Ustavnega sodi\\u0161\\u010da v letu 2014, od januarja letos ne bi smeli ve\\u010d pla\\u010devati. Poudarjam, da od januarja letos ne bi smeli ve\\u010d pla\\u010devati. Ministrica pa v odgovoru na na\\u0161o interpelacijo navaja, da je odlo\\u010ditev star\\u0161ev za vpis otrok v zasebno \\u0161olo njihova lastna odlo\\u010ditev in da so bili star\\u0161i ob vpisu s pogoji financiranja seznanjeni. Spo\\u0161tovana ministrica, to ni res. To ne dr\\u017ei. Star\\u0161i so glede na odlo\\u010ditev Ustavnega sodi\\u0161\\u010da iz leta 2015 verjeli, da se bo spremenila zakonodaja in posledi\\u010dno tudi na\\u010din financiranja. Verjeli so, da \\u017eivijo v neki pravni dr\\u017eavi, ampak so se \\u017eal zmotili. \\nPolo\\u017eaj \\u0161oloobveznih u\\u010dencev v zasebnih \\u0161olah je primerljiv s polo\\u017eajem \\u0161oloobveznih u\\u010dencev v javnih \\u0161olah. Zato je neenako zagotavljanje javnih sredstev kr\\u0161itev na\\u010dela enakosti pred zakonom, to je ugotovilo Ustavno sodi\\u0161\\u010de. \\\"Osnovno\\u0161olsko izobra\\u017eevanje je obvezno in se financira iz javnih sredstev, ne glede na to, ali ga izvaja javnopravni ali zasebnopravni subjekt,\\\" je \\u0161e zapisalo Ustavno sodi\\u0161\\u010de v tej svoji odlo\\u010dbi. Da je zadeva \\u0161e bolj bizarna, so zasebne \\u0161ole, ki so bile ustanovljene pred letom 1996, financirane v vi\\u0161ini 100 %, zasebne \\u0161ole, ustanovljene po letu 1996, pa zgolj v vi\\u0161ini 85 %. Statisti\\u010dni podatki ka\\u017eejo izrazito prevlado javnih osnovnih \\u0161ol. Iz podatkov Eurostata izhaja, da je bilo v Republiki Sloveniji v letu 2011 kar 98,4 % vseh u\\u010dencev osnovnih in srednjih \\u0161ol, ki so obiskovali javne \\u0161ole, evropsko povpre\\u010dje je 82 %. 0,9 % sofinancirane zasebne \\u0161ole, evropsko povpre\\u010dje je tu 10,2 %. In le 0,7 % u\\u010dencev je obiskovalo neodvisne zasebne \\u0161ole, evropsko povpre\\u010dje pa je tu 2,9 %. Trditi, da bo financiranje programov zasebnih osnovnih \\u0161ol v \\u010demerkoli ogrozilo javne, je torej, milo re\\u010deno, sme\\u0161no. \\nFinanciranje osnovno\\u0161olskega izobra\\u017eevanja iz javnih sredstev pomeni, da mora to financiranje zagotavljati organizacija ustrezne mre\\u017ee osnovnih \\u0161ol in delovanje osnovno\\u0161olskega izobra\\u017eevanja. Vsebina obveznega javno veljavnega programa osnovno\\u0161olskega izobra\\u017eevanja, ki se financira iz javnih sredstev, je namre\\u010d enotno dolo\\u010dena za vse izvajalce osnovno\\u0161olskega izobra\\u017eevanja. To izhaja iz zasledovanja enakih ciljev vzgoje in izobra\\u017eevanja, enakovrednega izobrazbenega standarda, enakih pogojev za strokovne delavce, prostor, opremo, enako uporabo u\\u010dbenikov za obvezne predmete in nenazadnje za enako omejitev pla\\u010d. Vsebinske razlike v na\\u010delih, po katerih delujejo zasebne oziroma javne \\u0161ole, se poka\\u017eejo pa \\u0161ele v raz\\u0161irjenih izobra\\u017eevalnih programih, ki pa se ne financirajo iz javnih sredstev. Treba je lo\\u010devati razli\\u010dne segmente financiranja, se pravi izvajanje programov, teko\\u010de stro\\u0161ke in investicije. Skrajni \\u010das je \\u017ee, da si priznamo, da so za dr\\u017eavo zasebne \\u0161ole precej cenej\\u0161e kot javne \\u0161ole. Dr\\u017eavi v tem primeru namre\\u010d ni treba skrbeti za vse teko\\u010de stro\\u0161ke in investicije, ki so v tem primeru na ple\\u010dih zasebnika. \\nNaj \\u0161e enkrat poudarim, da pobudniki na Ustavno sodi\\u0161\\u010de niso vlo\\u017eili zahteve za presojo drugega odstavka 86. \\u010dlena, po katerem zasebnim \\u0161olam ne pripadajo sredstva za nalo\\u017ebe, za investicijsko vzdr\\u017eevanje in opremo, ampak so vlo\\u017eili zahtevo za izvajanje programov. Ustava namre\\u010d dolo\\u010da, da se javno financira obvezen minimum osnovne izobrazbe, ki je enotno dolo\\u010dena po vsebini, kar pa ne zajema dodatnih vsebin, ki so odvisne od vrednostnih usmeritev posameznih izvajalcev osnovno\\u0161olskega izobra\\u017eevanja. \\nV svojem odgovoru na interpelacijo ministrica navaja, da drugi odstavek 57. \\u010dlena Ustave dolo\\u010da, da je osnovno\\u0161olsko izobra\\u017eevanje obvezno in da se financira iz javnih sredstev. To dr\\u017ei, spo\\u0161tovana ministrica, in s tem se popolnoma strinjam. Glede na navedeno naj bi bili tudi u\\u010denci, ki obiskujejo zasebne \\u0161ole, in pa njihove dru\\u017eine dele\\u017eni tudi enakih finan\\u010dnih koristi, ki so na voljo u\\u010dencem javnih \\u0161ol in pa tudi njihovim dru\\u017einam. Ampak ministrica, zakaj potem ne povle\\u010dete poteze in spremenite zakona v skladu z odlo\\u010dbo Ustavnega sodi\\u0161\\u010da? Vi po na\\u0161i oceni ne ukrenete ni\\u010desar in samo \\u010dakate. \\u010cakate tako, kot \\u010dakajo na\\u0161i bolniki v vrstah v na\\u0161em zdravstvenem sistemu, \\u017eal.\\nNaloga ministrstva bi morala biti prvenstveno usmerjena v kvaliteto \\u0161ol. Zdrava konkurenca lahko namre\\u010d rodi samo ve\\u010djo kvaliteto, in to na obeh straneh. Ja, prav imate, ministrica, ko v odgovoru na interpelacijo navajate, da mora biti na\\u0161 izobra\\u017eevalni sistem dostopen, kakovosten in pravi\\u010den. Prav imate tudi v svojih navedbah, da so zasebne \\u0161ole s svojimi rezultati dokazale, da svoje delo opravljajo kakovostno. Ampak zakaj potem navajate, da je potrebna jasnej\\u0161a ureditev v primerih nastajanja novih zasebnih \\u0161ol? Zakaj jasnej\\u0161a? Kaj tukaj ni jasno? Rezultati so pokazali, da zasebno \\u0161olstvo izvaja dober in kakovosten pouk. \\nPrav tako mora biti zagotovljena tudi temeljna pravica do svobodne izbire o izobra\\u017eevanju, kar pomeni, da se spo\\u0161tuje pravica star\\u0161ev, da zagotovijo vzgojo in izobra\\u017eevanje v skladu z lastnim prepri\\u010danjem. V zvezi z odlo\\u010dbo Ustavnega sodi\\u0161\\u010da se je sestala tudi Ustavna komisija v Dr\\u017eavnem zboru in na svoji seji 10. marca leto\\u0161njega leta obravnavala predlog ustavnih sprememb o na\\u010dinu financiranja zasebnega \\u0161olstva, vendar pa je bila ta seja prekinjena zaradi precej\\u0161nje razdeljenosti med poslanskimi skupinami in seveda stroko. \\nMinistrica v odgovoru navaja tudi, da so se na odlo\\u010ditev Ustavnega sodi\\u0161\\u010da odzvali \\u0161tevilni zainteresirani dele\\u017eniki in strokovnjaki, ki razpravljajo o posledicah odlo\\u010dbe Ustavnega sodi\\u0161\\u010da glede financiranja zasebnih osnovnih \\u0161ol. Jaz se tukaj \\u0161e enkrat spra\\u0161ujem, kaj je tu za razpravljati. Odlo\\u010dba je bila izdana in pika. Treba jo je spo\\u0161tovati, ne pa razpravljati. \\nPredlagatelji nedvomno ne moremo mimo dejstva, da dr\\u017eavi v prvi vrsti ne gre za financiranje, temve\\u010d za ideologijo. V Slovenski demokratski stranki smo na odpravo \\u017ee omenjene neustavnosti, ki jo je z odlo\\u010dbo ugotovilo Ustavno sodi\\u0161\\u010de, vse od prevzema funkcije ministrico \\u017ee ve\\u010dkrat opozorili na to. Opozorili smo jo tudi, da je treba spo\\u0161tovati to odlo\\u010dbo Ustavnega sodi\\u0161\\u010da, ampak na\\u0161e opozorilo je bilo vedno zavrnjeno. Na 11. nujni seji Odbora za izobra\\u017eevanje 6. maja lanskega leta, kjer se je ministrica predstavila kot kandidatka za ministrico, je na vpra\\u0161anje poslanske kolegice v zvezi z realizacijo odlo\\u010dbe Ustavnega sodi\\u0161\\u010da ministrica odgovorila: \\\"Seveda, odlo\\u010ditev je dana. \\u010ce sem prav razumela, je do konca leta potrebno pripraviti na\\u010din in pa izvedbo.\\\" Konec leta 2051 je \\u017ee zdavnaj mimo, kmalu bo konec leta 2016 in v na\\u0161i poslanski skupini spra\\u0161ujemo ministrico, kje je zdaj ta sprememba.\\nKasneje, 27. novembra lanskega leta, je ministrica za medije izjavila: \\\"Za to seveda potrebujemo resen razmislek, za katerega si je bolje vzeti ve\\u010d \\u010dasa kot pa premalo.\\\" Tukaj se spet spra\\u0161ujem, kak\\u0161en razmislek. Odlo\\u010dba Ustavnega sodi\\u0161\\u010da je jasna, tukaj ni treba razmi\\u0161ljati. \\u0160e enkrat, to\\u010dno se ve, kaj je treba narediti. \\nV primeru dveh predlogov novel Zakona o organizaciji in financiranju vzgoje in izobra\\u017eevanja s strani Slovenske demokratske stranke, najprej v decembru 2015 in nato \\u0161e v marcu 2016, je ministrica Vladi predlagala v sprejem mnenje, s katerim je izrekla, da zakonska re\\u0161itev, ki bi odpravila z odlo\\u010dbo Ustavnega sodi\\u0161\\u010da ugotovljeno neustavnost, ni primerna za nadaljnjo obravnavo. Na dejstvo, da odlo\\u010dba Ustavnega sodi\\u0161\\u010da \\u0161e vedno ni realizirana, je ministrico opozorila tudi predsednica Zakonodajno-pravne slu\\u017ebe Dr\\u017eavnega zbora, in to takrat, ko smo obravnavali novelo Zakona o organizaciji in financiranju, to je bilo 1. junija leto\\u0161njega leta. Citirala bom izjavo oziroma navedbo predstavnice Zakonodajno-pravne slu\\u017ebe: \\\"Dr\\u017eavni zbor Republike Slovenije kot zakonodajalec mora to odlo\\u010dbo \\u010dim prej realizirati, saj v nasprotnem primeru kr\\u0161i na\\u010delo pravne dr\\u017eave in na\\u010delo delitve oblasti. Odlo\\u010dbe Ustavnega sodi\\u0161\\u010da so obvezne, zavezujo\\u010de. Dr\\u017eavni zbor Republike Slovenije jih mora pravo\\u010dasno,\\\" ponavljam, pravo\\u010dasno, \\\"izvr\\u0161iti\\\". Na to opozorilo predstavnice Zakonodajno-pravne slu\\u017ebe Dr\\u017eavnega zbora je ministrica na seji odgovorila: \\\"Tu se z Zakonodajno-pravno slu\\u017ebo popolnoma strinjam, ker v resnici izpolnitve ustavne odlo\\u010dbe o tem predlogu ni.\\\" To je bilo 1. junija 2016. Kot vidimo, se ministrica samo izmika. Enkrat navaja, da je potrebna sprememba, potem, da je potreben resen razmislek, in nenazadnje, da je potrebno \\u0161ir\\u0161e razumevanje. Jaz ne vem, kaj je pri vsem tem treba razumeti in pa \\u0161ir\\u0161e razmi\\u0161ljati, \\u010de je pa Ustavno sodi\\u0161\\u010de to\\u010dno povedalo, kaj je treba narediti, brez \\u0161ir\\u0161ega razmi\\u0161ljanja. Enako nerazumna je bila tudi izjava predsednika Vlade dr. Mira Cerarja na obisku Zavoda Svetega Stanislava 19. aprila leto\\u0161njega leta. Na tem obisku je predsednik Vlade dejal: \\\"Kot pravnik in predsednik Vlade sem nesre\\u010den, ker zamujamo z izvr\\u0161itvijo ustavne odlo\\u010dbe. Prizadevam si, da bi jo \\u010dim prej izvr\\u0161ili.\\\" Ja, spo\\u0161tovani predsednik \\u2013 no, zdaj ga ni ve\\u010d tu \\u2013, nesre\\u010dni so tudi star\\u0161i teh \\u0161oloobveznih otrok, ki obiskujejo zasebne \\u0161ole in morajo \\u0161e vedno pla\\u010devati del te \\u0161olnine. Prav tako so nesre\\u010dne tudi zasebne \\u0161ole, ker ne dobijo 100 odstotnega financiranja s strani dr\\u017eave. Ministrica je v intervjuju za Ve\\u010der 3. septembra leto\\u0161njega leta dejala: \\\"Sem torej za sobivanje in ustrezno urejeno financiranje glede na ustavno odlo\\u010dbo. Spo\\u0161tovanje odlo\\u010dbe Ustavnega sodi\\u0161\\u010da smo dol\\u017eni zagotoviti.\\\" Kak\\u0161no sobivanje spet in ustrezno urejeno financiranje glede na ustavno odlo\\u010dbo, \\u010de pa \\u0161e vedno ni potrebne spremembe tega zakona? Ministrica se spet samo izmika, si pridobiva \\u010das, ki pa je za star\\u0161e otrok, ki obiskujejo zasebne \\u0161ole, \\u0161e kako dragocen, predvsem pa za njihove \\u017eepe. \\nZaradi vsega navedenega predlagatelji menimo, da je ministrica tako subjektivno kot objektivno odgovorna, ker pa\\u010d ni naredila ni\\u010d. Subjektivno je odgovorna, ker glede na svoje pristojnosti in naloge, ki jih izvr\\u0161uje kot ministrica, ni upo\\u0161tevala odlo\\u010dbe Ustavnega sodi\\u0161\\u010da. Prav tako je odgovorna glede na Zakon o Vladi Republike Slovenije. Ministrica v skladu s sprejeto politiko namre\\u010d vodi in predstavlja ministrstvo, daje politi\\u010dne usmeritve za delo ministrstva in organov v njegovi sestavi ter opravlja druge naloge, ki jih dolo\\u010da zakon in drugi predpisi. \\nPredlagatelji smo mnenja, da je ministrica dr. Maja Makovec Bren\\u010di\\u010d odgovorna zaradi neustavnega delovanja, se pravi neizvr\\u0161itve odlo\\u010dbe Ustavnega sodi\\u0161\\u010da z dne 9. januarja 2011, takrat je ta odlo\\u010dba namre\\u010d stopila v veljavo. Ministrica se svojih dejanj oziroma ne dejanj tudi zaveda, kar je priznala oziroma potrdila tudi v intervjuju za \\u010dasopis Ve\\u010der, ko je dejala: \\\"Spo\\u0161tovanje odlo\\u010dbe Ustavnega sodi\\u0161\\u010da smo dol\\u017eni zagotoviti.\\\" Kje je zdaj spet ta dol\\u017enost, na katero se je za \\u010dasopis sklicevala ministrica? \\nPoleg subjektivne odgovornosti je ministrica v slovenskem ustavnem redu odgovora tudi objektivno, saj je vsak minister odgovoren za delo svojega ministrstva. \\nMinistrica je ob imenovanju prisegla, da bo spo\\u0161tovala ustavni red, da bo ravnala po svoji vesti in z vsem svojimi mo\\u010dmi delovala za blaginjo Slovenije, ampak \\u017eal smo pri\\u010de temu, da ministrica dopu\\u0161\\u010da \\u0161e nadaljnjo neustavnost na podro\\u010dju izvajanja javno veljavnih programov osnovno\\u0161olskega izobra\\u017eevanja in nespo\\u0161tovanja Ustave Republike Slovenije, na katero je ob imenovanju presegla. Ministrica je torej izgubila osebno integriteto, ki je nujna za opravljanje funkcije ministrice in tudi za zaupanje javnosti. \\nMinistrica v svojem odgovoru na na\\u0161o interpelacijo, s katero ji o\\u010ditamo, da \\u0161e vedno ni izvr\\u0161ila odlo\\u010dbe Ustavnega sodi\\u0161\\u010d, pravi: \\\"O\\u010ditke, ki izhajajo iz navedene interpelacije, v celoti zavra\\u010dam kot neutemeljene v vseh to\\u010dkah.\\\" Ministrica, \\u010de \\u017ee ne upo\\u0161tevate nas, opozicije, morate pa upo\\u0161tevati odlo\\u010dbe Ustavnega sodi\\u0161\\u010da. Vse, kar vam o\\u010ditamo v tej interpelaciji, je povzeto iz odlo\\u010dbe Ustavnega sodi\\u0161\\u010da, torej posredno trdite, da je odlo\\u010dba Ustavnega sodi\\u0161\\u010da neutemeljena. \\nV odgovoru ministrica tudi navaja, da Ustavno sodi\\u0161\\u010de svoje odlo\\u010ditve ni sprejelo soglasno, temve\\u010d s 5 glasovi za in 4 proti. Jaz zdaj ne vem, spo\\u0161tovana ministrica in tudi spo\\u0161tovani kolegi, ali je to nova praksa. Mogo\\u010de je to nova praksa te vlade, da potem odlo\\u010dbe Ustavnega sodi\\u0161\\u010da ne bo treba ve\\u010d spo\\u0161tovati ali pa upo\\u0161tevati, \\u010de ni sprejeta soglasno. Ministrica, to je najmanj neumnost, kar ste zapisali v vezi s tem. \\nDalje. Ministrica v odgovoru na interpelacijo navaja, da je odlo\\u010ditev Ustavnega sodi\\u0161\\u010da spro\\u017eila pobudo za spremembo Ustave. To ne dr\\u017ei, spo\\u0161tovana ministrica. Pobudo za spremembo Ustave je spro\\u017eila skupina poslank in poslancev s prvopodpisanim Matja\\u017eem Hanom, in to \\u017ee v februarju leta 2015, se pravi takoj po odlo\\u010ditvi Ustavnega sodi\\u0161\\u010da, zdaj pa smo novembra 2016. Biv\\u0161i predsednik Ustavnega sodi\\u0161\\u010da Miroslav Mozeti\\u010d je ob predstavitvi poro\\u010dila Ustavnega sodi\\u0161\\u010da za leto 2015 v zvezi s tem opozoril, da bi v primeru, da bi Dr\\u017eavni zbor Republike Slovenije spremenil ustavo in financiranje zasebnih osnovnih \\u0161ol uredil druga\\u010de, kot so dolo\\u010dili ustavni sodniki, to po njegovi oceni pomenilo, da bi Dr\\u017eavni zbor zaob\\u0161el odlo\\u010dbo Ustavnega sodi\\u0161\\u010da in da je vpra\\u0161anje, ali bi bilo tak\\u0161no zaobitje seveda dopustno ali ne. Jaz mislim, da zdaj tukaj vsi razumemo, kaj je s tem \\u017eelel povedati biv\\u0161i predsednik Ustavnega sodi\\u0161\\u010da. \\nKot \\u017ee povedano, smo predlagatelji te interpelacije ministrico najmanj dvakrat opozorili na neskladje. Zato smo v proceduro vlo\\u017eili tudi Predlog za spremembo Zakona o organizaciji in financiranju vzgoje in izobra\\u017eevanja, ki bi upo\\u0161teval odlo\\u010ditev Ustavnega sodi\\u0161\\u010da. Ministrica pa svoje ravnanje oziroma neodzivanje opravi\\u010duje z dejstvom, da je Vlada Republike Slovenije v svojem mnenju na na\\u0161 predlog za odpravo neskladnosti poudarila, da predlog po celovitem re\\u0161evanju vpra\\u0161anja zasebnih \\u0161ol temelji na novih dru\\u017ebenih situacijah, ki so nastopile v zadnjem letu. Moram re\\u010di, da me tudi zelo zanima, katere so te nove dru\\u017ebene situacije. Ministrica v odgovoru navaja tudi, da ji je odlo\\u010ditev Ustavnega sodi\\u0161\\u010da dobro poznana in da se zaveda, da jo je treba izvr\\u0161iti. Jaz \\u0161e enkrat spra\\u0161ujem, spo\\u0161tovana ministrica, kaj potem \\u0161e vedno \\u010dakate.\\nZaradi vsega navedenega smo predlagatelji mnenja, da ministrica svoje funkcije ne opravlja odgovorno, zato tudi predlagamo, da se razre\\u0161i s funkcije ministrica za izobra\\u017eevanje, znanost in \\u0161port. \\nSpo\\u0161tovani kolegi, danes se ne pogovarjamo, ali javno ali zasebno \\u0161olstvo. Danes se pogovarjamo o tem, ali je treba spo\\u0161tovati odlo\\u010dbo Ustavnega sodi\\u0161\\u010da ali ne. Predlagatelji s to interpelacijo ministrici \\u2013 \\u0161e enkrat poudarjam \\u2013 ne o\\u010ditamo ni\\u010desar drugega, kot je zapisano v odlo\\u010dbi Ustavnega sodi\\u0161\\u010da. O\\u010ditamo ji torej odgovornost za neukrepanje in zavla\\u010devanje pri pripravi novele zakona, ustvarjanje neenakosti pred zakonom in opustitev dol\\u017enega ravnanja pri izvr\\u0161evanju politi\\u010dne funkcije, ki ima za posledico izgubljeno zaupanje v institucije pravne in socialne dr\\u017eave. \\nSpo\\u0161tovani kolegi poslanci, \\u0161e enkrat. \\u010ce ste mnenja, da je treba spo\\u0161tovati ustavo in zakone, verjamem, da boste na\\u0161o interpelacijo danes podprli. Hvala lepa.\",\n    \"Hvala za besedo. Lep pozdrav vsem. Moram re\\u010di, gospa Pirnat, da ko sem vas poslu\\u0161ala v uvodni obrazlo\\u017eitvi ste zelo prepri\\u010dljivo nanizali oziroma povedali kaj vse delate, kaj vse ste storili in kaj vse boste storili \\u0161e do 31. januarja. Moram re\\u010di, \\u010de ne bi poznala delo va\\u0161ega ministrstva, tole bi takoj kupila danes in dvignila na kocu roko. \\n (nadaljevanje) Poglejte, \\u010de pa pogledamo, kaj ste v teh dveh letih in pol naredili na svojem podro\\u010dju, se pravi, iz ukrepov koalicijske pogodbe niti enega ukrepa niste uresni\\u010dili, iz normativnega dela programa Vlade izmed 17 zakonov, ki so bili na\\u010drtovani, ki jih je ministrstvo na\\u010drtovalo, da jih bo sprejelo v letih 2015 in 2016, se pravi, od 17 so bili sprejeti 4. Torej, tej va\\u0161i uvodni obrazlo\\u017eitvi nikakor ne morem verjeti. \\nMoram re\\u010di, da me mo\\u010dno skrbi razprava gospoda Mezka, ki pravi, da je poslovanje javnih zdravstvenih zavodov v 9-mese\\u010dju slab\\u0161e od pri\\u010dakovanega rezultata in da bo poslovanje javnih zdravstvenih zavodov konec leta \\u0161e slab\\u0161e, kot se je pri\\u010dakovalo. \\u0160koda, da smo z va\\u0161e strani v razpravi sli\\u0161ali le neke izgovore, kaj je vplivalo na te slabe rezultate, nismo pa sli\\u0161ali nobene konkretne zaveze oziroma nobenega konkretnega ukrepa, kaj bi se naj naredilo, tudi na pobudo Zdru\\u017eenja javnih zdravstvenih zavodov. Strinjam se, predsednik, z va\\u0161o ugotovitvijo, da za to trenutno stanje, ki je na podro\\u010dju zdravstva, ni krivo samo to ministrstvo in ta Vlada. Ampak dejstvo je, poglejte, da imamo dolge \\u010dakalne vrste, da so izgube v javnih zdravstvenih zavodih vse ve\\u010dje, imamo korupcijo, nedvomno, politi\\u010dno kadrovanje, ni sistemskih re\\u0161itev. Moram re\\u010di, da je pa k temu poslab\\u0161anju oziroma k tem negativnim trendom na podro\\u010dju zdravstva nedvomno pripomoglo Ministrstvo za zdrave oziroma ta Vlada. \\nV Slovenski demokratski stranki \\u017ee dve leti in pol nenehno opozarjamo, da so potrebne sistemske re\\u0161itve, se pravi, zakonodaja; da je treba kon\\u010dno dolo\\u010diti javno mre\\u017eo na vseh podro\\u010djih, na primarnem, sekundarnem in tako naprej; da je treba dolo\\u010diti standarde, da je treba dolo\\u010diti tudi standarde za pla\\u010dilo storitev izvajalcem; da je treba preoblikovati javne zavode v skladu s pravom EU in kar je verjetno del te rak rane, teh izgub javnih zdravstvenih zavodov, in sicer, da je spremeniti zakonodajo v smislu, da se da ve\\u010d pristojnosti direktorjem javnih zdravstvenih zavodov, po drugi strani pa od njih zahtevati ve\\u010d odgovornosti, ne pa da direktor ni odgovoren za poslovanje nekega javnega zdravstvenega zavoda. Dejstvo je, kar smo sli\\u0161ali \\u017ee v uvodni obrazlo\\u017eitvi, da so rezultati poslovanja javnih zdravstvenih zavodov za prvo polletje izredno slabi, \\u010de jih primerjamo z letom 2015. V letu 2015 kar 23 bolni\\u0161nic ustvarilo prese\\u017eek v vi\\u0161ini 10,4 milijona in samo 3 bolni\\u0161nice so imele primanjkljaj v vi\\u0161ini 9,8 milijona, od tega 6 milijonov UKC Ljubljana. \\u010ce pa pogledamo prvo polletje leto\\u0161njega leta, ima pa samo 12 bolni\\u0161nic prese\\u017eek 2,8 milijona in \\u017ee kar 14 bolni\\u0161nic primanjkljaj v vi\\u0161ini 19,3 milijona in od tega samo UKC Ljubljana 12,7 milijona evrov. Zelo zaskrbljujo\\u010da je napoved gospoda Mezka, ki pravi, da so rezultati za 9-mese\\u010dje \\u0161e slab\\u0161i, rezultati ob koncu leta pa bodo nedvomno \\u0161e slab\\u0161i. \\nNekateri ste v razpravi te izgube javnih zdravstvenih zavodov nekako opravi\\u010devali z zni\\u017eanjem cen storitev Zavoda za zdravstveno zavarovanje, nekateri z napredovanjem in \\u0161e nekatere druge vzroke sem sli\\u0161ala. Ampak, poglejte, meni se tu \\u0161e kako zastavlja vpra\\u0161anje, zakaj samo nekateri javni zdravstveni zavodi. Ali pa, \\u010de pogledamo naprej, kaj pa \\n (nadaljevanje) koncesionarji. Poglejte, koliko koncesionar, preden za\\u010dne delati, opravljati svojo dejavnost, koliko vlo\\u017ei v nabavo opreme, prostora. Tule imam podatek, da dru\\u017einski zdravnik, preden za\\u010dne s svojim delom, 30 tiso\\u010d evrov, zobozdravnik 63 tiso\\u010d evrov, specialist 360 tiso\\u010d evrov. Ve\\u010dina teh koncesionarjev ob koncu leta pla\\u010da \\u0161e od pozitivnega poslovanja davek na dobi\\u010dek. Ampak, poglejte, prav zanima me, \\u010de mi zna kdo povedati, koliko koncesionarjev ob koncu leta posluje negativno, to bi bil zame zanimiv podatek. \\nKje je tu odgovornost, kot sem \\u017ee prej rekla, direktorjev javnih zdravstvenih zavodov. Pa ne samo teh, nedvomno bi jaz tu vsaj del\\u010dek te odgovornosti terjala tudi od svetov javnih zdravstvenih zavodov, pa tudi s strani ministrstva. Kot sem \\u017ee rekla prej, nedvomno bi bilo poslovanje teh zavodov druga\\u010dno, \\u010de bi direktor javnega zdravstvenega zavoda s tem denarjem, ki ga ima na razpolago, delal tako, kot da bi bil njegov. Nedvomno bi se pri takem ravnanju na\\u010din nabave materiala spremenil, verjetno tudi naro\\u010dil za dolo\\u010dene nabave ne bi drobil in material se ne bi kupovalo na naro\\u010dilnice, ampak preko javnih razpisov, kar bi pa seveda pomenilo tudi ni\\u017ejo ceno materiala. Ampak, \\u017eal, se te nabave ve\\u010dinoma delajo na podlagi naro\\u010dilnic, kar je \\u0161e slab\\u0161e, preko znanstev, velikokrat pa tudi obstaja sum, da za svoj ra\\u010dun. Ampak, poglejte, to mi govorimo \\u017ee, mislim, da smo dali prvo pobudo glede korupcije oziroma priporo\\u010dila \\u017ee v za\\u010detku lanskega leta. Ampak tu se samo govori, mi premlevamo in premlevamo to na seji Dr\\u017eavnega zbora, nih\\u010de pa ne ukrene ni\\u010desar. \\u0160e najbolj me moti to, ker nas ministrstvo poslu\\u0161a, redkokdaj, \\u0161koda, pride ministrica, in zdi se mi, da ministrstvo malo prisluhne, zami\\u017ei na eno oko in karavana gre po isti poti naprej. \\nZanima me, na primer, kaj je naredilo ministrstvo oziroma sam UKC \\u2013 \\u0161koda, da danes ni predstavnika oziroma direktorja UKC, mislim, da je bil tudi vabljen -, ob taki napovedi rde\\u010dih \\u0161tevilk oziroma taki polletni napovedi izgube UKC. Mislim, da bi tu moral zasvetiti rde\\u010d alarm in da bi morali tako direktor bolni\\u0161nice oziroma UKC, svet zavoda in ministrstvo nekaj narediti, ampak, \\u017eal, vemo, da se ni naredilo na tem ni\\u010desar. Direktor UKC vehementno v svoji informaciji o zaposlovanju za obdobje januar-junij 2016 ob koncu napove, da bodo ob koncu leta odhodki presegli realizirane prihodke za 20 milijonov evrov, in bom rekla zelo grdo, \\\"i nikome ni\\u0161ta\\\". Kje je tu svet zavoda? Pa ministrica sprejema take protokole in ne vem kak\\u0161ne vse lastnosti bi naj imeli ti \\u010dlani oziroma novi predstavniki sveta javnih zavodov, ampak u\\u010dinka pa nedvomno nobenega. Bo pa\\u010d izguba, saj to ne gre direktno iz mojega \\u017eepa, saj gre to s strani davkopla\\u010devalcev in gremo naprej. \\n (nadaljevanje) V tej razpravi je bilo tudi, kot sem \\u017ee prej rekla, nekako re\\u010deno, da pa\\u010d Zavod za zdravstveno zavarovanje je zmanj\\u0161al cene storitve za 9,9 %, res, da jih je lani nekaj pove\\u010dal in tako naprej, ampak jaz se dobro spomnim razprav tule prej\\u0161njega direktorja Zavoda za zdravstveno zavarovanje, gospoda Fakina, glede cen storitev, pla\\u010dila storitev. In mislim, da je gospod Fakin mogo\\u010de kdaj prav dobro vedel, zakaj se ni strinjal, da se cene teh zdravstvenih storitev pove\\u010dajo. \\u0160e enkrat bom to rekla, ne gre mi v ra\\u010dun oziroma mogo\\u010de mi bo kdo pomagal, \\u010de me bo prepri\\u010dal, v redu, bom vesela, v ra\\u010dun, da nekateri javni zavodi poslujejo kljub temu na nuli ali pa pozitivno ali pa koncesionarji ob pla\\u010dilu oziroma ob neki ceni dolo\\u010dene storitve, ki jo dobijo s strani Zavoda za zdravstveno zavarovanje. Seveda pa bi rada poudarila, da bi pa po moji logiki bilo tudi treba, da bi se s strani Zavoda za zdravstveno zavarovanje \\u2013 ne, da ta zavarovalnica samo pla\\u010da nek ra\\u010dun izvajalcu, meni se zdi, da bi bilo tu potrebno, da bi tudi zavarovalnica preverila ta ra\\u010dun in najmanj, kar je, da bi tudi primerjala cene dolo\\u010denega materiala, \\u010de \\u017ee cen storitev ne. Glede na to se mi zdi tudi zelo logi\\u010dno, da bi bilo treba poleg vseh aktivnosti na Zavodu za zdravstveno zavarovanje, le-ta bi moral nekako uvesti oziroma pripraviti standarde za pla\\u010dilo cen storitev izvajalcem. In v tem primeru, sem prepri\\u010dana, ne bi nekateri javni zdravstveni zavodi dobili tudi do 100 ali ve\\u010d kot 100 % ve\\u010d pla\\u010dano storitev kot drugi javni zdravstveni zavodi. Ampak o teh standardih za neko enotno pla\\u010dilo zdravstvenih storitev se govori \\u017ee dolgo in moram re\\u010di, da me je po\\u010dasi za\\u010delo skrbeti, v \\u010digavem interesu je, da se pa\\u010d ti standardi ne pripravijo. \\u010ce se zdaj pripravljajo ali pa \\u010de so pripravljeni, pa da \\u017eivim v zmoti, bi prosila, da mi to poveste. \\nKot sem \\u017ee rekla, izgube zdravstvenih zavodov se pove\\u010dujejo, pove\\u010dujejo se \\u010dakalne vrste, v enem letu za ve\\u010d kot 30 % oziroma v zadnjih \\u0161tirih, zdaj \\u017ee petih letih ve\\u010d kot enkrat in stanje na podro\\u010dju zdravstva je zelo zaskrbljujo\\u010de. Ob tem bi rada poudarila, kar v na\\u0161i stranki vedno poudarjamo, da na\\u0161i dr\\u017eavljani oziroma Slovenci imamo veliko sre\\u010do, da je stroka dobra. Stroka namre\\u010d sodi na marsikaterem podro\\u010dju v sam svetovni vrh in tudi na\\u0161i dr\\u017eavljani so \\u0161e kako zadovoljni z opravljenimi storitvami, seveda, \\u010de imajo to sre\\u010do, da pridejo na vrsto. Poleg vseh teh rde\\u010dih \\u0161tevilk, ki jih prikazujejo javni zdravstveni zavodi, mislim, da bi tu bil \\u0161e kako potreben nek izra\\u010dun, koliko pa v bistvu bolan \\u010dlovek stane dr\\u017eavo, ne samo opravljena storitev v bolni\\u0161nici, tu je potem \\u0161e primanjkljaj oziroma manko njegova bolni\\u0161ka odsotnost, ki gre najprej na ra\\u010dun delodajalca, potem na ra\\u010dun Zavoda za zdravstveno zavarovanje, potem rehabilitacija in tako naprej. To bi tudi bilo mogo\\u010de dobro sli\\u0161ati s strani ministrstva, \\u010de ima kakr\\u0161nekoli take podatke. \\nVelikokrat smo ministrico poslu\\u0161ali \\u2013 \\u0161e enkrat bom ponovila, \\u0161koda, da je danes ni z nami, \\n(Nadaljevanje) da pa\\u010d ni odgovorna sama za poslovanje javnih zdravstvenih zavodov. Ampak po drugi strani pa je ravno ministrica za medije podala izjavo, da se je takoj ob nastopu mandata za\\u010dela ukvarjati s sanacijo prihodkovne strani javnih zdravstvenih zavodov. Sedaj jaz ne razumem, se bo ministrica kon\\u010dno odlo\\u010dila ali je odgovorna za poslovanje javnih zdravstvenih zavodov ali ni, definitivno pa je, ker dr\\u017eava je ustanoviteljica bolni\\u0161nic in s strani dr\\u017eave oziroma Vlade so imenovani tudi \\u010dlani svetov zavodov. Najve\\u010dkrat se tudi na pobudo ministrice oziroma ministrstva izbere tudi kandidat za direktorja, kar smo bili pri\\u010da v mnogih primerih v lanskem letu, se pravi, pri UKC Ljubljana, poznamo najprej primer Bari\\u010di\\u010d, ki ga je ministrica \\u0161e kako zagovarjala, njegove sposobnosti in tako naprej, da o gospodu Kopa\\u010du, sedanjemu direktorju UKC sploh ne izgubljam besed. Sedaj, znano je dejstvo tudi, \\u010de \\u0161e ostanem malo pri UKC, ki nekako izkazuje najve\\u010djo izgubo za lansko leto. Poglejte, lansko leto smo opozarjali tako na seji mati\\u010dnega odbora kot tudi na seji Dr\\u017eavnega zbora, da je UKC Ljubljana sklepal pogodbe o dobavi na reverz oziroma, da je sklepala pogodbe o dobavi na reverz oseba, ki ni bila zakonit zastopnik UKC in to pogodbo je sklepala en mesec preden je bil sprejet sklep o nabavi. Na to smo \\u017ee v lanskem letu opozorili, ampak zanima me kaj je storilo ministrstvo, \\u010de boste znali na to odgovoriti, bom zelo vesela. Znano je pa, da je \\u0161lo v teh primerih tudi za velike zaslu\\u017eke s strani servisiranja te opreme potem. Sedaj mediji so tudi na veliko pisali in \\u0161e pi\\u0161ejo, da se denar preko javnih zdravstvenih zavodov prena\\u0161a seveda na razli\\u010dne dobavitelje, in da ti izvajajo pritisk vplivnih posameznikov na nabavo dolo\\u010dene opreme in pa materialov. Ta izjava nam je vsem dobro znana. To je rekla, gospa \\u010cokl na seji Komisije za nadzor javnih financ, ampak zgodilo se ni ni\\u010d.\\n Sedaj, \\u010de se ustavim pri skupnih javnih naro\\u010dilih. Ministrstvo je pripravilo, \\u017ee za\\u010delo s pripravo nekih protokolov za podro\\u010dje javnih razpisov v letu 2015 in prvi javni razpis pripravilo tudi v letu 2015. Zanima me pa, koliko javnih razpisov je bilo do sedaj izpeljano. Kolikor mi je znano, samo eden ali pa \\u0161e ta ne do konca. \\nZanima me tudi kaj je ministrstvo naredilo glede stro\\u0161kov vzdr\\u017eevanja informacijskih sistemov v UKC. Ali je kaj reagiralo na to drago vzdr\\u017eevanje? Znano je, da ministrstvo ni reagiralo, \\u010deprav bi po mojem mnenju \\u0161e kako lahko. Poglejte, da zavodi poslujejo negativno, definitivno ima na to vpliv tudi na vrat na nos sprejem oziroma, ja, pravilnik o nujni medicinski pomo\\u010di. Mi smo \\u017ee takrat opozarjali na vse nev\\u0161e\\u010dnosti, ki se bodo dogajale in takrat smo tudi opozarjali, da je potrebno oziroma da urgentni centri nimajo znotraj vklju\\u010denih pediatri\\u010dnih urgentnih centrov. Mi smo na to, mi in pa stroka je na to opozarjala \\u017ee v letu 2015, ampak \\u010deprav je ministrica rekla, da je to izvedela \\u0161ele marca 2016 in poglejte, tak na\\u010din sprejemanja samega pravilnika brez tega, da bi bila pripravljena neka finan\\u010dna, kadrovska, organizacijska shema oziroma konstrukcija, smo bili mnenja, da je to nekako projekt, ki se je iz finan\\u010dnega vidika nekako neprijazen do prora\\u010duna dr\\u017eave. In prav zaskrbljujo\\u010de je dejstvo, kar je tudi gospa dr\\u017eavna sekretarka rekla, da se \\u0161ele sedaj ta komisija, neka komisija sestavi in pripravlja neke normative za pla\\u010dilo storitev. Toliko za enkrat z moje strani. Jaz verjamem, da se bodo moji kolegi osredoto\\u010dili na samo revizijsko poro\\u010dilo in na aktivnosti, ki bi jih moralo izvesti ministrstvo, ki pa jih \\u0161e \\u017eal ni oziroma se ni odzvalo niti na, negativno odzvalo na odzivno poro\\u010dilo. Za konec bi rada rekla to, da dejstvo je, da korupcija iz\\u010drpava zdravstvo, javni denar se preteka v privat \\u017eepe, bolnice so v rde\\u010dih \\u0161tevilkah, posledice \\u010duti tudi na\\u0161 prora\\u010dun in seveda, \\u017eal, posledice \\u010dutijo tudi na\\u0161i dr\\u017eavljani. Hvala lepa.\",\n    \"Poglejte, drugi odstavek tega \\u010dlena govori \\\"Dovoljenje za organiziranje priro\\u010dne zaloge zdravil izda ob\\u010dina.\\\" Poglejte, kaj ima ob\\u010dina s tem? Mi predlagamo \\u010drtanje tega odstavka.\"\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getSpeechesOfMP/12",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getSpeechesOfMP/12/21.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "MPs"
  },
  {
    "type": "get",
    "url": "getAllOrganizations/{?date}",
    "title": "Get all Organizations",
    "name": "getAllOrganizations",
    "group": "Other",
    "description": "<p>This function returns an object with all the organizations active on a given date. If no optional date parameter is given, it is assumed the date is today. It lists organizations in an object with the organizations' Parladata ids as keys.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>PG object with their id as key.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id.acronym",
            "description": "<p>The organization's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "id.is_coalition",
            "description": "<p>Is the organization in coalition with the government?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"8\": {\n        \"acronym\": \"ZL\",\n        \"name\": \"PS Zdru\\u017eena Levica\",\n        \"classification\": \"poslanska skupina\",\n        \"is_coalition\": false\n    },\n    \"9\": {\n        \"acronym\": \"\",\n        \"name\": \"Kolegij predsednika dr\\u017eavnega zbora\",\n        \"classification\": \"kolegij\",\n        \"is_coalition\": false\n    },\n    \"10\": {\n        \"acronym\": \"\",\n        \"name\": \"Komisija za nadzor javnih financ\",\n        \"classification\": \"komisija\",\n        \"is_coalition\": false\n    },\n    \"11\": {\n        \"acronym\": \"\",\n        \"name\": \"Komisija za narodni skupnosti\",\n        \"classification\": \"komisija\",\n        \"is_coalition\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllOrganizations/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllOrganizations/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getAllPeople",
    "title": "Get all People",
    "name": "getAllPeople",
    "group": "Other",
    "description": "<p>This function returns a list of all people in Parladata. This includes people who only spoke in the parliament as well as MPs and government members. The objects returned resemble those of getMPStatic, but keep in mind, that for people who only spoke in the parliament, no extra information is collected.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of person objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.gov_id",
            "description": "<p>MP's &quot;government id&quot;. The ID this particular MP is given on http://www.dz-rs.si If not returns null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.voters",
            "description": "<p>The number of voters the MP was elected with. Only MPs have voters.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.image",
            "description": "<p>URL to the person's image on http://www.dz-rs.si.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.patronymic_name",
            "description": "<p>The person's patronymic name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.sort_name",
            "description": "<p>The person's sorting name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>The person's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.biography",
            "description": "<p>The person's biography if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.classification",
            "description": "<p>The person's classification if applicable. If not returns empty string. Sometimes used for internal sorting purposes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.district",
            "description": "<p>Name of the district (or districts) the MP was elected in. Only MP's have districts. Currently always returns empty string. TODO</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.additional_name",
            "description": "<p>The person's additional name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.hovorific_suffix",
            "description": "<p>The person's honorific suffix, such as &quot;PhD&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.honorific_prefix",
            "description": "<p>The person's honorific prefix name if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.given_name",
            "description": "<p>The person's given name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.email",
            "description": "<p>The person's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.membership",
            "description": "<p>The person's current party.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.active",
            "description": "<p>The person's active state.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.family_name",
            "description": "<p>The person's family name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.name",
            "description": "<p>The person's full/display name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.gov_picture_url",
            "description": "<p>URL to Person's image on http://www.dz-rs.si if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.summary",
            "description": "<p>Person's summary if applicable. If not returns empty string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.birth_date",
            "description": "<p>Person's date of birth. Returns time as well, so that all objects are datetime, but the time can be ignored.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"gov_id\": null,\n        \"voters\": null,\n        \"image\": null,\n        \"patronymic_name\": null,\n        \"sort_name\": null,\n        \"id\": 1329,\n        \"biography\": null,\n        \"classification\": null,\n        \"district\": \"\",\n        \"additional_name\": null,\n        \"honorific_suffix\": null,\n        \"honorific_prefix\": null,\n        \"given_name\": null,\n        \"email\": null,\n        \"membership\": \"\",\n        \"active\": true,\n        \"family_name\": null,\n        \"name\": \"Mateja Ko\\u017euh Novak\",\n        \"gov_picture_url\": null,\n        \"gender\": null,\n        \"death_date\": \"None\",\n        \"summary\": null,\n        \"birth_date\": \"None\"\n    }, {\n        \"gov_id\": null,\n        \"voters\": null,\n        \"image\": null,\n        \"patronymic_name\": null,\n        \"sort_name\": null,\n        \"id\": 1331,\n        \"biography\": null,\n        \"classification\": null,\n        \"district\": \"\",\n        \"additional_name\": null,\n        \"honorific_suffix\": null,\n        \"honorific_prefix\": null,\n        \"given_name\": null,\n        \"email\": null,\n        \"membership\": null,\n        \"active\": true,\n        \"family_name\": null,\n        \"name\": \"Vlasta Nussdorfer\",\n        \"gov_picture_url\": null,\n        \"gender\": null,\n        \"death_date\": \"None\",\n        \"summary\": null,\n        \"birth_date\": \"None\"\n    }, {\n        \"gov_id\": \"P225\",\n        \"voters\": 2496,\n        \"image\": \"http://www.dz-rs.si/wps/PA_DZ-LN-Osebe/CommonRes?idOseba=P225\",\n        \"patronymic_name\": \"\",\n        \"sort_name\": \"\",\n        \"id\": 15,\n        \"biography\": \"\",\n        \"classification\": \"\",\n        \"district\": \"\",\n        \"additional_name\": \"\",\n        \"honorific_suffix\": \"mag.\",\n        \"honorific_prefix\": \"\",\n        \"given_name\": \"Andrej\",\n        \"email\": \"andrej.cus@dz-rs.si\",\n        \"membership\": \"Nepovezani poslanec Andrej \\u010cu\\u0161\",\n        \"active\": true,\n        \"family_name\": \"\\u010cu\\u0161\",\n        \"name\": \"Andrej \\u010cu\\u0161\",\n        \"gov_picture_url\": \"http://www.dz-rs.si/wps/PA_DZ-LN-Osebe/CommonRes?idOseba=P225\",\n        \"gender\": \"male\",\n        \"death_date\": \"None\",\n        \"summary\": \"\",\n        \"birth_date\": \"1990-07-29 02:00:00\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllPeople/",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getAllQuestions/{?date}",
    "title": "Get all MP's questions",
    "name": "getAllQuestions",
    "group": "Other",
    "description": "<p>This function returns all MP's questions that have been asked up to a specific date. If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of Question objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.recipient_text",
            "description": "<p>Recipient in text form as written on www.dz-rs.si.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.recipient_org_id",
            "description": "<p>Parladata id of the organization the recipient is a member of if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.recipien_id",
            "description": "<p>Parladata id of the recipient if applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.link",
            "description": "<p>URL to the relevant question document.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.title",
            "description": "<p>Question title.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.date",
            "description": "<p>The date on which the question was asked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.author_id",
            "description": "<p>The Parladata id of the MP who asked the question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>Parladata id of the question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session_id",
            "description": "<p>Parladata id of the session where this question was asked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"recipient_text\": \"minister za infrastrukturo in prostor, ki opravlja teko\\u010de posle\",\n        \"recipient_org_id\": null,\n        \"recipient_id\": null,\n        \"link\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e0051c03fcabad65a8c60e1ab07b2f598715f9b4384afed907db7a549169\",\n        \"title\": \"v zvezi z spremenjenimi pravili za opravljanje vozni\\u0161kih izpitov\",\n        \"date\": \"2014-08-27T00:00:00\",\n        \"author_id\": 83,\n        \"id\": 4973,\n        \"session_id\": null\n    }, {\n        \"recipient_text\": \"generalna sekretarka Vlade\",\n        \"recipient_org_id\": null,\n        \"recipient_id\": null,\n        \"link\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e005dd49e02aa5a4bdf82cd726ec231c5db754de339461cec5f929cc2f3c\",\n        \"title\": \"v zvezi z glasovanjem na sejah Vlade RS\",\n        \"date\": \"2014-09-10T00:00:00\",\n        \"author_id\": 78,\n        \"id\": 4974,\n        \"session_id\": 5618\n    }, {\n        \"recipient_text\": \"ministrica za delo dru\\u017eino socialne zadeve in enake mo\\u017enosti\",\n        \"recipient_org_id\": null,\n        \"recipient_id\": null,\n        \"link\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e00538fae5d9cbae4b468d3b346c4e28915089345234281182daa8b033fb\",\n        \"title\": \"v zvezi z oskrbo starej\\u0161ih\",\n        \"date\": \"2014-09-26T00:00:00\",\n        \"author_id\": 23,\n        \"id\": 4975,\n        \"session_id\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllQuestions/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllQuestions/12.12.2014",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getAllSpeeches/{?date}",
    "title": "Get all Speeches",
    "name": "getAllSpeeches",
    "group": "Other",
    "description": "<p>This function returns an object with all the organizations active on a given date. If no optional date parameter is given, it is assumed the date is today. It lists organizations in an object with the organizations' Parladata ids as keys.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>PG object with their id as key.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id.acronym",
            "description": "<p>The organization's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "id.is_coalition",
            "description": "<p>Is the organization in coalition with the government?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"8\": {\n        \"acronym\": \"ZL\",\n        \"name\": \"PS Zdru\\u017eena Levica\",\n        \"classification\": \"poslanska skupina\",\n        \"is_coalition\": false\n    },\n    \"9\": {\n        \"acronym\": \"\",\n        \"name\": \"Kolegij predsednika dr\\u017eavnega zbora\",\n        \"classification\": \"kolegij\",\n        \"is_coalition\": false\n    },\n    \"10\": {\n        \"acronym\": \"\",\n        \"name\": \"Komisija za nadzor javnih financ\",\n        \"classification\": \"komisija\",\n        \"is_coalition\": false\n    },\n    \"11\": {\n        \"acronym\": \"\",\n        \"name\": \"Komisija za narodni skupnosti\",\n        \"classification\": \"komisija\",\n        \"is_coalition\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllOrganizations/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllOrganizations/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getDistricts",
    "title": "Get all Districts",
    "name": "getDistricts",
    "group": "Other",
    "description": "<p>This function returns a list of objects representing individual voting districts.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.name",
            "description": "<p>The district's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>The district's Parladata id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"id\": 89,\n        \"name\": \"Ajdov\\u0161\\u010dina\"\n    }, {\n        \"id\": 88,\n        \"name\": \"Nova Gorica I\"\n    }, {\n        \"id\": 87,\n        \"name\": \"Nova Gorica II\"\n    }, {\n        \"id\": 86,\n        \"name\": \"Postojna\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getDistricts",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getOrganizatonsByClassification",
    "title": "Get all Organizations organized by classification",
    "name": "getOrganizatonsByClassification",
    "group": "Other",
    "description": "<p>This function returns an object with the keys corresponding to different organization classifications.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.working_bodies",
            "description": "<p>Organizations classified as working bodies.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.working_bodies.id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.working_bodies.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.parliamentary_groups",
            "description": "<p>Organizations classified as PGs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.parliamentary_groups.id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.parliamentary_groups.name",
            "description": "<p>The organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.council",
            "description": "<p>Organizations classified as councils.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.council.id",
            "description": "<p>The organization's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.council.name",
            "description": "<p>The organization's name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"working_bodies\": [{\n        \"id\": 22,\n        \"name\": \"Odbor za kulturo\"\n    }, {\n        \"id\": 26,\n        \"name\": \"Odbor za zadeve Evropske unije\"\n    }, {\n        \"id\": 27,\n        \"name\": \"Odbor za zdravstvo\"\n    }, {\n        \"id\": 24,\n        \"name\": \"Odbor za obrambo\"\n    }, {\n        \"id\": 29,\n        \"name\": \"Ustavna komisija\"\n    }],\n    \"parliamentary_groups\": [{\n        \"id\": 4,\n        \"name\": \"PS Zavezni\\u0161tvo Alenke Bratu\\u0161ek\"\n    }, {\n        \"id\": 7,\n        \"name\": \"PS Socialni Demokrati\"\n    }, {\n        \"id\": 1,\n        \"name\": \"PS Stranka modernega centra\"\n    }, {\n        \"id\": 6,\n        \"name\": \"PS Nova Slovenija\"\n    }, {\n        \"id\": 125,\n        \"name\": \"Stranka modernega centra\"\n    }],\n    \"council\": [{\n        \"id\": 9,\n        \"name\": \"Kolegij predsednika dr\\u017eavnega zbora\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getOrganizatonsByClassification",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getPersonData",
    "title": "Get basic info about a person",
    "name": "getPersonData",
    "group": "Other",
    "description": "<p>This function returns an object with the person's basic info.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.gender",
            "description": "<p>The person's recorded gender, usually female or male. Used primarily for front-end grammar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.name",
            "description": "<p>The name of the person.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.gov_id",
            "description": "<p>The person's gov_id if applicable.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"gender\": \"female\",\n    \"name\": \"Anja Bah \\u017dibert\",\n    \"gov_id\": \"P239\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getPersonData/2",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getSpeechData",
    "title": "Get info about a speech",
    "name": "getSpeechData",
    "group": "Other",
    "description": "<p>This function returns an object with the speech's basic info.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.date",
            "description": "<p>The date of the speech.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session_name",
            "description": "<p>The name of the session at which the speech took place.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session_id",
            "description": "<p>The Parladata id of the session at which the speech took place.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.speaker_id",
            "description": "<p>Parladata id of the speaker who said the words.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"date\": \"2017-01-18\",\n    \"session_name\": \"69. redna seja\",\n    \"id\": 996415,\n    \"session_id\": 8935,\n    \"speaker_id\": 39\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getSpeechData/996415",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getTags",
    "title": "Get all Tags",
    "name": "getTags",
    "group": "Other",
    "description": "<p>This function returns a list of objects representing individual tags used for tagging motions.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.name",
            "description": "<p>The tag's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>The tag's Parladata id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"name\": \"Komisija za nadzor javnih financ\",\n        \"id\": 13\n    }, {\n        \"name\": \"Kolegij predsednika Dr\\u017eavnega zbora\",\n        \"id\": 12\n    }, {\n        \"name\": \"Komisija za narodni skupnosti\",\n        \"id\": 14\n    }, {\n        \"name\": \"Komisija za odnose s Slovenci v zamejstvu in po svetu\",\n        \"id\": 15\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getTags",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "isSpeechOnDay/{?date}",
    "title": "Check whether a speech happened on a specific day",
    "name": "isSpeechOnDay",
    "group": "Other",
    "description": "<p>This function returns an object with the answer to the question: did a speech happen on a specific day? If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.isSpeech",
            "description": "<p>True if a speech happened on the supplied date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"isSpeech\": false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/isSpeechOnDay/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/isSpeechOnDay/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "isVoteOnDay/{?date}",
    "title": "Check whether a vote happened on a specific day",
    "name": "isVoteOnDay",
    "group": "Other",
    "description": "<p>This function returns an object with the answer to the question: did a vote happen on a specific day? If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.isVote",
            "description": "<p>True if a speech happened on the supplied date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"isVote\": false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/isVoteOnDay/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/isVoteOnDay/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "monitoring",
    "title": "Check if API is running",
    "name": "monitoring",
    "group": "Other",
    "description": "<p>This function returns the state of the API. Either it says &quot;All iz well.&quot; or it instructs you to &quot;PANIC!&quot;</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Either &quot;All iz well.&quot; or it's time to &quot;PANIC!&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "All iz well.",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/monitoring",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "getAllPGs/{?date}",
    "title": "Get all PGs",
    "name": "getAllPGs",
    "group": "PGs",
    "description": "<p>This function returns an object with all the PG's active on a given date. If no optional date parameter is given, it is assumed the date is today. It lists PGs in an object with the PGs' Parladata ids as keys.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>PG object with their id as key.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id.acronym",
            "description": "<p>The PG's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "id.is_coalition",
            "description": "<p>Is the PG in coalition with the government?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the PG.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"1\": {\n        \"acronym\": \"SMC\",\n        \"is_coalition\": true,\n        \"name\": \"PS Stranka modernega centra\",\n        \"id\": 1\n    },\n    \"2\": {\n        \"acronym\": \"IMNS\",\n        \"is_coalition\": false,\n        \"name\": \"PS italijanske in mad\\u017earske narodne skupnosti\",\n        \"id\": 2\n    },\n    \"3\": {\n        \"acronym\": \"DeSUS\",\n        \"is_coalition\": true,\n        \"name\": \"PS Demokratska Stranka Upokojencev Slovenije\",\n        \"id\": 3\n    },\n    \"5\": {\n        \"acronym\": \"SDS\",\n        \"is_coalition\": false,\n        \"name\": \"PS Slovenska Demokratska Stranka\",\n        \"id\": 5\n    },\n    \"6\": {\n        \"acronym\": \"NSI\",\n        \"is_coalition\": false,\n        \"name\": \"PS Nova Slovenija\",\n        \"id\": 6\n    },\n    \"7\": {\n        \"acronym\": \"SD\",\n        \"is_coalition\": true,\n        \"name\": \"PS Socialni Demokrati\",\n        \"id\": 7\n    },\n    \"8\": {\n        \"acronym\": \"ZL\",\n        \"is_coalition\": false,\n        \"name\": \"PS Zdru\\u017eena Levica\",\n        \"id\": 8\n    },\n    \"109\": {\n        \"acronym\": \"PS NP\",\n        \"is_coalition\": false,\n        \"name\": \"PS nepovezanih poslancev \",\n        \"id\": 109\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllPGs/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllPGs/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getAllPGsExt/{?date}",
    "title": "Get all PGs with founded and disbanded dates",
    "name": "getAllPGsExt",
    "group": "PGs",
    "description": "<p>This function returns an object with all the PG's active on a given date. If no optional date parameter is given, it is assumed the date is today. It lists PGs in an object with the PGs' Parladata ids as keys.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>PG object with their id as key.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id.acronym",
            "description": "<p>The PG's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "id.founded",
            "description": "<p>Date when the PG was founded.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the PG.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "id.disbanded",
            "description": "<p>Date when the PG was disbanded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"1\": {\n        \"acronym\": \"SMC\",\n        \"founded\": null,\n        \"name\": \"PS Stranka modernega centra\",\n        \"disbanded\": null\n    },\n    \"2\": {\n        \"acronym\": \"IMNS\",\n        \"founded\": null,\n        \"name\": \"PS italijanske in mad\\u017earske narodne skupnosti\",\n        \"disbanded\": null\n    },\n    \"3\": {\n        \"acronym\": \"DeSUS\",\n        \"founded\": null,\n        \"name\": \"PS Demokratska Stranka Upokojencev Slovenije\",\n        \"disbanded\": null\n    },\n    \"4\": {\n        \"acronym\": \"ZAAB\",\n        \"founded\": \"2014-08-01T00:00:00\",\n        \"name\": \"PS Zavezni\\u0161tvo Alenke Bratu\\u0161ek\",\n        \"disbanded\": \"2015-09-08T00:00:00\"\n    },\n    \"5\": {\n        \"acronym\": \"SDS\",\n        \"founded\": \"2014-08-01T00:00:00\",\n        \"name\": \"PS Slovenska Demokratska Stranka\",\n        \"disbanded\": null\n    },\n    \"6\": {\n        \"acronym\": \"NSI\",\n        \"founded\": null,\n        \"name\": \"PS Nova Slovenija\",\n        \"disbanded\": null\n    },\n    \"7\": {\n        \"acronym\": \"SD\",\n        \"founded\": null,\n        \"name\": \"PS Socialni Demokrati\",\n        \"disbanded\": null\n    },\n    \"8\": {\n        \"acronym\": \"ZL\",\n        \"founded\": \"2014-08-06T00:00:00\",\n        \"name\": \"PS Zdru\\u017eena Levica\",\n        \"disbanded\": null\n    },\n    \"109\": {\n        \"acronym\": \"PS NP\",\n        \"founded\": \"2016-01-29T00:00:00\",\n        \"name\": \"PS nepovezanih poslancev \",\n        \"disbanded\": null\n    },\n    \"97\": {\n        \"acronym\": \"PS NP\",\n        \"founded\": \"2015-09-14T00:00:00\",\n        \"name\": \"PS nepovezanih poslancev \",\n        \"disbanded\": \"2016-01-28T00:00:00\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllPGsExt/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllPGsExt/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getBallotsCounterOfParty/{id}/{?date}",
    "title": "Get MP's ballot counts",
    "name": "getBallotsCounterOfParty",
    "group": "PGs",
    "description": "<p>This function returns a list of objects representing monthly ballot counts for a specific PG.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of BalloutCounter objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.ni",
            "description": "<p>Number of times members of the PG didn't participate in a voting event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.proti",
            "description": "<p>Number of times members of the PG voted against the motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.date_ts",
            "description": "<p>UTF-8 date for easier sorting. The first of the month signifies the month in which we're counting ballots.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.za",
            "description": "<p>Number of times members of the PG voted for the motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.kvorum",
            "description": "<p>Number of times members of the PG abstained.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.date",
            "description": "<p>Human-readable &quot;Slovenian&quot; date. The first of the month signifies the month in which we're counting ballots.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.total",
            "description": "<p>Total number of ballots for this person</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"ni\": 0,\n        \"proti\": 3,\n        \"date_ts\": \"2014-08-01T00:00:00\",\n        \"za\": 28,\n        \"kvorum\": 3,\n        \"date\": \"01.08.2014\",\n        \"total\": 17\n    }, {\n        \"ni\": 9,\n        \"proti\": 1,\n        \"date_ts\": \"2014-09-01T00:00:00\",\n        \"za\": 20,\n        \"kvorum\": 0,\n        \"date\": \"01.09.2014\",\n        \"total\": 15\n    }, {\n        \"ni\": 0,\n        \"proti\": 0,\n        \"date_ts\": \"2014-10-01T00:00:00\",\n        \"za\": 6,\n        \"kvorum\": 2,\n        \"date\": \"01.10.2014\",\n        \"total\": 4\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getBallotsCounterOfParty/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getBallotsCounterOfParty/2/12.12.2014",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getBasicInfoOfPG/{id}/{?date}",
    "title": "PG's basic info",
    "name": "getBasicInfoOfPG",
    "group": "PGs",
    "description": "<p>This function returns an object with the PG's basic info. If the date parameter is specified, it returns the info that was valid on that day.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>PG's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "AllVoters",
            "description": "<p>The number of voters that voted for this person.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "HeadOfPG",
            "description": "<p>Parladata id of the person who heads the PG.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Twitter",
            "description": "<p>PG's Twitter url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ViceOfPG",
            "description": "<p>Parladata id of the person who is the vice president of the PG.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Facebook",
            "description": "<p>PG's Facebook url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Mail",
            "description": "<p>PG's official email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "NumberOfSeats",
            "description": "<p>Number of seats the PG holds in the parliament.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"AllVoters\": 2957,\n    \"HeadOfPG\": 24,\n    \"Twitter\": null,\n    \"ViceOfPG\": null,\n    \"Facebook\": null,\n    \"Mail\": \"petra.jamnik@dz-rs.si\",\n    \"NumberOfSeats\": 2\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getBasicInfoOfPG/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getBasicInfoOfPG/2/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getMembersOfPGRanges/{id}/{?date}",
    "title": "Get membership ranges for a specific PGs",
    "name": "getMembersOfPGRanges",
    "group": "PGs",
    "description": "<p>This function returns a list of objects representing uninterupted membership constellations in a single PG. In other words, it returns as many objects as there were different membership settings. If no date is specified it is assumed the date is today, otherwise the results returned span only until the supplied date.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.members",
            "description": "<p>List of Parladata ids for all members of this PG in the current timespan.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.start_date",
            "description": "<p>This range's start date (from).</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.end_date",
            "description": "<p>This range's end date (to).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"members\": [],\n        \"start_date\": \"31.07.2014\",\n        \"end_date\": \"31.07.2014\"\n    }, {\n        \"members\": [4, 24],\n        \"start_date\": \"01.08.2014\",\n        \"end_date\": \"17.03.2017\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersOfPGRanges/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersOfPGRanges/2/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getMembersOfPGs/",
    "title": "Get PGs and their members today",
    "name": "getMembersOfPGs",
    "group": "PGs",
    "description": "<p>This function returns object with PG Parladata ids as keys. Each key corresponds to an array of integers containing Parladata ids of all MPs that are members of the corresponging PG.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/",
            "description": "<p>An object with PG ids as keys.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.id",
            "description": "<p>An array of integers corresponding to members' Parladata ids.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"1\": [3, 14, 21, 39, 44, 68, 71, 74, 88, 16, 11, 27, 33, 40, 43, 57, 60, 70, 72, 19, 76, 77, 87, 89, 1354, 73, 84, 67, 48, 59, 92, 2933, 2934, 1357, 1355],\n    \"2\": [4, 24],\n    \"3\": [69, 22, 29, 34, 45, 52, 96, 85, 37, 41, 5],\n    \"4\": [],\n    \"5\": [10, 12, 26, 35, 51, 54, 55, 64, 66, 75, 36, 78, 25, 2, 23, 47, 53, 65, 91],\n    \"6\": [32, 86, 63, 81, 17, 49],\n    \"7\": [61, 62, 1356, 83, 30, 95],\n    \"8\": [80, 82, 31, 42, 79, 58],\n    \"107\": [],\n    \"108\": [15],\n    \"109\": [50, 9, 18, 7],\n    \"110\": [],\n    \"111\": [],\n    \"112\": [],\n    \"97\": [],\n    \"100\": []\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersOfPGs/",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getMembersOfPGsOnDate/{date}",
    "title": "Get PGs and their members on a specific date",
    "name": "getMembersOfPGsOnDate",
    "group": "PGs",
    "description": "<p>This function returns object with PG Parladata ids as keys. Each key corresponds to an array of integers containing Parladata ids of all MPs that are members of the corresponging PG.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>The date for which memberships should be displayed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/",
            "description": "<p>An object with PG ids as keys.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.id",
            "description": "<p>An array of integers corresponding to members' Parladata ids.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"1\": [3, 14, 21, 39, 44, 68, 71, 74, 88, 16, 11, 27, 33, 40, 43, 57, 60, 70, 72, 19, 76, 77, 87, 89, 1354, 73, 84, 67, 48, 59, 92, 2933, 2934, 1357, 1355],\n    \"2\": [4, 24],\n    \"3\": [69, 22, 29, 34, 45, 52, 96, 85, 37, 41, 5],\n    \"4\": [],\n    \"5\": [10, 12, 26, 35, 51, 54, 55, 64, 66, 75, 36, 78, 25, 2, 23, 47, 53, 65, 91],\n    \"6\": [32, 86, 63, 81, 17, 49],\n    \"7\": [61, 62, 1356, 83, 30, 95],\n    \"8\": [80, 82, 31, 42, 79, 58],\n    \"107\": [],\n    \"108\": [15],\n    \"109\": [50, 9, 18, 7],\n    \"110\": [],\n    \"111\": [],\n    \"112\": [],\n    \"97\": [],\n    \"100\": []\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersOfPGsOnDate/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getMembersOfPGsRanges/{?date}",
    "title": "Get membership ranges for all PGs",
    "name": "getMembersOfPGsRanges",
    "group": "PGs",
    "description": "<p>This function returns a list of objects representing uninterupted membership constellations in the national assembly. In other words, it returns as many objects as there were different membership settings. If no date is specified it is assumed the date is today, otherwise the results returned span only until the supplied date.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.members",
            "description": "<p>Object with PG Parladata ids as keys.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.members.PG_ID",
            "description": "<p>List of Parladata ids for all members of this PG in the current timespan.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.start_date",
            "description": "<p>This range's start date (from).</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.end_date",
            "description": "<p>This range's end date (to).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"members\": {\n        \"1\": [],\n        \"2\": [],\n        \"3\": [],\n        \"4\": [],\n        \"5\": [],\n        \"6\": [],\n        \"7\": [],\n        \"8\": [],\n        \"107\": [],\n        \"108\": [],\n        \"109\": [],\n        \"110\": [],\n        \"111\": [],\n        \"112\": [],\n        \"97\": [],\n        \"100\": [],\n        \"124\": [],\n        \"125\": []\n        },\n        \"start_date\": \"31.07.2014\",\n        \"end_date\": \"31.07.2014\"\n    }, {\n        \"members\": {\n        \"1\": [3, 14, 21, 39, 44, 68, 71, 74, 88, 16, 11, 27, 33, 40, 43, 57, 60, 70, 72, 19, 76, 77, 87, 89, 18, 56, 73, 84, 67, 28, 48, 6, 8, 50, 46, 13],\n        \"2\": [4, 24],\n        \"3\": [69, 22, 29, 34, 45, 52, 20, 37, 41, 5],\n        \"4\": [59, 9, 85, 7],\n        \"5\": [10, 12, 26, 35, 51, 54, 55, 64, 66, 75, 15, 49, 36, 78, 25, 2, 23, 47, 53, 65, 91],\n        \"6\": [32, 86, 63, 81, 17],\n        \"7\": [61, 62, 38, 83, 90, 30],\n        \"8\": [80, 82, 31, 79, 58, 42],\n        \"107\": [],\n        \"108\": [],\n        \"109\": [],\n        \"110\": [],\n        \"111\": [],\n        \"112\": [],\n        \"97\": [],\n        \"100\": [],\n        \"124\": [],\n        \"125\": []\n        },\n        \"start_date\": \"01.08.2014\",\n        \"end_date\": \"25.08.2014\"\n    }, {\n        \"members\": {\n        \"1\": [3, 14, 21, 39, 44, 68, 71, 74, 88, 16, 11, 27, 33, 40, 43, 57, 60, 70, 72, 19, 76, 77, 87, 89, 18, 56, 73, 84, 67, 28, 48, 6, 8, 50, 46],\n        \"2\": [4, 24],\n        \"3\": [69, 22, 29, 34, 45, 52, 20, 37, 41, 5],\n        \"4\": [59, 9, 85, 7],\n        \"5\": [10, 12, 26, 35, 51, 54, 55, 64, 66, 75, 15, 49, 36, 78, 25, 2, 23, 47, 53, 65, 91],\n        \"6\": [32, 86, 63, 81, 17],\n        \"7\": [61, 62, 38, 83, 90, 30],\n        \"8\": [80, 82, 31, 79, 58, 42],\n        \"107\": [],\n        \"108\": [],\n        \"109\": [],\n        \"110\": [],\n        \"111\": [],\n        \"112\": [],\n        \"97\": [],\n        \"100\": [],\n        \"124\": [],\n        \"125\": []\n        },\n        \"start_date\": \"26.08.2014\",\n        \"end_date\": \"26.08.2014\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersOfPGsRanges/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getMembersOfPGsRanges/12.12.2015",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getNumberOfSeatsOfPG/{id}/",
    "title": "Number of PG's seats",
    "name": "getNumberOfSeatsOfPG",
    "group": "PGs",
    "description": "<p>This function returns an object with the PG's id as the key and the number of seats for the desired PG.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>PG's id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The number of seats the PG with the same id as the key holds.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"1\": 45\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getNumberOfSeatsOfPG/1",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getPGsSpeechesIDs/{id}/{?date}",
    "title": "Get all PG's speeches ids",
    "name": "getPGsSpeechesIDs",
    "group": "PGs",
    "description": "<p>This function returns a list of all PG's speeches up until a specific date. If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of speech ids as integers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[592488, 580811, 567944, 567950, 538605]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getPGsSpeechesIDs/2",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getPGsSpeechesIDs/2/12.12.2014",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "PGs"
  },
  {
    "type": "get",
    "url": "getBallotsOfSession/{id}",
    "title": "Get all ballots from a specific Session",
    "name": "getBallotsOfSession",
    "group": "Sessions",
    "description": "<p>This function returns a list of all ballots for all motions voted upon in this session.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of Ballot objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.Acronym",
            "description": "<p>PG acronym for MP's PG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.pg_id",
            "description": "<p>Parladata id of the PG the MP that submitted the ballot belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.mo_id",
            "description": "<p>Parladata id of the motion this ballot belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.option",
            "description": "<p>The option on the ballot. One of &quot;za&quot;, &quot;proti&quot;, &quot;kvorum&quot;, &quot;ni&quot;).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"Acronym\": \"SDS\",\n        \"pg_id\": 5,\n        \"mp_id\": 91,\n        \"mo_id\": 6650,\n        \"option\": \"kvorum\"\n    }, {\n        \"Acronym\": \"SMC\",\n        \"pg_id\": 1,\n        \"mp_id\": 89,\n        \"mo_id\": 6650,\n        \"option\": \"za\"\n    }, {\n        \"Acronym\": \"SMC\",\n        \"pg_id\": 1,\n        \"mp_id\": 88,\n        \"mo_id\": 6650,\n        \"option\": \"za\"\n    }, {\n        \"Acronym\": \"SMC\",\n        \"pg_id\": 1,\n        \"mp_id\": 87,\n        \"mo_id\": 6650,\n        \"option\": \"za\"\n    }, {\n        \"Acronym\": \"NSI\",\n        \"pg_id\": 6,\n        \"mp_id\": 86,\n        \"mo_id\": 6650,\n        \"option\": \"kvorum\"\n    }, {\n        \"Acronym\": \"DeSUS\",\n        \"pg_id\": 3,\n        \"mp_id\": 85,\n        \"mo_id\": 6650,\n        \"option\": \"za\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getBallotsOfSession/9158",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Sessions"
  },
  {
    "type": "get",
    "url": "getSessions/{?date}",
    "title": "List all sessions",
    "name": "getSessions",
    "group": "Sessions",
    "description": "<p>This function returns an array of objects listing all sessions that have happened since the beggining of the current mandate. The optional date parameter determines the date up until which sessions should be returned. If no date is specified it is assumed the date is today.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.classification",
            "description": "<p>Session classification. Returns null if the session doesn't have classification. Sometimes used for internal sorting purposes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.is_in_review",
            "description": "<p>Return true if the session is in review, returns false otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.name",
            "description": "<p>Session name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.gov_id",
            "description": "<p>Session id on http://www.dz-rs.si. Not technically an ID, more of an URI, but it is still used to match the session to the government's website.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.mandate",
            "description": "<p>Currently return null, but functions as a placeholder to determine the mandate the session belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.start_time",
            "description": "<p>Timestamp of the session's start.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/.organizations_id",
            "description": "<p>An array of strings representing Parladata ids of organizations this session belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>The session's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.end_time",
            "description": "<p>Placeholder for session's end time. Currently returns null because we don't know when exactly the session ends.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[{\n    \"classification\": null,\n    \"is_in_review\": false,\n    \"name\": \"71. nujna seja\",\n    \"gov_id\": \"/wps/portal/Home/deloDZ/seje/izbranaSejaDt?mandat=VII&amp;seja=14%20071.%20Nujna&amp;uid=B5BC47C4DF4749B3C12580C60036936E\",\n    \"mandate\": null,\n    \"start_time\": \"2017-02-15T01:00:00\",\n    \"organizations_id\": [],\n    \"id\": 9179,\n    \"end_time\": null\n    }, {\n    \"classification\": null,\n    \"is_in_review\": false,\n    \"name\": \"27. redna seja\",\n    \"gov_id\": \"/wps/portal/Home/deloDZ/seje/izbranaSeja?mandat=VII&amp;seja=27.%20Redna&amp;uid=1B788DD37B254072C125807900377C52\",\n    \"mandate\": null,\n    \"start_time\": \"2017-02-13T01:00:00\",\n    \"organizations_id\": [\"95\"],\n    \"id\": 9158,\n    \"end_time\": null\n    }, {\n    \"classification\": null,\n    \"is_in_review\": false,\n    \"name\": \"47. nujna seja\",\n    \"gov_id\": \"/wps/portal/Home/deloDZ/seje/izbranaSejaDt?mandat=VII&amp;seja=12%20047.%20Nujna&amp;uid=B93F45394862FB17C12580BF003F8548\",\n    \"mandate\": null,\n    \"start_time\": \"2017-02-13T01:00:00\",\n    \"organizations_id\": [\"19\"],\n    \"id\": 9159,\n    \"end_time\": null\n}]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getSessions/",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getSessions/21.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Sessions"
  },
  {
    "type": "get",
    "url": "getSessionsOfOrg/{id}/{?date}",
    "title": "List all sessions of a specific organization",
    "name": "getSessionsOfOrg",
    "group": "Sessions",
    "description": "<p>This function returns an array of objects listing all sessions that have happened since the beggining of the current mandate in the specified organization. The optional date parameter determines the date up until which sessions should be returned. If no date is specified it is assumed the date is today.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Organization id.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Optional date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.name",
            "description": "<p>Session name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.classification",
            "description": "<p>Session classification. Returns null if the session doesn't have classification. Sometimes used for internal sorting purposes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.start_time",
            "description": "<p>Timestamp of the session's start.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.end_time",
            "description": "<p>Placeholder for session's end time. Currently returns null because we don't know when exactly the session ends.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.mandate",
            "description": "<p>Currently return null, but functions as a placeholder to determine the mandate the session belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>The session's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.gov_id",
            "description": "<p>Session id on http://www.dz-rs.si. Not technically an ID, more of an URI, but it is still used to match the session to the government's website.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[{\n    \"name\": \"26. izredna seja\",\n    \"classification\": null,\n    \"start_time\": \"2015-12-09T01:00:00\",\n    \"end_time\": null,\n    \"mandate\": null,\n    \"id\": 5595,\n    \"gov_id\": \"/wps/portal/Home/deloDZ/seje/izbranaSeja?mandat=VII&amp;seja=26.%20Izredna&amp;uid=3B664ACC0A79164EC1257F11003317C8\"\n    }, {\n    \"name\": \"25. izredna seja\",\n    \"classification\": null,\n    \"start_time\": \"2015-12-01T01:00:00\",\n    \"end_time\": null,\n    \"mandate\": null,\n    \"id\": 5596,\n    \"gov_id\": \"/wps/portal/Home/deloDZ/seje/izbranaSeja?mandat=VII&amp;seja=25.%20Izredna&amp;uid=5F0E4C54348C32D1C1257F0D0035ABF5\"\n    }, {\n    \"name\": \"24. izredna seja\",\n    \"classification\": null,\n    \"start_time\": \"2015-11-20T01:00:00\",\n    \"end_time\": null,\n    \"mandate\": null,\n    \"id\": 5597,\n    \"gov_id\": \"/wps/portal/Home/deloDZ/seje/izbranaSeja?mandat=VII&amp;seja=24.%20Izredna&amp;uid=52A5C4FAC552CB55C1257EF80042C358\"\n}]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getSessionsOfOrg/95",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getSessionsOfOrg/95/21.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Sessions"
  },
  {
    "type": "get",
    "url": "motionOfSession/{id}",
    "title": "Get all votes on a specific Session",
    "name": "motionOfSession",
    "group": "Sessions",
    "description": "<p>This function returns a list of all motions voted upon in a specific session.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of Motion objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.doc_url",
            "description": "<p>List of document objects that belong to the motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.doc_url.url",
            "description": "<p>Document URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.doc_url.name",
            "description": "<p>Document name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/.tags",
            "description": "<p>An array of tags that belong to the motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.text",
            "description": "<p>Motion text (what the motion is about).</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.start_time",
            "description": "<p>Motion start time as string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.result",
            "description": "<p>Returns true if the motion passed, false if it didn't null if we don't know.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.vote_id",
            "description": "<p>Parladata id of the vote that took place for this motion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>Parladata id of the motion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"doc_url\": [{\n        \"url\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e005b2b645b53a0715714f6ae78cb5276f4b6144a93f432b13c76b532975\",\n        \"name\": \"Dopis Dr\\u017eavnemu svetu | Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov\"\n        }, {\n        \"url\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e005af6c4e0407faa583537d72f288c917218a4f7202b119a68253c7b302\",\n        \"name\": \"Besedilo zakona poslano Dr\\u017eavnemu svetu | Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov\"\n        }, {\n        \"url\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e00555897ad23d4b3750966a27416b777766702e97964fb34b8ecec49f96\",\n        \"name\": \" | Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov\"\n        }],\n        \"tags\": [\"Odbor za finance in monetarno politiko\"],\n        \"text\": \"Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov - Amandma: K 25. \\u010dlenu 7.2.2017 [SMC - Poslanska skupina Stranke modernega centra]\",\n        \"start_time\": \"2017-02-15T16:18:28\",\n        \"result\": true,\n        \"vote_id\": 6894,\n        \"id\": 6650\n    }, {\n        \"doc_url\": [{\n        \"url\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e005b2b645b53a0715714f6ae78cb5276f4b6144a93f432b13c76b532975\",\n        \"name\": \"Dopis Dr\\u017eavnemu svetu | Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov\"\n        }, {\n        \"url\": \"http://imss.dz-rs.si/IMiS/ImisAdmin.nsf/ImisnetAgent?OpenAgent&2&DZ-MSS-01/ca20e005af6c4e0407faa583537d72f288c917218a4f7202b119a68253c7b302\",\n        \"name\": \"Besedilo zakona poslano Dr\\u017eavnemu svetu | Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov\"\n        }],\n        \"tags\": [\"Odbor za finance in monetarno politiko\"],\n        \"text\": \"Zakon o spremembah in dopolnitvah Zakona o trgu finan\\u010dnih instrumentov - Amandma: K 51. \\u010dlenu 7.2.2017 [SMC - Poslanska skupina Stranke modernega centra]\",\n        \"start_time\": \"2017-02-15T16:19:22\",\n        \"result\": true,\n        \"vote_id\": 6893,\n        \"id\": 6649\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/motionOfSession/9158",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Sessions"
  },
  {
    "type": "get",
    "url": "getAllBallots/{?date}",
    "title": "Get all Ballots",
    "name": "getAllBallots",
    "group": "Votes",
    "description": "<p>This function returns a list of all ballots submitted until a given date. If no date is supplied it is assumed the date is today.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of vote objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.vote",
            "description": "<p>Parladata ID of the vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.voter",
            "description": "<p>Parladata ID of the MP who submitted the ballot.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>Parladata ID of the ballot.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.option",
            "description": "<p>The option of the ballot (za, proti, kvorum, ni).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"vote\": 6601,\n        \"voter\": 95,\n        \"id\": 593806,\n        \"option\": \"za\"\n    }, {\n        \"vote\": 6601,\n        \"voter\": 2,\n        \"id\": 593807,\n        \"option\": \"kvorum\"\n    }, {\n        \"vote\": 6601,\n        \"voter\": 3,\n        \"id\": 593808,\n        \"option\": \"za\"\n    }, {\n        \"vote\": 6601,\n        \"voter\": 4,\n        \"id\": 593809,\n        \"option\": \"ni\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllBallots",
        "type": "curl"
      },
      {
        "title": "Example with date:",
        "content": "curl -i https://data.parlametar.hr/v1/getAllBallots/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "getBallotsOfMotion/{id}",
    "title": "Get all ballots from a specific motion",
    "name": "getBallotsOfMotion",
    "group": "Votes",
    "description": "<p>This function returns a list of all ballots for a specific motion.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of Ballot objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.Acronym",
            "description": "<p>PG acronym for MP's PG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.pg_id",
            "description": "<p>Parladata id of the PG the MP that submitted the ballot belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.mo_id",
            "description": "<p>Parladata id of the motion this ballot belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.option",
            "description": "<p>The option on the ballot. One of &quot;za&quot;, &quot;proti&quot;, &quot;kvorum&quot;, &quot;ni&quot;).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"Acronym\": \"SD\",\n        \"pg_id\": 7,\n        \"mp_id\": 95,\n        \"mo_id\": 6406,\n        \"option\": \"za\"\n    }, {\n        \"Acronym\": \"SDS\",\n        \"pg_id\": 5,\n        \"mp_id\": 2,\n        \"mo_id\": 6406,\n        \"option\": \"za\"\n    }, {\n        \"Acronym\": \"SMC\",\n        \"pg_id\": 1,\n        \"mp_id\": 3,\n        \"mo_id\": 6406,\n        \"option\": \"za\"\n    }, {\n        \"Acronym\": \"IMNS\",\n        \"pg_id\": 2,\n        \"mp_id\": 4,\n        \"mo_id\": 6406,\n        \"option\": \"ni\"\n    }, {\n        \"Acronym\": \"DeSUS\",\n        \"pg_id\": 3,\n        \"mp_id\": 5,\n        \"mo_id\": 6406,\n        \"option\": \"za\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getBallotsOfMotion/6650",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "getVotes/{date}",
    "title": "Get all Votes up until a date",
    "name": "getVotes",
    "group": "Votes",
    "description": "<p>This function returns a list of all votes that took place until a given date.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of vote objects</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "/.start_time",
            "description": "<p>Vote's start time in UTF-8 datetime as string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.motion",
            "description": "<p>Motion name - what is the vote about.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session",
            "description": "<p>Session's at which the vote took place parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.organization_id",
            "description": "<p>Parladata id of the organization in which the vote took place.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.id",
            "description": "<p>Parladata id of the vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.result",
            "description": "<p>String with the result of the vote. Currently always returns &quot;-&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"start_time\": \"2014-08-01T12:16:54\",\n        \"motion\": \"Dnevni red v celoti\",\n        \"session\": 6684,\n        \"end_time\": null,\n        \"party\": 95,\n        \"id\": 6513,\n        \"result\": \"-\"\n    }, {\n        \"start_time\": \"2014-08-01T12:43:48\",\n        \"motion\": \"Proceduralni predlog za prekinitev 1. to\\u010dke dnevnega reda\",\n        \"session\": 6684,\n        \"end_time\": null,\n        \"party\": 95,\n        \"id\": 6512,\n        \"result\": \"-\"\n    }, {\n        \"start_time\": \"2014-08-01T12:49:10\",\n        \"motion\": \"Sklep o imenovanju predsednika in podpredsednika Mandatno-volilne komisije - Sklep\",\n        \"session\": 6684,\n        \"end_time\": null,\n        \"party\": 95,\n        \"id\": 6511,\n        \"result\": \"-\"\n    }, {\n        \"start_time\": \"2014-08-01T14:18:26\",\n        \"motion\": \"Poro\\u010dilo o izidu pred\\u010dasnih volitev v Dr\\u017eavni zbor Republike Slovenije - Glasovanje o predlogu sklepa\",\n        \"session\": 6684,\n        \"end_time\": null,\n        \"party\": 95,\n        \"id\": 6510,\n        \"result\": \"-\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://data.parlametar.hr/v1/getVotes/12.12.2016",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./parladata/views.py",
    "groupTitle": "Votes"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_muki_code_djnd_parladata_doc_main_js",
    "groupTitle": "_home_muki_code_djnd_parladata_doc_main_js",
    "name": ""
  }
] });
