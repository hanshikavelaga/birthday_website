import React, { useEffect, useState } from "react";
import "./App.css";

/* =========================================================
   MAIN GHOST
   DO NOT CHANGE — THIS IS OUR MAIN CHARACTER
========================================================= */

function Ghost() {
  return (
    <div className="ghost-wrapper">
      <div className="ghost-float">

        <svg
          className="ghost-svg"
          viewBox="0 0 220 240"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* BODY */}
          <path
            className="ghost-fill"
            d="
              M110 25
              C70 25 45 57 45 102
              L45 177

              C45 188 53 195 62 188
              C72 180 78 180 87 190
              C96 200 103 201 110 190
              C117 201 124 200 133 190
              C142 180 148 180 158 188
              C167 195 175 188 175 177

              L175 102

              C175 57 150 25 110 25
              Z
            "
          />

          {/* LEFT ARM */}
          <path
            className="ghost-stroke"
            d="M48 118 Q26 108 22 88"
          />

          <path
            className="ghost-stroke"
            d="M22 88 Q17 82 13 88"
          />

          <path
            className="ghost-stroke"
            d="M22 88 Q21 80 17 78"
          />

          {/* RIGHT ARM */}
          <path
            className="ghost-stroke"
            d="M172 118 Q194 108 198 88"
          />

          <path
            className="ghost-stroke"
            d="M198 88 Q203 82 207 88"
          />

          <path
            className="ghost-stroke"
            d="M198 88 Q199 80 203 78"
          />

          {/* EYES */}
          <ellipse
            className="ghost-eye"
            cx="83"
            cy="98"
            rx="7"
            ry="11"
          />

          <ellipse
            className="ghost-eye"
            cx="137"
            cy="98"
            rx="7"
            ry="11"
          />

          {/* SMILE */}
          <path
            className="ghost-mouth-svg"
            d="M96 119 Q110 132 124 119"
          />

          {/* CHEEKS */}
          <circle
            className="ghost-cheek"
            cx="69"
            cy="119"
            r="5"
          />

          <circle
            className="ghost-cheek"
            cx="151"
            cy="119"
            r="5"
          />

        </svg>

      </div>
    </div>
  );
}


/* =========================================================
   CURIOUS GHOST
========================================================= */

function CuriousGhost() {
  return (
    <div className="department-ghost curious-ghost">

      <svg viewBox="0 0 150 170">

        <path
          className="dept-ghost-fill"
          d="
            M75 18
            C42 18 23 43 23 77
            L23 125

            C23 136 31 141 40 134
            C48 128 53 129 60 137
            C67 145 71 145 75 137
            C79 145 83 145 90 137
            C97 129 102 128 110 134
            C119 141 127 136 127 125

            L127 77

            C127 43 108 18 75 18
            Z
          "
        />

        <circle
          className="dept-eye"
          cx="58"
          cy="73"
          r="6"
        />

        <circle
          className="dept-eye"
          cx="92"
          cy="73"
          r="6"
        />

        <path
          className="dept-mouth"
          d="M68 91 Q75 97 82 91"
        />

        <path
          className="dept-arm"
          d="M25 91 Q8 82 12 68"
        />

        <path
          className="dept-arm"
          d="M125 91 Q142 82 138 68"
        />

        <path
          className="curious-hair"
          d="M67 18 Q75 5 83 18"
        />

      </svg>

      <div className="ghost-name">
        CURIOUS
      </div>

    </div>
  );
}


/* =========================================================
   DETECTIVE GHOST
========================================================= */

function DetectiveGhost() {
  return (
    <div className="department-ghost detective-ghost">

      <svg viewBox="0 0 150 210">

        <path
          className="dept-ghost-fill"
          d="
            M75 20
            C48 20 35 47 35 83
            L35 161

            C35 172 43 178 52 170
            C61 162 65 163 70 173
            C74 180 76 180 80 173
            C85 163 89 162 98 170
            C107 178 115 172 115 161

            L115 83

            C115 47 102 20 75 20
            Z
          "
        />

        {/* GLASSES */}

        <circle
          className="detective-glass"
          cx="58"
          cy="78"
          r="14"
        />

        <circle
          className="detective-glass"
          cx="92"
          cy="78"
          r="14"
        />

        <path
          className="detective-glass-line"
          d="M72 78 L78 78"
        />

        <circle
          className="detective-eye"
          cx="58"
          cy="78"
          r="3"
        />

        <circle
          className="detective-eye"
          cx="92"
          cy="78"
          r="3"
        />

        {/* MOUTH */}

        <path
          className="dept-mouth"
          d="M68 105 Q75 101 82 105"
        />

        {/* CLIPBOARD */}

        <rect
          className="clipboard"
          x="102"
          y="120"
          width="28"
          height="38"
          rx="3"
        />

        <line
          className="clipboard-line"
          x1="108"
          y1="132"
          x2="124"
          y2="132"
        />

        <line
          className="clipboard-line"
          x1="108"
          y1="140"
          x2="124"
          y2="140"
        />

        <line
          className="clipboard-line"
          x1="108"
          y1="148"
          x2="119"
          y2="148"
        />

      </svg>

      <div className="ghost-name">
        INVESTIGATOR
      </div>

    </div>
  );
}


/* =========================================================
   CHAOS GHOST
========================================================= */

function ChaosGhost() {
  return (
    <div className="department-ghost chaos-ghost">

      <svg viewBox="0 0 160 150">

        <path
          className="dept-ghost-fill"
          d="
            M80 20
            C47 20 25 45 25 78
            L25 116

            C25 126 34 131 43 124
            C51 117 57 118 64 126
            C71 134 75 134 80 126
            C85 134 89 134 96 126
            C103 118 109 117 117 124
            C126 131 135 126 135 116

            L135 78

            C135 45 113 20 80 20
            Z
          "
        />

        <circle
          className="dept-eye"
          cx="60"
          cy="68"
          r="6"
        />

        <circle
          className="dept-eye"
          cx="98"
          cy="68"
          r="6"
        />

        <circle
          className="chaos-pupil"
          cx="62"
          cy="70"
          r="2"
        />

        <circle
          className="chaos-pupil"
          cx="96"
          cy="66"
          r="2"
        />

        <path
          className="chaos-mouth"
          d="M62 91 Q80 105 98 88"
        />

        <path
          className="dept-arm"
          d="M28 91 Q10 105 5 91"
        />

        <path
          className="dept-arm"
          d="M132 91 Q150 105 155 91"
        />

      </svg>

      <div className="ghost-name">
        CHAOS
      </div>

    </div>
  );
}


/* =========================================================
   PAGE 2 — BIRTHDAY GHOST DEPARTMENT
========================================================= */

function GhostDepartment({ onNext }) {

  const [scene, setScene] = useState(0);

  useEffect(() => {

    const timeline = [
      [900, 1],
      [2800, 2],
      [4700, 3],
      [6600, 4],
      [8500, 5],
      [10100, 6],
      [11900, 7],
      [13700, 8],
    ];

    const timers = timeline.map(([time, value]) => {

      return setTimeout(() => {
        setScene(value);
      }, time);

    });

    return () => {
      timers.forEach(clearTimeout);
    };

  }, []);


  return (

    <section className={`department-page scene-${scene}`}>

      <div className="department-noise"></div>


      {/* HEADER */}

      <div className="department-header">

        <span>B.G.D.</span>

        <span>
          BIRTHDAY GHOST DEPARTMENT
        </span>

      </div>


      {/* MAIN GHOST */}

      <div className="department-main-ghost">

        <div className="main-ghost-inner">

          <Ghost />

        </div>

      </div>


      {/* CURIOUS GHOST */}

      <div className="department-character character-curious">

        <CuriousGhost />

        <div className="ghost-dialogue">
          Is she the one?
        </div>

      </div>


      {/* DETECTIVE GHOST */}

      <div className="department-character character-detective">

        <DetectiveGhost />

        <div className="ghost-dialogue">
          I heard she's turning 20.
        </div>

      </div>


      {/* CHAOS GHOST */}

      <div className="department-character character-chaos">

        <ChaosGhost />

        <div className="ghost-dialogue">
          Does she know we're watching?
        </div>

      </div>


      {/* MAIN RESPONSE */}

      <div className="main-dialogue">

        <div className="main-line">
          YES.
        </div>

        <div className="main-line second">
          Can everyone PLEASE stop staring?
        </div>

      </div>


      {/* CASE FILE */}

      <div className="case-file">

        <div className="file-top">
          B.G.D. — BIRTHDAY GHOST DEPARTMENT
        </div>

        <div className="file-line"></div>

        <div className="file-row">
          <span>CASE:</span>
          <span>20-10-01</span>
        </div>

        <div className="file-row">
          <span>SUBJECT:</span>
          <span>THE BIRTHDAY GIRL</span>
        </div>

        <div className="file-row">
          <span>AGE:</span>
          <span>20</span>
        </div>

        <div className="file-row">
          <span>STATUS:</span>
          <span>STILL CHAOTIC</span>
        </div>

        <div className="file-row">
          <span>MISSION:</span>
          <span>CLASSIFIED</span>
        </div>

        <div className="approved">
          APPROVED
        </div>

      </div>


      {/* FINAL MESSAGE */}

      <div className="department-final">

        <div className="final-small">
          We've been keeping something
        </div>

        <div className="final-big">
          for you.
        </div>

      </div>


      {/* NEXT BUTTON */}

      <button
        className="archive-button"
        onClick={onNext}
      >

        THE MEMORY ARCHIVE

        <span>→</span>

      </button>

    </section>

  );
}



/* =========================================================
   PAGE 3 — MEMORY ARCHIVE
   Dummy memories for the animation skeleton.
   Replace the dummy photo visuals later with real images.
========================================================= */

const MEMORY_IMAGES = [
  "/memories/memory-01.png",
  "/memories/memory-02.png",
  "/memories/memory-03.png",
  "/memories/memory-04.png",
  "/memories/memory-05.png",
  "/memories/memory-06.png",
];

const SPECIAL_MEMORY_IMAGE = "/memories/memory-collage.png";

const MEMORY_ITEMS = [
  { id: 0, label: "MEMORY 01", title: "OUR LITTLE BRACELETS", reaction: "AWW... OUR LITTLE BRACELETS." },
  { id: 1, label: "MEMORY 02", title: "OURS", reaction: "Okay... this one is ours." },
  { id: 2, label: "MEMORY 03", title: "THE CUTE ONE", reaction: "WAIT. LOOK AT HER." },
  { id: 3, label: "MEMORY 04", title: "FLOWER GIRL", reaction: "AWWW. THIS ONE." },
  { id: 4, label: "MEMORY 05", title: "THE CHAOS", reaction: "WE ARE NOT TALKING ABOUT THIS." },
  { id: 5, label: "MEMORY 06", title: "CLASSIFIED", reaction: "CLASSIFIED. MOVE ON." },
];

function RealMemoryPhoto({ id, special = false }) {
  const src = special ? SPECIAL_MEMORY_IMAGE : MEMORY_IMAGES[id];
  return (
    <div className={`real-photo ${special ? "real-photo-special" : `real-photo-${id}`}`}>
      <img src={src} alt={special ? "Memory collage" : `Birthday memory ${id + 1}`} draggable="false" />
      <span className="photo-vignette" />
      <span className="photo-gold-wash" />
      <span className="photo-corner" />
    </div>
  );
}

function MemoryCard({ item, index, onClick, selected, flying, special = false }) {
  return (
    <button
      type="button"
      className={`memory-card memory-${index} ${special ? "memory-special-card" : ""} ${selected ? "memory-selected" : ""} ${flying ? "memory-flying" : ""}`}
      onClick={() => onClick(index)}
      aria-label={`Open ${item.label}`}
    >
      <RealMemoryPhoto id={index} special={special} />
      <span className="memory-tape" />
      <span className="memory-caption">{item.title}</span>
    </button>
  );
}

function ArchiveSleepyGhost() {
  return (
    <div className="department-ghost sleepy-ghost">
      <svg viewBox="0 0 150 170">
        <path className="dept-ghost-fill" d="M75 18 C42 18 23 43 23 77 L23 125 C23 136 31 141 40 134 C48 128 53 129 60 137 C67 145 71 145 75 137 C79 145 83 145 90 137 C97 129 102 128 110 134 C119 141 127 136 127 125 L127 77 C127 43 108 18 75 18 Z" />
        <path className="sleepy-eye" d="M48 75 Q57 82 66 75" />
        <path className="sleepy-eye" d="M84 75 Q93 82 102 75" />
        <path className="dept-mouth" d="M69 94 Q75 98 81 94" />
        <path className="dept-arm" d="M25 93 Q10 88 7 76" />
        <path className="dept-arm" d="M125 93 Q140 88 143 76" />
        <text x="108" y="32" className="sleep-z">z</text>
        <text x="119" y="23" className="sleep-z small-z">z</text>
      </svg>
      <div className="ghost-name">SLEEPY</div>
    </div>
  );
}

function PhotoCarrier({ type, memoryIndex, stage }) {
  const GhostType = type === "curious" ? CuriousGhost : type === "detective" ? DetectiveGhost : type === "chaos" ? ChaosGhost : ArchiveSleepyGhost;
  const lines = {
    curious: "I FOUND SOMETHING OF OURS...",
    detective: "I NEED TO INVESTIGATE THIS.",
    chaos: "HAHAHAHA WAIT—",
    sleepy: "I WASN'T SUPPOSED TO SEE THIS...",
  };

  return (
    <div className={`photo-carrier carrier-${type} carrier-${stage}`}>
      <GhostType />
      <div className="carrier-photo-wrap">
        <div className={`carrier-photo ${stage >= 2 ? "photo-facing" : ""}`}>
          <RealMemoryPhoto id={memoryIndex} />
        </div>
      </div>
      <div className="carrier-dialogue">
        {stage === 1 ? lines[type] : MEMORY_ITEMS[memoryIndex].reaction}
      </div>
    </div>
  );
}

function MemoryDrama({ memoryIndex, onClose }) {
  const item = MEMORY_ITEMS[memoryIndex];
  const reactions = [
    "LOOK AT OUR LITTLE BRACELETS.",
    "NOOOOO.",
    "WHY WOULD YOU SHOW THAT?",
    "This one... was actually adorable.",
    "CLASSIFIED. DELETE IT.",
    "Okay... now THAT looks like you.",
  ];

  return (
    <div className="memory-drama" onClick={onClose}>
      <div className="drama-backdrop" />
      <div className="drama-card" onClick={(e) => e.stopPropagation()}>
        <div className="drama-topline">B.G.D. // MEMORY REVIEW</div>
        <MemoryCard item={item} index={memoryIndex} onClick={() => {}} selected />
        <div className="drama-reaction">{reactions[memoryIndex]}</div>
        <div className="drama-sub">{item.title}</div>
        <button type="button" className="drama-close" onClick={onClose}>BACK TO ARCHIVE</button>
      </div>
    </div>
  );
}

function MemoryArchive({ onNext }) {
  const [scene, setScene] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [dramaCount, setDramaCount] = useState(0);
  const [special, setSpecial] = useState(false);

  useEffect(() => {
    const timeline = [
      [800, 1],
      [3000, 2],
      [5000, 3],
      [7200, 4],
      [9200, 5],
      [11200, 6],
      [13200, 7],
      [15000, 8],
      [16900, 9],
      [19300, 10],
    ];
    const timers = timeline.map(([time, value]) => setTimeout(() => setScene(value), time));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (scene !== 10 || special) return;
    const timer = setTimeout(() => {
      const available = MEMORY_ITEMS.map((_, i) => i).filter((i) => i !== 5);
      const next = available[Math.floor(Math.random() * available.length)];
      setSelectedMemory(next);
      setDramaCount((count) => count + 1);
    }, 2400);
    return () => clearTimeout(timer);
  }, [scene, special, dramaCount]);

  useEffect(() => {
    if (dramaCount >= 3 && selectedMemory !== null) {
      const timer = setTimeout(() => {
        setSelectedMemory(null);
        setSpecial(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [dramaCount, selectedMemory]);

  const handlePhotoClick = (index) => {
    if (scene >= 10 && !special) {
      setSelectedMemory(index);
    }
  };

  const closeDrama = () => setSelectedMemory(null);

  return (
    <section className={`memory-page memory-scene-${scene} ${special ? "memory-special" : ""}`}>
      <div className="memory-noise" />
      <div className="memory-doodles" aria-hidden="true">
        <span className="doodle d1">✦</span>
        <span className="doodle d2">♡</span>
        <span className="doodle d3">✧</span>
        <span className="doodle d4">· · ·</span>
        <span className="doodle d5">✦</span>
        <span className="doodle d6">♡</span>
        <span className="doodle d7">✧</span>
        <span className="doodle d8">· ·</span>
      </div>

      <div className="memory-header">
        <span>B.G.D.</span>
        <span>THE MEMORY ARCHIVE</span>
        <span>FILE 03</span>
      </div>

      <div className="archive-title">
        <span>RECOVERED MEMORIES</span>
        <i>HANDLE WITH CARE</i>
      </div>

      <div className="archive-stage">
        {scene < 8 && (
          <>
            <div className="archive-main-ghost"><Ghost /></div>
            {scene <= 2 && <PhotoCarrier type="curious" memoryIndex={0} stage={scene === 1 ? 1 : 2} />}
            {scene >= 3 && scene <= 4 && <PhotoCarrier type="detective" memoryIndex={1} stage={scene === 3 ? 1 : 2} />}
            {scene >= 5 && scene <= 6 && <PhotoCarrier type="chaos" memoryIndex={2} stage={scene === 5 ? 1 : 2} />}
            {scene === 7 && <PhotoCarrier type="sleepy" memoryIndex={3} stage={2} />}
          </>
        )}

        {scene >= 8 && scene < 10 && (
          <div className="collector-ghost">
            <Ghost />
            <div className="collector-line">GIVE ME THOSE.</div>
          </div>
        )}

        {scene >= 8 && (
          <div className="memory-pile">
            {MEMORY_ITEMS.map((item, index) => (
              <MemoryCard
                key={item.id}
                item={item}
                index={index}
                onClick={handlePhotoClick}
                flying={scene === 9}
              />
            ))}
          </div>
        )}

        {scene >= 10 && !special && (
          <>
            <div className="collage-crew">
              <div className="crew-left"><CuriousGhost /></div>
              <div className="crew-right"><DetectiveGhost /></div>
              <div className="crew-bottom"><ChaosGhost /></div>
              <div className="crew-sleepy"><ArchiveSleepyGhost /></div>
            </div>
            <div className="collage-note">tap a memory... if you dare</div>
          </>
        )}

        {special && (
          <div className="special-memory-scene">
            <div className="special-hanging-glow" aria-hidden="true" />
            <div className="special-hanging-photo">
              <span className="special-photo-pin" />
              <span className="special-photo-tape tape-left" />
              <span className="special-photo-tape tape-right" />
              <img src={SPECIAL_MEMORY_IMAGE} alt="Our memory collage" draggable="false" />
              <span className="special-photo-shine" />
            </div>
            <div className="special-ghost"><Ghost /></div>
            <div className="special-dialogue">
              <span>...This one.</span>
              <strong>This one's mine.</strong>
              <small>Okay... now THAT looks like you.</small>
            </div>
            <button type="button" className="archive-continue" onClick={onNext}>
              CONTINUE <span>→</span>
            </button>
          </div>
        )}
      </div>

      {selectedMemory !== null && !special && (
        <MemoryDrama memoryIndex={selectedMemory} onClose={closeDrama} />
      )}
    </section>
  );
}


/* =========================================================
   PAGE 4 — FLOWER REVEAL + GIFT DELIVERY
   No external images. Flowers, pumpkin, chocolates and gifts
   are all built with CSS/SVG.
========================================================= */

const FLOWERS = [
  { id: 0, x: 14, y: 24, size: 38, delay: 0.2, rotate: -18 },
  { id: 1, x: 28, y: 13, size: 32, delay: 0.55, rotate: 12 },
  { id: 2, x: 43, y: 7, size: 42, delay: 0.85, rotate: -8 },
  { id: 3, x: 58, y: 12, size: 34, delay: 1.05, rotate: 18 },
  { id: 4, x: 75, y: 23, size: 40, delay: 1.3, rotate: -12 },
  { id: 5, x: 86, y: 37, size: 34, delay: 1.55, rotate: 14 },
  { id: 6, x: 7, y: 45, size: 31, delay: 1.8, rotate: -28 },
  { id: 7, x: 91, y: 54, size: 36, delay: 2.05, rotate: 22 },
  { id: 8, x: 17, y: 66, size: 40, delay: 2.25, rotate: -15 },
  { id: 9, x: 82, y: 68, size: 42, delay: 2.5, rotate: 12 },
  { id: 10, x: 27, y: 80, size: 30, delay: 2.8, rotate: 20 },
  { id: 11, x: 72, y: 82, size: 32, delay: 3.05, rotate: -18 },
];

function Flower({ flower, className = "" }) {
  return (
    <div
      className={`reveal-flower ${className}`}
      style={{
        left: `${flower.x}%`,
        top: `${flower.y}%`,
        width: `${flower.size}px`,
        height: `${flower.size}px`,
        "--flower-delay": `${flower.delay}s`,
        "--flower-rotate": `${flower.rotate}deg`,
      }}
    >
      <span className="petal p1" />
      <span className="petal p2" />
      <span className="petal p3" />
      <span className="petal p4" />
      <span className="petal p5" />
      <span className="flower-center" />
    </div>
  );
}

function FlowerRevealGhost() {
  return (
    <div className="flower-ghost-wrap">
      <div className="flower-ghost">
        <Ghost />
      </div>
    </div>
  );
}

/* A pumpkin packed only with Ferrero-Rocher-style gold chocolates. */
function ChocolatePumpkin() {
  const chocolates = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className="chocolate-pumpkin" aria-label="pumpkin filled with Ferrero Rocher chocolates">
      <div className="pumpkin-stem" />
      <div className="pumpkin-body">
        <span className="pumpkin-line line-1" />
        <span className="pumpkin-line line-2" />
        <span className="pumpkin-line line-3" />
        <span className="pumpkin-face-eye left-eye" />
        <span className="pumpkin-face-eye right-eye" />
        <span className="pumpkin-smile" />
        <div className="rocher-pile">
          {chocolates.map((chocolate) => (
            <span key={chocolate} className={`rocher rocher-${chocolate}`}>
              <i>FERRERO</i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LittleNoteCard() {
  return (
    <div className="little-note-card">
      <span className="note-card-tape" />
      <span className="note-card-small">A LITTLE NOTE</span>
      <span className="note-card-big">FOR YOU ♡</span>
      <span className="note-card-click">FROM THE GHOST CREW</span>
    </div>
  );
}

function FlowerGiftGhosts({ showGifts }) {
  return (
    <div className={`flower-gift-crew ${showGifts ? "gifts-visible" : ""}`}>
      <div className="gift-ghost gift-ghost-left">
        <CuriousGhost />
        <div className="gift-object gift-pumpkin">
          <ChocolatePumpkin />
        </div>
      </div>

      <div className="gift-ghost gift-ghost-right">
        <DetectiveGhost />
        <div className="gift-object gift-note">
          <LittleNoteCard />
        </div>
      </div>
    </div>
  );
}

const BIRTHDAY_MESSAGE = `Happpyyyyyy birthdayyyy brooo 🤍🤍

Lvuu some muchh alsaaa💗...

May be manam oka daggaraa lekapoyinaa we are always close..

Tlsu manaki chala struggles e vachay e journey loo kani we both came up over them... I wanted you everytime in this clg aslaa.. I feel like manam iddaru eppudu oka daggare 10 th loo undipoyina bagunnuu asla appude life chala bagundediii...

Love youuuu brooo🫂😘`;

function MessageThrow() {
  return (
    <div className="message-throw-layer" aria-live="polite">
      <div className="flying-message-paper">FOR BHUVANA ♡</div>
      <div className="flower-message-card birthday-note-card">
        <div className="message-flower">✿</div>
        <div className="final-flower-label">A MESSAGE FROM ME</div>
        <div className="real-birthday-message">
          {BIRTHDAY_MESSAGE.split("\n").map((line, index) => (
            <p key={index}>{line || "\u00A0"}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function KneelingBouquetGhost() {
  return (
    <div className="kneeling-bouquet-ghost" aria-label="ghost kneeling and presenting a bouquet">
      <svg viewBox="0 0 240 270" role="img">
        {/* Head + soft body, tilted forward like the ghost is bowing while offering the bouquet. */}
        <path
          className="kneel-ghost-body"
          d="M120 26
             C82 26 57 54 57 94
             L57 151
             C57 164 66 173 79 176
             C88 178 91 187 84 196
             C77 205 60 209 42 207
             C30 206 20 211 21 221
             C23 236 47 246 73 243
             C98 241 111 226 120 207
             C129 226 142 241 167 243
             C193 246 217 236 219 221
             C220 211 210 206 198 207
             C180 209 163 205 156 196
             C149 187 152 178 161 176
             C174 173 183 164 183 151
             L183 94
             C183 54 158 26 120 26 Z"
        />

        <ellipse className="kneel-ghost-eye" cx="99" cy="94" rx="9" ry="13" />
        <ellipse className="kneel-ghost-eye" cx="145" cy="94" rx="9" ry="13" />
        <path className="kneel-ghost-smile" d="M108 117 Q120 126 132 117" />

        {/* Arms bend inward, so they visibly hold the bouquet instead of floating beside it. */}
        <path
          className="kneel-ghost-arm"
          d="M66 135 Q48 143 43 157 Q40 166 48 171 Q57 177 65 168 L91 150"
        />
        <path
          className="kneel-ghost-arm"
          d="M174 135 Q192 143 197 157 Q200 166 192 171 Q183 177 175 168 L149 150"
        />

        <circle className="kneel-ghost-hand" cx="88" cy="151" r="8" />
        <circle className="kneel-ghost-hand" cx="152" cy="151" r="8" />
      </svg>
      <div className="kneel-ghost-label">GHOST CREW • SPECIAL DELIVERY</div>
    </div>
  );
}

function OfferingFlower({ type = "rose", className = "" }) {
  return (
    <div className={`offering-flower offering-${type} ${className}`} aria-hidden="true">
      <span className="offering-petal p1" />
      <span className="offering-petal p2" />
      <span className="offering-petal p3" />
      <span className="offering-petal p4" />
      <span className="offering-petal p5" />
      <span className="offering-flower-center" />
      <span className="offering-stem" />
    </div>
  );
}

/* A real little BUNCH — never a single lonely flower. */
function MiniBouquet({ size = "small", tilt = 0 }) {
  // A simple flower SET: several flowers together, without the wrapped-gift look.
  return (
    <div
      className={`flower-set flower-set-${size}`}
      style={{ "--flower-set-tilt": `${tilt}deg` }}
      aria-hidden="true"
    >
      <div className="flower-set-bloom bloom-a"><OfferingFlower type="daisy" /></div>
      <div className="flower-set-bloom bloom-b"><OfferingFlower type="rose" /></div>
      <div className="flower-set-bloom bloom-c"><OfferingFlower type="daisy" /></div>
      <div className="flower-set-bloom bloom-d"><OfferingFlower type="rose" /></div>
      <div className="flower-set-bloom bloom-e"><OfferingFlower type="daisy" /></div>
      <span className="flower-set-leaf leaf-a" />
      <span className="flower-set-leaf leaf-b" />
    </div>
  );
}

function FlowerOfferingGhost({ variant, side, bouquetTilt = 0 }) {
  const GhostShape = variant === "detective"
    ? DetectiveGhost
    : variant === "chaos"
      ? ChaosGhost
      : CuriousGhost;

  return (
    <div className={`offering-ghost offering-${side} offering-${variant}`}>
      <div className="offering-ghost-character">
        <GhostShape />
      </div>
      <div className="offering-held-bouquet">
        <MiniBouquet size="small" tilt={bouquetTilt} />
      </div>
    </div>
  );
}

function BouquetCeremony({ scene }) {
  const showingFinalPhoto = scene >= 16;

  return (
    <div className={`bouquet-ceremony ceremony-scene-${scene}`}>
      <div className="ceremony-soft-glow" aria-hidden="true" />

      {!showingFinalPhoto && (
        <>
          <div className="ceremony-heading">FOR BHUVANA</div>
          <div className="ceremony-subheading">
            because one flower was never going to be enough.
          </div>

          {/* Each ghost carries a SMALL BUNCH, then physically brings it to the center. */}
          <div className="offering-ghosts" aria-hidden="true">
            <FlowerOfferingGhost variant="curious" side="left" bouquetTilt={-7} />
            <FlowerOfferingGhost variant="detective" side="right" bouquetTilt={7} />
            <FlowerOfferingGhost variant="chaos" side="back-left" bouquetTilt={-10} />
            <FlowerOfferingGhost variant="curious" side="back-right" bouquetTilt={10} />
          </div>

          {/* The separate bunches are visibly placed together here. */}
          <div className="flower-drop-zone" aria-hidden="true">
            <div className="drop-zone-glow" />
            <div className="gathered-bouquets">
              <MiniBouquet size="gathered" tilt={-7} />
              <MiniBouquet size="gathered" tilt={7} />
              <MiniBouquet size="gathered" tilt={-3} />
              <MiniBouquet size="gathered" tilt={5} />
            </div>
            <div className="flower-pile-label">THE FLOWER CREW • FOR BOOTIPUL ♡</div>
          </div>

          {scene >= 13 && scene < 14 && (
            <div className="ceremony-dialogue ceremony-dialogue-main">
              <span>YOU GUYS ACTUALLY BROUGHT FLOWERS...</span>
              <strong>for Bootipul?</strong>
            </div>
          )}

          {scene >= 14 && scene < 15 && (
            <>
              <div className="ceremony-main-ghost">
                <KneelingBouquetGhost />
              </div>
              <div className="ceremony-kneeling-bouquet" aria-hidden="true">
                <MiniBouquet size="main" tilt={-2} />
              </div>
              <div className="ceremony-dialogue ceremony-dialogue-final">
                <span>Okay...</span>
                <strong>one flower isn't enough.</strong>
              </div>
            </>
          )}

          {scene >= 15 && (
            <div className="ceremony-final-line">
              so we brought you all of them. ♡
            </div>
          )}
        </>
      )}

      {showingFinalPhoto && <BhuvanaFlowerReveal />}
    </div>
  );
}

function BhuvanaFlowerReveal() {
  return (
    <div className="bhuvana-flower-scene final-bouquet-photo-scene">
      <div className="final-bouquet-glow" aria-hidden="true" />

      <div className="bhuvana-title">FOR BHUVANA</div>
      <div className="bhuvana-subtitle">because one flower was never going to be enough.</div>

      <div className="final-bouquet-photo-wrap">
        <img
          className="final-bouquet-photo"
          src="/final-bouquet.png"
          alt="A cute ghost presenting a large cream and gold bouquet"
        />
      </div>

      <div className="final-bouquet-caption">
        <span>FOR YOU, BHUVANA ♡</span>
        <small>from your slightly dramatic ghost crew</small>
      </div>
    </div>
  );
}


function FlowerSetStyles() {
  return (
    <style>{`
      /* PAGE 4 — simple flower clusters, not wrapped mini-bouquets */
      .flower-set {
        position: relative;
        width: 92px;
        height: 82px;
        transform: rotate(var(--flower-set-tilt));
        filter: drop-shadow(0 5px 10px rgba(0,0,0,.45));
      }

      .flower-set-small { width: 76px; height: 68px; }
      .flower-set-gathered { width: 92px; height: 80px; }
      .flower-set-main { width: 126px; height: 112px; }

      .flower-set-bloom {
        position: absolute;
        width: 38px;
        height: 38px;
      }

      .flower-set-small .flower-set-bloom { width: 30px; height: 30px; }
      .flower-set-gathered .flower-set-bloom { width: 36px; height: 36px; }
      .flower-set-main .flower-set-bloom { width: 48px; height: 48px; }

      .flower-set-bloom .offering-flower {
        width: 100%;
        height: 100%;
      }

      .flower-set-bloom.bloom-a { left: 6px; top: 28px; transform: rotate(-15deg); }
      .flower-set-bloom.bloom-b { left: 24px; top: 8px; transform: rotate(7deg); }
      .flower-set-bloom.bloom-c { left: 43px; top: 25px; transform: rotate(-4deg); }
      .flower-set-bloom.bloom-d { left: 18px; top: 40px; transform: rotate(14deg); }
      .flower-set-bloom.bloom-e { left: 50px; top: 43px; transform: rotate(12deg); }

      .flower-set-small .flower-set-bloom.bloom-a { left: 2px; top: 25px; }
      .flower-set-small .flower-set-bloom.bloom-b { left: 19px; top: 7px; }
      .flower-set-small .flower-set-bloom.bloom-c { left: 36px; top: 23px; }
      .flower-set-small .flower-set-bloom.bloom-d { left: 14px; top: 39px; }
      .flower-set-small .flower-set-bloom.bloom-e { left: 40px; top: 39px; }

      .flower-set-main .flower-set-bloom.bloom-a { left: 7px; top: 40px; }
      .flower-set-main .flower-set-bloom.bloom-b { left: 34px; top: 9px; }
      .flower-set-main .flower-set-bloom.bloom-c { left: 62px; top: 34px; }
      .flower-set-main .flower-set-bloom.bloom-d { left: 27px; top: 59px; }
      .flower-set-main .flower-set-bloom.bloom-e { left: 70px; top: 60px; }

      .flower-set-leaf {
        position: absolute;
        width: 18px;
        height: 9px;
        border-radius: 100% 0 100% 0;
        background: linear-gradient(135deg, #857044, #c6a45c);
        opacity: .9;
      }

      .flower-set-leaf.leaf-a {
        left: 1px;
        top: 57px;
        transform: rotate(-25deg);
      }

      .flower-set-leaf.leaf-b {
        right: 1px;
        top: 55px;
        transform: rotate(35deg);
      }

      .flower-set-main .flower-set-leaf { transform: scale(1.25); }

      /*
        GATHERED FLOWERS:
        The old CSS was written for .mini-bouquet. We now use .flower-set,
        so the four sets were falling into normal document flow and appeared
        as a vertical line. Force them into one overlapping bouquet cluster.
      */
      .gathered-bouquets {
        position: absolute !important;
        left: 50% !important;
        top: 4px !important;
        width: 180px !important;
        height: 125px !important;
        transform: translateX(-50%) !important;
      }

      .gathered-bouquets .flower-set {
        position: absolute !important;
        width: 78px !important;
        height: 72px !important;
        margin: 0 !important;
      }

      .gathered-bouquets .flower-set:nth-child(1) {
        left: 19px !important;
        top: 34px !important;
        transform: rotate(-16deg) !important;
        z-index: 2;
      }

      .gathered-bouquets .flower-set:nth-child(2) {
        left: 52px !important;
        top: 8px !important;
        transform: rotate(-3deg) !important;
        z-index: 4;
      }

      .gathered-bouquets .flower-set:nth-child(3) {
        left: 84px !important;
        top: 32px !important;
        transform: rotate(14deg) !important;
        z-index: 3;
      }

      .gathered-bouquets .flower-set:nth-child(4) {
        left: 52px !important;
        top: 48px !important;
        transform: rotate(4deg) !important;
        z-index: 5;
      }

      /*
        Make the individual sets overlap enough to read as ONE bouquet,
        while keeping their different flower shapes visible.
      */
      .gathered-bouquets .flower-set-bloom {
        width: 34px !important;
        height: 34px !important;
      }

      .gathered-bouquets .flower-set-bloom.bloom-a { left: 4px !important; top: 25px !important; }
      .gathered-bouquets .flower-set-bloom.bloom-b { left: 21px !important; top: 6px !important; }
      .gathered-bouquets .flower-set-bloom.bloom-c { left: 38px !important; top: 22px !important; }
      .gathered-bouquets .flower-set-bloom.bloom-d { left: 16px !important; top: 38px !important; }
      .gathered-bouquets .flower-set-bloom.bloom-e { left: 40px !important; top: 39px !important; }

      .flower-set .mini-bouquet-wrap,
      .flower-set .mini-bouquet-ribbon {
        display: none !important;
      }

      /* =====================================================
         PAGE 4 -> PAGE 5 CONNECTION
         ===================================================== */
      .party-bridge {
        position: absolute;
        inset: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 28px;
        text-align: center;
        background:
          radial-gradient(circle at 50% 46%, rgba(190,148,65,.13), transparent 35%),
          rgba(3,3,3,.94);
        animation: bridgeFadeIn .9s ease both;
      }

      .party-bridge::before,
      .party-bridge::after {
        content: "";
        position: absolute;
        width: 80px;
        height: 80px;
        border: 1px solid rgba(210,168,78,.16);
        border-radius: 50%;
        box-shadow: 0 0 35px rgba(210,168,78,.06);
      }

      .party-bridge::before { left: -34px; top: 31%; }
      .party-bridge::after { right: -34px; bottom: 27%; }

      .bridge-ghost-row {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 18px;
        margin-bottom: 24px;
        font-size: 29px;
        filter: grayscale(.15);
      }

      .bridge-ghost-row span {
        display: block;
        animation: bridgeGhostFloat 1.8s ease-in-out infinite;
      }

      .bridge-ghost-row span:nth-child(2) { animation-delay: -.45s; transform: scale(.82); }
      .bridge-ghost-row span:nth-child(3) { animation-delay: -.9s; transform: scale(.92); }
      .bridge-ghost-row span:nth-child(4) { animation-delay: -1.25s; transform: scale(.76); }

      .bridge-kicker {
        margin: 0 0 11px;
        color: #d8ad55;
        font-size: 9px;
        letter-spacing: .28em;
        text-transform: uppercase;
      }

      .party-bridge h2 {
        position: relative;
        z-index: 2;
        max-width: 330px;
        margin: 0;
        color: #f5e9c9;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(24px, 7vw, 36px);
        line-height: 1.18;
        letter-spacing: .025em;
        font-weight: 500;
      }

      .bridge-small {
        position: relative;
        z-index: 2;
        max-width: 290px;
        margin: 13px 0 0;
        color: rgba(235,216,169,.68);
        font-size: 11px;
        line-height: 1.7;
        letter-spacing: .06em;
      }

      .bridge-mischief .sneaking {
        width: 100%;
        justify-content: space-around;
        gap: 0;
      }

      .bridge-mischief .sneaking span {
        animation: bridgeSneak 1.6s ease-in-out infinite;
      }

      .bridge-mischief .sneaking span:nth-child(2) { animation-delay: -.3s; }
      .bridge-mischief .sneaking span:nth-child(3) { animation-delay: -.65s; }
      .bridge-mischief .sneaking span:nth-child(4) { animation-delay: -.95s; }

      .bridge-curtain-line {
        position: relative;
        width: min(270px, 70vw);
        height: 1px;
        margin-bottom: 29px;
        background: linear-gradient(90deg, transparent, #d8ad55, transparent);
        box-shadow: 0 0 15px rgba(216,173,85,.4);
      }

      .bridge-curtain-line::before,
      .bridge-curtain-line::after {
        content: "✦";
        position: absolute;
        top: -9px;
        color: #d8ad55;
        font-size: 12px;
      }

      .bridge-curtain-line::before { left: 22%; }
      .bridge-curtain-line::after { right: 22%; }

      .bridge-party-ready h2 {
        max-width: 350px;
      }

      .bridge-party-button {
        position: relative;
        z-index: 3;
        margin-top: 28px;
        padding: 14px 28px;
        border: 1px solid #d8ad55;
        background: rgba(6,5,3,.82);
        color: #f2d58d;
        font-family: Georgia, serif;
        font-size: 10px;
        letter-spacing: .22em;
        cursor: pointer;
        box-shadow: 0 0 25px rgba(216,173,85,.1);
        transition: transform .25s ease, background .25s ease;
      }

      .bridge-party-button:active,
      .bridge-party-button:hover {
        transform: scale(1.04);
        background: rgba(216,173,85,.09);
      }

      @keyframes bridgeFadeIn {
        from { opacity: 0; transform: scale(1.015); }
        to { opacity: 1; transform: scale(1); }
      }

      @keyframes bridgeGhostFloat {
        0%, 100% { transform: translateY(0) rotate(-2deg); }
        50% { transform: translateY(-8px) rotate(2deg); }
      }

      @keyframes bridgeSneak {
        0%, 100% { transform: translateX(-10px) translateY(0); opacity: .55; }
        50% { transform: translateX(10px) translateY(-7px); opacity: 1; }
      }
    `}</style>
  );
}


function FlowerReveal({ onNext }) {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const timeline = [
      [900, 1],
      [2500, 2],
      [3900, 3],
      [5200, 4],
      [7600, 5],
      [9300, 6],
      [10800, 7],
      [12200, 8],
      [14200, 9],
      [17600, 10],
    ];

    const timers = timeline.map(([time, value]) =>
      setTimeout(() => setScene(value), time)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const goToFlowers = () => setScene(11);

  const goToParty = () => onNext();

  /*
    FIX: the old effect depended on [scene]. When scene changed 11 -> 12,
    React cleaned up the effect and cancelled the remaining timers.
    That is why the flower-gathering scene got stuck.
  */
  const ceremonyStartedRef = React.useRef(false);

  useEffect(() => {
    if (scene !== 11 || ceremonyStartedRef.current) return;

    ceremonyStartedRef.current = true;

    /*
      IMPORTANT:
      Do NOT clear these timers when scene changes.
      The previous version returned a cleanup function, so React cancelled
      the remaining 13/14/15/16 transitions immediately after 11 -> 12.
    */
    setTimeout(() => setScene(12), 2200);
    setTimeout(() => setScene(13), 6900);
    setTimeout(() => setScene(14), 9800);
    setTimeout(() => setScene(15), 12600);
    setTimeout(() => setScene(16), 15700);
  }, [scene]);

  /* PAGE 4 -> PAGE 5 BRIDGE
     The bouquet is the emotional ending of Page 4.
     We do not jump directly into the party anymore.
     First the ghost crew reacts, then they disappear backstage,
     and only then does the party invitation appear.
  */
  useEffect(() => {
    let timer;

    if (scene === 16) {
      timer = setTimeout(() => setScene(17), 2600);
    } else if (scene === 17) {
      timer = setTimeout(() => setScene(18), 3000);
    } else if (scene === 18) {
      timer = setTimeout(() => setScene(19), 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [scene]);

  return (
    <>
      <FlowerSetStyles />
      <section className={`flower-page flower-scene-${scene}`}>
      <div className="flower-noise" />
      <div className="flower-vignette" />

      <div className="flower-header">
        <span>B.G.D.</span>
        <span>SPECIAL EXCEPTION</span>
        <span>FILE 04</span>
      </div>

      {scene === 0 && (
        <div className="flower-intro">
          <span>ONE LAST THING...</span>
        </div>
      )}

      {scene >= 1 && scene < 11 && (
        <div className="flower-ghost-stage">
          <FlowerRevealGhost />
        </div>
      )}

      {scene >= 2 && scene < 5 && (
        <div className="flower-dialogue flower-dialogue-one">
          We don't really celebrate birthdays.
        </div>
      )}

      {scene >= 3 && scene < 5 && (
        <div className="flower-dialogue flower-dialogue-two">
          <span>We're ghosts.</span>
          <small>...you know how it is.</small>
        </div>
      )}

      {scene >= 4 && scene < 6 && (
        <div className="flower-dialogue flower-dialogue-three">
          <span>But...</span>
          <strong>For you...</strong>
        </div>
      )}

      {scene >= 4 && scene < 11 && (
        <div className="flower-field" aria-hidden="true">
          {FLOWERS.map((flower) => (
            <Flower key={flower.id} flower={flower} />
          ))}
        </div>
      )}

      {scene >= 5 && scene < 11 && (
        <div className="birthday-reveal">
          <div className="birthday-small">...we made an exception.</div>
          <div className="birthday-title">HAPPY BIRTHDAY</div>
          <div className="birthday-subtitle">20 looks good on you.</div>
        </div>
      )}

      {scene >= 6 && scene < 9 && (
        <FlowerGiftGhosts showGifts={scene >= 6} />
      )}

      {scene >= 7 && scene < 9 && (
        <div className="gift-dialogue">
          <span>We brought you something.</span>
          <small>Chocolate. Obviously.</small>
        </div>
      )}

      {scene >= 8 && scene < 9 && (
        <div className="gift-note-hint">
          And a little note... ♡
        </div>
      )}

      {scene === 9 && <MessageThrow />}

      {scene === 10 && (
        <>
          <MessageThrow />
          <button type="button" className="flower-next-page message-next" onClick={goToFlowers}>
            NEXT <span>→</span>
          </button>
        </>
      )}

      {scene >= 11 && <BouquetCeremony scene={scene} />}

      {/* =====================================================
          PAGE 4 -> PAGE 5 STORY BRIDGE
         ===================================================== */}
      {scene === 17 && (
        <div className="party-bridge bridge-soft">
          <div className="bridge-ghost-row">
            <span>👻</span><span>👻</span><span>👻</span>
          </div>
          <p className="bridge-kicker">THE FLOWER CREW</p>
          <h2>Okay... that was sweet.</h2>
          <p className="bridge-small">But apparently, they weren't finished.</p>
        </div>
      )}

      {scene === 18 && (
        <div className="party-bridge bridge-mischief">
          <div className="bridge-ghost-row sneaking">
            <span>👻</span><span>👻</span><span>👻</span><span>👻</span>
          </div>
          <p className="bridge-kicker">B.G.D. INTERNAL NOTE</p>
          <h2>They're setting something up...</h2>
          <p className="bridge-small">You probably shouldn't look.</p>
        </div>
      )}

      {scene === 19 && (
        <div className="party-bridge bridge-party-ready">
          <div className="bridge-curtain-line" />
          <p className="bridge-kicker">THE GHOST DEPARTMENT</p>
          <h2>One flower wasn't enough.</h2>
          <p className="bridge-small">So naturally... they planned a whole party.</p>
          <button type="button" className="bridge-party-button" onClick={goToParty}>
            OPEN THE PARTY ✦
          </button>
        </div>
      )}
    </section>
    </>
  );
}


/* =========================================================
   APP
========================================================= */


/* =========================================================
   PAGE 5 — THE GHOST PARTY
   Big black + antique-gold birthday party.
   Mobile-first, self-contained styling so Pages 1–4 stay safe.
   ========================================================= */

function PartyGhost({ type = "dancer", className = "" }) {
  const faces = {
    dancer: "•ᴗ•",
    balloon: "•‿•",
    decorator: "•ᴗ•",
    present: "•ᴗ•",
    cake: "•‿•",
    candle: "•ᴗ•",
    useless: "•_•",
  };

  return (
    <div className={`party-ghost party-ghost-${type} ${className}`}>
      {type === "balloon" && (
        <div className="party-balloon-bundle">
          <i />
          <i />
          <i />
        </div>
      )}

      {type === "present" && (
        <div className="party-giant-present">
          <span className="present-ribbon-v" />
          <span className="present-ribbon-h" />
          <b>?</b>
        </div>
      )}

      {type === "cake" && (
        <div className="party-mini-cake">
          <span />
          <span />
          <span />
        </div>
      )}

      {type === "candle" && (
        <div className="party-candle">
          <span className="party-flame" />
        </div>
      )}

      {type === "decorator" && (
        <div className="party-ribbon-prop">
          <span />
          <span />
        </div>
      )}

      <div className="party-ghost-body">
        <span className="party-eye party-eye-left" />
        <span className="party-eye party-eye-right" />
        <span className="party-mouth">{faces[type]}</span>
      </div>

      {type === "dancer" && (
        <>
          <span className="party-arm party-arm-left" />
          <span className="party-arm party-arm-right" />
          <span className="party-foot party-foot-left" />
          <span className="party-foot party-foot-right" />
        </>
      )}

      {type === "decorator" && (
        <span className="party-tape" />
      )}
    </div>
  );
}

function PartyStar({ index, onClick, opened }) {
  const starStyle = {
    "--star-i": index,
  };

  return (
    <button
      className={`party-star party-star-${index} ${opened ? "is-opened" : ""}`}
      style={starStyle}
      onClick={onClick}
      aria-label={`Birthday star ${index + 1}`}
    >
      <span>✦</span>
    </button>
  );
}

function GhostParty({ onNext }) {
  const [partyScene, setPartyScene] = React.useState(0);
  const [cut, setCut] = React.useState(false);
  const [openedStar, setOpenedStar] = React.useState(null);
  const [finishedStars, setFinishedStars] = React.useState(false);

  const partyMessages = [
    { text: "For every time you made me laugh.", image: "/memories/memory-01.png" },
    { text: "For every stupid memory.", image: "/memories/memory-02.png" },
    { text: "For all the days still waiting for us.", image: "/memories/memory-03.png" },
    { text: "For the little things we never planned.", image: null },
    { text: "For all our completely unnecessary chaos.", image: null },
    { text: "For the memories we keep collecting.", image: "/memories/memory-04.png" },
    { text: "For every random conversation.", image: null },
    { text: "For every 'brooo' moment.", image: null },
    { text: "For every laugh that came out of nowhere.", image: null },
    { text: "For the days that somehow became memories.", image: null },
    { text: "For every tiny win.", image: null },
    { text: "For every dramatic moment.", image: null },
    { text: "For every silly plan.", image: null },
    { text: "For every memory still waiting.", image: null },
    { text: "For every time we showed up.", image: null },
    { text: "For every little bit of us.", image: null },
    { text: "For all the things still to come.", image: null },
    { text: "For another year of being you.", image: null },
    { text: "For the stories we haven't lived yet.", image: null },
    { text: "And for you. Always.", image: "/memories/memory-05.png" },
  ];

  useEffect(() => {
    /*
      Opening sequence:
      0 = room waking up
      1 = party already happening
      2 = SHE IS HERE — everything freezes
      3 = SURPRISE
      4 = party resumes
      5 = cake darkness
      6 = candles/cake reveal
    */
    const timers = [
      setTimeout(() => setPartyScene(1), 1800),
      setTimeout(() => setPartyScene(2), 6500),
      setTimeout(() => setPartyScene(3), 9000),
      setTimeout(() => setPartyScene(4), 12200),
      setTimeout(() => setPartyScene(5), 16200),
      setTimeout(() => setPartyScene(6), 18800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!cut) return;

    const timer = setTimeout(() => setFinishedStars(true), 6200);
    return () => clearTimeout(timer);
  }, [cut]);

  const handleStar = (index) => {
    setOpenedStar(index);
  };

  return (
    <>
      <style>{`
        /* =====================================================
           PAGE 5 — PARTY ROOM
           ===================================================== */

        .ghost-party-page {
          --gold: #d8ad55;
          --gold-bright: #f2d58d;
          --cream: #f6edcf;
          --black: #030303;
          --wine: #15100a;

          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 46%, rgba(184, 139, 54, .16), transparent 34%),
            radial-gradient(circle at 50% 100%, rgba(174, 122, 35, .09), transparent 35%),
            #030303;
          color: var(--cream);
          font-family: Georgia, "Times New Roman", serif;
        }

        .ghost-party-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -4;
          background:
            linear-gradient(90deg,
              rgba(0,0,0,.98) 0%,
              rgba(0,0,0,.42) 15%,
              transparent 28%,
              transparent 72%,
              rgba(0,0,0,.42) 85%,
              rgba(0,0,0,.98) 100%
            ),
            repeating-linear-gradient(
              90deg,
              #030303 0 18px,
              #0b0805 19px 38px,
              #020202 39px 62px
            );
        }

        /* Velvet curtain shapes */
        .party-curtain {
          position: absolute;
          top: 0;
          width: 25%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0,0,0,.95), rgba(24,17,10,.55), rgba(0,0,0,.95)),
            repeating-linear-gradient(90deg, rgba(255,255,255,.025) 0 8px, transparent 8px 21px);
          box-shadow: inset 0 0 40px rgba(0,0,0,.9);
        }

        .party-curtain-left {
          left: -5%;
          transform: skewY(1deg);
        }

        .party-curtain-right {
          right: -5%;
          transform: skewY(-1deg);
        }

        /* Chandelier */
        .party-chandelier {
          position: absolute;
          top: -12px;
          left: 50%;
          width: 160px;
          height: 125px;
          transform: translateX(-50%);
          z-index: 3;
          opacity: .92;
          filter: drop-shadow(0 0 13px rgba(232,186,79,.32));
        }

        .chandelier-chain {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 38px;
          background: linear-gradient(#caa04e, transparent);
        }

        .chandelier-ring {
          position: absolute;
          left: 50%;
          top: 31px;
          width: 90px;
          height: 90px;
          transform: translateX(-50%);
          border: 2px solid rgba(216,173,85,.75);
          border-radius: 50%;
        }

        .chandelier-ring::before {
          content: "";
          position: absolute;
          inset: 15px;
          border: 1px solid rgba(216,173,85,.42);
          border-radius: 50%;
        }

        .chandelier-candle {
          position: absolute;
          width: 8px;
          height: 25px;
          background: linear-gradient(#fff4cf, #b88a3a);
          border-radius: 4px;
          box-shadow: 0 0 9px rgba(243,202,103,.38);
        }

        .chandelier-candle:nth-child(2) { left: 42px; top: 69px; }
        .chandelier-candle:nth-child(3) { left: 75px; top: 87px; }
        .chandelier-candle:nth-child(4) { right: 42px; top: 69px; }

        .chandelier-flame {
          position: absolute;
          top: -10px;
          left: 1px;
          width: 6px;
          height: 10px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          background: #f5d47e;
          box-shadow: 0 0 10px #e8b94e;
          animation: partyFlicker 1.1s infinite alternate;
        }

        /* Header */
        .party-header {
          position: absolute;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          width: 90%;
          text-align: center;
          pointer-events: none;
        }

        .party-kicker {
          margin: 0 0 5px;
          color: var(--gold);
          font-size: 10px;
          letter-spacing: .28em;
          text-transform: uppercase;
        }

        .party-title {
          margin: 0;
          font-size: clamp(25px, 7vw, 39px);
          letter-spacing: .12em;
          color: var(--cream);
          text-shadow: 0 0 20px rgba(224,178,75,.15);
        }

        .party-subtitle {
          margin: 6px 0 0;
          color: rgba(216,173,85,.72);
          font-size: 9px;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        /* Decorations */
        .party-balloon {
          position: absolute;
          z-index: 2;
          width: 34px;
          height: 43px;
          border: 1px solid rgba(216,173,85,.8);
          border-radius: 50% 50% 48% 48%;
          background:
            radial-gradient(circle at 35% 27%, rgba(255,255,255,.45), transparent 9%),
            linear-gradient(135deg, #f1d18a, #8f6629 75%);
          box-shadow: 0 0 12px rgba(216,173,85,.13);
          animation: balloonFloat 3.2s ease-in-out infinite;
        }

        .party-balloon::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -46px;
          width: 1px;
          height: 47px;
          background: rgba(216,173,85,.5);
        }

        .party-balloon-a { left: 9%; top: 22%; }
        .party-balloon-b { right: 10%; top: 18%; animation-delay: -.8s; }
        .party-balloon-c { left: 18%; bottom: 22%; animation-delay: -1.4s; }
        .party-balloon-d { right: 17%; bottom: 27%; animation-delay: -2s; }

        .party-ribbon {
          position: absolute;
          z-index: 1;
          width: 125px;
          height: 15px;
          border-top: 2px solid rgba(216,173,85,.48);
          border-radius: 50%;
          opacity: .65;
        }

        .party-ribbon-a {
          left: -18px;
          top: 37%;
          transform: rotate(14deg);
        }

        .party-ribbon-b {
          right: -18px;
          top: 49%;
          transform: rotate(-14deg);
        }

        .party-star-speck {
          position: absolute;
          z-index: 1;
          color: rgba(235,194,103,.72);
          font-size: 10px;
          animation: twinkle 1.8s ease-in-out infinite;
        }

        .speck-1 { left: 28%; top: 18%; }
        .speck-2 { left: 73%; top: 26%; animation-delay: -.5s; }
        .speck-3 { left: 12%; top: 62%; animation-delay: -1s; }
        .speck-4 { right: 12%; top: 65%; animation-delay: -.3s; }
        .speck-5 { left: 45%; top: 28%; animation-delay: -.8s; }

        /* Ghost positions */
        .party-crew {
          position: absolute;
          inset: 0;
          z-index: 8;
          pointer-events: none;
          transition: opacity .7s ease;
        }

        .party-crew-frozen .party-ghost {
          animation-play-state: paused !important;
        }

        .party-ghost {
          position: absolute;
          width: 62px;
          height: 90px;
          transition: transform .7s ease, opacity .7s ease;
          filter: drop-shadow(0 5px 9px rgba(0,0,0,.6));
        }

        .party-ghost-body {
          position: absolute;
          left: 9px;
          bottom: 8px;
          width: 44px;
          height: 57px;
          background: var(--cream);
          border: 1px solid #b9934c;
          border-radius: 50% 50% 38% 38%;
          box-shadow: 0 0 12px rgba(235,208,145,.12);
        }

        .party-ghost-body::after {
          content: "";
          position: absolute;
          left: -1px;
          right: -1px;
          bottom: -6px;
          height: 20px;
          background: var(--cream);
          border-left: 1px solid #b9934c;
          border-right: 1px solid #b9934c;
          border-radius: 0 0 50% 50%;
          clip-path: polygon(0 0, 24% 60%, 50% 15%, 76% 60%, 100% 0, 100% 100%, 0 100%);
        }

        .party-eye {
          position: absolute;
          top: 20px;
          width: 6px;
          height: 10px;
          border-radius: 50%;
          background: #111;
        }

        .party-eye-left { left: 12px; }
        .party-eye-right { right: 12px; }

        .party-mouth {
          position: absolute;
          left: 50%;
          top: 33px;
          transform: translateX(-50%);
          color: #111;
          font: 7px Arial, sans-serif;
          white-space: nowrap;
        }

        .party-arm {
          position: absolute;
          top: 49px;
          width: 29px;
          height: 9px;
          border: 2px solid var(--cream);
          background: var(--cream);
          border-radius: 50%;
          z-index: -1;
        }

        .party-arm-left { left: -6px; transform: rotate(26deg); }
        .party-arm-right { right: -6px; transform: rotate(-26deg); }

        .party-foot {
          position: absolute;
          bottom: 0;
          width: 22px;
          height: 10px;
          background: var(--cream);
          border: 1px solid #b9934c;
          border-radius: 50%;
        }

        .party-foot-left { left: 5px; transform: rotate(-8deg); }
        .party-foot-right { right: 5px; transform: rotate(8deg); }

        .party-ghost-dancer {
          left: 13%;
          top: 43%;
          animation: partyDance .85s ease-in-out infinite alternate;
        }

        .party-ghost-balloon {
          left: 29%;
          top: 51%;
          animation: partyBob 1.8s ease-in-out infinite;
        }

        .party-ghost-decorator {
          left: 66%;
          top: 39%;
          animation: partyDecorate 1.2s ease-in-out infinite alternate;
        }

        .party-ghost-present {
          right: 9%;
          top: 50%;
          animation: partyPresent .9s ease-in-out infinite alternate;
        }

        .party-ghost-cake {
          left: 46%;
          top: 61%;
          animation: partySit 2s ease-in-out infinite;
        }

        .party-ghost-candle {
          left: 78%;
          top: 69%;
          animation: partyFlickerGhost 1.1s ease-in-out infinite alternate;
        }

        .party-ghost-useless {
          left: 44%;
          top: 36%;
          animation: partyUseless 3s ease-in-out infinite;
        }

        .party-balloon-bundle {
          position: absolute;
          left: 16px;
          top: -28px;
          width: 54px;
          height: 48px;
          z-index: 4;
        }

        .party-balloon-bundle i {
          position: absolute;
          width: 20px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f0d38c, #866027);
          border: 1px solid #d7ad57;
        }

        .party-balloon-bundle i:nth-child(1) { left: 0; top: 12px; }
        .party-balloon-bundle i:nth-child(2) { left: 16px; top: 0; }
        .party-balloon-bundle i:nth-child(3) { left: 31px; top: 13px; }

        .party-giant-present {
          position: absolute;
          left: -8px;
          top: -10px;
          width: 76px;
          height: 61px;
          background: linear-gradient(135deg, #111, #30200c);
          border: 2px solid #d2a650;
          border-radius: 5px;
          z-index: 5;
          box-shadow: 0 0 12px rgba(215,169,79,.12);
        }

        .party-giant-present b {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #e6c67e;
          font-size: 18px;
        }

        .present-ribbon-v {
          position: absolute;
          left: 50%;
          top: 0;
          width: 11px;
          height: 100%;
          transform: translateX(-50%);
          background: #c99b40;
        }

        .present-ribbon-h {
          position: absolute;
          left: 0;
          top: 25px;
          width: 100%;
          height: 10px;
          background: #c99b40;
        }

        .party-mini-cake {
          position: absolute;
          left: 7px;
          top: -18px;
          width: 49px;
          height: 29px;
          z-index: 5;
          background: linear-gradient(#f0dfb5, #8d652b);
          border: 1px solid #d5ad59;
          border-radius: 5px 5px 8px 8px;
        }

        .party-mini-cake::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 100%;
          height: 4px;
          background: #cda24a;
        }

        .party-mini-cake span {
          position: absolute;
          top: -9px;
          width: 3px;
          height: 9px;
          background: #f1e3bd;
        }

        .party-mini-cake span:nth-child(1) { left: 11px; }
        .party-mini-cake span:nth-child(2) { left: 23px; }
        .party-mini-cake span:nth-child(3) { right: 10px; }

        .party-candle {
          position: absolute;
          left: 25px;
          top: -22px;
          width: 9px;
          height: 31px;
          border: 1px solid #cda24b;
          background: linear-gradient(#fff3cf, #9c7232);
          border-radius: 4px;
          z-index: 6;
        }

        .party-flame {
          position: absolute;
          left: 1px;
          top: -12px;
          width: 7px;
          height: 12px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          background: #f3d37e;
          box-shadow: 0 0 13px #e6ad3c;
        }

        .party-ribbon-prop {
          position: absolute;
          left: -22px;
          top: -8px;
          width: 105px;
          height: 42px;
          z-index: 5;
        }

        .party-ribbon-prop span {
          position: absolute;
          width: 75px;
          height: 10px;
          border-top: 3px solid #d2a34c;
          border-radius: 50%;
        }

        .party-ribbon-prop span:first-child {
          left: 0;
          top: 4px;
          transform: rotate(19deg);
        }

        .party-ribbon-prop span:last-child {
          right: 0;
          top: 18px;
          transform: rotate(-23deg);
        }

        .party-tape {
          position: absolute;
          right: -2px;
          top: -18px;
          width: 24px;
          height: 35px;
          background: #f0dfb7;
          transform: rotate(11deg);
          opacity: .9;
        }

        /* Freeze moment */
        .party-freeze .party-ghost-dancer { transform: rotate(-18deg) translateY(-8px); }
        .party-freeze .party-ghost-balloon { transform: rotate(12deg); }
        .party-freeze .party-ghost-decorator { transform: rotate(16deg); }
        .party-freeze .party-ghost-present { transform: rotate(-8deg) translateY(4px); }
        .party-freeze .party-ghost-cake { transform: rotate(0); }
        .party-freeze .party-ghost-candle { transform: rotate(-12deg); }
        .party-freeze .party-ghost-useless { transform: scale(1.08); }

        .party-look-text {
          position: absolute;
          left: 50%;
          top: 58%;
          z-index: 30;
          width: 90%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: var(--cream);
          opacity: 0;
          pointer-events: none;
          transition: opacity .35s ease;
        }

        .party-freeze .party-look-text {
          opacity: 1;
        }

        .party-look-text p {
          margin: 5px 0;
          font-size: clamp(13px, 4vw, 19px);
          letter-spacing: .04em;
          text-shadow: 0 2px 10px #000;
        }

        .party-look-text p:first-child {
          color: var(--gold);
        }

        .party-surprise {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 40;
          transform: translate(-50%, -50%) scale(.65);
          opacity: 0;
          pointer-events: none;
          text-align: center;
          white-space: nowrap;
          transition: opacity .4s ease, transform .5s cubic-bezier(.2,1.4,.3,1);
        }

        .party-surprise.show {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .party-surprise h2 {
          margin: 0;
          color: var(--gold-bright);
          font-size: clamp(34px, 12vw, 64px);
          letter-spacing: .08em;
          text-shadow:
            0 0 8px rgba(241,205,116,.65),
            0 0 32px rgba(213,157,50,.35);
        }

        .party-surprise p {
          margin: 8px 0 0;
          color: var(--cream);
          font-size: 11px;
          letter-spacing: .22em;
        }

        .party-confetti {
          position: absolute;
          inset: 0;
          z-index: 35;
          pointer-events: none;
          overflow: hidden;
        }

        .confetti-piece {
          position: absolute;
          top: -25px;
          width: 6px;
          height: 16px;
          background: var(--gold);
          opacity: 0;
        }

        .party-confetti.active .confetti-piece {
          opacity: .9;
          animation: confettiFall var(--fall) linear forwards;
          animation-delay: var(--delay);
        }

        /* Cake reveal */
        .party-cake-stage {
          position: absolute;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,.76);
          opacity: 0;
          pointer-events: none;
          transition: opacity .8s ease;
        }

        .party-cake-stage.show {
          opacity: 1;
          pointer-events: auto;
        }

        .party-cake-stage::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 47%;
          width: 270px;
          height: 270px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(213,163,69,.13), transparent 65%);
          pointer-events: none;
        }

        .birthday-cake {
          position: relative;
          width: min(245px, 66vw);
          height: 235px;
          transform: translateY(20px) scale(.86);
          transition: transform .8s cubic-bezier(.2,1.25,.3,1);
          filter: drop-shadow(0 15px 25px rgba(0,0,0,.6));
        }

        .party-cake-stage.show .birthday-cake {
          transform: translateY(0) scale(1);
        }

        .cake-top {
          position: absolute;
          left: 50%;
          top: 70px;
          width: 195px;
          height: 52px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 35%, #f0ddb0 0 9%, #2b1d0b 10% 72%, #0c0905 73%);
          border: 2px solid #d3a54d;
          z-index: 4;
        }

        .cake-top::after {
          content: "20";
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #f3d589;
          font-size: 34px;
          font-weight: bold;
          letter-spacing: .08em;
          text-shadow: 0 0 12px rgba(236,191,89,.5);
        }

        .cake-body {
          position: absolute;
          left: 50%;
          top: 91px;
          width: 195px;
          height: 83px;
          transform: translateX(-50%);
          border: 2px solid #c89b42;
          border-top: 0;
          border-radius: 0 0 16px 16px;
          background:
            linear-gradient(#171109 0 42%, #0b0906 43%),
            #0b0906;
          box-shadow: inset 0 -16px 0 rgba(219,171,77,.12);
          z-index: 3;
        }

        .cake-body::before {
          content: "";
          position: absolute;
          left: 13px;
          right: 13px;
          top: 13px;
          height: 5px;
          background: #e1bd6e;
          box-shadow:
            0 24px 0 rgba(205,161,72,.7),
            0 49px 0 rgba(205,161,72,.35);
        }

        .cake-plate {
          position: absolute;
          left: 50%;
          bottom: 31px;
          width: 235px;
          height: 24px;
          transform: translateX(-50%);
          border: 2px solid #d0a24a;
          border-radius: 50%;
          background: #0d0a06;
          box-shadow: 0 0 20px rgba(214,167,71,.16);
          z-index: 1;
        }

        .cake-candle {
          position: absolute;
          top: 24px;
          width: 10px;
          height: 53px;
          border: 1px solid #cfa34f;
          border-radius: 4px 4px 2px 2px;
          background: repeating-linear-gradient(
            135deg,
            #f1dfb5 0 7px,
            #9f7734 7px 12px
          );
          z-index: 8;
        }

        .cake-candle:nth-child(1) { left: 67px; }
        .cake-candle:nth-child(2) { left: 96px; }
        .cake-candle:nth-child(3) { left: 125px; }
        .cake-candle:nth-child(4) { left: 154px; }

        .cake-candle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -15px;
          width: 9px;
          height: 15px;
          transform: translateX(-50%) rotate(-45deg);
          border-radius: 50% 50% 50% 0;
          background: #f1ce69;
          box-shadow: 0 0 12px rgba(239,192,75,.8);
          animation: cakeFlame 1s ease-in-out infinite alternate;
        }

        .cake-decor {
          position: absolute;
          width: 13px;
          height: 13px;
          border: 1px solid #e0bc6b;
          transform: rotate(45deg);
          z-index: 7;
          background: #161008;
        }

        .cake-decor:nth-child(1) { left: 45px; top: 120px; }
        .cake-decor:nth-child(2) { right: 45px; top: 120px; }
        .cake-decor:nth-child(3) { left: 83px; top: 147px; }
        .cake-decor:nth-child(4) { right: 83px; top: 147px; }

        .cake-caption {
          position: absolute;
          bottom: 17%;
          left: 50%;
          transform: translateX(-50%);
          color: var(--cream);
          text-align: center;
          font-size: 12px;
          letter-spacing: .12em;
          width: 90%;
        }

        .cake-caption strong {
          display: block;
          color: var(--gold-bright);
          font-size: 17px;
          margin-bottom: 5px;
        }

        .cut-button {
          position: absolute;
          left: 50%;
          bottom: 7%;
          transform: translateX(-50%);
          min-width: 210px;
          padding: 15px 25px;
          border: 1px solid var(--gold);
          background: rgba(4,4,4,.86);
          color: var(--gold-bright);
          font-family: Georgia, serif;
          letter-spacing: .18em;
          font-size: 11px;
          cursor: pointer;
          box-shadow: 0 0 24px rgba(211,165,72,.12);
          transition: transform .25s ease, background .25s ease;
        }

        .cut-button:hover,
        .cut-button:active {
          transform: translateX(-50%) scale(1.03);
          background: rgba(184,139,54,.12);
        }

        /* Stars from cake */
        .party-star-field {
          position: absolute;
          inset: 0;
          z-index: 65;
          pointer-events: none;
        }

        .party-star {
          position: absolute;
          width: 42px;
          height: 42px;
          border: 0;
          background: transparent;
          color: var(--gold-bright);
          cursor: pointer;
          pointer-events: auto;
          opacity: 0;
          transform: translate(-50%, -50%) scale(.15) rotate(0deg);
          animation: starBurst 1.1s cubic-bezier(.1,1.4,.25,1) forwards;
          animation-delay: calc(var(--star-i) * 80ms);
          filter: drop-shadow(0 0 9px rgba(234,194,91,.7));
        }

        .party-star span {
          display: block;
          font-size: 27px;
          animation: starSpin 3s linear infinite;
        }

        .party-star.is-opened {
          z-index: 100;
          filter: drop-shadow(0 0 18px rgba(242,211,133,.95));
        }

        .party-star-0 { left: 12%; top: 30%; }
        .party-star-1 { left: 26%; top: 20%; }
        .party-star-2 { left: 42%; top: 17%; }
        .party-star-3 { left: 59%; top: 20%; }
        .party-star-4 { left: 78%; top: 29%; }
        .party-star-5 { left: 88%; top: 43%; }
        .party-star-6 { left: 77%; top: 57%; }
        .party-star-7 { left: 60%; top: 68%; }
        .party-star-8 { left: 42%; top: 73%; }
        .party-star-9 { left: 24%; top: 67%; }
        .party-star-10 { left: 11%; top: 56%; }
        .party-star-11 { left: 18%; top: 43%; }
        .party-star-12 { left: 33%; top: 34%; }
        .party-star-13 { left: 52%; top: 31%; }
        .party-star-14 { left: 68%; top: 38%; }
        .party-star-15 { left: 68%; top: 52%; }
        .party-star-16 { left: 50%; top: 58%; }
        .party-star-17 { left: 32%; top: 54%; }
        .party-star-18 { left: 37%; top: 44%; }
        .party-star-19 { left: 55%; top: 45%; }

        .star-message {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 110;
          width: min(340px, 84vw);
          padding: 22px 18px;
          transform: translate(-50%, -50%) scale(.9);
          opacity: 0;
          pointer-events: none;
          border: 1px solid rgba(215,173,85,.75);
          background:
            linear-gradient(rgba(4,4,4,.93), rgba(11,8,4,.96));
          box-shadow:
            0 20px 70px rgba(0,0,0,.8),
            0 0 28px rgba(215,173,85,.12);
          text-align: center;
          transition: opacity .35s ease, transform .35s ease;
        }

        .star-message.show {
          opacity: 1;
          pointer-events: auto;
          transform: translate(-50%, -50%) scale(1);
        }

        .star-message-label {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        .star-message p {
          margin: 13px 0;
          color: var(--cream);
          font-size: 17px;
          line-height: 1.55;
        }

        .star-message img {
          display: block;
          width: 100%;
          max-height: 190px;
          object-fit: cover;
          border: 5px solid #e6d2a3;
          box-shadow: 0 8px 25px rgba(0,0,0,.6);
        }

        .star-close {
          margin-top: 12px;
          padding: 8px 18px;
          border: 1px solid rgba(215,173,85,.7);
          background: transparent;
          color: var(--gold-bright);
          font-family: Georgia, serif;
          font-size: 9px;
          letter-spacing: .18em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .party-ending {
          position: absolute;
          left: 50%;
          bottom: 5%;
          z-index: 120;
          transform: translateX(-50%) translateY(15px);
          width: 90%;
          text-align: center;
          opacity: 0;
          transition: opacity .6s ease, transform .6s ease;
          pointer-events: none;
        }

        .party-ending.show {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }

        .party-ending p {
          margin: 0 0 12px;
          color: var(--cream);
          font-size: 12px;
        }

        .party-ending button {
          padding: 12px 30px;
          border: 1px solid var(--gold);
          background: #070604;
          color: var(--gold-bright);
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: .22em;
          cursor: pointer;
        }

        @keyframes partyDance {
          from { transform: translateY(0) rotate(-12deg); }
          to { transform: translateY(-14px) rotate(13deg); }
        }

        @keyframes partyBob {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-9px) rotate(5deg); }
        }

        @keyframes partyDecorate {
          from { transform: rotate(-8deg) translateY(0); }
          to { transform: rotate(10deg) translateY(-7px); }
        }

        @keyframes partyPresent {
          from { transform: translateY(0) rotate(3deg); }
          to { transform: translateY(-8px) rotate(-5deg); }
        }

        @keyframes partySit {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes partyFlickerGhost {
          from { transform: translateY(0) rotate(-2deg); }
          to { transform: translateY(-5px) rotate(3deg); }
        }

        @keyframes partyUseless {
          0%, 100% { transform: rotate(0); }
          45% { transform: rotate(0); }
          50% { transform: rotate(8deg); }
          55% { transform: rotate(-8deg); }
        }

        @keyframes balloonFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }

        @keyframes partyFlicker {
          from { opacity: .65; transform: scale(.92) rotate(-4deg); }
          to { opacity: 1; transform: scale(1.08) rotate(5deg); }
        }

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(110vh) rotate(680deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: .25; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        @keyframes cakeFlame {
          from { transform: translateX(-50%) rotate(-48deg) scale(.9); }
          to { transform: translateX(-50%) rotate(-40deg) scale(1.08); }
        }

        @keyframes starBurst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.05) rotate(-80deg);
          }
          65% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2) rotate(20deg);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
        }

        @keyframes starSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(12deg) scale(1.12); }
        }

        @media (max-width: 420px) {
          .party-ghost {
            transform: scale(.82);
          }

          .party-ghost-dancer { left: 4%; }
          .party-ghost-balloon { left: 20%; }
          .party-ghost-decorator { left: 64%; }
          .party-ghost-present { right: 1%; }
          .party-ghost-cake { left: 43%; }
          .party-ghost-candle { left: 73%; }

          .party-star {
            width: 36px;
            height: 36px;
          }

          .party-star span {
            font-size: 23px;
          }

          .party-title {
            font-size: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ghost-party-page *,
          .ghost-party-page *::before,
          .ghost-party-page *::after {
            animation-duration: .001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .001ms !important;
          }
        }
      `}</style>

      <main className={`ghost-party-page party-scene-${partyScene} ${partyScene === 2 ? "party-freeze" : ""}`}>

        <div className="party-curtain party-curtain-left" />
        <div className="party-curtain party-curtain-right" />

        <div className="party-chandelier" aria-hidden="true">
          <div className="chandelier-chain" />
          <div className="chandelier-ring" />
          <div className="chandelier-candle"><span className="chandelier-flame" /></div>
          <div className="chandelier-candle"><span className="chandelier-flame" /></div>
          <div className="chandelier-candle"><span className="chandelier-flame" /></div>
        </div>

        <header className="party-header">
          <p className="party-kicker">B.G.D. presents</p>
          <h1 className="party-title">THE GHOST PARTY</h1>
          <p className="party-subtitle">attendance: highly questionable</p>
        </header>

        <div className="party-balloon party-balloon-a" />
        <div className="party-balloon party-balloon-b" />
        <div className="party-balloon party-balloon-c" />
        <div className="party-balloon party-balloon-d" />

        <div className="party-ribbon party-ribbon-a" />
        <div className="party-ribbon party-ribbon-b" />

        <span className="party-star-speck speck-1">✦</span>
        <span className="party-star-speck speck-2">✦</span>
        <span className="party-star-speck speck-3">✧</span>
        <span className="party-star-speck speck-4">✦</span>
        <span className="party-star-speck speck-5">✧</span>

        <div className={`party-crew ${partyScene === 2 ? "party-crew-frozen" : ""}`}>
          <PartyGhost type="dancer" />
          <PartyGhost type="balloon" />
          <PartyGhost type="decorator" />
          <PartyGhost type="present" />
          <PartyGhost type="cake" />
          <PartyGhost type="candle" />
          <PartyGhost type="useless" />
        </div>

        {partyScene === 2 && (
          <div className="party-look-text">
            <p>"...OH."</p>
            <p>"SHE'S HERE."</p>
            <p>"EVERYBODY LOOK NORMAL."</p>
          </div>
        )}

        <div className={`party-surprise ${partyScene === 3 ? "show" : ""}`}>
          <h2>SURPRISE!!!</h2>
          <p>HAPPY BIRTHDAY, BHUVANA ✦</p>
        </div>

        <div className={`party-confetti ${partyScene === 3 || cut ? "active" : ""}`}>
          {Array.from({ length: 42 }).map((_, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                left: `${(i * 37) % 100}%`,
                "--fall": `${2.2 + (i % 7) * .35}s`,
                "--delay": `${(i % 10) * .06}s`,
                transform: `rotate(${i * 17}deg)`,
              }}
            />
          ))}
        </div>

        <div className={`party-cake-stage ${partyScene >= 5 ? "show" : ""}`}>
          {!cut && (
            <>
              <div className="birthday-cake">
                <div className="cake-candle" />
                <div className="cake-candle" />
                <div className="cake-candle" />
                <div className="cake-candle" />
                <div className="cake-top" />
                <div className="cake-body" />
                <div className="cake-decor" />
                <div className="cake-decor" />
                <div className="cake-decor" />
                <div className="cake-decor" />
                <div className="cake-plate" />
              </div>

              <div className="cake-caption">
                <strong>This one's yours.</strong>
                the ghost department may have overdone it.
              </div>

              <button
                className="cut-button"
                onClick={() => setCut(true)}
              >
                CUT THE CAKE 🎂
              </button>
            </>
          )}
        </div>

        {cut && (
          <div className="party-star-field">
            {partyMessages.map((_, index) => (
              <PartyStar
                key={index}
                index={index}
                opened={openedStar === index}
                onClick={() => handleStar(index)}
              />
            ))}
          </div>
        )}

        {openedStar !== null && (
          <div className="star-message show">
            <div className="star-message-label">
              STAR {openedStar + 1} / 20
            </div>

            <p>{partyMessages[openedStar].text}</p>

            {partyMessages[openedStar].image && (
              <img
                src={partyMessages[openedStar].image}
                alt=""
              />
            )}

            <button
              className="star-close"
              onClick={() => setOpenedStar(null)}
            >
              BACK TO THE PARTY
            </button>
          </div>
        )}

        <div className={`party-ending ${finishedStars ? "show" : ""}`}>
          <p>
            Okay... we might have gotten a little carried away.
          </p>

          <button onClick={onNext}>
            THERE'S MORE →
          </button>
        </div>

      </main>
    </>
  );
}


/* =========================================================
   PAGE 7 — YOUR VIDEO
   Emotional peak. Minimal, cinematic, no distractions.
========================================================= */
function YourVideo({ onNext }) {
  const [intro, setIntro] = useState(true);
  const [ended, setEnded] = useState(false);
  const videoRef = React.useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (intro || ended || !videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, [intro, ended]);

  return (
    <main className={`your-video-page ${ended ? "video-ended" : ""}`}>
      <style>{`
        /* =====================================================
           PAGE 7 — YOUR VIDEO
           Keep this page intentionally minimal.
        ===================================================== */
        .your-video-page {
          --video-gold: #d7ae5b;
          --video-bright: #f5df9f;
          --video-cream: #f4e9c8;
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          isolation: isolate;
          background: #020202;
          color: var(--video-cream);
          font-family: Georgia, "Times New Roman", serif;
        }

        .video-film-grain {
          position: absolute;
          inset: -50%;
          z-index: 10;
          pointer-events: none;
          opacity: .055;
          background-image:
            radial-gradient(rgba(255,255,255,.8) .5px, transparent .7px),
            radial-gradient(rgba(214,171,87,.6) .5px, transparent .8px);
          background-size: 5px 5px, 8px 8px;
          animation: videoGrain 0.22s steps(2) infinite;
        }

        .video-vignette {
          position: absolute;
          inset: 0;
          z-index: 8;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 48%, rgba(0,0,0,.58) 100%);
        }

        .video-intro {
          position: absolute;
          z-index: 20;
          left: 50%;
          top: 50%;
          width: min(88vw, 430px);
          transform: translate(-50%, -50%);
          text-align: center;
          letter-spacing: .18em;
          animation: archiveIntro 3.2s ease forwards;
        }

        .video-intro-line {
          font-size: clamp(10px, 2.5vw, 14px);
          color: var(--video-gold);
          margin-bottom: 18px;
        }

        .video-intro-file {
          font-size: clamp(22px, 6vw, 34px);
          color: var(--video-cream);
          letter-spacing: .24em;
          margin-left: .24em;
          margin-bottom: 12px;
        }

        .video-intro-status {
          font-size: clamp(8px, 2vw, 11px);
          color: rgba(244,233,200,.65);
          letter-spacing: .12em;
          line-height: 1.7;
        }

        .video-intro-rule {
          width: 0;
          height: 1px;
          margin: 22px auto 0;
          background: var(--video-gold);
          animation: introRule 2s .35s ease forwards;
        }

        .video-frame {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(92vw, 520px);
          height: min(94svh, 820px);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border: 1px solid rgba(215,174,91,.48);
          box-shadow:
            0 0 0 1px rgba(215,174,91,.08) inset,
            0 0 45px rgba(183,132,44,.10);
          background: rgba(0,0,0,.72);
          opacity: 0;
        }

        .video-frame-waiting {
          opacity: 0;
        }

        .video-frame-live {
          animation: videoFrameIn 1.15s ease forwards;
        }

        .birthday-video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
          border: 1px solid rgba(244,233,200,.10);
        }

        .film-corner {
          position: absolute;
          width: 25px;
          height: 25px;
          z-index: 4;
          pointer-events: none;
          border-color: var(--video-gold);
          border-style: solid;
          opacity: .9;
        }

        .film-corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .film-corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .film-corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .film-corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        .video-page-mark {
          position: absolute;
          top: max(16px, env(safe-area-inset-top));
          left: 50%;
          transform: translateX(-50%);
          z-index: 25;
          color: rgba(215,174,91,.56);
          font-size: 8px;
          letter-spacing: .28em;
          white-space: nowrap;
        }

        .video-ending {
          position: absolute;
          inset: 0;
          z-index: 30;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #020202;
          animation: endingFade .9s ease forwards;
        }

        .ending-dot {
          color: var(--video-gold);
          font-size: 10px;
          margin-bottom: 34px;
          animation: endingSpark 1.4s ease-in-out infinite;
        }

        .ending-line {
          margin: 0;
          opacity: 0;
        }

        .ending-line-one {
          font-size: 17px;
          letter-spacing: .22em;
          color: var(--video-gold);
          animation: endingText .9s .4s ease forwards;
        }

        .ending-line-two {
          margin-top: 13px;
          font-size: 11px;
          letter-spacing: .11em;
          color: rgba(244,233,200,.7);
          animation: endingText .9s 1.8s ease forwards;
        }

        .one-last-thing {
          margin-top: 52px;
          width: min(76vw, 310px);
          min-height: 54px;
          border: 1px solid rgba(215,174,91,.7);
          background: transparent;
          color: var(--video-cream);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 10px;
          letter-spacing: .23em;
          cursor: pointer;
          opacity: 0;
          animation: endingButton 1s 3.2s ease forwards;
        }

        .one-last-thing span {
          display: inline-block;
          margin-left: 12px;
          color: var(--video-gold);
          transition: transform .25s ease;
        }

        .one-last-thing:hover span,
        .one-last-thing:active span {
          transform: translateX(5px);
        }

        @keyframes archiveIntro {
          0% { opacity: 0; transform: translate(-50%, -46%); }
          15% { opacity: 1; transform: translate(-50%, -50%); }
          78% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -54%); }
        }

        @keyframes introRule {
          to { width: 130px; }
        }

        @keyframes videoFrameIn {
          from { opacity: 0; transform: translate(-50%, -47%) scale(.985); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes endingFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes endingText {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes endingButton {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes endingSpark {
          0%,100% { opacity: .45; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        @keyframes videoGrain {
          0% { transform: translate(0,0); }
          25% { transform: translate(2%,-1%); }
          50% { transform: translate(-1%,2%); }
          75% { transform: translate(1%,1%); }
          100% { transform: translate(-2%,-1%); }
        }

        @media (max-width: 430px) {
          .video-frame {
            width: 94vw;
            height: 78svh;
            padding: 7px;
          }
          .video-intro { width: 86vw; }
          .video-page-mark { font-size: 7px; }
        }
      `}</style>

      <div className="video-film-grain" aria-hidden="true" />
      <div className="video-vignette" aria-hidden="true" />

      {intro && !ended && (
        <section className="video-intro" aria-label="Archive footage">
          <div className="video-intro-line">ARCHIVE FOOTAGE</div>
          <div className="video-intro-file">FILE: US</div>
          <div className="video-intro-status">STATUS: TOO IMPORTANT TO DELETE</div>
          <div className="video-intro-rule" />
        </section>
      )}

      {!ended && (
        <div className={`video-frame ${intro ? "video-frame-waiting" : "video-frame-live"}`}>
          <div className="film-corner film-corner-tl" />
          <div className="film-corner film-corner-tr" />
          <div className="film-corner film-corner-bl" />
          <div className="film-corner film-corner-br" />

          <video
            ref={videoRef}
            className="birthday-video"
            src="/video/birthday-video.mp4"
            playsInline
            controls={false}
            preload="auto"
            onClick={() => {
              if (videoRef.current?.paused) {
                videoRef.current.play().catch(() => {});
              }
            }}
            onEnded={() => setEnded(true)}
            aria-label="Birthday memory video"
          />
        </div>
      )}

      {ended && (
        <section className="video-ending">
          <div className="ending-dot">✦</div>
          <p className="ending-line ending-line-one">...yeah.</p>
          <p className="ending-line ending-line-two">That one got me too.</p>
          <button className="one-last-thing" onClick={onNext}>
            ONE LAST THING <span>→</span>
          </button>
        </section>
      )}

      <div className="video-page-mark">B.G.D. · FILE 07</div>
    </main>
  );
}



/* =========================================================
   PAGE 8 — THE BETRAYAL 😂
   Final surprise. Starts almost empty, then EXPLODES.
========================================================= */
function GhostBetrayal({ onReplay }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1300),
      setTimeout(() => setPhase(2), 2900),
      setTimeout(() => setPhase(3), 4500),
      setTimeout(() => setPhase(4), 6100),
      setTimeout(() => setPhase(5), 7900),
      setTimeout(() => setPhase(6), 9400),
      setTimeout(() => setPhase(7), 11800),
      setTimeout(() => setPhase(8), 13700),
      setTimeout(() => setPhase(9), 15800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const tinyGhosts = [
    { cls: 'b-ghost-1', face: 'peek', text: 'Okayyy...' },
    { cls: 'b-ghost-2', face: 'peek', text: 'Then...' },
    { cls: 'b-ghost-3', face: 'peek', text: 'Happpyyy...' },
    { cls: 'b-ghost-4', face: 'peek', text: 'Birthdayyyy...' },
  ];

  return (
    <main className={`betrayal-page phase-${phase}`}>
      <style>{`
        .betrayal-page {
          --bg: #050505;
          --gold: #d8b25e;
          --bright: #f4df9d;
          --cream: #f7eed5;
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          background: radial-gradient(circle at 50% 55%, #111 0%, #050505 52%, #020202 100%);
          color: var(--cream);
          font-family: Georgia, 'Times New Roman', serif;
          isolation: isolate;
        }

        .betrayal-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle, transparent 40%, rgba(0,0,0,.72) 100%);
          z-index: 30;
        }

        .betrayal-stage {
          position: absolute;
          inset: 0;
          z-index: 5;
        }

        .betrayal-whisper {
          position: absolute;
          left: 50%;
          bottom: 15%;
          transform: translateX(-50%);
          color: var(--gold);
          font-size: 15px;
          letter-spacing: .18em;
          opacity: 0;
          transition: opacity .5s ease;
          white-space: nowrap;
        }

        .phase-1 .betrayal-whisper,
        .phase-2 .betrayal-whisper,
        .phase-3 .betrayal-whisper,
        .phase-4 .betrayal-whisper {
          opacity: .9;
        }

        .betrayal-peek {
          position: absolute;
          left: 50%;
          bottom: -170px;
          width: 92px;
          height: 110px;
          transform: translateX(-50%);
          opacity: 0;
          transition: bottom 1s cubic-bezier(.2,.9,.25,1), opacity .45s ease;
          z-index: 8;
        }

        .betrayal-page.phase-1 .b-ghost-1,
        .betrayal-page.phase-2 .b-ghost-1,
        .betrayal-page.phase-3 .b-ghost-1,
        .betrayal-page.phase-4 .b-ghost-1 { bottom: 5%; opacity: 1; }

        .betrayal-page.phase-2 .b-ghost-2,
        .betrayal-page.phase-3 .b-ghost-2,
        .betrayal-page.phase-4 .b-ghost-2 { bottom: 5%; opacity: 1; margin-left: 72px; }

        .betrayal-page.phase-3 .b-ghost-3,
        .betrayal-page.phase-4 .b-ghost-3 { bottom: 5%; opacity: 1; margin-left: -72px; }

        .betrayal-page.phase-4 .b-ghost-4 { bottom: 5%; opacity: 1; margin-left: 142px; }

        .betrayal-ghost-body {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 74px;
          height: 86px;
          transform: translateX(-50%);
          background: var(--cream);
          border-radius: 50px 50px 12px 12px;
          box-shadow: 0 0 24px rgba(216,178,94,.1);
        }

        .betrayal-ghost-body::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 20px;
          background: var(--cream);
          clip-path: polygon(0 0, 17% 70%, 34% 10%, 50% 70%, 67% 10%, 83% 70%, 100% 0, 100% 100%, 0 100%);
        }

        .betrayal-eye {
          position: absolute;
          top: 34px;
          width: 8px;
          height: 12px;
          border-radius: 50%;
          background: #050505;
          z-index: 2;
        }
        .betrayal-eye.left { left: 22px; }
        .betrayal-eye.right { right: 22px; }
        .betrayal-mouth {
          position: absolute;
          top: 55px;
          left: 50%;
          width: 17px;
          height: 8px;
          border-bottom: 2px solid #050505;
          border-radius: 0 0 50% 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .betrayal-caption {
          position: absolute;
          left: 50%;
          bottom: 2.5%;
          transform: translateX(-50%);
          font-size: 14px;
          letter-spacing: .1em;
          color: var(--gold);
          white-space: nowrap;
          opacity: 0;
          transition: opacity .35s ease;
          z-index: 12;
        }
        .b-ghost-1 .betrayal-caption { opacity: 1; }
        .phase-2 .b-ghost-1 .betrayal-caption,
        .phase-3 .b-ghost-1 .betrayal-caption,
        .phase-4 .b-ghost-1 .betrayal-caption { opacity: 0; }
        .phase-2 .b-ghost-2 .betrayal-caption,
        .phase-3 .b-ghost-2 .betrayal-caption,
        .phase-4 .b-ghost-2 .betrayal-caption { opacity: 1; }
        .phase-3 .b-ghost-3 .betrayal-caption,
        .phase-4 .b-ghost-3 .betrayal-caption { opacity: 1; }
        .phase-4 .b-ghost-4 .betrayal-caption { opacity: 1; }

        .betrayal-burst {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0;
          transform: scale(.65);
          transition: opacity .45s ease, transform .55s cubic-bezier(.2,1.3,.3,1);
          z-index: 15;
        }
        .phase-5 .betrayal-burst,
        .phase-6 .betrayal-burst { opacity: 1; transform: scale(1); }

        .betrayal-burst-text {
          width: 94%;
          text-align: center;
          color: var(--bright);
          text-shadow: 0 0 18px rgba(216,178,94,.25);
          font-weight: 700;
          line-height: 1.05;
          font-size: clamp(31px, 9vw, 52px);
          letter-spacing: .02em;
          transform: rotate(-2deg);
        }
        .betrayal-burst-text span { display: block; }
        .betrayal-burst-text .aunty {
          margin-top: 10px;
          font-size: clamp(26px, 7vw, 42px);
          color: var(--gold);
          letter-spacing: .04em;
        }

        .chaos-ghost {
          position: absolute;
          width: 82px;
          height: 102px;
          opacity: 0;
          z-index: 18;
          transition: opacity .4s ease;
        }
        .phase-5 .chaos-ghost,
        .phase-6 .chaos-ghost { opacity: 1; }

        .chaos-body {
          position: absolute;
          inset: 8px 7px 10px;
          background: var(--cream);
          border-radius: 48px 48px 13px 13px;
          box-shadow: 0 0 20px rgba(216,178,94,.14);
        }
        .chaos-body::after {
          content: '';
          position: absolute;
          bottom: -7px;
          left: 0;
          width: 100%;
          height: 20px;
          background: var(--cream);
          clip-path: polygon(0 0, 17% 65%, 34% 10%, 50% 70%, 67% 10%, 83% 65%, 100% 0, 100% 100%, 0 100%);
        }
        .chaos-eyes::before,
        .chaos-eyes::after {
          content: '';
          position: absolute;
          top: 39px;
          width: 9px;
          height: 13px;
          border-radius: 50%;
          background: #050505;
          z-index: 3;
        }
        .chaos-eyes::before { left: 24px; }
        .chaos-eyes::after { right: 24px; }
        .chaos-mouth {
          position: absolute;
          z-index: 3;
          left: 50%;
          top: 61px;
          width: 18px;
          height: 11px;
          border: 2px solid #050505;
          border-top: 0;
          border-radius: 0 0 50% 50%;
          transform: translateX(-50%);
        }

        .chaos-1 { left: 3%; top: 15%; transform: rotate(-17deg); animation: silly1 .72s ease-in-out infinite alternate; }
        .chaos-2 { right: 3%; top: 23%; transform: rotate(19deg); animation: silly2 .55s ease-in-out infinite alternate; }
        .chaos-3 { left: 9%; bottom: 20%; transform: rotate(13deg); animation: silly3 .63s ease-in-out infinite alternate; }
        .chaos-4 { right: 9%; bottom: 17%; transform: rotate(-13deg); animation: silly4 .8s ease-in-out infinite alternate; }
        .chaos-5 { left: 50%; top: 9%; transform: translateX(-50%) rotate(4deg); animation: silly5 .5s ease-in-out infinite alternate; }

        @keyframes silly1 { from { transform: rotate(-17deg) translateY(0); } to { transform: rotate(-3deg) translateY(-14px); } }
        @keyframes silly2 { from { transform: rotate(19deg) translateY(0); } to { transform: rotate(34deg) translateY(-11px); } }
        @keyframes silly3 { from { transform: rotate(13deg) translateY(0); } to { transform: rotate(-8deg) translateY(-13px); } }
        @keyframes silly4 { from { transform: rotate(-13deg) translateY(0); } to { transform: rotate(8deg) translateY(-15px); } }
        @keyframes silly5 { from { transform: translateX(-50%) rotate(4deg) scale(1); } to { transform: translateX(-50%) rotate(-7deg) scale(1.08); } }

        .betrayal-sign {
          position: absolute;
          z-index: 22;
          padding: 7px 10px;
          border: 1px solid var(--gold);
          color: var(--gold);
          background: rgba(5,5,5,.88);
          font-size: 11px;
          letter-spacing: .12em;
          white-space: nowrap;
          opacity: 0;
          transform: scale(.4) rotate(-8deg);
          transition: opacity .4s ease, transform .5s cubic-bezier(.2,1.4,.3,1);
        }
        .phase-6 .betrayal-sign { opacity: 1; transform: scale(1) rotate(-8deg); }
        .sign-1 { left: 8%; top: 39%; }
        .sign-2 { right: 7%; bottom: 38%; transform: scale(.4) rotate(8deg) !important; }
        .phase-6 .sign-2 { transform: scale(1) rotate(8deg) !important; }

        .betrayal-confetti { position: absolute; inset: 0; pointer-events: none; z-index: 25; opacity: 0; }
        .phase-5 .betrayal-confetti,
        .phase-6 .betrayal-confetti { opacity: 1; }
        .confetti-piece {
          position: absolute;
          width: 5px;
          height: 14px;
          background: var(--gold);
          top: -20px;
          animation: confettiFall 2.8s linear infinite;
        }
        .confetti-piece:nth-child(2n) { width: 8px; height: 5px; }
        .confetti-piece:nth-child(3n) { animation-duration: 3.5s; }
        .confetti-piece:nth-child(4n) { animation-delay: .7s; }
        @keyframes confettiFall {
          to { transform: translateY(115vh) rotate(760deg); }
        }

        .betrayal-bye {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(.7);
          color: var(--bright);
          font-size: 31px;
          letter-spacing: .04em;
          opacity: 0;
          transition: opacity .5s ease, transform .5s ease;
          z-index: 28;
        }
        .phase-7 .betrayal-bye { opacity: 1; transform: translate(-50%,-50%) scale(1); }

        .betrayal-love {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) translateY(20px);
          text-align: center;
          opacity: 0;
          z-index: 29;
          transition: opacity .55s ease, transform .55s ease;
        }
        .phase-8 .betrayal-love { opacity: 1; transform: translate(-50%,-50%) translateY(0); }
        .betrayal-love .wait { display: block; color: var(--gold); font-size: 18px; letter-spacing: .16em; margin-bottom: 16px; }
        .betrayal-love .love { display: block; color: var(--cream); font-size: 30px; }

        .betrayal-final {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transform: scale(.96);
          transition: opacity .7s ease, transform .7s ease;
          z-index: 31;
          pointer-events: none;
        }
        .phase-9 .betrayal-final { opacity: 1; transform: scale(1); pointer-events: auto; }
        .betrayal-final-title {
          color: var(--bright);
          font-size: clamp(28px, 8vw, 42px);
          line-height: 1.15;
          letter-spacing: .03em;
          text-shadow: 0 0 22px rgba(216,178,94,.18);
        }
        .betrayal-final-sparkle {
          margin: 20px 0 30px;
          color: var(--gold);
          font-size: 23px;
          letter-spacing: .5em;
        }
        .replay-chaos {
          border: 1px solid var(--gold);
          background: transparent;
          color: var(--gold);
          padding: 14px 22px;
          font-family: inherit;
          font-size: 12px;
          letter-spacing: .16em;
          cursor: pointer;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }
        .replay-chaos:hover { background: var(--gold); color: #050505; transform: translateY(-2px); }

        @media (max-width: 360px) {
          .chaos-ghost { transform: scale(.82); }
          .chaos-1 { left: -2%; }
          .chaos-2 { right: -2%; }
          .chaos-3 { left: 2%; }
          .chaos-4 { right: 2%; }
          .betrayal-burst-text { font-size: 27px; }
        }
      `}</style>

      <div className="betrayal-vignette" />
      <div className="betrayal-stage">
        <div className="betrayal-whisper">...</div>

        {tinyGhosts.map((g, i) => (
          <div key={g.cls} className={`betrayal-peek ${g.cls}`}>
            <div className="betrayal-ghost-body">
              <span className="betrayal-eye left" />
              <span className="betrayal-eye right" />
              <span className="betrayal-mouth" />
            </div>
            <div className="betrayal-caption">{g.text}</div>
          </div>
        ))}

        <div className="betrayal-burst">
          <div className="betrayal-burst-text">
            <span>HAPPPPIESTTTT</span>
            <span>BIRTHDAYYYYY</span>
            <span className="aunty">AUNTYYYYYYYYY!! 👻🎂</span>
          </div>
        </div>

        <div className="chaos-ghost chaos-1"><div className="chaos-body"><span className="chaos-eyes"/><span className="chaos-mouth"/></div></div>
        <div className="chaos-ghost chaos-2"><div className="chaos-body"><span className="chaos-eyes"/><span className="chaos-mouth"/></div></div>
        <div className="chaos-ghost chaos-3"><div className="chaos-body"><span className="chaos-eyes"/><span className="chaos-mouth"/></div></div>
        <div className="chaos-ghost chaos-4"><div className="chaos-body"><span className="chaos-eyes"/><span className="chaos-mouth"/></div></div>
        <div className="chaos-ghost chaos-5"><div className="chaos-body"><span className="chaos-eyes"/><span className="chaos-mouth"/></div></div>

        <div className="betrayal-sign sign-1">20??? SERIOUSLY???</div>
        <div className="betrayal-sign sign-2">OLD WOMAN.</div>

        <div className="betrayal-confetti">
          {Array.from({ length: 42 }).map((_, i) => (
            <i
              key={i}
              className="confetti-piece"
              style={{ left: `${(i * 37) % 101}%`, animationDelay: `${(i % 9) * .17}s` }}
            />
          ))}
        </div>

        <div className="betrayal-bye">Okay bye.</div>

        <div className="betrayal-love">
          <span className="wait">Wait.</span>
          <span className="love">We love you. 🖤</span>
        </div>

        <div className="betrayal-final">
          <div className="betrayal-final-title">👻 HAPPY BIRTHDAY, AUNTY 👻</div>
          <div className="betrayal-final-sparkle">✦ ✧ ✦</div>
          <button className="replay-chaos" onClick={onReplay}>
            REPLAY THE CHAOS ↻
          </button>
        </div>
      </div>
    </main>
  );
}

function App() {

  const [loading, setLoading] = useState(true);

  const [warningStage, setWarningStage] = useState(0);

  const [accepted, setAccepted] = useState(false);

  const [page, setPage] = useState(1);


  /* =========================
     PAGE 1 LOADING
  ========================= */

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

      setWarningStage(1);

    }, 3000);

    return () => clearTimeout(timer);

  }, []);


  /* =========================
     PAGE 1 WARNING ANIMATION
  ========================= */

  useEffect(() => {

    if (loading || accepted) return;

    const timers = [

      setTimeout(() => {
        setWarningStage(2);
      }, 800),

      setTimeout(() => {
        setWarningStage(3);
      }, 1500),

      setTimeout(() => {
        setWarningStage(4);
      }, 2300),

      setTimeout(() => {
        setWarningStage(5);
      }, 3200),

    ];

    return () => {

      timers.forEach(clearTimeout);

    };

  }, [loading, accepted]);


  /* =========================
     PAGE 1
  ========================= */

  if (page === 1) {

    return (

      <main className="warning-page">

        {loading ? (

          <div className="loading-screen">

            <div className="loading-text">
              LOADING BIRTHDAY SURPRISE...
            </div>

            <div className="loading-bar">
              ████████████████████
            </div>

            <div className="loading-percent">
              100%
            </div>

          </div>

        ) : !accepted ? (

          <div className="warning-content">

            {/* DANGER SYMBOL */}

            <div
              className={`danger-symbol ${
                warningStage >= 1 ? "show" : ""
              }`}
            >
              ⚠
            </div>


            {/* WARNING */}

            {warningStage >= 2 && (

              <h1 className="warning-title">
                WARNING
              </h1>

            )}


            {/* GOLD LINE */}

            {warningStage >= 3 && (

              <div className="gold-line"></div>

            )}


            {/* CONTEXT */}

            {warningStage >= 3 && (

              <p className="warning-context">

                The person accessing this website
                <br />

                is about to turn

                <strong>
                  20 years old.
                </strong>

              </p>

            )}


            {/* SIDE EFFECTS */}

            {warningStage >= 4 && (

              <div className="side-effects">

                <p>
                  • sudden realization that you're getting old
                </p>

                <p>
                  • questionable life decisions
                </p>

                <p>
                  • increased need for coffee
                </p>

                <p>
                  • unbearable amounts of birthday wishes
                </p>

              </div>

            )}


            {/* ACCEPT */}

            {warningStage >= 5 && (

              <button
                className="accept-button"
                onClick={() => setAccepted(true)}
              >
                I ACCEPT MY FATE
              </button>

            )}

          </div>

        ) : (

          <div className="welcome-screen">

            <Ghost />

            <div className="welcome-text">

              <p>
                Ohhh... you actually came.
              </p>

              <p>
                Okay. Let's do this.
              </p>

            </div>

            <button
              className="enter-button"
              onClick={() => setPage(2)}
            >
              ENTER
            </button>

          </div>

        )}

      </main>

    );

  }


  /* =========================
     PAGE 2
  ========================= */

  if (page === 2) {

    return (

      <GhostDepartment
        onNext={() => setPage(3)}
      />

    );

  }


  /* =========================
     PAGE 3 — MEMORY ARCHIVE
  ========================= */

  if (page === 3) {
    return <MemoryArchive onNext={() => setPage(4)} />;
  }

  /* =========================
     PAGE 4 — FLOWER REVEAL
  ========================= */

  if (page === 4) {
    return <FlowerReveal onNext={() => setPage(5)} />;
  }

  /* =========================
     PAGE 5 — THE GHOST PARTY
  ========================= */

  if (page === 5) {
    return <GhostParty onNext={() => setPage(7)} />;
  }

  /* =========================
     PAGE 7 — YOUR VIDEO
  ========================= */

  if (page === 7) {
    return <YourVideo onNext={() => setPage(8)} />;
  }

  /* =========================
     PAGE 8 — THE BETRAYAL
  ========================= */

  if (page === 8) {
    return <GhostBetrayal onReplay={() => setPage(1)} />;
  }

  return null;
}


export default App;