import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 10500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = Math.random() * 120 - 60;
    }

    for (let i = 0; i < particleCount; i++) {
      sizes[i] = Math.random();
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0,
      sizeAttenuation: true,
      vertexColors: false
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 90;

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.001;

      const time = Date.now() * 0.001;

      const sizesArray = particleSystem.geometry.attributes.size.array;
      for (let i = 0; i < sizesArray.length; i++) {
        sizesArray[i] = 10.5 + 10.5 * Math.sin(time * 2 + i * 0.1);
      }
      particleSystem.geometry.attributes.size.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} className="particle-background"></div>;
};

export default ParticleScene;
