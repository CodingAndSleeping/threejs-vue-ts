import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

export class TEngine {
  private dom: HTMLElement;
  private renderer: WebGLRenderer;

  private scene: Scene;
  private camera: PerspectiveCamera;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.renderer = new WebGLRenderer();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      dom.offsetWidth / dom.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.set(20, 20, 20);
    this.camera.lookAt(new Vector3(0, 0, 0));
    this.camera.up = new Vector3(0, 1, 0);
    dom.appendChild(this.renderer.domElement);
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);

    const box = new BoxGeometry(10, 10, 10);
    const material = new MeshBasicMaterial({
      color: "#0000ff",
    });
    const cube = new Mesh(box, material);
    this.scene.add(cube);

    this.renderer.setClearColor("#ffffff")
    this.renderer.render(this.scene, this.camera);
  }
}
