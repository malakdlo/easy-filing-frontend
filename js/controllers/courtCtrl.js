// Sites for LA Court Locations
/* 

// Court by Court
http://www.lacourt.org/filinglocatornet/ui/FilingResult.aspx
http://www.lacourt.org/Courthouse/info/LAM

// All
file:///Users/malaklopez/Downloads/Chap2Appendix2B.html

// Sheet
https://docs.google.com/spreadsheets/d/1JI_Hwt5HcCTUwkUr1LKSejZk2CjVGSkh20_0en6NEdw/edit#gid=978646545

https://docs.google.com/spreadsheets/d/1-RO6ToM6Fc3hqtMFca7rLIK3_z9BLfwL1_93zzFw_J4/edit#gid=0

https://shancarter.github.io/mr-data-converter/
https://jsonformatter.curiousconcept.com/
https://www.lacourt.org/courtrules/CurrentRulesAppendixPDF/Chap2Appendix2B.PDF


*/

formApp
.controller('CourtController', function(){
  
})
.factory('CourtFactory', function(){
  var CourtFactory = this;
  
  CourtFactory.locations = {
    "Van Nuys": {
      "Address": " ",
      "Locations": [
   {
      "City":"AGOURA",
      "Zip":91301
   },
   {
      "City":"AGOURA HILLS",
      "Zip":91301
   },
   {
      "City":"AGOURA HILLS",
      "Zip":91376
   },
   {
      "City":"ALPINE",
      "Zip":91350
   },
   {
      "City":"ANGELES NATIONAL FOREST",
      "Zip":91040
   },
   {
      "City":"ANGELES NATIONAL FOREST",
      "Zip":91042
   },
   {
      "City":"ANGELES NATIONAL FOREST",
      "Zip":91342
   },
   {
      "City":"ARLETA",
      "Zip":91331
   },
   {
      "City":"ARLETA",
      "Zip":91334
   },
   {
      "City":"BELL CANYON (within Los Angeles County)",
      "Zip":91307
   },
   {
      "City":"BOUQUET CANYON",
      "Zip":91355
   },
   {
      "City":"BRENTS JUNCTION",
      "Zip":91302
   },
   {
      "City":"CALABASAS",
      "Zip":91301
   },
   {
      "City":"CALABASAS",
      "Zip":91372
   },
   {
      "City":"CALABASAS",
      "Zip":91399
   },
   {
      "City":"CALABASAS (North of MULHOLLAND HIGHWAY)",
      "Zip":91302
   },
   {
      "City":"CALABASAS (South of MULHOLLAND HIGHWAY)",
      "Zip":91302
   },
   {
      "City":"CALABASAS PARK",
      "Zip":91302
   },
   {
      "City":"CALIF. STATE UNIV. NORTHRIDGE",
      "Zip":91330
   },
   {
      "City":"CANOGA PARK",
      "Zip":91303
   },
   {
      "City":"CANOGA PARK",
      "Zip":91305
   },
   {
      "City":"CANOGA PARK",
      "Zip":91307
   },
   {
      "City":"CANOGA PARK",
      "Zip":91308
   },
   {
      "City":"CANOGA PARK",
      "Zip":91309
   },
   {
      "City":"CANOGA PARK (North of Roscoe)",
      "Zip":91304
   },
   {
      "City":"CANOGA PARK (South of Roscoe)",
      "Zip":91304
   },
   {
      "City":"CANYON COUNTRY",
      "Zip":91321
   },
   {
      "City":"CANYON COUNTRY",
      "Zip":91351
   },
   {
      "City":"CANYON COUNTRY",
      "Zip":91386
   },
   {
      "City":"CANYON COUNTRY",
      "Zip":91387
   },
   {
      "City":"CANYON COUNTRY",
      "Zip":91390
   },
   {
      "City":"CASTAIC",
      "Zip":91310
   },
   {
      "City":"CASTAIC",
      "Zip":91384
   },
   {
      "City":"CASTAIC JUNCTION",
      "Zip":91384
   },
   {
      "City":"CHATSWORTH",
      "Zip":91311
   },
   {
      "City":"CHATSWORTH",
      "Zip":91312
   },
   {
      "City":"CHATSWORTH",
      "Zip":91313
   },
   {
      "City":"CORNELL",
      "Zip":91301
   },
   {
      "City":"DEERLAKE HIGHLANDS",
      "Zip":91326
   },
   {
      "City":"DEL VALLE",
      "Zip":91355
   },
   {
      "City":"ENCINO",
      "Zip":91316
   },
   {
      "City":"ENCINO",
      "Zip":91416
   },
   {
      "City":"ENCINO",
      "Zip":91426
   },
   {
      "City":"ENCINO",
      "Zip":91436
   },
   {
      "City":"FAIR OAKS RANCH",
      "Zip":91387
   },
   {
      "City":"FERN ANN FALLS",
      "Zip":91311
   },
   {
      "City":"FORREST PARK",
      "Zip":91350
   },
   {
      "City":"FRENCHMAN'S FLAT",
      "Zip":91384
   },
   {
      "City":"GRANADA HILLS",
      "Zip":91344
   },
   {
      "City":"GRANADA HILLS",
      "Zip":91394
   },
   {
      "City":"HANSEN DAM PARK",
      "Zip":91040
   },
   {
      "City":"HANSEN LAKE",
      "Zip":91040
   },
   {
      "City":"HIDDEN HILLS",
      "Zip":91302
   },
   {
      "City":"HONBY",
      "Zip":91351
   },
   {
      "City":"KAGEL CANYON",
      "Zip":91342
   },
   {
      "City":"LAKE VIEW TERRACE (East of Osborne)",
      "Zip":91342
   },
   {
      "City":"LAKE VIEW TERRACE (West of Osborne)",
      "Zip":91342
   },
   {
      "City":"LAKESIDE PARK",
      "Zip":91304
   },
   {
      "City":"LANG",
      "Zip":91350
   },
   {
      "City":"LOS ANGELES",
      "Zip":91042
   },
   {
      "City":"LOS ANGELES",
      "Zip":91302
   },
   {
      "City":"LOS ANGELES",
      "Zip":91303
   },
   {
      "City":"LOS ANGELES",
      "Zip":91307
   },
   {
      "City":"LOS ANGELES",
      "Zip":91311
   },
   {
      "City":"LOS ANGELES",
      "Zip":91316
   },
   {
      "City":"LOS ANGELES",
      "Zip":91324
   },
   {
      "City":"LOS ANGELES",
      "Zip":91326
   },
   {
      "City":"LOS ANGELES",
      "Zip":91331
   },
   {
      "City":"LOS ANGELES",
      "Zip":91335
   },
   {
      "City":"LOS ANGELES",
      "Zip":91340
   },
   {
      "City":"LOS ANGELES",
      "Zip":91344
   },
   {
      "City":"LOS ANGELES",
      "Zip":91345
   },
   {
      "City":"LOS ANGELES",
      "Zip":91352
   },
   {
      "City":"LOS ANGELES",
      "Zip":91356
   },
   {
      "City":"LOS ANGELES",
      "Zip":91364
   },
   {
      "City":"LOS ANGELES",
      "Zip":91367
   },
   {
      "City":"LOS ANGELES",
      "Zip":91401
   },
   {
      "City":"LOS ANGELES",
      "Zip":91402
   },
   {
      "City":"LOS ANGELES",
      "Zip":91403
   },
   {
      "City":"LOS ANGELES",
      "Zip":91405
   },
   {
      "City":"LOS ANGELES",
      "Zip":91406
   },
   {
      "City":"LOS ANGELES",
      "Zip":91411
   },
   {
      "City":"LOS ANGELES",
      "Zip":91436
   },
   {
      "City":"LOS ANGELES",
      "Zip":91601
   },
   {
      "City":"LOS ANGELES",
      "Zip":91602
   },
   {
      "City":"LOS ANGELES",
      "Zip":91604
   },
   {
      "City":"LOS ANGELES",
      "Zip":91605
   },
   {
      "City":"LOS ANGELES",
      "Zip":91606
   },
   {
      "City":"LOS ANGELES",
      "Zip":91607
   },
   {
      "City":"LOS ANGELES",
      "Zip":91608
   },
   {
      "City":"LOS ANGELES (North of Lassen)",
      "Zip":91343
   },
   {
      "City":"LOS ANGELES (North of Roscoe)",
      "Zip":91304
   },
   {
      "City":"LOS ANGELES (North of Roscoe)",
      "Zip":91306
   },
   {
      "City":"LOS ANGELES (North of Roscoe)",
      "Zip":91325
   },
   {
      "City":"LOS ANGELES (South of Lassen)",
      "Zip":91343
   },
   {
      "City":"LOS ANGELES (South of Roscoe)",
      "Zip":91304
   },
   {
      "City":"LOS ANGELES (South of Roscoe)",
      "Zip":91306
   },
   {
      "City":"LOS ANGELES (South of Roscoe)",
      "Zip":91325
   },
   {
      "City":"LOS ANGELES(East of Fulton and Dixie Canyon Aves.)",
      "Zip":91423
   },
   {
      "City":"LOS ANGELES(West of Fulton and Dixie Canyon Aves.)",
      "Zip":91423
   },
   {
      "City":"MALIBU JUNCTION",
      "Zip":91301
   },
   {
      "City":"MALIBU LAKE",
      "Zip":91301
   },
   {
      "City":"MINT CANYON",
      "Zip":91351
   },
   {
      "City":"MISSION HILLS",
      "Zip":91345
   },
   {
      "City":"MISSION HILLS",
      "Zip":91346
   },
   {
      "City":"MISSION HILLS",
      "Zip":91395
   },
   {
      "City":"NEENACH",
      "Zip":93536
   },
   {
      "City":"NEWHALL",
      "Zip":91321
   },
   {
      "City":"NEWHALL",
      "Zip":91322
   },
   {
      "City":"NEWHALL",
      "Zip":91381
   },
   {
      "City":"NEWHALL",
      "Zip":91382
   },
   {
      "City":"NORTH HILLS",
      "Zip":91393
   },
   {
      "City":"NORTH HILLS (North of Lassen)",
      "Zip":91343
   },
   {
      "City":"NORTH HILLS (South of Lassen)",
      "Zip":91343
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91601
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91602
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91603
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91605
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91606
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91607
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91609
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91610
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91611
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91612
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91615
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91616
   },
   {
      "City":"NORTH HOLLYWOOD",
      "Zip":91618
   },
   {
      "City":"NORTHRIDGE",
      "Zip":91324
   },
   {
      "City":"NORTHRIDGE",
      "Zip":91326
   },
   {
      "City":"NORTHRIDGE",
      "Zip":91327
   },
   {
      "City":"NORTHRIDGE",
      "Zip":91328
   },
   {
      "City":"NORTHRIDGE",
      "Zip":91329
   },
   {
      "City":"NORTHRIDGE",
      "Zip":91343
   },
   {
      "City":"NORTHRIDGE (North of Roscoe)",
      "Zip":91325
   },
   {
      "City":"NORTHRIDGE (South of Roscoe)",
      "Zip":91325
   },
   {
      "City":"NORTHRIDGE ESTATES",
      "Zip":91324
   },
   {
      "City":"OAK FLAT",
      "Zip":91384
   },
   {
      "City":"OLIVE VIEW",
      "Zip":91342
   },
   {
      "City":"PACOIMA",
      "Zip":91331
   },
   {
      "City":"PACOIMA",
      "Zip":91333
   },
   {
      "City":"PACOIMA",
      "Zip":91334
   },
   {
      "City":"PANORAMA CITY",
      "Zip":91402
   },
   {
      "City":"PANORAMA CITY",
      "Zip":91412
   },
   {
      "City":"PICO",
      "Zip":91381
   },
   {
      "City":"PINETREE",
      "Zip":91350
   },
   {
      "City":"PORTER RANCH",
      "Zip":91326
   },
   {
      "City":"RESEDA",
      "Zip":91335
   },
   {
      "City":"RESEDA",
      "Zip":91337
   },
   {
      "City":"SAN FERNANDO",
      "Zip":91340
   },
   {
      "City":"SAN FERNANDO",
      "Zip":91341
   },
   {
      "City":"SAN FERNANDO",
      "Zip":91342
   },
   {
      "City":"SANDBERG",
      "Zip":93532
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91310
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91321
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91322
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91350
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91351
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91354
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91355
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91380
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91381
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91382
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91383
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91384
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91385
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91386
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91387
   },
   {
      "City":"SANTA CLARITA",
      "Zip":91390
   },
   {
      "City":"SAUGUS",
      "Zip":91350
   },
   {
      "City":"SAUGUS",
      "Zip":91390
   },
   {
      "City":"SEMINOLE HOT SPRINGSS",
      "Zip":91301
   },
   {
      "City":"SEPULVEDA",
      "Zip":91436
   },
   {
      "City":"SHADOW HILLS",
      "Zip":91040
   },
   {
      "City":"SHERMAN OAKS",
      "Zip":91403
   },
   {
      "City":"SHERMAN OAKS",
      "Zip":91413
   },
   {
      "City":"SHERMAN OAKS",
      "Zip":91495
   },
   {
      "City":"SHERMAN OAKS(East of Fulton and Dixie Cnyn Aves.)",
      "Zip":91423
   },
   {
      "City":"SHERMAN OAKS(West of Fulton and Dixie Cnyn Aves.)",
      "Zip":91423
   },
   {
      "City":"SLEEPY VALLEY",
      "Zip":91350
   },
   {
      "City":"SOLEDAD",
      "Zip":91350
   },
   {
      "City":"STEVENSON RANCH",
      "Zip":91381
   },
   {
      "City":"STUDIO CITY",
      "Zip":91602
   },
   {
      "City":"STUDIO CITY",
      "Zip":91604
   },
   {
      "City":"STUDIO CITY",
      "Zip":91607
   },
   {
      "City":"STUDIO CITY",
      "Zip":91614
   },
   {
      "City":"SULPHUR SPRINGS",
      "Zip":91351
   },
   {
      "City":"SUN VALLEY",
      "Zip":91352
   },
   {
      "City":"SUN VALLEY",
      "Zip":91353
   },
   {
      "City":"SUNLAND",
      "Zip":91040
   },
   {
      "City":"SUNLAND",
      "Zip":91041
   },
   {
      "City":"SYLMAR",
      "Zip":91342
   },
   {
      "City":"SYLMAR",
      "Zip":91392
   },
   {
      "City":"SYLMAR SQUARE",
      "Zip":91342
   },
   {
      "City":"TARZANA",
      "Zip":91356
   },
   {
      "City":"TARZANA",
      "Zip":91357
   },
   {
      "City":"THOUSAND OAKS (zip code is within Los Angeles & Ventura counties)",
      "Zip":91362
   },
   {
      "City":"TOLUCA LAKE",
      "Zip":91602
   },
   {
      "City":"TOLUCA LAKE",
      "Zip":91610
   },
   {
      "City":"TUJUNGA",
      "Zip":91042
   },
   {
      "City":"TUJUNGA",
      "Zip":91043
   },
   {
      "City":"UNIVERSAL CITY",
      "Zip":91608
   },
   {
      "City":"VAL VERDE PARK",
      "Zip":91384
   },
   {
      "City":"VALENCIA",
      "Zip":91354
   },
   {
      "City":"VALENCIA",
      "Zip":91355
   },
   {
      "City":"VALENCIA",
      "Zip":91385
   },
   {
      "City":"VALLEY GLEN",
      "Zip":91401
   },
   {
      "City":"VALLEY VILLAGE",
      "Zip":91607
   },
   {
      "City":"VALLEY VILLAGE",
      "Zip":91617
   },
   {
      "City":"VAN NUYS",
      "Zip":91388
   },
   {
      "City":"VAN NUYS",
      "Zip":91401
   },
   {
      "City":"VAN NUYS",
      "Zip":91404
   },
   {
      "City":"VAN NUYS",
      "Zip":91405
   },
   {
      "City":"VAN NUYS",
      "Zip":91406
   },
   {
      "City":"VAN NUYS",
      "Zip":91407
   },
   {
      "City":"VAN NUYS",
      "Zip":91408
   },
   {
      "City":"VAN NUYS",
      "Zip":91409
   },
   {
      "City":"VAN NUYS",
      "Zip":91410
   },
   {
      "City":"VAN NUYS",
      "Zip":91411
   },
   {
      "City":"VAN NUYS",
      "Zip":91470
   },
   {
      "City":"VAN NUYS",
      "Zip":91482
   },
   {
      "City":"VAN NUYS",
      "Zip":91495
   },
   {
      "City":"VAN NUYS",
      "Zip":91496
   },
   {
      "City":"VAN NUYS",
      "Zip":91497
   },
   {
      "City":"VAN NUYS",
      "Zip":91499
   },
   {
      "City":"VASQUEZ ROCKS",
      "Zip":91350
   },
   {
      "City":"WARNER CENTER",
      "Zip":91367
   },
   {
      "City":"WEST HILLS",
      "Zip":91307
   },
   {
      "City":"WEST HILLS (North of Roscoe)",
      "Zip":91304
   },
   {
      "City":"WEST HILLS (South of Roscoe)",
      "Zip":91304
   },
   {
      "City":"WESTLAKE VILLAGE (zip code is within Los Angeles & Ventura counties)",
      "Zip":91361
   },
   {
      "City":"WINNETKA",
      "Zip":91306
   },
   {
      "City":"WINNETKA",
      "Zip":91396
   },
   {
      "City":"WOODLAND HILLS",
      "Zip":91364
   },
   {
      "City":"WOODLAND HILLS",
      "Zip":91365
   },
   {
      "City":"WOODLAND HILLS",
      "Zip":91367
   },
   {
      "City":"WOODLAND HILLS",
      "Zip":91371
   },
   {
      "City":"WOODLAND HILLS",
      "Zip":91396
   }
]
    },
    "Stanley Mosk Courthouse": {
      "Address": " ",
      "Locations": [
        {
          "City": " ",
          "Zip": " "
        }
      ]
    }
  }
  
  return CourtFactory;
})

