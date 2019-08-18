'use strict';

const csv = require('csvtojson');
const fs = require('fs');

const data = [];

function parseQuestion(obj) {
  data.push({
    data: [obj.var001, obj.var002, obj.var003, obj.var004, obj.var005,
      obj.var006, obj.var007, obj.var008, obj.var009, obj.var010,
      obj.var011, obj.var012, obj.var013, obj.var014, obj.var015,
      obj.var016, obj.var017, obj.var018, obj.var019, obj.var020,
      obj.var021, obj.var022, obj.var023, obj.var024, obj.var025,
      obj.var026, obj.var027, obj.var028, obj.var029, obj.var030,
      obj.var031, obj.var032, obj.var033, obj.var034, obj.var035, 
      obj.var036, obj.var037, obj.var038, obj.var039, obj.var040,
      obj.var041, obj.var042, obj.var043, obj.var044, obj.var045,
      obj.var046, obj.var047, obj.var048, obj.var049, obj.var050,
      obj.var051, obj.var052, obj.var053, obj.var054, obj.var055,
      obj.var056, obj.var057, obj.var058, obj.var059, obj.var060,
      obj.var061, obj.var062, obj.var063, obj.var064, obj.var065,
      obj.var066, obj.var067, obj.var068, obj.var069, obj.var070,
      obj.var071, obj.var072, obj.var073, obj.var074, obj.var075,
      obj.var076, obj.var077, obj.var078, obj.var079, obj.var080,
      obj.var081, obj.var082, obj.var083, obj.var084, obj.var085,
      obj.var086, obj.var087, obj.var088, obj.var089, obj.var090,
      obj.var091, obj.var092, obj.var093, obj.var094, obj.var095,
      obj.var096, obj.var097, obj.var098, obj.var099, obj.var100,
      obj.var101, obj.var102, obj.var103, obj.var104, obj.var105,
      obj.var106, obj.var107, obj.var108, obj.var109, obj.var110,
      obj.var111, obj.var112, obj.var113, obj.var114, obj.var115,
      obj.var116, obj.var117, obj.var118, obj.var119, obj.var120,
      obj.var121, obj.var122, obj.var123, obj.var124, obj.var125,
      obj.var126, obj.var127, obj.var128, obj.var129, obj.var130,
      obj.var131, obj.var132, obj.var133, obj.var134, obj.var135,
      obj.var136, obj.var137, obj.var138, obj.var139, obj.var140,
      obj.var141, obj.var142, obj.var143, obj.var144, obj.var145,
      obj.var146, obj.var147, obj.var148, obj.var149, obj.var150,
      obj.var151, obj.var152, obj.var153, obj.var154, obj.var155,
      obj.var156, obj.var157, obj.var158, obj.var159, obj.var160,
      obj.var161, obj.var162, obj.var163, obj.var164, obj.var165,
      obj.var166, obj.var167, obj.var168, obj.var169, obj.var170,
      obj.var171, obj.var172, obj.var173, obj.var174, obj.var175,
      obj.var176, obj.var177, obj.var178, obj.var179, obj.var180,
      obj.var181, obj.var182, obj.var183, obj.var184, obj.var185,
      obj.var186, obj.var187, obj.var188, obj.var189, obj.var190,
      obj.var191, obj.var192, obj.var193, obj.var194, obj.var195,
      obj.var196, obj.var197, obj.var198, obj.var199, obj.var200
    ],
  });
}

function run() {
  csv()
    .fromFile('./src/data/data.csv')
    .on('json', (jsonObj) => {
      parseQuestion(jsonObj);
    })
    .on('done', () => {
      fs.writeFileSync('./src/data/data.json', JSON.stringify(data, null, 2));
      console.log('done here');
    });
}

run();
