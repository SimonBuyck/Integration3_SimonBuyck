import Matter from 'matter-js';

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Vertices = Matter.Vertices,
  World = Matter.World,
  Body = Matter.Body,
  Bodies = Matter.Bodies;

// create engine
const engine = Engine.create(),
  world = engine.world;

// create renderer
const container = document.getElementById('tutorial__items');

let render;

if (container) {
  console.log(container);

  render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: container.clientWidth - 5,
      height: container.clientHeight,
      background: 'transparent',
      pixelRatio: 'auto',
      showAngleIndicator: false,
      wireframes: false,
    },
  });
}



engine.world.gravity.y = 0;

setTimeout(function () {
  engine.world.gravity.y = 3.5;
}, 500);

// create runner
const runner = Runner.create();
Runner.run(runner, engine);

let offset;
let wall;
let wallSettings;

if (container) {
  // add bodies
  (offset = 300),
  (wall = {
    angle: 0,
    width: container.clientWidth,
    height: container.clientHeight,
  }),
  (wallSettings = {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
    },
  });

  // Walls
  World.add(world, [
    // Bodies.rectangle(wall.width/2, -offset/2, wall.width, offset, wallSettings), // top
    Bodies.rectangle(
      wall.width + offset / 2,
      wall.height / 2 - 6000,
      offset,
      wall.height + 12000,
      wallSettings
    ), // right
    Bodies.rectangle(
      wall.width / 2,
      wall.height + offset / 2,
      wall.width,
      offset,
      wallSettings
    ), // bottom
    Bodies.rectangle(
      - offset / 2,
      wall.height / 2 - 6000,
      offset,
      wall.height + 12000,
      wallSettings
    ), //left
  ]);
}



let rest;
let friction;
let boormachine;
let Poten;
let Ondersteuning;
let Stokken;
let Screw;
let Verf;
let Vernis;
let Deuvel;
let Borstel;
let Lijm;
let Zaag;
let Meter;

if (container) {
  // Letters
  const scaleF = function () {
    if (window.innerWidth > 768) {
      return window.innerWidth / 200 / 3.15;
    } else {
      return window.innerWidth / 200 / 1.45;
    }
  };

  rest = 0.5;
  friction = 0.75;
  const generalPosX = container.clientWidth / 2;
  const generalPosY = - container.clientHeight / 2;

  // console.log(scaleF());

  // boormachine
  const xPosBoormachine = generalPosX - 50 * scaleF();
  const yPosBoormachine = generalPosY - (500 + 15) * scaleF();
  const angleBoormachine = - Math.PI / 7;

  const pointsBoormachine =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  boormachine = path(
    xPosBoormachine,
    yPosBoormachine,
    pointsBoormachine,
    {
      yScale: 1 * scaleF(),
      xScale: 1 * scaleF(),
      texture: 'assets/img/svg/boormachine.svg',
    }
  );

  Body.scale(boormachine, 0.5 * scaleF(), 0.5 * scaleF());
  Body.rotate(boormachine, angleBoormachine);

  // poten
  const xPosPoten = generalPosX - 50 * scaleF();
  const yPosPoten = generalPosY - (500 + 15) * scaleF();
  const anglePoten = - Math.PI / 7;

  const pointsPoten =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Poten = path(xPosPoten, yPosPoten, pointsPoten, {
    yScale: 1 * scaleF(),
    xScale: 1 * scaleF(),
    texture: 'assets/img/svg/poten.svg',
  });

  Body.scale(Poten, 0.5 * scaleF(), 0.5 * scaleF());
  Body.rotate(Poten, anglePoten);

  // vernis
  const xPosVernis = generalPosX - 50 * scaleF();
  const yPosVernis = generalPosY - (500 + 15) * scaleF();
  const angleVernis = - Math.PI / 7;

  const pointsVernis =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Vernis = path(xPosVernis, yPosVernis, pointsVernis, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/vernis.svg',
  });

  Body.scale(Vernis, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Vernis, angleVernis);

  // verf
  const xPosVerf = generalPosX - 50 * scaleF();
  const yPosVerf = generalPosY - (500 + 15) * scaleF();
  const angleVerf = - Math.PI / 7;

  const pointsVerf =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Verf = path(xPosVerf, yPosVerf, pointsVerf, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/verfpot_blauw.svg',
  });

  Body.scale(Verf, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Verf, angleVerf);

  // Stokken
  const xPosStokken = generalPosX - 50 * scaleF();
  const yPosStokken = generalPosY - (500 + 15) * scaleF();
  const angleStokken = - Math.PI / 7;

  const pointsStokken =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Stokken = path(xPosStokken, yPosStokken, pointsStokken, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/stokken.svg',
  });

  Body.scale(Stokken, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Stokken, angleStokken);

  // Ondersteuning
  const xPosOndersteuning = generalPosX - 50 * scaleF();
  const yPosOndersteuning = generalPosY - (500 + 15) * scaleF();
  const angleOndersteuning = - Math.PI / 7;

  const pointsOndersteuning =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Ondersteuning = path(
    xPosOndersteuning,
    yPosOndersteuning,
    pointsOndersteuning,
    {
      yScale: 0.5 * scaleF(),
      xScale: 0.5 * scaleF(),
      texture: 'assets/img/svg/ondersteuning.svg',
    }
  );

  Body.scale(Ondersteuning, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Ondersteuning, angleOndersteuning);

  // Deuvel
  const xPosDeuvel = generalPosX - 50 * scaleF();
  const yPosDeuvel = generalPosY - (500 + 15) * scaleF();
  const angleDeuvel = - Math.PI / 7;

  const pointsDeuvel =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Deuvel = path(xPosDeuvel, yPosDeuvel, pointsDeuvel, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/deuvel_no_messure.svg',
  });

  Body.scale(Deuvel, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Deuvel, angleDeuvel);

  // Screw
  const xPosScrew = generalPosX - 50 * scaleF();
  const yPosScrew = generalPosY - (500 + 15) * scaleF();
  const angleScrew = - Math.PI / 7;

  const pointsScrew =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Screw = path(xPosScrew, yPosScrew, pointsScrew, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/screw.svg',
  });

  Body.scale(Screw, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Screw, angleScrew);

  // Borstel
  const xPosBorstel = generalPosX - 50 * scaleF();
  const yPosBorstel = generalPosY - (500 + 15) * scaleF();
  const angleBorstel = - Math.PI / 7;

  const pointsBorstel =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Borstel = path(xPosBorstel, yPosBorstel, pointsBorstel, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/paint_brush.svg',
  });

  Body.scale(Borstel, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Borstel, angleBorstel);

  // Lijm
  const xPosLijm = generalPosX - 50 * scaleF();
  const yPosLijm = generalPosY - (500 + 15) * scaleF();
  const angleLijm = - Math.PI / 7;

  const pointsLijm =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Lijm = path(xPosLijm, yPosLijm, pointsLijm, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/houtlijm.svg',
  });

  Body.scale(Lijm, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Lijm, angleLijm);

  // Zaag
  const xPosZaag = generalPosX - 50 * scaleF();
  const yPosZaag = generalPosY - (500 + 15) * scaleF();
  const angleZaag = - Math.PI / 7;

  const pointsZaag =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Zaag = path(xPosZaag, yPosZaag, pointsZaag, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/zaag.svg',
  });

  Body.scale(Zaag, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Zaag, angleZaag);

  // Meter
  const xPosMeter = generalPosX - 50 * scaleF();
  const yPosMeter = generalPosY - (500 + 15) * scaleF();
  const angleMeter = - Math.PI / 7;

  const pointsMeter =
    '0,285.6 0,0 136,0 161.6,5.4 179.7,14.4 195.3,29 205.6,47.2 211.6,69 211.3,90.2 205.6,116 190.2,140 27.2,285.6';

  Meter = path(xPosMeter, yPosMeter, pointsMeter, {
    yScale: 0.5 * scaleF(),
    xScale: 0.5 * scaleF(),
    texture: 'assets/img/svg/meter.svg',
  });

  Body.scale(Meter, 0.3 * scaleF(), 0.3 * scaleF());
  Body.rotate(Meter, angleMeter);
}


if (container) {
  World.add(world, [
    boormachine,
    Poten,
    Vernis,
    Verf,
    Stokken,
    Ondersteuning,
    Deuvel,
    Screw,
    Borstel,
    Lijm,
    Zaag,
    Meter,
  ]);
}


// Function to create body by paths
function path(x, y, path, sprite) {
  const vertices = Vertices.fromPath(path);
  return Matter.Bodies.fromVertices(x, y, vertices, {
    restitution: rest,
    friction: friction,
    render: {
      strokeStyle: '#000',
      lineWidth: 1,
      sprite: sprite,
    },
  });
}

let mouse;
let mouseConstraint;

if (render) {
  // Mouse control
  (mouse = Mouse.create(render.canvas)),
  (mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  }));

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  document.addEventListener('DOMContentLoaded', runMatter, false);
}




function runMatter() {
  if (container) {
    // Run engine
    // Engine.run(engine);

    // Run render
    Render.run(render);

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: {
        x: 0,
        y: 0,
      },
      max: {
        x: container.clientWidth,
        y: container.clientHeight,
      },
    });
  }
}
