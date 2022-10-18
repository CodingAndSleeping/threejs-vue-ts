import {
  AmbientLight,
  AxesHelper,
  BoxGeometry,
  GridHelper,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

import Stats from "three/examples/jsm/libs/stats.module";

export class TEngine {
  // 定义一个dom变量来接收 canvas 元素
  private dom: HTMLElement;
  // 渲染器
  private renderer: WebGLRenderer;
  // 场景
  private scene: Scene;
  // 透视相机
  private camera: PerspectiveCamera;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.renderer = new WebGLRenderer();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      this.dom.offsetWidth / this.dom.offsetHeight,
      0.1,
      1000
    );
    // 调整摄像机位置
    this.camera.position.set(20, 20, 20);
    // 调整摄像机视角
    this.camera.lookAt(new Vector3(0, 0, 0));
    // 相机上方朝向
    this.camera.up = new Vector3(0, 1, 0);
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);

    const box = new BoxGeometry(10, 10, 10);
    const material = new MeshBasicMaterial({
      color: "#0000ff",
    });
    const cube = new Mesh(box, material);

    const ambientLight: AmbientLight = new AmbientLight("#ffffff", 1);

    const axesHelper: AxesHelper = new AxesHelper(500);
    const gridHelper: GridHelper = new GridHelper(
      500,
      20,
      "#aabb00",
      "#00ff00"
    );

    this.scene.add(cube);
    this.scene.add(ambientLight);
    this.scene.add(axesHelper);
    this.scene.add(gridHelper);
    // this.renderer.setClearColor("#ffffff");
    // this.renderer.clearColor();

    // 初始化性能监视器
    const stats = Stats();
    const statsDom = stats.domElement;
    statsDom.style.position = "fixed";
    statsDom.style.top = "0";
    statsDom.style.right = "5px";
    statsDom.style.left = "unsetx";


    const renderFn = () => {
      // cube.position.x -= 0.01;
      // cube.rotation.y += 0.001;
      // this.camera.position.x -= 0.01;
      this.renderer.render(this.scene, this.camera);
      stats.update();
      requestAnimationFrame(renderFn);
    };
    renderFn();

    this.dom.appendChild(this.renderer.domElement);
    this.dom.appendChild(statsDom);
  }
}
