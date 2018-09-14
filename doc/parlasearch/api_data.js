define({ "api": [
  {
    "type": "get",
    "url": "filter/{word}/{?start_page}",
    "title": "Search votes",
    "name": "filterQuery",
    "group": "Search",
    "description": "<p>search query in transcripts</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "word",
            "optional": false,
            "field": "search",
            "description": "<p>word.</p>"
          },
          {
            "group": "Parameter",
            "type": "start_page",
            "optional": false,
            "field": "start",
            "description": "<p>page Optional.</p>"
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
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_ranges",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.gap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.counts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person",
            "description": "<p>MP's person object (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.is_active",
            "description": "<p>Answer the question: Is this MP currently active?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.district",
            "description": "<p>List of Parladata ids for districts this person was elected in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.name",
            "description": "<p>MP's full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.gov_id",
            "description": "<p>MP's id on www.dz-rs.si</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.gender",
            "description": "<p>MP's gender (f/m) used for grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party",
            "description": "<p>This MP's standard party objects (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.acronym",
            "description": "<p>The MP's party's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.is_coalition",
            "description": "<p>Answers the question: Is this party in coalition with the government?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.id",
            "description": "<p>This party's Parladata (organization) id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.name",
            "description": "<p>The party's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.type",
            "description": "<p>The person's parlalize type. Always &quot;mp&quot; for MPs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.id",
            "description": "<p>The person's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.has_function",
            "description": "<p>Answers the question: Is this person the president or vice president of the national assembly (speaker of the house kind of thing).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.score",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.org_i",
            "description": "<p>pairs of organization id and score</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_i",
            "description": "<p>pairs of party id and score</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e",
            "description": "<p>list of party objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e.party",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e.party.acronym",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e.party.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e.party.is_coalition",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e.party.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_e.score",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.highlighting",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.highlighting.start_time",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.content_t",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.speech_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.order",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.highlighting.person",
            "description": "<p>MP's person object (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.highlighting.person.is_active",
            "description": "<p>Answer the question: Is this MP currently active?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.highlighting.person.district",
            "description": "<p>List of Parladata ids for districts this person was elected in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.name",
            "description": "<p>MP's full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.gov_id",
            "description": "<p>MP's id on www.dz-rs.si</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.gender",
            "description": "<p>MP's gender (f/m) used for grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.highlighting.person.party",
            "description": "<p>This MP's standard party objects (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.party.acronym",
            "description": "<p>The MP's party's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.highlighting.person.party.is_coalition",
            "description": "<p>Answers the question: Is this party in coalition with the government?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.person.party.id",
            "description": "<p>This party's Parladata (organization) id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.party.name",
            "description": "<p>The party's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.type",
            "description": "<p>The person's parlalize type. Always &quot;mp&quot; for MPs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.person.id",
            "description": "<p>The person's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.highlighting.person.has_function",
            "description": "<p>Answers the question: Is this person the president or vice president of the national assembly (speaker of the house kind of thing).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.responseHeader",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.responseHeader.status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.responseHeader.QTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.responseHeader.params",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.fq",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.rows",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.responseHeader.params.facet.field",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range.gap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.wt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.snippets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.regex.pattern",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.q",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.fragsize",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.mergeContiguous",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.fl",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.fragmenter",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.response",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.numFound",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.response.docs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.response.docs.tip_t",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.session_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.party_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.response.docs.datetime_dt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.speaker_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.response.docs.content_t",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs._version_",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.response.docs.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.org_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.organizations",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.organizations.score",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.organizations.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.organizations.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.has_council_score",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.has_dz_score",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"facet_counts\": {\n        \"facet_ranges\": {\n            \"datetime_dt\": {\n                \"start\": \"2014-09-01T00:00:00Z\",\n                \"counts\": [\n                    \"2014-09-01T00:00:00Z\",\n                    47,\n                    \"2014-10-01T00:00:00Z\",\n                    11\n                ],\n                \"end\": \"2017-07-01T00:00:00Z\",\n                \"gap\": \"+1MONTHS\"\n            }\n        },\n        \"facet_fields\": {\n            \"speaker_i\": [\n                {\n                    \"person\": {\n                        \"name\": \"Tomaž Gantar\",\n                        \"district\": [\n                            80\n                        ],\n                        \"gender\": \"m\",\n                        \"is_active\": false,\n                        \"party\": {\n                            \"acronym\": \"DeSUS\",\n                            \"id\": 3,\n                            \"is_coalition\": true,\n                            \"name\": \"PS Demokratska Stranka Upokojencev Slovenije\"\n                        },\n                        \"type\": \"mp\",\n                        \"id\": 22,\n                        \"gov_id\": \"P251\",\n                        \"has_function\": false\n                    },\n                    \"score\": 198\n                }\n            ],\n            \"org_i\": [\n                \"95\",\n                1415,\n                \"27\",\n                625\n            ],\n            \"party_e\": [\n                {\n                    \"party\": {\n                        \"acronym\": \"SDS\",\n                        \"id\": 5,\n                        \"is_coalition\": false,\n                        \"name\": \"PS Slovenska Demokratska Stranka\"\n                    },\n                    \"score\": 522\n                }\n            ],\n            \"party_i\": [\n                \"5\",\n                522,\n                \"1\",\n                471\n            ]\n        }\n    },\n    \"highlighting\": [\n        {\n            \"start_time\": \"2017-06-09T02:00:00\",\n            \"session_id\": 9587,\n            \"person\": {\n                \"name\": \"Jožica Mavčec Zakotnik\",\n                \"district\": null,\n                \"gender\": null,\n                \"is_active\": null,\n                \"party\": {\n                    \"acronym\": null,\n                    \"id\": null,\n                    \"is_coalition\": null,\n                    \"name\": null\n                },\n                \"type\": \"visitor\",\n                \"id\": 3807,\n                \"gov_id\": null,\n                \"has_function\": false\n            },\n            \"content_t\": \"da je Ministrstvo za <em>zdravje</em> od izbruha požara ves čas spremljalo delo zdravstvene službe pri zagotavljanju neposredne oskrbe prebivalcem. Službe za medicino dela, prometa in športa je ustrezno poskrbela za ugotavljanje izpostavljenosti gasilcev, članov civilne zaščite, drugega intervencijskega osebja ter delavcev na območju obrata podjetja Kemis. Vsem je bila takrat in je še vedno nudena posebna zdravstvena oskrba in zaščita. Za varovanje <em>zdravja</em> ljudi smo že med požarom in neprekinjeno do danes redno posredovali in objavljali priporočila kako naj preventivno ravnajo, da bi se izognili in v največji možni meri zmanjšali možnost izpostavljenosti snovem v okolju. Do prejetja prvih analiz teh nismo poznali. Smo pa ravnali tako, da smo upoštevali največjo možno zaščito ljudi. V primeru, da bi v dneh po nesreči obstajala večja akutna nevarnost za <em>zdravje</em>, bi na to opozorili.</em>\",\n            \"date\": \"2017-05-30\",\n            \"speech_id\": 1263913,\n            \"order\": 340\n        }\n    ],\n    \"responseHeader\": {\n        \"status\": 0,\n        \"QTime\": 759,\n        \"params\": {\n            \"fq\": \"\",\n            \"rows\": \"50\",\n            \"facet.field\": [\n                \"speaker_i\",\n                \"party_i\",\n                \"org_i\"\n            ],\n            \"facet.range.gap\": \"+1MONTHS\",\n            \"wt\": \"json\",\n            \"hl.snippets\": \"1\",\n            \"facet.range.end\": \"NOW\",\n            \"hl.regex.pattern\": \"\\\\w[^\\\\.!\\\\?]{400,600}[\\\\.!\\\\?]\",\n            \"facet\": \"true\",\n            \"q\": \"content_t:zdravje AND tip_t:govor\",\n            \"start\": \"0\",\n            \"facet.range\": \"datetime_dt\",\n            \"hl\": \"true\",\n            \"hl.fragsize\": \"5000\",\n            \"hl.mergeContiguous\": \"false\",\n            \"hl.fl\": \"content_t\",\n            \"hl.fragmenter\": \"regex\",\n            \"facet.range.start\": \"2014-01-01T00:00:00.000Z\"\n        }\n    },\n    \"response\": {\n        \"start\": 0,\n        \"numFound\": 2948,\n        \"docs\": [\n            {\n                \"tip_t\": [\n                    \"govor\"\n                ],\n                \"session_i\": 6675,\n                \"party_i\": 8,\n                \"datetime_dt\": \"2015-07-14T02:00:00Z\",\n                \"speaker_i\": 31,\n                \"content_t\": [\n                    \"Hvala lepa, predsedujoči podpredsednik, pozdravljena ministrica!\"\n                ],\n                \"_version_\": 1558596112263151600,\n                \"id\": \"g583168\",\n                \"org_i\": 95\n            }\n        ]\n    },\n    \"organizations\": [\n        {\n            \"score\": 4,\n            \"id\": 105,\n            \"name\": \"Komisija za nadzor obveščevalnih in varnostnih služb\"\n        },\n        {\n            \"score\": 3,\n            \"id\": 11,\n            \"name\": \"Komisija za narodni skupnosti\"\n        }\n    ],\n    \"has_council_score\": true,\n    \"has_dz_score\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://isci.parlametar.hr/filter/parlameter",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./searchapi/views.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "v/{words}/{?start_page}/",
    "title": "",
    "name": "motionQuery",
    "group": "Search",
    "description": "<p>search query by motion text</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "words",
            "optional": false,
            "field": "words",
            "description": "<p>for filter.</p>"
          },
          {
            "group": "Parameter",
            "type": "start_page",
            "optional": false,
            "field": "start",
            "description": "<p>page is Optional pagination parameter.</p>"
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
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.created_for",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.date_ts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.session.orgs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.orgs.acronym",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.session.orgs.is_coalition",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.orgs.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session.orgs.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.session.in_review",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.results",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.motion_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.results.text",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.abstain",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.votes_for",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.not_present",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.against",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.results.result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"created_for\": \"2016-12-12\",\n        \"session\": {\n            \"name\": \"25. redna seja\",\n            \"date_ts\": \"2016-12-12T01:00:00\",\n            \"org\": {\n                \"acronym\": \"DZ\",\n                \"is_coalition\": false,\n                \"name\": \"Državni zbor\",\n                \"id\": 95\n            },\n            \"date\": \"12. 12. 2016\",\n            \"orgs\": [\n                {\n                    \"acronym\": \"DZ\",\n                    \"is_coalition\": false,\n                    \"name\": \"Državni zbor\",\n                    \"id\": 95\n                }\n            ],\n            \"id\": 7654,\n            \"in_review\": true\n        },\n        \"results\": {\n            \"abstain\": 5,\n            \"text\": \"Predlog sklepa (razprava o odgovoru ministrice za zdravje Milojke Kolar Celarc na poslansko vprašanje Jelke Godec v zvezi s sklepom Ministrstva za zdravje.)\",\n            \"votes_for\": 7,\n            \"against\": 47,\n            \"motion_id\": 6654,\n            \"not_present\": 31,\n            \"result\": false\n        }\n    },\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://isci.parlametar.hr/v/zdravje",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./searchapi/views.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "q/{word}/{?start_page}",
    "title": "Search in transcripts",
    "name": "regularQuery",
    "group": "Search",
    "description": "<p>words: word/words for search start_page: pager in results</p> <pre><code>search query in transcripts</code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "word",
            "optional": false,
            "field": "search",
            "description": "<p>word.</p>"
          },
          {
            "group": "Parameter",
            "type": "start_page",
            "optional": false,
            "field": "start",
            "description": "<p>page Optional.</p>"
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
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_ranges",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.gap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "/.facet_counts.facet_ranges.datetime_dt.counts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person",
            "description": "<p>MP's person object (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.is_active",
            "description": "<p>Answer the question: Is this MP currently active?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.district",
            "description": "<p>List of Parladata ids for districts this person was elected in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.name",
            "description": "<p>MP's full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.gov_id",
            "description": "<p>MP's id on www.dz-rs.si</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.gender",
            "description": "<p>MP's gender (f/m) used for grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party",
            "description": "<p>This MP's standard party objects (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.acronym",
            "description": "<p>The MP's party's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.is_coalition",
            "description": "<p>Answers the question: Is this party in coalition with the government?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.id",
            "description": "<p>This party's Parladata (organization) id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.party.name",
            "description": "<p>The party's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.type",
            "description": "<p>The person's parlalize type. Always &quot;mp&quot; for MPs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.id",
            "description": "<p>The person's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.person.has_function",
            "description": "<p>Answers the question: Is this person the president or vice president of the national assembly (speaker of the house kind of thing).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.facet_counts.facet_fields.speaker_i.score",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.facet_counts.facet_fields.party_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.highlighting",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.highlighting.start_time",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.content_t",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.speech_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.order",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.highlighting.person",
            "description": "<p>MP's person object (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.highlighting.person.is_active",
            "description": "<p>Answer the question: Is this MP currently active?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "/.highlighting.person.district",
            "description": "<p>List of Parladata ids for districts this person was elected in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.name",
            "description": "<p>MP's full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.gov_id",
            "description": "<p>MP's id on www.dz-rs.si</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.gender",
            "description": "<p>MP's gender (f/m) used for grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.highlighting.person.party",
            "description": "<p>This MP's standard party objects (comes with most calls).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.party.acronym",
            "description": "<p>The MP's party's acronym.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.highlighting.person.party.is_coalition",
            "description": "<p>Answers the question: Is this party in coalition with the government?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.person.party.id",
            "description": "<p>This party's Parladata (organization) id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.party.name",
            "description": "<p>The party's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.highlighting.person.type",
            "description": "<p>The person's parlalize type. Always &quot;mp&quot; for MPs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.highlighting.person.id",
            "description": "<p>The person's Parladata id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.highlighting.person.has_function",
            "description": "<p>Answers the question: Is this person the president or vice president of the national assembly (speaker of the house kind of thing).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.responseHeader",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.responseHeader.status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.responseHeader.QTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.responseHeader.params",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.fq",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.rows",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.responseHeader.params.facet.field",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range.gap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.wt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.snippets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.regex.pattern",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.q",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.fragsize",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.mergeContiguous",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.fl",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.hl.fragmenter",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.responseHeader.params.facet.range.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.response",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.numFound",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.response.docs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.response.docs.tip_t",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.session_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.party_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.response.docs.datetime_dt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.speaker_i",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.response.docs.content_t",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs._version_",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.response.docs.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.response.docs.org_i",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"facet_counts\": {\n        \"facet_ranges\": {\n            \"datetime_dt\": {\n                \"start\": \"2014-01-01T00:00:00Z\",\n                \"counts\": [\n                    \"2014-01-01T00:00:00Z\",\n                    0,\n                    \"2014-02-01T00:00:00Z\",\n                    0,\n                    \"2014-03-01T00:00:00Z\",\n                    0\n                ],\n                \"end\": \"2014-03-01T00:00:00Z\",\n                \"gap\": \"+1MONTHS\"\n            }\n        },\n        \"facet_fields\": {\n            \"speaker_i\": [\n                {\n                    \"person\": {\n                        \"name\": \"Vinko Gorenak\",\n                        \"district\": [\n                            42\n                        ],\n                        \"gender\": \"m\",\n                        \"is_active\": false,\n                        \"party\": {\n                            \"acronym\": \"SDS\",\n                            \"id\": 5,\n                            \"is_coalition\": false,\n                            \"name\": \"PS Slovenska Demokratska Stranka\"\n                        },\n                        \"type\": \"mp\",\n                        \"id\": 25,\n                        \"gov_id\": \"P116\",\n                        \"has_function\": false\n                    },\n                    \"score\": 1\n                },\n                {\n                    \"person\": {\n                        \"name\": \"Matjaž Han\",\n                        \"district\": [\n                            13\n                        ],\n                        \"gender\": \"m\",\n                        \"is_active\": false,\n                        \"party\": {\n                            \"acronym\": \"SD\",\n                            \"id\": 7,\n                            \"is_coalition\": true,\n                            \"name\": \"PS Socialni Demokrati\"\n                        },\n                        \"type\": \"mp\",\n                        \"id\": 30,\n                        \"gov_id\": \"P018\",\n                        \"has_function\": false\n                    },\n                    \"score\": 1\n                }\n            ],\n            \"party_i\": [\n                \"5\",\n                2,\n                \"1\",\n                1,\n                \"7\",\n                1\n            ]\n        }\n    },\n    \"highlighting\": [\n        {\n            \"start_time\": \"2017-01-25T01:00:00\",\n            \"session_id\": 8940,\n            \"person\": {\n                \"name\": \"Marijan Pojbič\",\n                \"district\": [\n                    25\n                ],\n                \"gender\": \"m\",\n                \"is_active\": false,\n                \"party\": {\n                    \"acronym\": \"SDS\",\n                    \"id\": 5,\n                    \"is_coalition\": false,\n                    \"name\": \"PS Slovenska Demokratska Stranka\"\n                },\n                \"type\": \"mp\",\n                \"id\": 66,\n                \"gov_id\": \"P098\",\n                \"has_function\": false\n            },\n            \"content_t\": \"<em>Parlameter</em>.</em>\",\n            \"date\": \"2017-01-23\",\n            \"speech_id\": 893563,\n            \"order\": 1340\n        },\n        {\n            \"start_time\": \"2017-01-25T01:00:00\",\n            \"session_id\": 8940,\n            \"person\": {\n                \"name\": \"Janja Sluga\",\n                \"district\": [\n                    31\n                ],\n                \"gender\": \"f\",\n                \"is_active\": false,\n                \"party\": {\n                    \"acronym\": \"SMC\",\n                    \"id\": 1,\n                    \"is_coalition\": true,\n                    \"name\": \"PS Stranka modernega centra\"\n                },\n                \"type\": \"mp\",\n                \"id\": 73,\n                \"gov_id\": \"P284\",\n                \"has_function\": false\n            },\n            \"content_t\": \"ki se mu reče <em>parlameter</em> in ki se natančno vidi kaj kdo govori in kolikokrat se oglasi.</em>\",\n            \"date\": \"2017-01-23\",\n            \"speech_id\": 893561,\n            \"order\": 1320\n        }\n    ],\n    \"responseHeader\": {\n        \"status\": 0,\n        \"QTime\": 18,\n        \"params\": {\n            \"fq\": \"tip_t:govor\",\n            \"rows\": \"50\",\n            \"facet.field\": [\n                \"speaker_i\",\n                \"party_i\"\n            ],\n            \"facet.range.gap\": \"+1MONTHS\",\n            \"wt\": \"json\",\n            \"hl.snippets\": \"1\",\n            \"facet.range.end\": \"NOW\",\n            \"hl.regex.pattern\": \"\\\\w[^\\\\.!\\\\?]{1,600}[\\\\.!\\\\?]\",\n            \"facet\": \"true\",\n            \"q\": \"content_t:parlameter\",\n            \"start\": \"0\",\n            \"facet.range\": \"datetime_dt\",\n            \"hl\": \"true\",\n            \"hl.fragsize\": \"5000\",\n            \"hl.mergeContiguous\": \"false\",\n            \"hl.fl\": \"content_t\",\n            \"hl.fragmenter\": \"regex\",\n            \"facet.range.start\": \"2014-01-01T00:00:00.000Z\"\n        }\n    },\n    \"response\": {\n        \"start\": 0,\n        \"numFound\": 5,\n        \"docs\": [\n            {\n                \"tip_t\": [\n                    \"govor\"\n                ],\n                \"session_i\": 7654,\n                \"party_i\": 7,\n                \"datetime_dt\": \"2016-12-14T01:00:00Z\",\n                \"speaker_i\": 30,\n                \"content_t\": [\n                    \"Hvala lepa predsednik, ministrica, predlagatelji, predvsem predlagateljica danes Suzana si boš v parlametru popravila statistiko, tak da besedni zaklad se ti bo povečal, imela boš veliko izgovorjenih besed, ampak koroški dečki bodo pa še kar ostali tam kjer so. To je problem. Parlameter pa bo jutri statistiko tvojih nastopov pač ocenil kot dobro. \\nSedaj, jaz se ne bom ukvarjal z definicijo interpelacije. Dola leta sem poslanec, vem da je interpelacija orodja opozicije, da vem da ni pomembna vsebina, pomembne so besede, pomembni so nastopi, pomembni so televizijski kadri in pomembno je zbuditi v javnosti, da je v tej državi vse narobe. In, tako da, kar se tega tiče, je brezveze. Sedaj, problem pa je, kadar govorimo o interpelaciji, je pa vendarle malo problema ta vsebina. Sedaj bom tudi jaz kot neka papiga tukaj ponavljal, da pač izkoriščamo to tragedijo, ampak resnično tragedijo za to, da se politika sedaj med seboj obklada, se žali in še kaj več bi lahko našteval. To, gospe in gospodje, absolutno ni dobro. Mislim, da če ta dva fantka slučajno sta blizu televizije in slučajno prestavita televizijo, jaz upam, da gledata kaj lepšega, se bo take razprave, ki jih imamo danes, vtem fantkom sigurno usedle na dušo in jih bo ta duša spremljala celo življenje, ne samo tragedija, ki se je zgodila v njuni družini. In eno stvar vam pa povem. Ne družinski zakoni ne kakršnikoli zakoni, ne bo povrnil mamice tem dvema otrokoma in ne bo povrnil nekega dostojanstva in nekega srečnega otroštva tema dvema otrokoma. Saj je vse lepo in prav, zakoni da se pišejo, ampak še zmeraj zakone na nek način interpretiramo ljudje in ljudje v bistvu delajo ali pa delamo napake ali pa ne. \\nSedaj, naši ministrice se danes očita, kakor vsaj jaz razumem, to interpelacijo. Glavni očitek je, da je bila tisti dan na novinarski konferenci in se je odzvala na, bom rekel, na novinarski problem oziroma novinarsko zgodbo, ki se je pač takrat dogajala. Jaz sem tisoč procentov prepričan, to pa zaradi izkušenj, ki jih imamo kot politik, da če ministrica se takrat ne bi odzvala in ne bi bila na tisti novinarski konferenci, bi bil pogrom na ministrico isti kot je sedaj, samo da bi bila vsebina drugačna. Govorili bi o tem, da je sramota, da se minister ne odzove pri taki tragediji kot se je naredila in kako je to mogoče, da sedi v nekih lepih prostorih in nič ne reče. Isto bi bilo, dragi gospodje in gospe. Saj sem tudi jaz politik, saj bi jaz verjetno isto delal, če bi bil na vašem mestu, samo vam pa povem, da ne bi delal takih zgodb, ko bi imele osnovo tako tragedijo. Vse ostalo, zakoni, sociala, drugo, pa to je, gospe in gospodje, toliko prostora za demagogijo, saj smo slišali prej Združeno levico, čeprav meni moji strankarski kolegi rečejo, ne se ukvarjati z Združeno levico, ne jih kregati, itn., ampak to kar je Kordiš govoril, pa to še v Venezueli ni. Ne, ker v življenju moraš biti malo realen. Če bi jaz lahko danes odločal in če bi imel čarobno palico, jaz bi dal vsem delo in za to delo bi morali biti ljudje pošteno plačani in ne bi rabil nobeden nobene socialne pomoči. Ja, razen tistih, ki ne morejo dela opravljati, to so pa invalidi, ljudje ki so bolni, ljudje ki ne morejo, ampak poglejte, ne živimo v Indiji Koromandija, živimo v enem grdem svetu, kjer vemo da ima kakorkoli en procent človeštva vso bogastvo, bom rekel, na nek način akumulirano pri sebi. \\nSedaj pa še nekaj o eh koroških dečkih oziroma o tej zgodbi.    Nisem toliko razočaran, če politika zagrabi tako zgodbo, ker pač išče politične točke, pa išče ali se mu bo pokazalo tukaj na anketi v petek oziroma v ponedeljek. Bolj sem razočaran, ko odvetniki, ki nimajo kaj delati, najdejo tako zgodbo za svojo promocijo, zato da so lahko vsak dan na televiziji in zato, da lahko potem dobijo neke druge posle. Tega pa me je malo strah. In ta odvetnik, ki je bil nenazadnje tudi naš svetnik, slišal sem nekje na Koroškem ali celo podžupan, če si član neke socialdemokracije neke vrednote pač zagovarjaš, vloži in se potrudi v tej zgodbi vložiti 26 pritožb in 45 pravnih sredstev. Ampak gospe in gospodje, pa mi bomo imeli tu še 68 interpelacij na to temo, ker vsakič ko bo sodišče nekaj sprejelo, bo interpelacija. Saj tem otrokom in tej familiji se bo do konca zmešalo. Če je to otrokova korist, potem jaz ta trenutek sem res malo zmeden. \\nSedaj pa samo še eno veliko vprašanje in velik vprašaj. Verjamem, pa moram reči, ker Jožeta, sva že kar nekaj časa, ne bom rekel, da prijatelja, ker bodo rekli da…, ampak zelo dobra znanca. Sigurno je eden tistih ljudi, ki želi ljudem dobro. Tudi jaz. Pa verjetno v tej dvorani vsi. Pa dajmo eno vprašanje. Če ministrica sedajle odstopi, vi boste srečni, mi bomo razočarani. Ali bodo dečki prišli k starim staršem? Ali bodo starši pred božičem najbolj srečni otroci na tem svetu? Bodo? Če se bo to naredilo in če bi se to naredilo, da Anja odstopi, jaz jo grem sedaj prositi, Anja odstopi. Ne bo jo treba prositi. Anja bi to naredila takoj, če bodo zaradi tega za božič ti otroci, ti fantki srečni odpirali darila pod smrekico, se veselili v družinskem okolju. Se bodo? Ne bodo, ali ne. Sedajle mi gre kurja polt, ker vem, jaz bom srečen in vesel, ker se mi bo hčerka vrnila iz Portugalske, ker bomo lepo za božič skupaj, srečni doma. Ti dragi otroci, ti bogi otroci, fantki pa ne bodo. Ali bodo pri starih starših? Ali bodo pri rejnikih? Ni pomembno. Ti otroci so etiketirani. Sedaj je samo vprašanje kakšno etiketo jim bomo dali. In največjo etiketo, se opravičujem, in dajva politika, ki se v tej tragediji vsak dan znova in znova pogovarja samo zato, da bi spravili iz mesta eno Anjo Kopač Mrak. Včasih sem žalosten in razočaran. Hvala lepa.\"\n                ],\n                \"_version_\": 1568412779027628000,\n                \"id\": \"g1247808\",\n                \"org_i\": 95\n            },\n            {\n                \"tip_t\": [\n                    \"govor\"\n                ],\n                \"session_i\": 8940,\n                \"party_i\": 5,\n                \"datetime_dt\": \"2017-01-25T01:00:00Z\",\n                \"speaker_i\": 66,\n                \"content_t\": [\n                    \"Gospod podpredsednik, rad bi samo opozoril, da gospo Slugo opozorite, da zaradi tega, kar sem jaz govoril tukaj v parlamentu ne rabi biti tako bleda, ker ko poveš resnico o človeku potem pač ima težave človek in nastopi tako kot je ona zdaj nastopila, agresivno proti meni. Jaz nisem nič agresivno govoril. Jaz sem govoril zelo korektno, zelo pošteno in res je parlament. Kaj je že tista zgodba? Parlameter. Bodo ljudje videli kaj je kdo v tem državnem zboru govoril in še bolj pomembno ne kaj je govoril, pomembno je ali govori tisti, kar drži in kar je prav. In ne tisto, kar mu nekdo napiše, nek partijski sekretar. Meni nobeden ne piše govorov.\"\n                ],\n                \"_version_\": 1558596758970302500,\n                \"id\": \"g893563\",\n                \"org_i\": 95\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://isci.parlametar.hr/q/parlameter",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./searchapi/views.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "dfall/",
    "title": "",
    "name": "dfALL",
    "group": "TFIDF",
    "description": "<p>document frequerncy all</p>",
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
            "type": "Integer",
            "optional": false,
            "field": "/.df",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.term",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "[\n    {\n        \"df\": 79235,\n        \"term\": \"hvala\"\n    },\n    {\n        \"df\": 72746,\n        \"term\": \"in\"\n    },\n    {\n        \"df\": 72208,\n        \"term\": \"za\"\n    },\n    {\n        \"df\": 71292,\n        \"term\": \"je\"\n    },\n    {\n        \"df\": 70951,\n        \"term\": \"da\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://isci.parlametar.hr/dfall/",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./searchapi/views.py",
    "groupTitle": "TFIDF"
  },
  {
    "type": "get",
    "url": "tfidf/s/{session_i}/",
    "title": "",
    "name": "tfidfSessionQuery",
    "group": "TFIDF",
    "description": "<p>method for TFIDF of session</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "session_i",
            "optional": false,
            "field": "session",
            "description": "<p>id.</p>"
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
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.session",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.date_ts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.session.orgs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.orgs.acronym",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.session.orgs.is_coalition",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.orgs.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session.orgs.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.session.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.session.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "/.session.in_review",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "/.results",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "/.results.term",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "/.results.scores",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.tf",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "/.results.df",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Flaot",
            "optional": false,
            "field": "/.results.tf-idf",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n    \"session\": {\n        \"name\": \"30. redna seja\",\n        \"date_ts\": \"2017-05-22T02:00:00\",\n        \"org\": {\n            \"acronym\": \"DZ\",\n            \"is_coalition\": false,\n            \"name\": \"Državni zbor\",\n            \"id\": 95\n        },\n        \"date\": \"22. 5. 2017\",\n        \"orgs\": [\n            {\n                \"acronym\": \"DZ\",\n                \"is_coalition\": false,\n                \"name\": \"Državni zbor\",\n                \"id\": 95\n            }\n        ],\n        \"id\": 9580,\n        \"in_review\": true\n    },\n    \"results\": [\n        {\n            \"term\": \"biopsihologija\",\n            \"scores\": {\n                \"tf\": 34,\n                \"df\": 27,\n                \"tf-idf\": 1.2592592592592593\n            }\n        },\n        {\n            \"term\": \"biopsiholog\",\n            \"scores\": {\n                \"tf\": 15,\n                \"df\": 15,\n                \"tf-idf\": 1\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i https://isci.parlametar.hr/tfidf/s/9580",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./searchapi/views.py",
    "groupTitle": "TFIDF"
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
    "group": "_home_muki_code_djnd_parlasearch_doc_main_js",
    "groupTitle": "_home_muki_code_djnd_parlasearch_doc_main_js",
    "name": ""
  }
] });
