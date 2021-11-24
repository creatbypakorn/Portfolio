import * as three from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const scene = new three.Scene();

const camera = new three.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new three.WebGLRenderer({
    canvas: document.querySelector('#bg'),

});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new three.BoxGeometry(10,10,10,10,10,10);
const material = new three.MeshBasicMaterial({color: 0x0080FF ,wireframe:true});
const torus = new three.Mesh(geometry,material);

scene.add(torus)


function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += .002;
  torus.rotation.y += .002;
  torus.rotation.z += .002;

  renderer.render(scene,camera);
}
animate()