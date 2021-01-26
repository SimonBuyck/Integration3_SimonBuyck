import {gsap, TimelineMax} from 'gsap';
// import TweenMax from 'gsap/TweenMax';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const title = document.querySelector('.title');
gsap.to(title, {color: '#8c0', duration: 10});

const tl = new TimelineMax({repeat: - 1, yoyo: true, repeatDelay: 0.5});

tl.to('#saw', 1, {y: - 100});
tl.to('#saw', 1, {y: 0});

//see https://www.greensock.com/draggable/ for more details.

//drill drag and drop

const droppable = document.getElementById('drill');
const droppableContainer = document.getElementById('drill_container');
const deuvels = document.querySelectorAll('.tutorial__boren__deuvel__hole');

//the overlapThreshold can be a percentage ('50%', for example, would only trigger when 50% or more of the surface area of either element overlaps) or a number of pixels (20 would only trigger when 20 pixels or more overlap), or 0 will trigger when any part of the two elements overlap.
const overlapThreshold = '50%';

//we'll call onDrop() when a Draggable is dropped on top of one of the 'droppables', and it'll make it 'flash' (blink opacity). Obviously you can do whatever you want in this function.
function onDrop(dragged, dropped) {
  gsap.fromTo(
    dropped,
    {opacity: 1},
    {duration: 0.1, opacity: 0, repeat: 3, yoyo: true}
  );
}

if (droppableContainer) {
  Draggable.create(droppable, {
    bounds: {
      minX:
        1220 > droppableContainer.innerWidth
          ? droppableContainer.innerWidth - 1220
          : 0,
      maxX: 0,
    },
    edgeResistance: 0.2,
    minDuration: 1,
    type: 'x,y',
    throwProps: true,
    overshootTolerance: 0,
    onDrag: function () {
      let i = deuvels.length;
      while (-- i > - 1) {
        if (this.hitTest(deuvels[i], overlapThreshold)) {
          deuvels[i].classList.add('background--white');
        }
      }
    },
    onDragEnd: function () {
      let i = deuvels.length;
      while (-- i > - 1) {
        if (this.hitTest(deuvels[i], overlapThreshold)) {
          onDrop(this.target, deuvels[i]);
        }
      }
    },
  });
}
