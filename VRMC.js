let showingDisplay = false;

let currentDisplay = 1;

let currentDisplayRotation = 0;

let objectMode = 'object';

let editMode = 'edit';

let mode = objectMode;

//*primitives array
let primitives = [];

let workingObject;

AFRAME.registerComponent('change-mode', {
  init: function(e) {
    document.addEventListener('xbuttondown', function(evt) {
      if(mode == 'object') {
        mode = editMode;

        workingObject.setAttribute('material', {
          'wireframe': 'true',
        });

        console.log('%cCurrent mode: edit mode', 'color:red; font-size:2rem');
      } else if(mode == 'edit') {
        mode = objectMode;

        workingObject.setAttribute('material', {
          'wireframe': 'false',
        });

        console.log('%cCurrent mode: object mode', 'color:red; font-size:2rem');
      };
    });

    window.addEventListener('keydown', function(evt) {
      if(evt.keyCode == 88) {
        if(mode == 'object') {
          mode = editMode;

          workingObject.setAttribute('material', {
            'wireframe': 'true',
          });

          console.log('%cCurrent mode: edit mode', 'color:red; font-size:2rem');
        } else if(mode == 'edit') {
          mode = objectMode;

          workingObject.setAttribute('material', {
            'wireframe': 'false',
          });

          console.log('%cCurrent mode: object mode', 'color:red; font-size:2rem');
        };
      };
    });
  }
})

AFRAME.registerComponent('show-objects', {
  init: function(e) {
    console.log('show-objects(init)');

    let el = this.el;

    let scene = document.getElementById('scene');

    let movementControls = document.getElementById('movementControls');

    let camera = document.getElementById('camera');

    //? base creator function
    let displayBaseCreator = () => {
      let displayBase = document.createElement('A-ENTITY');
      movementControls.appendChild(displayBase);
      displayBase.setAttribute('id', 'displayBase');
      displayBase.setAttribute('position', {x: 0, y: -1, z: 0});
      displayBase.setAttribute('rotation', {x: 0, y: currentDisplayRotation, z: 0});
      displayBase.setAttribute('geometry', {
        'primitive': 'cone',
        'openEnded': 'true',
        'height': 2,
        'radiusBottom': 10,
        'radiusTop': 12,
        'thetaLength': 100,
        'thetaStart': 130,});
      displayBase.setAttribute('material', {
        'side': 'double',
        'roughness': 0.5,
        'metalness': 0.5,
        'color': '#0F0E0E', 
      });
      displayBase.setAttribute('data-raycastable', '')
      console.log('diplay plane created --> ', displayBase)

      return displayBase;
    };

    //?cylinder creator function
    let displayCylinderCreator = function() {                
      displayCylinder = document.createElement('A-ENTITY');
      displayBase.appendChild(displayCylinder);
      displayCylinder.setAttribute('id', 'displayCylinder');
      displayCylinder.setAttribute('geometry', {'primitive': 'cylinder'});
      displayCylinder.setAttribute('position', {x: -3, y: 0.15, z: -9.5});
      displayCylinder.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayCylinder.setAttribute('scale', {x: 0.75, y: 0.75, z: 0.75});
      displayCylinder.setAttribute('material', {'opacity': 0.5});
      displayCylinder.setAttribute('pre-selection-view', '');
      displayCylinder.setAttribute('select-primitive', '');
      displayCylinder.setAttribute('data-raycastable', '')
      //displayCylinder.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display cylinder created --> ', displayCylinder);          

      return displayCylinder;
    };

    //?box creator function
    let displayBoxCreator = function() {
      displayBox = document.createElement('A-ENTITY');
      displayBase.appendChild(displayBox);
      displayBox.setAttribute('id', 'displayBox');
      displayBox.setAttribute('geometry', {'primitive': 'box'});
      displayBox.setAttribute('position', {x: -5, y: 0.15, z: -8.5});
      displayBox.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayBox.setAttribute('material', {'opacity': 0.5});
      displayBox.setAttribute('pre-selection-view', '');
      displayBox.setAttribute('select-primitive', '');
      displayBox.setAttribute('data-raycastable', '')
      displayBox.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display box created --> ', displayBox);

      return displayBox;
    };

    //?sphere creator function
    let displaySphereCreator = function() {
      displaySphere = document.createElement('A-ENTITY');
      displayBase.appendChild(displaySphere);
      displaySphere.setAttribute('id', 'displaySphere');
      displaySphere.setAttribute('geometry', {'primitive': 'sphere'});
      displaySphere.setAttribute('position', {x: -7, y: 0.15, z: -7.25});
      displaySphere.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displaySphere.setAttribute('scale', {x: 0.7, y: 0.7, z: 0.7});
      displaySphere.setAttribute('material', {'opacity': 0.5});
      displaySphere.setAttribute('pre-selection-view', '');
      displaySphere.setAttribute('select-primitive', '');
      displaySphere.setAttribute('data-raycastable', '')
      //displaySphere.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display sphere created --> ', displaySphere);

      return displaySphere;
    };

    //?cone creator function
    let displayConeCreator = function() {
      displayCone = document.createElement('A-ENTITY');
      displayBase.appendChild(displayCone);
      displayCone.setAttribute('id', 'displayCone');
      displayCone.setAttribute('geometry', {'primitive': 'cone'});
      displayCone.setAttribute('position', {x: -0.75, y: 0.15, z: -9.75});
      displayCone.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayCone.setAttribute('scale', {x: 0.7, y: 1, z: 0.7});
      displayCone.setAttribute('material', {'opacity': 0.5});
      displayCone.setAttribute('pre-selection-view', '');
      displayCone.setAttribute('select-primitive', '');
      displayCone.setAttribute('data-raycastable', '')
      //displayCone.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display cone created --> ', displayCone);

      return displayCone;
    };

    //?dodecahedron creator function
    let displayDodecahedronCreator = function() {
      displayDodecahedron = document.createElement('A-ENTITY');
      displayBase.appendChild(displayDodecahedron);
      displayDodecahedron.setAttribute('id', 'displayDodecahedron');
      displayDodecahedron.setAttribute('geometry', {
        'primitive': 'dodecahedron',
        'radius': 0.75
      });
      displayDodecahedron.setAttribute('position', {x: 1.25, y: 0.15, z: -10});
      displayDodecahedron.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayDodecahedron.setAttribute('scale', {x: 0.9, y: 0.9, z: 0.9});
      displayDodecahedron.setAttribute('material', {'opacity': 0.5});
      displayDodecahedron.setAttribute('pre-selection-view', '');
      displayDodecahedron.setAttribute('select-primitive', '');
      displayDodecahedron.setAttribute('data-raycastable', '')
      displayDodecahedron.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display dodecahedron created -->', displayDodecahedron);

      return displayDodecahedron;
    };

    //?circle creator function
    let displayCircleCreator = function () {
      displayCircle = document.createElement('A-ENTITY');
      displayBase.appendChild(displayCircle);
      displayCircle.setAttribute('id', 'displayCircle');
      displayCircle.setAttribute('geometry', {
        'primitive': 'circle',
        'radius': 0.75,
      });
      displayCircle.setAttribute('radius', 0.75);
      displayCircle.setAttribute('position', {x: 3, y: 0.15, z: -9.25});
      displayCircle.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayCircle.setAttribute('scale', {x: 0.8, y: 0.8, z: 0.8});
      displayCircle.setAttribute('material', {
        'opacity': 0.5,
        'side': 'double'
      });
      displayCircle.setAttribute('pre-selection-view', '');
      displayCircle.setAttribute('select-primitive', '');
      displayCircle.setAttribute('data-raycastable', '')
      displayCircle.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display circle created --> ', displayCircle);

      return displayCircle;
    };

    //?plane creator function
    let displayPlaneCreator = function() {
      displayPlane = document.createElement('A-ENTITY');
      displayBase.appendChild(displayPlane);
      displayPlane.setAttribute('id', 'displayPlane');
      displayPlane.setAttribute('geometry', {'primitive': 'plane'});
      displayPlane.setAttribute('position', {x: 4.75, y: 0.15, z: -8.25});
      displayPlane.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayPlane.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
      displayPlane.setAttribute('material', {
        'opacity': 0.5,
        'side': 'double'
      });
      displayPlane.setAttribute('pre-selection-view', '');
      displayPlane.setAttribute('select-primitive', '');
      displayPlane.setAttribute('data-raycastable', '')
      displayPlane.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display plane created --> ', displayPlane);

      return displayPlane;
    };

    //?triangle creator function
    let displayTriangleCreator = function() {
      displayTriangle = document.createElement('A-ENTITY');
      displayBase.appendChild(displayTriangle);
      displayTriangle.setAttribute('id', 'displayTriangle');
      displayTriangle.setAttribute('geometry', {
        'primitive': 'triangle',
        'vertexA': '-0.85 -0.75 0',
        'vertexB':  '0 0.75 0',
        'vertexC': '0.85 -0.75 0'
      });
      displayTriangle.setAttribute('position', {x: 6.25, y: 0.15, z: -7});
      displayTriangle.setAttribute('rotation', {x: 0, y: 0, z: 0})
      displayTriangle.setAttribute('material', {
        'opacity': 0.5,
        'side': 'double'
      });
      displayTriangle.setAttribute('pre-selection-view', '');
      displayTriangle.setAttribute('select-primitive', '');
      displayTriangle.setAttribute('data-raycastable', '')
      displayTriangle.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display triangle created --> ', displayTriangle);

      return displayTriangle;
    };

    let showFirstDisplay = () => {
      displayBase = displayBaseCreator();
      displayBox = displayBoxCreator();
      displayCylinder = displayCylinderCreator();
      displaySphere = displaySphereCreator();
      displayCone = displayConeCreator();
      displayDodecahedron = displayDodecahedronCreator();
      displayPlane = displayPlaneCreator();
      displayCircle = displayCircleCreator();
      displayTriangle = displayTriangleCreator();
    };

    let hideFirstDisplay = () => {
      movementControls.removeChild(displayBase);
    };

    document.addEventListener('ybuttondown', function(evt) {
      if(showingDisplay == false && currentDisplay == 1) {
        showFirstDisplay();

        showingDisplay = true;
      } else if(showingDisplay == true && currentDisplay == 1) {
        hideFirstDisplay();

        showingDisplay = false;
      };
    });

    document.addEventListener('thumbstickdown', function(evt) {
      currentDisplayRotation = currentDisplayRotation + 20;

      displayBase.setAttribute('rotation', {x: 0, y: currentDisplayRotation, z: 0})
    });

    window.addEventListener('keydown', function(evt) {
      if(evt.keyCode == 89) {
        if(showingDisplay == false && currentDisplay == 1) {
          showFirstDisplay();

          showingDisplay = true;
        } else if(showingDisplay == true && currentDisplay == 1) {
          hideFirstDisplay();

          showingDisplay = false;
        };
      };
    });

    window.addEventListener('keydown', function(evt) {
      if(evt.keyCode == 82) {
        currentDisplayRotation = currentDisplayRotation + 20;

        displayBase.setAttribute('rotation', {x: 0, y: currentDisplayRotation, z: 0})
      };
    });
  },
});

AFRAME.registerComponent('pre-selection-view', {
  init: function(e) {
    let el = this.el;

    el.addEventListener('raycaster-intersected', function (evt) {
      el.setAttribute('material', {'color': 'red'});
    });

    el.addEventListener('raycaster-intersected-cleared', function (evt) {
      el.setAttribute('material', {'color': 'white'});
    });
  },
});

AFRAME.registerComponent('select-primitive', {
  init: function(e) {
    let el = this.el;

    let scene = document.getElementById('scene');

    let primitiveCreator = () => {
      let primitive = document.createElement('A-ENTITY');
      scene.appendChild(primitive);
      primitive.setAttribute('geometry', el.getAttribute('geometry'));
      primitive.setAttribute('material', {'color': '#FFF'});
      primitive.setAttribute('hoverable', '');
      primitive.setAttribute('id', el.tagName + `${primitives.length + 1}`);
      primitive.setAttribute('data-raycastable', '');
      primitive.setAttribute('draggable', '');
      primitives.push(primitive);

      console.log('primitives array: ', primitives);
    };

    el.addEventListener('raycaster-intersected', function (evt) {
      console.log('intersected');
      el.addEventListener('triggerdown', function (evt) {
        console.log('pressed');
        primitiveCreator();
      });

      el.addEventListener('click', function (evt) {
        console.log('pressed');
        primitiveCreator();
      });
    });
  },
});

AFRAME.registerComponent('selection-sound', {
  init: function() {
    console.log('init')
    let selectionSoundEntity = document.getElementById('selectionSoundEntity');

    document.addEventListener('triggerdown', function() {
      selectionSoundEntity.components.sound.playSound();
    });
  }
});

AFRAME.registerComponent('hoverable', {
  init: function(e) {
    let el = this.el;

    
    console.log('hover init of: ', el);
    el.addEventListener('raycaster-intersected', function (evt) {
      el.setAttribute('material', {
        'color': '#FF5A00',
      });

      el.addEventListener('triggerdown', function (evt) {
        workingObject = el;

        el.objProperties = el.attributes;

        if(mode == 'edit') {
          el.setAttribute('material', {
            'wireframe': 'true',
            'emissive': '#FF5A00',
            'emissiveIntensity': '0.5',
          });
        };
      });
    });

    el.addEventListener('raycaster-intersected-cleared', function (evt) {
      if(workingObject !== el) {
        el.setAttribute('material', {
          'color': '#FFF',
          'wireframe': 'false',
          'emissive': '#000',
        });
      };
    });
  },
});

AFRAME.registerComponent('raycaster-length-adjustement', {
  init: function() {
    let el = this.el;

    let controller = document.getElementById('rightHand');

    let raycasterAttributes = controller.getAttribute('raycaster');

    let raycasterLineEndPoint = controller.components.raycaster.lineData.end;

    let thumbstick = {
      x:0,
      y:0,
      pressed:false,
    }
    controller.addEventListener('thumbstickdown',function(){
      thumbstick.pressed=true;
    });
    controller.addEventListener('thumbstickup',function(){
      thumbstick.pressed=false;
    }); 

    controller.addEventListener('gripdown',function(evt){
      controller.addEventListener('thumbstickmoved',function(evt){

        thumbstick.x=evt.detail.x;     
        thumbstick.y=evt.detail.y; 

        if(thumbstick.y >= 0 && raycasterAttributes.far > 0.1) {
          console.log('shortening line');
          controller.setAttribute('raycaster', {
            'far': raycasterAttributes.far - 0.03
          });

        } else if(thumbstick.y <= 0) {
          console.log('lengthening line');
          controller.setAttribute('raycaster', {
            'far': raycasterAttributes.far + 0.03
          });
        };
      });
    });
  },
});

AFRAME.registerComponent('draggable', {
  init: function() {
    let el = this.el;

    let controller = document.getElementById('rightHand');

    let dragging = this.dragging;

    controller.addEventListener('raycaster-intersected', function(evt) {
      console.log('intersected');
      controller.addEventListener('gripdown', function(evt) {
        console.log('gripdown');
        controller.addEventListener('triggerdown', function(evt) {
          console.log('triggerdown');
          el.removeAttribute('data-raycastable');
          dragging.value = true;
          console.log('triggerdown', dragging.value);
        });
        controller.addEventListener('triggerup', function(evt) {
          console.log('triggerup');
          el.setAttribute('data-raycastable', '');
          dragging.value = false;
          console.log('triggerup', dragging.value);
        });
      });
    });
  },

  dragging: {value: false},

  drag: function() {
    let position = controller1.object3D.localToWorld(controller1.components.raycaster.lineData.end);
    this.el.object3D.position.set(position.x, position.y, position.z);
  },

  tick: function(evt) {
    console.log('tick', this.dragging.value);
    if(this.dragging.value == true) {
      this.drag();
    };
  },
});

function createGrid(size) {

	for (var i = -size; i <= size; i++) {
		var z = document.createElement('a-entity');
		var x = document.createElement('a-entity');
		var y = document.createElement('a-entity');
		var marksx = document.createElement('a-entity');
		var marksz = document.createElement('a-entity');

		// Clase linea para acceder a todos ellos
		z.setAttribute('class','linedit');
		y.setAttribute('class','linedit');
		x.setAttribute('class','linedit');
		marksx.setAttribute('class','linedit');
		marksz.setAttribute('class','linedit');

		// Cuadrícula
		z.setAttribute('line', 'start: -' + size + ', 0, '  + i + '; end: ' + size + ' 0 ' + i + '; color: #EBEBEB; visible: true; opacity: 0.25');
		x.setAttribute('line', 'start: ' + i + ', 0, -' + size + '; end: ' + i + ' 0 ' + size  + '; color: #EBEBEB; visible: true; opacity: 0.25');
		if(size >= 0){
			// Marcas en el eje y
			marksx.setAttribute('line', 'start: -0.2, ' + i + ', 0; end: 0.2 ' + i + ' 0; color: #EBEBEB; visible: true; opacity: 0.25');
			marksz.setAttribute('line', 'start: 0, ' + i + ', -0.2; end: 0 ' + i + ' 0.2; color: #EBEBEB; visible: true; opacity: 0.25');
			scene.appendChild(marksx);
			scene.appendChild(marksz);
		}
		if(i == -size){
			// Eje y
			y.setAttribute('line', 'start: 0, 0, 0; end:  0 ' + size  + '0; color: #EBEBEB; visible: true; opacity: 0.25');
			scene.appendChild(y);
		}
		scene.appendChild(z);
		scene.appendChild(x);
	}
};