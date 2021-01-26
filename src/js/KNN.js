import ml5 from 'ml5';

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
KNN Classification on Webcam Images with poseNet. Built with p5.js
=== */
let video;
// Create a KNN classifier
const knnClassifier = ml5.KNNClassifier();
let poseNet;
let poses = [];
let canvas;
const width = 640;
const height = 480;
let ctx;
let modelLoaded = false;

async function setup() {
  canvas = document.querySelector('#myWebcam');
  ctx = canvas.getContext('2d');

  video = await getVideo();

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable 'poses'
  // with an array every time new poses are detected
  poseNet.on('pose', function (results) {
    poses = results;
  });

  requestAnimationFrame(draw);
}

setup();

function draw() {
  requestAnimationFrame(draw);

  ctx.drawImage(video, 0, 0, width, height);

  if (modelLoaded) {
    classify();
  }
}

async function modelReady() {
  knnClassifier.load('model.json', function () {
    console.log('knn loaded');
    modelLoaded = true;
  });
}

// Predict the current frame.
function classify() {
  // Get the total number of labels from knnClassifier
  const numLabels = knnClassifier.getNumLabels();
  if (numLabels <= 0) {
    console.error('There is no examples in any label');
    return;
  }
  // Convert poses results to a 2d array [[score0, x0, y0],...,[score16, x16, y16]]
  const poseArray = poses[0].pose.keypoints.map((p) => [
    p.score,
    p.position.x,
    p.position.y,
  ]);

  // Use knnClassifier to classify which label do these features belong to
  // You can pass in a callback function `gotResults` to knnClassifier.classify function
  knnClassifier.classify(poseArray, gotResults);
}

// Show the results
function gotResults(err, result) {
  // Display any error
  if (err) {
    console.error(err);
  }

  const scrEl = document.getElementById('scr-el');
  if (scrEl) {
    if (result.confidencesByLabel) {
      if (result.label) {
        if (result.label === '0') {
          if (scrEl.scrollLeft < scrEl.scrollWidth - scrEl.offsetWidth) {
            scrEl.scrollLeft = scrEl.scrollLeft + 1;
          }
        } else if (result.label === '2') {
          if (scrEl.scrollLeft < scrEl.scrollWidth - scrEl.offsetWidth) {
            scrEl.scrollLeft = scrEl.scrollLeft - 1;
          }
        }
      }
    }
  }

  classify();
}

// Helper Functions
async function getVideo() {
  // Grab elements, create settings, etc.
  const videoElement = document.createElement('video');
  videoElement.setAttribute('style', 'display: none;');
  videoElement.width = width;
  videoElement.height = height;
  document.body.appendChild(videoElement);

  // Create a webcam capture
  const capture = await navigator.mediaDevices.getUserMedia({ video: true });
  videoElement.srcObject = capture;
  videoElement.play();

  return videoElement;
}
