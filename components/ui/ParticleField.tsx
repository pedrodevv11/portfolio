'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1200
    )
    camera.position.z = 420

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const count = 280
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 900
      positions[i * 3 + 1] = (Math.random() - 0.5) * 900
      positions[i * 3 + 2] = (Math.random() - 0.5) * 700
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // pega a cor das particulas da variavel de tema (funciona no claro e no escuro)
    const particleColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--particle')
        .trim() || '#f0ece5'

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color(particleColor),
      size: 1.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.2,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize, { passive: true })

    let rafId = 0
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      targetX += (mouseX - targetX) * 0.025
      targetY += (mouseY - targetY) * 0.025
      points.rotation.y += 0.00025 + targetX * 0.0008
      points.rotation.x += 0.0001 + targetY * 0.0004
      camera.position.x += (targetX * 25 - camera.position.x) * 0.025
      camera.position.y += (-targetY * 18 - camera.position.y) * 0.025
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    />
  )
}
