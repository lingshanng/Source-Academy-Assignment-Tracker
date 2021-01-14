const testData = [
    {
       "closeAt":"2020-08-01T04:00:00.000+00:00",
       "coverImage":"https://mission-assets.s3-ap-southeast-1.amazonaws.com/attendance.png",
       "grade":36,
       "gradedCount":5,
       "id":403,
       "isPublished":true,
       "maxGrade":120,
       "maxXp":6000,
       "number":"ATTD",
       "openAt":"2020-08-01T04:00:00.000+00:00",
       "private":false,
       "questionCount":12,
       "reading":null,
       "shortSummary":"This assessment records your weekly attendance and participation in your studios.",
       "status":"submitted",
       "story":null,
       "title":"Studio Journal",
       "type":"practical",
       "xp":1800
    },
    {
       "closeAt":"2020-08-13T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/yf2k1ER.png",
       "grade":0,
       "gradedCount":0,
       "id":400,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":0,
       "number":"P1A",
       "openAt":"2020-08-12T03:30:00.000+00:00",
       "private":false,
       "questionCount":5,
       "reading":"Textbook Sections 1.1.1 to 1.1.6",
       "shortSummary":"The Path P1A covers Lecture L1 of CS1101S.",
       "status":"submitted",
       "story":null,
       "title":"Elements of Programming",
       "type":"path",
       "xp":0
    },
    {
       "closeAt":"2020-08-19T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/amJe5Bb.png",
       "grade":12,
       "gradedCount":4,
       "id":395,
       "isPublished":true,
       "maxGrade":12,
       "maxXp":600,
       "number":"M1",
       "openAt":"2020-08-14T02:45:00.000+00:00",
       "private":false,
       "questionCount":4,
       "reading":"Textbook Sections 1.1.1 to 1.1.4",
       "shortSummary":"Welcome to the Source Academy! This is your first mission.",
       "status":"submitted",
       "story":"mission-M1",
       "title":"Rune Trials",
       "type":"mission",
       "xp":600
    },
    {
       "closeAt":"2020-08-15T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/64usLPk.png",
       "grade":0,
       "gradedCount":5,
       "id":402,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":140,
       "number":"P1B",
       "openAt":"2020-08-14T02:45:00.000+00:00",
       "private":false,
       "questionCount":5,
       "reading":"Textbook Section 2.2.4 (beginning of the section)",
       "shortSummary":"The Path P1B covers Brief B1 of CS1101S.",
       "status":"submitted",
       "story":null,
       "title":"Runes",
       "type":"path",
       "xp":0
    },
    {
       "closeAt":"2020-08-20T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/iSIthyh.png",
       "grade":1,
       "gradedCount":0,
       "id":404,
       "isPublished":true,
       "maxGrade":1,
       "maxXp":140,
       "number":"P2A",
       "openAt":"2020-08-19T03:35:00.000+00:00",
       "private":false,
       "questionCount":9,
       "reading":"Textbook Sections 1.1.5, 1.2.1, 1.2.2",
       "shortSummary":"This path covers the basics of recursion and the substitution model.",
       "status":"submitted",
       "story":"mission",
       "title":"Substitution model and Recursion",
       "type":"path",
       "xp":140
    },
    {
       "closeAt":"2020-08-24T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/O67V2AK.png",
       "grade":10,
       "gradedCount":3,
       "id":396,
       "isPublished":true,
       "maxGrade":10,
       "maxXp":1000,
       "number":"M2A",
       "openAt":"2020-08-20T04:00:00.000+00:00",
       "private":false,
       "questionCount":3,
       "reading":"Textbook Section 1.2",
       "shortSummary":"In this mission, you will create a more complex set of runic patterns!",
       "status":"submitted",
       "story":"mission-M2A",
       "title":"Rune Reading",
       "type":"mission",
       "xp":1100
    },
    {
       "closeAt":"2020-08-25T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/w6vm66C.png",
       "grade":5,
       "gradedCount":1,
       "id":398,
       "isPublished":true,
       "maxGrade":5,
       "maxXp":350,
       "number":"Q2A",
       "openAt":"2020-08-20T15:59:00.000+00:00",
       "private":false,
       "questionCount":1,
       "reading":"Textbook Sections 1.1.1 to 1.1.4",
       "shortSummary":"We are weaving Persian carpets in this Mission!",
       "status":"submitted",
       "story":null,
       "title":"Runic Carpets",
       "type":"sidequest",
       "xp":450
    },
    {
       "closeAt":"2020-08-23T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/XEEUhFd.png",
       "grade":1,
       "gradedCount":0,
       "id":405,
       "isPublished":true,
       "maxGrade":1,
       "maxXp":140,
       "number":"P2B",
       "openAt":"2020-08-21T02:45:00.000+00:00",
       "private":false,
       "questionCount":8,
       "reading":"Textbook Section 1.2.3",
       "shortSummary":"This path is a short review of order of growth.",
       "status":"submitted",
       "story":null,
       "title":"Orders of Growth",
       "type":"path",
       "xp":140
    },
    {
       "closeAt":"2020-08-26T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/84kmJDZ.png",
       "grade":7,
       "gradedCount":3,
       "id":397,
       "isPublished":true,
       "maxGrade":8,
       "maxXp":800,
       "number":"M2B",
       "openAt":"2020-08-21T04:00:00.000+00:00",
       "private":false,
       "questionCount":3,
       "reading":"Textbook Section 1.2",
       "shortSummary":"We shall explore three-dimensional runes in this mission!",
       "status":"submitted",
       "story":"mission-M2B",
       "title":"Beyond the Second Dimension",
       "type":"mission",
       "xp":797
    },
    {
       "closeAt":"2020-08-28T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/T1PcQuH.jpg",
       "grade":16,
       "gradedCount":4,
       "id":399,
       "isPublished":true,
       "maxGrade":16,
       "maxXp":800,
       "number":"Q2B",
       "openAt":"2020-08-21T15:59:00.000+00:00",
       "private":false,
       "questionCount":4,
       "reading":"Textbook Sections 1.1.4 and 1.2",
       "shortSummary":"In this quest, you will create colorful runic patterns!",
       "status":"submitted",
       "story":"quest-Q2B",
       "title":"Colorful Carpets",
       "type":"sidequest",
       "xp":900
    },
    {
       "closeAt":"2020-08-27T15:59:00.000+00:00",
       "coverImage":"https://www.comp.nus.edu.sg/~henz/scottie.png",
       "grade":3,
       "gradedCount":0,
       "id":407,
       "isPublished":true,
       "maxGrade":19,
       "maxXp":120,
       "number":"P3A",
       "openAt":"2020-08-26T03:35:00.000+00:00",
       "private":false,
       "questionCount":6,
       "reading":null,
       "shortSummary":"This path covers a little recursion and an introduction to higher order functions.\n\nScoping will be covered in reflection.",
       "status":"submitted",
       "story":"mission",
       "title":"Recursion, HOF and Scoping",
       "type":"path",
       "xp":40
    },
    {
       "closeAt":"2020-08-31T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/NCTs3Pw.png",
       "grade":3,
       "gradedCount":5,
       "id":408,
       "isPublished":true,
       "maxGrade":5,
       "maxXp":500,
       "number":"Q3A",
       "openAt":"2020-08-26T03:35:00.000+00:00",
       "private":false,
       "questionCount":5,
       "reading":"Textbook Sections 1.1.1 to 1.1.4",
       "shortSummary":"In this quest, you will explore higher-order functions!",
       "status":"submitted",
       "story":null,
       "title":"Functional Expressionism",
       "type":"sidequest",
       "xp":317
    },
    {
       "closeAt":"2020-09-01T15:59:00.000+00:00",
       "coverImage":"https://www.comp.nus.edu.sg/~cs1101s/images/runes.png",
       "grade":0,
       "gradedCount":0,
       "id":406,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":0,
       "number":"C3",
       "openAt":"2020-08-26T03:35:00.000+00:00",
       "private":false,
       "questionCount":1,
       "reading":"Textbook Chapter 1",
       "shortSummary":null,
       "status":"submitted",
       "story":null,
       "title":"Beautiful Runes",
       "type":"contest",
       "xp":0
    },
    {
       "closeAt":"2020-09-05T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/vD2TXK2.png",
       "grade":9,
       "gradedCount":4,
       "id":409,
       "isPublished":true,
       "maxGrade":12,
       "maxXp":600,
       "number":"Q3B",
       "openAt":"2020-08-28T02:45:00.000+00:00",
       "private":false,
       "questionCount":4,
       "reading":"Textbook Sections 1.2",
       "shortSummary":"In this quest, you will see functions as concretizations!",
       "status":"submitted",
       "story":null,
       "title":"Cardioid Arrest",
       "type":"sidequest",
       "xp":513
    },
    {
       "closeAt":"2020-09-04T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/q2O4iwa.png",
       "grade":13,
       "gradedCount":3,
       "id":411,
       "isPublished":true,
       "maxGrade":14,
       "maxXp":800,
       "number":"M3",
       "openAt":"2020-08-28T02:45:00.000+00:00",
       "private":false,
       "questionCount":3,
       "reading":"Textbook Sections 1.1.5 to 1.1.8",
       "shortSummary":"In this mission, you get introduced to visible functions, called Curves!",
       "status":"submitted",
       "story":null,
       "title":"Curve Introduction",
       "type":"mission",
       "xp":814
    },
    {
       "closeAt":"2020-11-13T15:59:00.000+00:00",
       "coverImage":"https://s3-ap-southeast-1.amazonaws.com/source-academy-assets/locations/yourRoom-dim/normal.png",
       "grade":0,
       "gradedCount":0,
       "id":410,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":null,
       "number":"MYROOM",
       "openAt":"2020-08-29T07:00:00.000+00:00",
       "private":false,
       "questionCount":1,
       "reading":null,
       "shortSummary":"This Free Play component allows students to customise their room in the Source Academy, accessible via \"My Room\" within the game.",
       "status":"not_attempted",
       "story":"Time to exercise your creativity!",
       "title":"My Room",
       "type":"practical",
       "xp":0
    },
    {
       "closeAt":"2020-09-06T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/bwvWfUZ.png",
       "grade":6,
       "gradedCount":2,
       "id":413,
       "isPublished":true,
       "maxGrade":6,
       "maxXp":800,
       "number":"M4A",
       "openAt":"2020-08-31T04:00:00.000+00:00",
       "private":false,
       "questionCount":2,
       "reading":"Textbook Section 1.3",
       "shortSummary":"A transformational experience!",
       "status":"submitted",
       "story":null,
       "title":"Curve Manipulation",
       "type":"mission",
       "xp":900
    },
    {
       "closeAt":"2020-09-08T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/BBd9xHo.png",
       "grade":12,
       "gradedCount":3,
       "id":414,
       "isPublished":true,
       "maxGrade":12,
       "maxXp":1200,
       "number":"M4B",
       "openAt":"2020-09-01T04:00:00.000+00:00",
       "private":false,
       "questionCount":3,
       "reading":"Textbook Section 1.3",
       "shortSummary":"Feel like fighting dragons?",
       "status":"submitted",
       "story":null,
       "title":"Beyond the First Dimension",
       "type":"mission",
       "xp":1300
    },
    {
       "closeAt":"2020-09-04T15:59:00.000+00:00",
       "coverImage":"https://www.comp.nus.edu.sg/~cs1101s/images/pixel.happy.png",
       "grade":0,
       "gradedCount":0,
       "id":416,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":100,
       "number":"P4A",
       "openAt":"2020-09-02T03:35:00.000+00:00",
       "private":false,
       "questionCount":4,
       "reading":null,
       "shortSummary":"A short exercise on data abstraction and list manipulation.",
       "status":"submitted",
       "story":"mission",
       "title":"Data Abstraction",
       "type":"path",
       "xp":0
    },
    {
       "closeAt":"2020-09-11T15:59:00.000+00:00",
       "coverImage":"https://s3-ap-southeast-1.amazonaws.com/mission-assets/contests/curves_contest.png",
       "grade":0,
       "gradedCount":0,
       "id":415,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":0,
       "number":"C4",
       "openAt":"2020-09-02T03:35:00.000+00:00",
       "private":false,
       "questionCount":1,
       "reading":"Textbook Sections 1.3",
       "shortSummary":null,
       "status":"attempting",
       "story":null,
       "title":"The Choreographer",
       "type":"contest",
       "xp":0
    },
    {
       "closeAt":"2020-09-09T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/lwt8Ngr.png",
       "grade":8,
       "gradedCount":2,
       "id":412,
       "isPublished":true,
       "maxGrade":8,
       "maxXp":600,
       "number":"Q4",
       "openAt":"2020-09-02T04:00:00.000+00:00",
       "private":false,
       "questionCount":2,
       "reading":"Textbook Section 1.3",
       "shortSummary":"Stacking Runes is easy, but can you stack Curves?",
       "status":"submitted",
       "story":null,
       "title":"Curvaceous Wizardry",
       "type":"sidequest",
       "xp":700
    },
    {
       "closeAt":"2020-09-05T15:59:00.000+00:00",
       "coverImage":"https://s3-ap-southeast-1.amazonaws.com/source-academy-assets/locations/yourRoom-dim/normal.png",
       "grade":0,
       "gradedCount":1,
       "id":417,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":120,
       "number":"MYSURVEY",
       "openAt":"2020-09-02T07:00:00.000+00:00",
       "private":false,
       "questionCount":1,
       "reading":null,
       "shortSummary":"This component serves to issue XP for participating in the CS1101S Unit 1 Survey (two parts).",
       "status":"submitted",
       "story":"Time to exercise your creativity!",
       "title":"Survey Participation",
       "type":"practical",
       "xp":120
    },
    {
       "closeAt":"2020-09-12T15:59:00.000+00:00",
       "coverImage":"https://s3-ap-southeast-1.amazonaws.com/mission-assets/missions/morseCode.png",
       "grade":15,
       "gradedCount":4,
       "id":418,
       "isPublished":true,
       "maxGrade":15,
       "maxXp":1500,
       "number":"M5A",
       "openAt":"2020-09-07T02:00:00.000+00:00",
       "private":false,
       "questionCount":4,
       "reading":"Textbook Sections 2.2.1",
       "shortSummary":"Morse code to the rescue!",
       "status":"submitted",
       "story":null,
       "title":"Premorseal Communications",
       "type":"mission",
       "xp":1600
    },
    {
       "closeAt":"2020-09-11T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/FGEcRjm.jpg",
       "grade":0,
       "gradedCount":0,
       "id":419,
       "isPublished":true,
       "maxGrade":16,
       "maxXp":500,
       "number":"Q5A",
       "openAt":"2020-09-05T02:00:00.000+00:00",
       "private":false,
       "questionCount":5,
       "reading":"Textbook Section 2.2",
       "shortSummary":"Let's make some noises!",
       "status":"attempting",
       "story":null,
       "title":"Echoes of the Past",
       "type":"sidequest",
       "xp":94
    },
    {
       "closeAt":"2020-09-11T15:59:00.000+00:00",
       "coverImage":"https://www.comp.nus.edu.sg/~cs1101s/images/nav.png",
       "grade":0,
       "gradedCount":0,
       "id":421,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":180,
       "number":"P5A",
       "openAt":"2020-09-09T03:35:00.000+00:00",
       "private":false,
       "questionCount":6,
       "reading":null,
       "shortSummary":"This path will cover list and tree processing.",
       "status":"not_attempted",
       "story":"mission",
       "title":"List and Tree Processing",
       "type":"path",
       "xp":0
    },
    {
       "closeAt":"2020-09-16T15:59:00.000+00:00",
       "coverImage":"https://s3-ap-southeast-1.amazonaws.com/mission-assets/missions/alienTelephone.png",
       "grade":4,
       "gradedCount":0,
       "id":420,
       "isPublished":true,
       "maxGrade":12,
       "maxXp":1200,
       "number":"M5B",
       "openAt":"2020-09-09T03:35:00.000+00:00",
       "private":false,
       "questionCount":4,
       "reading":"Textbook Section 2.5",
       "shortSummary":"Indestructible telephony",
       "status":"not_attempted",
       "story":"mission-M5B",
       "title":"POTS and Pans",
       "type":"mission",
       "xp":500
    },
    {
       "closeAt":"2020-09-17T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/2EnQvUJ.jpg",
       "grade":0,
       "gradedCount":0,
       "id":422,
       "isPublished":true,
       "maxGrade":19,
       "maxXp":1440,
       "number":"M5C",
       "openAt":"2020-09-10T10:00:00.000+00:00",
       "private":false,
       "questionCount":5,
       "reading":"Textbook Section 2.5",
       "shortSummary":"Music gives a soul to the universe!",
       "status":"not_attempted",
       "story":null,
       "title":"Musical Diversions",
       "type":"mission",
       "xp":51
    },
    {
       "closeAt":"2020-09-17T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/oCQ4HUP.png",
       "grade":0,
       "gradedCount":0,
       "id":423,
       "isPublished":true,
       "maxGrade":9,
       "maxXp":1000,
       "number":"Q5B",
       "openAt":"2020-09-11T04:00:00.000+00:00",
       "private":false,
       "questionCount":2,
       "reading":"Textbook Section 2.5",
       "shortSummary":"Universal harmony!",
       "status":"not_attempted",
       "story":null,
       "title":"The Magical Tone Matrix",
       "type":"sidequest",
       "xp":25
    },
    {
       "closeAt":"2020-09-26T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/PIz9GR3.jpg",
       "grade":0,
       "gradedCount":0,
       "id":425,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":0,
       "number":"C6",
       "openAt":"2020-09-12T04:00:00.000+00:00",
       "private":false,
       "questionCount":1,
       "reading":null,
       "shortSummary":null,
       "status":"not_attempted",
       "story":null,
       "title":"Game of Tones",
       "type":"contest",
       "xp":0
    },
    {
       "closeAt":"2020-09-21T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/d3r2tec.png",
       "grade":0,
       "gradedCount":0,
       "id":427,
       "isPublished":true,
       "maxGrade":12,
       "maxXp":720,
       "number":"M6A",
       "openAt":"2020-09-16T03:35:00.000+00:00",
       "private":false,
       "questionCount":3,
       "reading":"-",
       "shortSummary":"Meanwhile in the spaceship...",
       "status":"not_attempted",
       "story":null,
       "title":"Search and Rescue",
       "type":"mission",
       "xp":0
    },
    {
       "closeAt":"2020-09-17T15:59:00.000+00:00",
       "coverImage":"https://i.imgur.com/iSIthyh.png",
       "grade":0,
       "gradedCount":0,
       "id":426,
       "isPublished":true,
       "maxGrade":0,
       "maxXp":150,
       "number":"P6A",
       "openAt":"2020-09-16T03:35:00.000+00:00",
       "private":false,
       "questionCount":5,
       "reading":null,
       "shortSummary":"This path will cover searching and sorting.",
       "status":"not_attempted",
       "story":"mission",
       "title":"Searching, Sorting and Symbolic Processing",
       "type":"path",
       "xp":0
    }
 ]