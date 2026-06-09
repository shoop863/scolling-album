import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * 后续替换图片：
 * 只需要把 src 改成你的真实图片路径，例如：
 * src: "/photos/our-memory-01.jpg"
 * 或：
 * src: "https://your-cdn.com/photo-01.jpg"
 * 建议保留 id 不变，这样 Framer Motion 的共享动画会更稳定。
 */
const optimizedPhotoModules = import.meta.glob(
  "./optimized-picture/*.webp",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const LOCAL_PHOTO_ITEMS = Object.entries(optimizedPhotoModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, src], index) => ({
    id: `local-memory-${index + 1}`,
    src,
    title: `Memory ${String(index + 1).padStart(2, "0")}`,
    desc: `来自本地文件夹 picture 的照片：${path.split("/").pop()}`,
  }));

const FALLBACK_PHOTO_ITEMS = [
  {
    id: "memory-01",
    src: "https://picsum.photos/seed/romantic-memory-01/900/1200",
    title: "Quiet Smile",
    desc: "Some memories do not need to be loud. They glow softly, like stars hidden behind a velvet sky.",
  },
  {
    id: "memory-02",
    src: "https://picsum.photos/seed/romantic-memory-02/900/1200",
    title: "Soft Afternoon",
    desc: "A small fragment of time, suspended between sunlight, silence, and the feeling of being seen.",
  },
  {
    id: "memory-03",
    src: "https://picsum.photos/seed/romantic-memory-03/900/1200",
    title: "Little Universe",
    desc: "Every photo becomes a floating planet, orbiting the gravity of a shared memory.",
  },
  {
    id: "memory-04",
    src: "https://picsum.photos/seed/romantic-memory-04/900/1200",
    title: "Near You",
    desc: "The distance between two moments disappears when they are arranged by the heart.",
  },
  {
    id: "memory-05",
    src: "https://picsum.photos/seed/romantic-memory-05/900/1200",
    title: "Faint Glow",
    desc: "A cinematic whisper of color, touch, and time drifting quietly through the night.",
  },
  {
    id: "memory-06",
    src: "https://picsum.photos/seed/romantic-memory-06/900/1200",
    title: "Moonlit Frame",
    desc: "One frame, one breath, one quiet proof that ordinary days can become luminous.",
  },
  {
    id: "memory-07",
    src: "https://picsum.photos/seed/romantic-memory-07/900/1200",
    title: "Warm Distance",
    desc: "The photo floats away, yet the feeling remains close enough to touch.",
  },
  {
    id: "memory-08",
    src: "https://picsum.photos/seed/romantic-memory-08/900/1200",
    title: "Hidden Poetry",
    desc: "The kind of memory that appears only when the world becomes silent.",
  },
  {
    id: "memory-09",
    src: "https://picsum.photos/seed/romantic-memory-09/900/1200",
    title: "Golden Dust",
    desc: "Tiny lights drift around the image, as if the past has learned how to breathe.",
  },
  {
    id: "memory-10",
    src: "https://picsum.photos/seed/romantic-memory-10/900/1200",
    title: "Still Here",
    desc: "Not all moments pass. Some stay suspended, glowing softly in the background.",
  },
  {
    id: "memory-11",
    src: "https://picsum.photos/seed/romantic-memory-11/900/1200",
    title: "Velvet Night",
    desc: "A quiet night arranged into depth, softness, and slow cinematic motion.",
  },
  {
    id: "memory-12",
    src: "https://picsum.photos/seed/romantic-memory-12/900/1200",
    title: "Breathing Light",
    desc: "The memory moves like a soft inhale, then returns to the center of the room.",
  },
  {
    id: "memory-13",
    src: "https://picsum.photos/seed/romantic-memory-13/900/1200",
    title: "Orbit",
    desc: "Every image finds its path, curving gently around a private emotional center.",
  },
  {
    id: "memory-14",
    src: "https://picsum.photos/seed/romantic-memory-14/900/1200",
    title: "Slow Bloom",
    desc: "A spiral of photos opens like petals, each one carrying a different temperature.",
  },
  {
    id: "memory-15",
    src: "https://picsum.photos/seed/romantic-memory-15/900/1200",
    title: "Remember This",
    desc: "A small stillness, gathered from the rush of days and placed inside the stars.",
  },
  {
    id: "memory-16",
    src: "https://picsum.photos/seed/romantic-memory-16/900/1200",
    title: "Tender Gravity",
    desc: "The closer the photos move, the more the whole space begins to feel alive.",
  },
  {
    id: "memory-17",
    src: "https://picsum.photos/seed/romantic-memory-17/900/1200",
    title: "Rose Shadow",
    desc: "Darkness does not hide the memory. It lets the glow become more intimate.",
  },
  {
    id: "memory-18",
    src: "https://picsum.photos/seed/romantic-memory-18/900/1200",
    title: "Between Us",
    desc: "A memory wall built not from order, but from emotional gravity and light.",
  },
  {
    id: "memory-19",
    src: "https://picsum.photos/seed/romantic-memory-19/900/1200",
    title: "Soft Echo",
    desc: "The image returns again and again, each time slightly softer than before.",
  },
  {
    id: "memory-20",
    src: "https://picsum.photos/seed/romantic-memory-20/900/1200",
    title: "Afterglow",
    desc: "A trace of warmth remains, floating like dust after the scene has changed.",
  },
  {
    id: "memory-21",
    src: "https://picsum.photos/seed/romantic-memory-21/900/1200",
    title: "Inner Sky",
    desc: "Not every sky is above us. Some are made from everything we cannot forget.",
  },
  {
    id: "memory-22",
    src: "https://picsum.photos/seed/romantic-memory-22/900/1200",
    title: "Silent Fire",
    desc: "Low light, slow motion, and the delicate pulse of something deeply remembered.",
  },
  {
    id: "memory-23",
    src: "https://picsum.photos/seed/romantic-memory-23/900/1200",
    title: "Close Enough",
    desc: "A card drifts forward, asking to be opened like a letter from another evening.",
  },
  {
    id: "memory-24",
    src: "https://picsum.photos/seed/romantic-memory-24/900/1200",
    title: "Dream Layer",
    desc: "One layer of memory above another, until the whole space becomes a dream.",
  },
  {
    id: "memory-25",
    src: "https://picsum.photos/seed/romantic-memory-25/900/1200",
    title: "Little Signal",
    desc: "A tiny glimmer inside a large dark room, still sending its quiet message.",
  },
  {
    id: "memory-26",
    src: "https://picsum.photos/seed/romantic-memory-26/900/1200",
    title: "Pink Stardust",
    desc: "The past does not disappear. It becomes particles, floating slowly around us.",
  },
  {
    id: "memory-27",
    src: "https://picsum.photos/seed/romantic-memory-27/900/1200",
    title: "Held Light",
    desc: "A photo card becomes a small lantern, held gently in the dark.",
  },
  {
    id: "memory-28",
    src: "https://picsum.photos/seed/romantic-memory-28/900/1200",
    title: "Soft Collision",
    desc: "Separate moments meet in the center and form something larger than themselves.",
  },
  {
    id: "memory-29",
    src: "https://picsum.photos/seed/romantic-memory-29/900/1200",
    title: "Quiet Bloom",
    desc: "The album opens not as a page, but as a flower of moving images.",
  },
  {
    id: "memory-30",
    src: "https://picsum.photos/seed/romantic-memory-30/900/1200",
    title: "Last Glow",
    desc: "At the ending, every memory settles into place without losing its motion.",
  },
  {
    id: "memory-31",
    src: "https://picsum.photos/seed/romantic-memory-31/900/1200",
    title: "Forever Wall",
    desc: "A final arrangement, imperfect and alive, like a wall made from tenderness.",
  },
  {
    id: "memory-32",
    src: "https://picsum.photos/seed/romantic-memory-32/900/1200",
    title: "Our Gravity",
    desc: "Everything returns to the same center: the feeling that made these moments matter.",
  },
];

const PHOTO_ITEMS = LOCAL_PHOTO_ITEMS.length ? LOCAL_PHOTO_ITEMS : FALLBACK_PHOTO_ITEMS;

const STAGE_POINTS = [0, 0.15, 0.32, 0.49, 0.66, 0.84, 1];

const CARD_SPRING = {
  stiffness: 82,
  damping: 23,
  mass: 0.72,
  restDelta: 0.001,
};

const SCENE_SPRING = {
  stiffness: 60,
  damping: 25,
  mass: 0.9,
};

function noise(index, salt = 0) {
  const x = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

function signedNoise(index, salt = 0) {
  return noise(index, salt) * 2 - 1;
}

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function useViewportSize() {
  const [size, setSize] = useState({ width: 1440, height: 900 });

  useEffect(() => {
    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    update();
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
    };
  }, []);

  return size;
}

function buildCardLayouts(items, viewport) {
  const count = items.length;
  const width = Math.min(Math.max(viewport.width, 360), 1680);
  const height = Math.min(Math.max(viewport.height, 640), 980);
  const isMobile = width < 720;

  const baseCardWidth = isMobile ? 104 : width < 1100 ? 128 : 150;
  const gridCols = isMobile ? 3 : width < 1100 ? 5 : 8;
  const wallCols = isMobile ? 3 : width < 1100 ? 5 : 7;

  const gridGapX = isMobile ? 92 : width < 1100 ? 116 : 132;
  const gridGapY = isMobile ? 116 : width < 1100 ? 142 : 158;
  const wallGapX = isMobile ? 92 : width < 1100 ? 126 : 145;
  const wallGapY = isMobile ? 116 : width < 1100 ? 146 : 164;

  const gridRows = Math.ceil(count / gridCols);
  const wallRows = Math.ceil(count / wallCols);

  return items.map((item, index) => {
    const cardWidth = Math.round(baseCardWidth * (0.92 + noise(index, 10) * 0.2));
    const cardHeight = Math.round(cardWidth * (1.28 + noise(index, 11) * 0.1));

    const centered = count === 1 ? 0 : (index - (count - 1) / 2) / ((count - 1) / 2);

    const scatter = {
      x: signedNoise(index, 1) * width * 0.48,
      y: signedNoise(index, 2) * height * 0.38,
      z: -540 + noise(index, 3) * 820,
      rx: signedNoise(index, 4) * 14,
      ry: signedNoise(index, 5) * 20,
      rz: signedNoise(index, 6) * 34,
      scale: 0.68 + noise(index, 7) * 0.45,
      opacity: 0.38 + noise(index, 8) * 0.52,
      blur: noise(index, 9) * 1.6,
      brightness: 0.9 + noise(index, 12) * 0.22,
    };

    const band = {
      x: centered * width * 0.49 + Math.sin(index * 1.77) * 28,
      y: centered * height * 0.24 + Math.cos(index * 0.86) * 32,
      z: Math.sin((centered + 0.12) * Math.PI) * 260 + (index % 5) * 24,
      rx: 3 + signedNoise(index, 13) * 5,
      ry: -centered * 23,
      rz: -9 + centered * 22 + signedNoise(index, 14) * 5,
      scale: 0.72 + (1 - Math.abs(centered)) * 0.22,
      opacity: 0.88,
      blur: Math.abs(centered) * 0.55,
      brightness: 1.02,
    };

    const arcAngle = degToRad(count === 1 ? -90 : -158 + (index / (count - 1)) * 316);
    const arc = {
      x: Math.cos(arcAngle) * width * (isMobile ? 0.36 : 0.34),
      y: Math.sin(arcAngle) * height * 0.27 + height * 0.02,
      z: Math.cos(arcAngle) * 250 + Math.sin(index * 1.3) * 36,
      rx: Math.sin(arcAngle) * -8,
      ry: Math.cos(arcAngle) * -26,
      rz: (arcAngle * 180) / Math.PI + 90,
      scale: 0.7 + Math.pow(1 - Math.abs(centered), 1.7) * 0.22,
      opacity: 0.9,
      blur: 0.15 + Math.abs(Math.cos(arcAngle)) * 0.35,
      brightness: 1.04,
    };

    const spiralAngle = degToRad(index * 137.5 - 90);
    const spiralRadius =
      36 + Math.pow(index / count, 0.8) * Math.min(width, height) * (isMobile ? 0.36 : 0.42);

    const vortex = {
      x: Math.cos(spiralAngle) * spiralRadius,
      y: Math.sin(spiralAngle) * spiralRadius * 0.72,
      z: 300 - index * 13 + Math.sin(index * 0.7) * 140,
      rx: Math.sin(spiralAngle) * 15,
      ry: Math.cos(spiralAngle) * 22,
      rz: (spiralAngle * 180) / Math.PI + 96,
      scale: 0.56 + (1 - index / count) * 0.35 + noise(index, 15) * 0.08,
      opacity: 0.91,
      blur: index > count * 0.72 ? 0.7 : 0.1,
      brightness: 1.08,
    };

    const gridCol = index % gridCols;
    const gridRow = Math.floor(index / gridCols);

    const grid = {
      x: (gridCol - (gridCols - 1) / 2) * gridGapX + signedNoise(index, 16) * 7,
      y: (gridRow - (gridRows - 1) / 2) * gridGapY + signedNoise(index, 17) * 7,
      z: signedNoise(index, 18) * 42,
      rx: signedNoise(index, 19) * 2,
      ry: signedNoise(index, 20) * 3,
      rz: signedNoise(index, 21) * 4,
      scale: isMobile ? 0.56 : 0.72,
      opacity: 0.94,
      blur: 0,
      brightness: 1,
    };

    const wallIndex = (index * 5) % count;
    const wallCol = wallIndex % wallCols;
    const wallRow = Math.floor(wallIndex / wallCols);
    const isHero = index === 0;
    const isSecondaryHero = index === 7 || index === 13;

    const wall = {
      x: isHero
        ? 0
        : (wallCol - (wallCols - 1) / 2) * wallGapX + signedNoise(index, 22) * 22,
      y: isHero
        ? -height * 0.02
        : (wallRow - (wallRows - 1) / 2) * wallGapY + signedNoise(index, 23) * 26,
      z: isHero ? 420 : -90 + noise(index, 24) * 330,
      rx: isHero ? 0 : signedNoise(index, 25) * 8,
      ry: isHero ? 0 : signedNoise(index, 26) * 10,
      rz: isHero ? -2 : signedNoise(index, 27) * 13,
      scale: isHero ? (isMobile ? 0.96 : 1.16) : isSecondaryHero ? 0.86 : isMobile ? 0.52 : 0.64,
      opacity: isHero ? 1 : 0.86 + noise(index, 28) * 0.13,
      blur: isHero ? 0 : noise(index, 29) * 0.25,
      brightness: isHero ? 1.08 : 0.96 + noise(index, 30) * 0.1,
    };

    const ending = {
      x: wall.x * (isHero ? 1 : 0.92) + signedNoise(index, 31) * 8,
      y: wall.y * 0.9 - (isHero ? 14 : 28) + signedNoise(index, 32) * 8,
      z: wall.z + (isHero ? 80 : 32),
      rx: wall.rx * 0.4,
      ry: wall.ry * 0.4,
      rz: wall.rz * 0.7,
      scale: wall.scale * (isHero ? 1.06 : 0.96),
      opacity: isHero ? 1 : 0.78 + noise(index, 33) * 0.16,
      blur: isHero ? 0 : 0.15,
      brightness: isHero ? 1.12 : 0.92,
    };

    return {
      item,
      width: cardWidth,
      height: cardHeight,
      floatDuration: 6.5 + noise(index, 34) * 5.5,
      floatDelay: noise(index, 35) * -8,
      floatY: 5 + noise(index, 36) * 10,
      floatRotate: signedNoise(index, 37) * 1.4,
      stages: [scatter, band, arc, vortex, grid, wall, ending].map((stage) => ({
        ...stage,
        zIndex: Math.round(1000 + stage.z),
      })),
    };
  });
}

export default function App() {
  const rafRef = useRef(0);
  const viewport = useViewportSize();
  const [activeMemory, setActiveMemory] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scrollProgress = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, SCENE_SPRING);
  const smoothMouseY = useSpring(mouseY, SCENE_SPRING);

  const progress = useSpring(scrollProgress, {
    stiffness: 58,
    damping: 24,
    mass: 0.9,
    restDelta: 0.001,
  });

  const cardLayouts = useMemo(() => buildCardLayouts(PHOTO_ITEMS, viewport), [viewport]);

  const sceneX = useTransform(smoothMouseX, [-1, 1], [-18, 18]);
  const sceneY = useTransform(smoothMouseY, [-1, 1], [-12, 12]);
  const sceneRotateX = useTransform(smoothMouseY, [-1, 1], [2.4, -2.4]);
  const sceneRotateY = useTransform(smoothMouseX, [-1, 1], [-3.4, 3.4]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (activeMemory) return;

      event.preventDefault();
      const nextProgress = scrollProgress.get() + event.deltaY / 5200;
      scrollProgress.set(Math.min(1, Math.max(0, nextProgress)));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeMemory, scrollProgress]);

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const nextX = clientX / window.innerWidth - 0.5;
      const nextY = clientY / window.innerHeight - 0.5;

      mouseX.set(nextX * 2);
      mouseY.set(nextY * 2);
    });
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="fixed inset-0 h-screen overflow-hidden bg-[#03000a] text-white antialiased"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <style>{`
        html {
          background: #03000a;
          height: 100%;
          overflow: hidden;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #03000a;
          height: 100%;
          overflow: hidden;
        }

        #root {
          height: 100vh;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }

        ::selection {
          background: rgba(255, 169, 206, 0.28);
          color: white;
        }

        .memory-grain {
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0 1px, transparent 1.4px),
            radial-gradient(circle at 70% 60%, rgba(255,188,220,0.06) 0 1px, transparent 1.8px),
            radial-gradient(circle at 40% 80%, rgba(255,210,144,0.045) 0 1px, transparent 1.6px);
          background-size: 140px 140px, 190px 190px, 240px 240px;
          mix-blend-mode: soft-light;
          opacity: 0.32;
          animation: memoryGrain 12s steps(8) infinite;
        }

        @keyframes memoryGrain {
          0%, 100% { transform: translate3d(0, 0, 0); }
          20% { transform: translate3d(-1.5%, 1%, 0); }
          40% { transform: translate3d(1%, -1.2%, 0); }
          60% { transform: translate3d(-0.7%, -0.8%, 0); }
          80% { transform: translate3d(1.2%, 0.7%, 0); }
        }

        .cinematic-vignette {
          background:
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.02) 34%, rgba(0,0,0,0.5) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 18%, transparent 72%, rgba(0,0,0,0.62));
        }

        .glass-edge {
          box-shadow:
            0 26px 90px rgba(0, 0, 0, 0.52),
            0 10px 24px rgba(104, 42, 118, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(255, 255, 255, 0.07);
        }

        .modal-glow {
          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.72),
            0 0 80px rgba(214, 108, 160, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }
      `}</style>

      <section className="relative h-screen overflow-hidden">
        <div className="relative h-screen overflow-hidden">
          <CosmicBackground progress={progress} mouseX={smoothMouseX} mouseY={smoothMouseY} />

          <TopBar />

          <motion.div
            className="absolute inset-0 z-20"
            style={{
              perspective: 1450,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                x: sceneX,
                y: sceneY,
                rotateX: sceneRotateX,
                rotateY: sceneRotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {cardLayouts.map((layout, index) => (
                <MemoryCard
                  key={layout.item.id}
                  layout={layout}
                  index={index}
                  progress={progress}
                  onSelect={setActiveMemory}
                />
              ))}
            </motion.div>
          </motion.div>

          <PoetryLayer progress={progress} />
          <ScrollProgress progress={progress} />
          <div className="cinematic-vignette pointer-events-none absolute inset-0 z-40" />
          <div className="memory-grain pointer-events-none absolute inset-0 z-50" />
        </div>
      </section>

      <DetailModal memory={activeMemory} onClose={() => setActiveMemory(null)} />
    </main>
  );
}

function TopBar() {
  return (
    <header className="pointer-events-none absolute left-0 right-0 top-0 z-[80] flex items-center justify-between px-5 py-5 text-[10px] uppercase tracking-[0.36em] text-white/46 sm:px-8">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ffd4a3] shadow-[0_0_18px_rgba(255,212,163,0.85)]" />
        <span className="font-semibold text-[#f6d6a8]">WXY</span>
      </div>

      <div className="hidden items-center gap-6 sm:flex">
        <span>Floating Memories</span>
        <span>Romantic Archive</span>
        <span>2026</span>
      </div>
    </header>
  );
}

function CosmicBackground({ progress, mouseX, mouseY }) {
  const farX = useTransform(mouseX, [-1, 1], [-14, 14]);
  const farY = useTransform(mouseY, [-1, 1], [-10, 10]);

  const nearX = useTransform(mouseX, [-1, 1], [-34, 34]);
  const nearY = useTransform(mouseY, [-1, 1], [-22, 22]);

  const orbOneX = useTransform(progress, [0, 0.5, 1], [-120, 60, -70]);
  const orbOneY = useTransform(progress, [0, 0.5, 1], [-80, 20, -30]);
  const orbTwoX = useTransform(progress, [0, 0.55, 1], [80, -80, 90]);
  const orbTwoY = useTransform(progress, [0, 0.55, 1], [120, -50, 40]);
  const glowScale = useTransform(progress, [0, 0.49, 0.84, 1], [1, 1.18, 0.96, 1.1]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#03000a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(94,40,124,0.34),transparent_36%),radial-gradient(circle_at_20%_20%,rgba(96,76,172,0.2),transparent_38%),radial-gradient(circle_at_85%_72%,rgba(174,62,126,0.14),transparent_36%),linear-gradient(135deg,#020008_0%,#070013_42%,#0b061f_70%,#03000a_100%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          x: orbOneX,
          y: orbOneY,
          scale: glowScale,
          background:
            "radial-gradient(circle, rgba(174,91,157,0.22) 0%, rgba(86,53,150,0.11) 38%, transparent 72%)",
        }}
      />

      <motion.div
        className="absolute right-[-12vmin] top-[18vmin] h-[54vmin] w-[54vmin] rounded-full blur-3xl"
        style={{
          x: orbTwoX,
          y: orbTwoY,
          background:
            "radial-gradient(circle, rgba(255,186,139,0.16) 0%, rgba(173,68,130,0.08) 42%, transparent 74%)",
        }}
      />

      <motion.div className="absolute inset-0" style={{ x: farX, y: farY }}>
        <DustField count={118} depth="far" />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ x: nearX, y: nearY }}>
        <DustField count={46} depth="near" />
        <HeartField count={22} />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

function DustField({ count, depth }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const warm = noise(index, depth === "near" ? 101 : 201) > 0.72;
        const rose = noise(index, depth === "near" ? 102 : 202) > 0.58;

        return {
          id: `${depth}-${index}`,
          left: noise(index, depth === "near" ? 11 : 21) * 100,
          top: noise(index, depth === "near" ? 12 : 22) * 100,
          size:
            depth === "near"
              ? 1.3 + noise(index, 13) * 3.4
              : 0.8 + noise(index, 14) * 2.2,
          float: depth === "near" ? 26 + noise(index, 15) * 80 : 10 + noise(index, 16) * 42,
          drift: signedNoise(index, 17) * (depth === "near" ? 34 : 16),
          opacity: depth === "near" ? 0.2 + noise(index, 18) * 0.5 : 0.12 + noise(index, 19) * 0.36,
          duration: depth === "near" ? 8 + noise(index, 20) * 14 : 13 + noise(index, 21) * 18,
          delay: noise(index, 22) * -18,
          scale: 0.8 + noise(index, 23) * 1.3,
          background: warm
            ? "rgba(255, 211, 151, 0.82)"
            : rose
              ? "rgba(255, 151, 201, 0.68)"
              : "rgba(232, 222, 255, 0.72)",
          shadow: warm
            ? "0 0 18px rgba(255, 204, 139, 0.65)"
            : rose
              ? "0 0 16px rgba(255, 123, 184, 0.54)"
              : "0 0 14px rgba(208, 188, 255, 0.45)",
        };
      }),
    [count, depth]
  );

  return (
    <>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute block rounded-full will-change-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: particle.background,
            boxShadow: particle.shadow,
          }}
          animate={{
            y: [0, -particle.float, 0],
            x: [0, particle.drift, 0],
            scale: [particle.scale, particle.scale * 1.42, particle.scale],
            opacity: [particle.opacity * 0.38, particle.opacity, particle.opacity * 0.44],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

function HeartField({ count }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: `heart-${index}`,
        left: noise(index, 301) * 100,
        top: noise(index, 302) * 100,
        size: 9 + noise(index, 303) * 19,
        opacity: 0.08 + noise(index, 304) * 0.18,
        drift: signedNoise(index, 305) * 42,
        float: 34 + noise(index, 306) * 90,
        rotate: signedNoise(index, 307) * 22,
        duration: 12 + noise(index, 308) * 18,
        delay: noise(index, 309) * -24,
      })),
    [count]
  );

  return (
    <>
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute select-none font-serif leading-none text-[#ff9cc8] blur-[0.2px] will-change-transform"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: heart.size,
            opacity: heart.opacity,
            textShadow: "0 0 22px rgba(255, 134, 190, 0.48)",
          }}
          animate={{
            y: [0, -heart.float, 0],
            x: [0, heart.drift, 0],
            rotate: [heart.rotate, heart.rotate + 12, heart.rotate],
            scale: [0.86, 1.14, 0.86],
            opacity: [heart.opacity * 0.25, heart.opacity, heart.opacity * 0.28],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.span>
      ))}
    </>
  );
}

function MemoryCard({ layout, progress, index, onSelect }) {
  const states = layout.stages;

  const rawX = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.x));
  const rawY = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.y));
  const rawZ = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.z));
  const rawRx = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.rx));
  const rawRy = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.ry));
  const rawRz = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.rz));
  const rawScale = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.scale));

  const x = useSpring(rawX, CARD_SPRING);
  const y = useSpring(rawY, CARD_SPRING);
  const z = useSpring(rawZ, CARD_SPRING);
  const rotateX = useSpring(rawRx, CARD_SPRING);
  const rotateY = useSpring(rawRy, CARD_SPRING);
  const rotateZ = useSpring(rawRz, CARD_SPRING);
  const scale = useSpring(rawScale, CARD_SPRING);

  const opacity = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.opacity));
  const blur = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.blur));
  const brightness = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.brightness));
  const zIndex = useTransform(progress, STAGE_POINTS, states.map((stage) => stage.zIndex));
  const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness}) saturate(1.08)`;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform"
      style={{
        width: layout.width,
        height: layout.height,
        marginLeft: -layout.width / 2,
        marginTop: -layout.height / 2,
        x,
        y,
        z,
        rotateX,
        rotateY,
        rotateZ,
        scale,
        opacity,
        zIndex,
        filter,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.button
        type="button"
        aria-label={`Open ${layout.item.title}`}
        onClick={() => onSelect(layout.item)}
        className="group glass-edge relative h-full w-full cursor-pointer overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.065] p-[7px] text-left outline-none backdrop-blur-xl will-change-transform focus-visible:ring-2 focus-visible:ring-[#ffd4a3]/70"
        animate={{
          y: [0, -layout.floatY, 0],
          rotate: [0, layout.floatRotate, 0],
        }}
        transition={{
          duration: layout.floatDuration,
          delay: layout.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -18,
          scale: 1.075,
          rotateX: -3,
          filter: "brightness(1.16) saturate(1.12)",
          boxShadow:
            "0 34px 100px rgba(0,0,0,0.62), 0 0 46px rgba(255,157,205,0.24), inset 0 1px 0 rgba(255,255,255,0.28)",
          transition: {
            type: "spring",
            stiffness: 210,
            damping: 19,
          },
        }}
        whileTap={{ scale: 0.985 }}
      >
        <span className="pointer-events-none absolute inset-0 z-20 rounded-[28px] bg-gradient-to-tr from-white/0 via-white/0 to-white/18 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -inset-16 z-30 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_58%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black/30">
          <motion.img
            layoutId={`photo-${layout.item.id}`}
            src={layout.item.src}
            alt={layout.item.title}
            width={layout.width}
            height={layout.height}
            loading={index < 8 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index < 4 ? "high" : "low"}
            draggable="false"
            className="h-full w-full select-none object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/68" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_34%)] opacity-45 mix-blend-screen" />

          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md">
              <p className="truncate text-[10px] font-medium uppercase tracking-[0.2em] text-white/82">
                {String(index + 1).padStart(2, "0")} / Memory
              </p>
              <p className="mt-1 truncate text-xs font-semibold text-white/92">{layout.item.title}</p>
            </div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

function PoetryLayer({ progress }) {
  const introOpacity = useTransform(progress, [0, 0.08, 0.18], [1, 0.72, 0]);
  const introY = useTransform(progress, [0, 0.18], [0, -70]);
  const introScale = useTransform(progress, [0, 0.18], [1, 0.94]);

  const bandOpacity = useTransform(progress, [0.16, 0.24, 0.34], [0, 1, 0]);
  const arcOpacity = useTransform(progress, [0.34, 0.45, 0.55], [0, 1, 0]);
  const gridOpacity = useTransform(progress, [0.62, 0.72, 0.82], [0, 1, 0]);
  const endingOpacity = useTransform(progress, [0.83, 0.92, 1], [0, 1, 1]);
  const endingY = useTransform(progress, [0.82, 1], [42, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[70] flex items-center justify-center px-6">
      <motion.div
        className="absolute left-1/2 top-[43%] w-[min(92vw,760px)] -translate-x-1/2 text-center"
        style={{ opacity: introOpacity, y: introY, scale: introScale }}
      >
        <p className="mb-5 text-[11px] uppercase tracking-[0.52em] text-[#f8d5a7]/76">
          Cinematic Memory Album
        </p>
        <h1 className="text-balance bg-gradient-to-b from-white via-[#ffe9f4] to-[#d8bbff] bg-clip-text text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-transparent sm:text-6xl lg:text-7xl">
          Floating memories
          <br />
          arranged by light
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
          Scroll slowly. Let every photo drift, gather, orbit, bloom, and become a wall of feeling.
        </p>
      </motion.div>

      <motion.div
        className="absolute top-[28%] text-center text-sm font-medium tracking-[0.3em] text-[#ffd9a8]/72 sm:text-base"
        style={{ opacity: bandOpacity }}
      >
        记忆开始向同一个方向靠近
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[48%] w-[min(90vw,660px)] -translate-x-1/2 text-center"
        style={{ opacity: arcOpacity }}
      >
        <p className="text-xs uppercase tracking-[0.42em] text-white/42">Orbiting Around The Heart</p>
        <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white/86 sm:text-4xl">
          每一帧都在围绕某个温柔中心旋转
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-[14%] left-1/2 w-[min(90vw,620px)] -translate-x-1/2 text-center"
        style={{ opacity: gridOpacity }}
      >
        <p className="text-xs uppercase tracking-[0.42em] text-[#f7c98f]/62">Archive Becomes Form</p>
        <p className="mt-3 text-xl font-medium text-white/78 sm:text-3xl">
          散落的瞬间，慢慢组成一面会呼吸的回忆墙
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-1/2 w-[min(90vw,720px)] -translate-x-1/2 text-center"
        style={{ opacity: endingOpacity, y: endingY }}
      >
        <p className="text-[11px] uppercase tracking-[0.48em] text-[#ffd9a8]/68">The Ending</p>
        <h2 className="mt-4 bg-gradient-to-r from-[#ffe3b1] via-white to-[#ffc8e6] bg-clip-text text-3xl font-semibold tracking-[-0.05em] text-transparent sm:text-5xl">
          愿平凡日常，都被收藏成星河
        </h2>
      </motion.div>
    </div>
  );
}

function ScrollProgress({ progress }) {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 z-[90] h-px origin-left bg-gradient-to-r from-transparent via-[#ffd4a3]/80 to-[#ff9ecf]/70"
        style={{ scaleX: progress, width: "100%" }}
      />

      <div className="pointer-events-none absolute bottom-5 right-5 z-[90] hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/42 backdrop-blur-xl sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ffbddc] shadow-[0_0_16px_rgba(255,189,220,0.8)]" />
        Scroll to compose
      </div>
    </>
  );
}

function DetailModal({ memory, onClose }) {
  useEffect(() => {
    if (!memory) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [memory, onClose]);

  return (
    <AnimatePresence initial={false}>
      {memory && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close detail"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/72 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="modal-glow relative z-10 grid w-[min(94vw,980px)] overflow-hidden rounded-[34px] border border-white/12 bg-[#120819]/88 backdrop-blur-2xl md:grid-cols-[0.9fr_1fr]"
            initial={{ y: 44, scale: 0.96, opacity: 0, filter: "blur(12px)" }}
            animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 34, scale: 0.97, opacity: 0, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 150, damping: 24, mass: 0.9 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/68 backdrop-blur-xl transition hover:bg-white/[0.12] hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative min-h-[420px] overflow-hidden bg-black/30 md:min-h-[560px]">
              <motion.img
                layoutId={`photo-${memory.id}`}
                src={memory.src}
                alt={memory.title}
                loading="eager"
                decoding="async"
                draggable="false"
                className="absolute inset-0 h-full w-full select-none object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120819] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.18),transparent_32%)] mix-blend-screen" />
            </div>

            <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden p-8 sm:p-10 md:min-h-[560px]">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff8fc8]/12 blur-3xl" />
              <div className="absolute -bottom-28 left-6 h-72 w-72 rounded-full bg-[#ffd2a3]/10 blur-3xl" />

              <div className="relative">
                <p className="mb-4 text-[11px] uppercase tracking-[0.48em] text-[#ffd4a3]/66">
                  Memory Detail
                </p>
                <h3 className="max-w-xl bg-gradient-to-b from-white via-[#ffeaf4] to-[#d8bdff] bg-clip-text text-4xl font-semibold tracking-[-0.05em] text-transparent sm:text-6xl">
                  {memory.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/62">{memory.desc}</p>

                <div className="mt-9 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-white/42">
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
                    Cinematic
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
                    Dreamy
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
                    Floating Memory
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
