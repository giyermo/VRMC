let showingDisplay = false;

let currentDisplay = 1;

let currentDisplayRotation = 0;

//*primitive counters
let boxCounter = 1;
let cylinderCounter = 1;
let sphereCounter = 1;
let coneCounter = 1;
let dodecahedronCounter = 1;
let circleCounter = 1;
let planeCounter = 1;
let triangleCounter = 1;

let boxes = [];
let cylinderes = [];
let spheres = [];
let cones = [];
let dodecahedrons = [];
let circles = [];
let planes = [];
let triangles = [];

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
      })
      console.log('diplay plane created --> ', displayBase)

      return displayBase;
    };

    //?cylinder creator function
    let displayCylinderCreator = function() {                
      displayCylinder = document.createElement('A-CYLINDER');
      displayBase.appendChild(displayCylinder);
      displayCylinder.setAttribute('id', 'displayCylinder');
      displayCylinder.setAttribute('position', {x: -3, y: 0.15, z: -9.5});
      displayCylinder.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayCylinder.setAttribute('scale', {x: 0.75, y: 0.75, z: 0.75});
      displayCylinder.setAttribute('material', {'opacity': 0.5});
      displayCylinder.setAttribute('pre-selection-view', '');
      displayCylinder.setAttribute('select-primitive', '');
      //displayCylinder.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display cylinder created --> ', displayCylinder);          

      return displayCylinder;
    };

    //?box creator function
    let displayBoxCreator = function() {
      displayBox = document.createElement('A-BOX');
      displayBase.appendChild(displayBox);
      displayBox.setAttribute('id', 'displayBox');
      displayBox.setAttribute('position', {x: -5, y: 0.15, z: -8.5});
      displayBox.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayBox.setAttribute('material', {'opacity': 0.5});
      displayBox.setAttribute('pre-selection-view', '');
      displayBox.setAttribute('select-primitive', '');
      displayBox.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display box created --> ', displayBox);

      return displayBox;
    };

    //?sphere creator function
    let displaySphereCreator = function() {
      displaySphere = document.createElement('A-SPHERE');
      displayBase.appendChild(displaySphere);
      displaySphere.setAttribute('id', 'displaySphere');
      displaySphere.setAttribute('position', {x: -7, y: 0.15, z: -7.25});
      displaySphere.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displaySphere.setAttribute('scale', {x: 0.7, y: 0.7, z: 0.7});
      displaySphere.setAttribute('material', {'opacity': 0.5});
      displaySphere.setAttribute('pre-selection-view', '');
      displaySphere.setAttribute('select-primitive', '');
      //displaySphere.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display sphere created --> ', displaySphere);

      return displaySphere;
    };

    //?cone creator function
    let displayConeCreator = function() {
      displayCone = document.createElement('A-CONE');
      displayBase.appendChild(displayCone);
      displayCone.setAttribute('id', 'displayCone');
      displayCone.setAttribute('position', {x: -0.75, y: 0.15, z: -9.75});
      displayCone.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayCone.setAttribute('scale', {x: 0.7, y: 1, z: 0.7});
      displayCone.setAttribute('material', {'opacity': 0.5});
      displayCone.setAttribute('pre-selection-view', '');
      displayCone.setAttribute('select-primitive', '');
      //displayCone.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display cone created --> ', displayCone);

      return displayCone;
    };

    //?dodecahedron creator function
    let displayDodecahedronCreator = function() {
      displayDodecahedron = document.createElement('A-DODECAHEDRON');
      displayBase.appendChild(displayDodecahedron);
      displayDodecahedron.setAttribute('id', 'displayDodecahedron');
      displayDodecahedron.setAttribute('radius', 0.75);
      displayDodecahedron.setAttribute('position', {x: 1.25, y: 0.15, z: -10});
      displayDodecahedron.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayDodecahedron.setAttribute('scale', {x: 0.9, y: 0.9, z: 0.9});
      displayDodecahedron.setAttribute('material', {'opacity': 0.5});
      displayDodecahedron.setAttribute('pre-selection-view', '');
      displayDodecahedron.setAttribute('select-primitive', '');
      displayDodecahedron.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display dodecahedron created -->', displayDodecahedron);

      return displayDodecahedron;
    };

    //?circle creator function
    let displayCircleCreator = function () {
      displayCircle = document.createElement('A-CIRCLE');
      displayBase.appendChild(displayCircle);
      displayCircle.setAttribute('id', 'displayCircle');
      displayCircle.setAttribute('radius', 0.75);
      displayCircle.setAttribute('position', {x: 3, y: 0.15, z: -9.25});
      displayCircle.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayCircle.setAttribute('side', 'double');
      displayCircle.setAttribute('scale', {x: 0.8, y: 0.8, z: 0.8});
      displayCircle.setAttribute('material', {'opacity': 0.5});
      displayCircle.setAttribute('pre-selection-view', '');
      displayCircle.setAttribute('select-primitive', '');
      displayCircle.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display circle created --> ', displayCircle);

      return displayCircle;
    };

    //?plane creator function
    let displayPlaneCreator = function() {
      displayPlane = document.createElement('A-PLANE');
      displayBase.appendChild(displayPlane);
      displayPlane.setAttribute('id', 'displayPlane');
      displayPlane.setAttribute('position', {x: 4.75, y: 0.15, z: -8.25});
      displayPlane.setAttribute('rotation', {x: 0, y: 0, z: 0});
      displayPlane.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
      displayPlane.setAttribute('material', {'opacity': 0.5});
      displayPlane.setAttribute('side', 'double');
      displayPlane.setAttribute('pre-selection-view', '');
      displayPlane.setAttribute('select-primitive', '');
      displayPlane.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 5000; loop: -1; easing:linear');
      console.log('display plane created --> ', displayPlane);

      return displayPlane;
    };

    //?triangle creator function
    let displayTriangleCreator = function() {
      displayTriangle = document.createElement('A-TRIANGLE');
      displayBase.appendChild(displayTriangle);
      displayTriangle.setAttribute('id', 'displayTriangle');
      displayTriangle.setAttribute('vertex-a', '-0.85 -0.75 0');
      displayTriangle.setAttribute('vertex-b',  '0 0.75 0');
      displayTriangle.setAttribute('vertex-c', '0.85 -0.75 0');
      displayTriangle.setAttribute('position', {x: 6.25, y: 0.15, z: -7});
      displayTriangle.setAttribute('rotation', {x: 0, y: 0, z: 0})
      displayTriangle.setAttribute('side', 'double');
      displayTriangle.setAttribute('material', {'opacity': 0.5});
      displayTriangle.setAttribute('pre-selection-view', '');
      displayTriangle.setAttribute('select-primitive', '');
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

    let primitiveCreator = (primitiveArray, counterName) => {
      let primitive = document.createElement(el.tagName);
      scene.appendChild(primitive);
      primitive.setAttribute('id', el.tagName + `${counterName}`);
      primitiveArray.push(primitive);

      counterName = counterName + 1;
    };

    el.addEventListener('raycaster-intersected', function (evt) {
      el.addEventListener('triggerdown', function (evt) {
        primitiveCreator(box ,boxCounter);
      });

      el.addEventListener('click', function (evt) {
        primitiveCreator(boxCounter);
      });
    });
  },
});