var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.36383576134064377,
        "pitch": 0.21429227825146313,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.05830351685296442,
          "pitch": 0.3924551027600174,
          "rotation": 0.7853981633974483,
          "target": "2-pasillo"
        },
        {
          "yaw": -1.0869570517730232,
          "pitch": 0.47153608054457763,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1501035232201602,
        "pitch": 0.3621995099168984,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.6183067358998944,
          "pitch": 0.12047609062473619,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.04698963370754683,
        "pitch": 0.38464803089554955,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.07545026111399977,
          "pitch": 0.11919730253899274,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 0.014793746629015558,
          "pitch": 0.28271559229939314,
          "rotation": 1.5707963267948966,
          "target": "1-salon"
        },
        {
          "yaw": -0.48249173771399256,
          "pitch": 0.20548028660401485,
          "rotation": 4.71238898038469,
          "target": "3-cocina"
        },
        {
          "yaw": -2.117834471727873,
          "pitch": 0.251192962337381,
          "rotation": 0.7853981633974483,
          "target": "5-dormitorio-2"
        },
        {
          "yaw": -2.875424241083678,
          "pitch": 0.2982935447435153,
          "rotation": 0,
          "target": "6-bao"
        },
        {
          "yaw": 1.902084253723789,
          "pitch": 0.2243405385447801,
          "rotation": 5.497787143782138,
          "target": "7-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1785606080886506,
        "pitch": 0.5094141000539167,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.953073173025805,
          "pitch": 0.15471054880503843,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": -1.3931785874912972,
          "pitch": 0.38991129218104525,
          "rotation": 0,
          "target": "4-terraza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terraza",
      "name": "Terraza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8256732346678177,
        "pitch": 0.4680594498650379,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.6992981223772894,
          "pitch": 0.6937835841182363,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": -1.6760934461033958,
          "pitch": 0.14603351425860467,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitorio-2",
      "name": "Dormitorio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4393347214568077,
        "pitch": 0.34157059138456347,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.0458350551891336,
          "pitch": 0.19897759663948378,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5799863360473516,
        "pitch": 0.4586606657312018,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.9919452638583737,
          "pitch": 0.257777012050898,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dormitorio-principal",
      "name": "Dormitorio principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8891696110119405,
        "pitch": 0.1852469013171394,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.516432278937197,
          "pitch": 0.12819544132177008,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": -1.6666672984330688,
          "pitch": 0.32726520696978234,
          "rotation": 4.71238898038469,
          "target": "9-bao-en-suite"
        },
        {
          "yaw": 1.7393967233747993,
          "pitch": 0.5929649228844855,
          "rotation": 0,
          "target": "8-dormitorio-principal-mirador"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dormitorio-principal-mirador",
      "name": "Dormitorio principal mirador",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.205986458278769,
        "pitch": 0.4903934098746774,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7201647110458076,
          "pitch": 0.7171218428143575,
          "rotation": 0,
          "target": "7-dormitorio-principal"
        },
        {
          "yaw": -1.0684319865332963,
          "pitch": 0.03332694376510581,
          "rotation": 5.497787143782138,
          "target": "2-pasillo"
        },
        {
          "yaw": -1.136599760938946,
          "pitch": 0.18809924293734426,
          "rotation": 4.71238898038469,
          "target": "9-bao-en-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bao-en-suite",
      "name": "Baño en suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.584671589716214,
        "pitch": 0.35250598180534176,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.892611233524713,
          "pitch": 0.28170119324865794,
          "rotation": 0,
          "target": "7-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "202412_28027_AO53",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
