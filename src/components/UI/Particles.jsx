import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Particles = ({ particleCount = 300, color = 0x60a5fa }) => {
	const mountRef = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		camera.position.z = 10;

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

		const geometry = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const speeds = new Float32Array(particleCount);

		for (let i = 0; i < particleCount; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 20;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
			speeds[i] = 0.001 + Math.random() * 0.003;
		}

		geometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3),
		);

		const canvas = document.createElement('canvas');
		canvas.width = 32;
		canvas.height = 32;
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
		gradient.addColorStop(0, 'rgba(96,165,250,1)');
		gradient.addColorStop(1, 'rgba(96,165,250,0)');
		ctx.fillStyle = gradient;
		ctx.beginPath();
		ctx.arc(16, 16, 16, 0, Math.PI * 2);
		ctx.fill();

		const texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		const material = new THREE.PointsMaterial({
			size: 0.08,
			map: texture,
			transparent: true,
			alphaTest: 0.01,
			depthWrite: false,
			color,
		});

		const points = new THREE.Points(geometry, material);
		scene.add(points);

		// ✅ No Clock — using RAF timestamp instead
		const animate = (time) => {
			requestAnimationFrame(animate);

			const positionsArray = geometry.attributes.position.array;
			const seconds = time * 0.001; // convert ms → seconds

			for (let i = 0; i < particleCount; i++) {
				positionsArray[i * 3 + 1] += Math.sin(seconds + i) * speeds[i];

				positionsArray[i * 3] +=
					Math.cos(seconds * 0.5 + i) * speeds[i] * 0.5;

				if (positionsArray[i * 3 + 1] > 6)
					positionsArray[i * 3 + 1] = -6;
				if (positionsArray[i * 3 + 1] < -6)
					positionsArray[i * 3 + 1] = 6;
			}

			geometry.attributes.position.needsUpdate = true;
			points.rotation.y += 0.0005;
			renderer.render(scene, camera);
		};

		requestAnimationFrame(animate);

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (mountRef.current)
				mountRef.current.removeChild(renderer.domElement);
		};
	}, [particleCount, color]);

	return (
		<div
			ref={mountRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: 0,
				pointerEvents: 'none',
			}}
		/>
	);
};

export default Particles;
