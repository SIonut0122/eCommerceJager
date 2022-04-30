import React              from "react";
import * as THREE         from 'three';
import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader    }  from 'three/examples/jsm/loaders/GLTFLoader.js';
import jagerGLB           from '../assets/jager/source/jager.glb';
import gsap               from "gsap";
import orangePealImg      from '../media/products/ingr/orange_peal.webp';
import alantImg           from '../media/products/ingr/alant.webp';
import gingerImg          from '../media/products/ingr/ginger.webp';
import kaldamonImg        from '../media/products/ingr/kaldamon.webp';
import '../css/First_section.css';
 
 

 let scene,camera,renderer,controls,pointlight,spotLight,sphereBody,sphere,floor,defaultMaterial;
 let mixer = null,
     idAnim = null;
 let size = {
   width: window.innerWidth, 
   height: window.innerHeight
 }

 const clock = new THREE.Clock();
 let   oldElapsedTime = 0,
       camPos = 50;
 

class FirstSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUrlPath  : '',
      newCarSelected  : '',
      prev            : false,
      followX         : 0,
      followY         : 0,
      x               : 0,
      y               : 0,
      friction        : 1 / 30
    }
}


  componentDidMount() {

      // Resize threejs objects according to windows size
      window.addEventListener('resize', () => this.FResize());

      // Parallax for ingredients (first container)
      window.addEventListener('mousemove', (e) => this.firstCMouseMove(e));

      // Create threejs scene
      this.init(); 
      
      // Check windows size to resize three js obj
      this.FResize();

      // Animate / reveal text
      document.querySelector('.fseculbtxt_tyk').classList.add('fseculbtxt_tyk_show');
      document.querySelector('.fseculbtxt_jgmst').classList.add('fseculbtxt_jgmst_show');
      document.querySelector('.fseculbtxt_tkagain').classList.add('fseculbtxt_jgmst_show');
      document.querySelector('.fseculbtxt_expmor').classList.add('fseculbtxt_jgmst_show');
      document.querySelector('.ful_bgsec_arr').classList.add('fseculbtxt_jgmst_show');
    }
  
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.FResize());
  }

  firstCMouseMove(e) {
    // Parallax effect for the first container icons
    const DivIsInView = el => {
        if(el) {
            const scroll = window.scrollY || window.pageYOffset;
            const boundsTop = el.getBoundingClientRect().top + scroll;
            
            const viewport = {
            top: scroll,
            bottom: scroll + window.innerHeight,
            }
            const bounds = {
            top: boundsTop,
            bottom: boundsTop + el.clientHeight,
            }
        
            return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
            || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
        }
    }

    let fContWr = document.querySelector('.f_cont_wrapper');
    let fContWInView = DivIsInView(fContWr);
    
    // If first container is in view, parallax background
    if(fContWInView) {
      var lMouseX = Math.max(-100, Math.min(100, document.querySelector('.f_cont_wrapp_parllx').offsetWidth / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, document.querySelector('.f_cont_wrapp_parllx').offsetWidth / 4 - e.clientY));

      let followX = this.state.followX = (30 * lMouseX) / 200; 
      let followY = this.state.followY = (50 * lMouseY) / 150; 
  
      let x = this.state.x;
      let y = this.state.y;
      let translate;
  
      // Animate backend background
      x += (followX - x) * this.state.friction;
      y += (followY - y) * this.state.friction;
      translate = 'translate(' + x + '%,' + y + '%)';
      let underBg = document.querySelector('.f_cont_wrapp_parllx');
          underBg.style.transform = translate;
    }
  }

    init() {
     // Create scene
     scene = new THREE.Scene();
   
     
     let domRect = document.querySelector('.f_cont_wrap').getBoundingClientRect();
     renderer = new THREE.WebGLRenderer({  alpha: true, antialias: true }); // smooth edge
     renderer.setSize(domRect.width, domRect.height);
     renderer.shadowMap.enabled = true;
     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
     
     
     renderer.outputEncoding = THREE.sRGBEncoding;
     renderer.toneMapping = THREE.ReinhardToneMapping;
     renderer.toneMappingExposure = 0.5;
     
     renderer.setClearColor( 0x000000, 0 )
     
     renderer.setPixelRatio(window.devicePixelRadio); // set extra quality
     document.querySelector('.f_wrap_canv').appendChild(renderer.domElement);
     
     camera = new THREE.PerspectiveCamera(6,domRect.width / domRect.height,1,1000);
     camera.position.set(0,0,camPos);


     // Controlling the object
     controls = new OrbitControls(camera, renderer.domElement);
     controls.enableZoom = false;
     controls.enablePan = false;
     controls.autoRotate = true;
     controls.autoRotateSpeed = 2.4;
     controls.enableDamping = false;

     // Rotate only on the x axe
    controls.minPolarAngle = Math.PI * 0.5;
    controls.maxPolarAngle = Math.PI * 0.5;


     // Setting the light scene
 
    // // BIG LIGHT SPOT
    const directLight_t = new THREE.DirectionalLight(0x23555, 1);
    directLight_t.position.set(-5, 1, 0);
    directLight_t.castShadow = true;
    scene.add(directLight_t);

 
    // RIGHT POINTLIGHT
     var light = new THREE.PointLight( 0x23555, 5);
    light.position.set(0,800,800);

    // LEFT POINTLIGHT
    var light_t = new THREE.PointLight( 0x23555, 5);
    light_t.position.set(0,-800,-800);

  
    let spotLight2 = new THREE.SpotLight(0xffa95c, 5);
    spotLight2.castShadow = true;
    spotLight2.position.set(0,-800,-800);

    spotLight = new THREE.SpotLight(0xffa95c, 3);
    spotLight.castShadow = true;

    let spotLight3 = new THREE.SpotLight(0xffa95c, 5);
    spotLight3.position.set(0,400,400);
 
 
    scene.add(spotLight,light,light_t,spotLight2,spotLight3);

      // Call GLTF Loader
      this.addGltfObject();
     
 
       tick();

      function tick() {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - oldElapsedTime; 
        oldElapsedTime = elapsedTime;

        if(mixer !== null) {
            mixer.update(deltaTime);
        }
        // if idAnim !== null, cancel / clear prev animation scene frame
        // avoid creating new object and increase speed object by render on top of one another
        if(idAnim !== null) {
          window.cancelAnimationFrame(idAnim);
        }
        // Else, proceed with scene object
        idAnim = window.requestAnimationFrame(tick);
       
        controls.update();
        renderer.render(scene,camera); 
      }
    }
    
    addGltfObject() {

    let gltfLoader = new GLTFLoader();
    gltfLoader.crossOrigin = true;

    //  Models
      gltfLoader.load(jagerGLB, (glb) => {
              glb.scene.traverse(n => {
                if(n.isMesh) {
                  n.castShadow = true;
                  n.receiveShadow = true;
                }
              })
   
             glb.scene.rotation.y = 1;
             glb.scene.rotation.x = -0.1;
             glb.scene.name = 'caca';
             

             // Center glb object
             const box = new THREE.Box3().setFromObject( glb.scene );
             const center = box.getCenter( new THREE.Vector3() );
             
             glb.scene.position.x += ( glb.scene.position.x - center.x );
             glb.scene.position.y = 6;
             glb.scene.position.z += ( glb.scene.position.z - center.z  );

             scene.add(glb.scene);
            
             // First,animate bottle to bottom
             setTimeout(() => {
              gsap.to(
                glb.scene.position,
                3,
                {
                  y: -2,
                  ease: "expo",
                  yoyo: true,
                  delay: 0.5
                }
              ); 
              
              // Then, reveal to bottom the ingredients images
              setTimeout(() => {
                  let fwrIcons = document.querySelectorAll('.fcwplx_prlxicon');
                  fwrIcons.forEach(el => el.style.marginTop = 0);
              }, 1500);

             }, 1500);
            });
             
    }
  

    // Check window size to render three object size
    FResize()  {
      if(window.innerWidth < 500) {
        if(camPos !== 80) {
          camPos = 80;
          camera.position.set(0,0,camPos);
          
        }  
      } else if (window.innerWidth < 1255) {
        if(camPos !== 70) {
          camPos = 70;
          camera.position.set(0,0,camPos);
          
        } 
      } else {
        if(camPos !== 50) {
          camPos = 50;
          camera.position.set(0,0,camPos);
          
        } 
      }

      if(document.querySelector('.f_cont_wrap')) {
        if (window.innerWidth < 500) {
          if(document.querySelector('.f_cont_wrap').style.width !== '100%') {
            document.querySelector('.f_cont_wrap').style.width = '100%';
          }
        } else {
          if(document.querySelector('.f_cont_wrap').style.width === '100%') {
            document.querySelector('.f_cont_wrap').style.width = '60%';
          }
        }
     


      let domRect = document.querySelector('.f_cont_wrap').getBoundingClientRect();
      let newSize = {
        width  : domRect.width,
        height : domRect.height
      }
    
      // Set new size
      Object.assign(size, newSize);
      renderer.setSize(newSize.width, newSize.height);
      camera.aspect = newSize.width / newSize.height;
    }
    
      spotLight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10
      )
      camera.updateProjectionMatrix();
    }


  
    
  render() {
   
    return (
        <div>
          <div className='f_cont_wrapper'>
              <div className='f_cont_wrapp_parllx'>
                <img src={orangePealImg} className='fcwplx_prlxicon' alt=''/>
                <img src={gingerImg} className='fcwplx_prlxicon' alt=''/>
                <img src={kaldamonImg} className='fcwplx_prlxicon' alt=''/>
                <img src={alantImg} className='fcwplx_prlxicon' alt=''/>
              </div>
              <div className='f_cont_wrap'>
                <div className='f_wrap_canv'></div>
              </div>

              {/* First right container */}
              <div className='f_right_section'>
                <div className='f_right_s_wrtxt'>
                  <ul className='f_ul_bigsc' tabIndex='0' role='texts'>
                    <li className='f_fsec_ul_bigtxt fseculbtxt_tyk' tabIndex='0'>think you know</li>
                    <li className='f_fsec_ul_bigtxt fseculbtxt_jgmst' tabIndex='0'>jägermeister?</li>
                    <li className='f_fsec_ul_bigtxt f_sec_tnkag_txt_li fseculbtxt_tkagain' tabIndex='0'>think again...</li>
                    <li className='f_fsec_ul_expmtxt fseculbtxt_expmor' tabIndex='0'>Experience more</li>
                    <li className='ful_bgsec_arr'><span></span></li>
                  </ul>
                  <ul className='f_ul_smsc'>
                    <li tabIndex='0'>Be a meister</li>
                    <li tabIndex='0'>Experience more</li>
                    <li className='ful_bgsec_arr'><span></span></li>
                  </ul>
                  </div>
              </div>
            </div>
        </div>
    )
  }
}

export default FirstSection;
