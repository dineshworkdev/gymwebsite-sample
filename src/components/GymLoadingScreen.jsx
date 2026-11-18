import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { GYM_INFO } from "../data/gymData.js";

// Target timing (total duration ~1.85s)
const ANIMATION_DURATION_MS = 1850;
const SAFETY_FALLBACK_MS = 3200;

/**
 * GymLoadingScreen - 100% Standalone Athletic Branded Opening Animation
 * 
 * Features:
 * - 100% Offline, pure local vector SVG dumbbell + kinetic lift animation
 * - Zero external CDN or lottie.host network requests
 * - Athletic Bebas Neue typography matching brand identity
 * - Smooth upward shutter exit revealing the website
 */
function GymLoadingScreen({ onDone }) {
  const shouldReduce = useReducedMotion();
  const [isExiting, setIsExiting] = useState(false);
  const [isGone, setIsGone] = useState(false);

  const exitCalledRef = useRef(false);

  const triggerExit = useCallback(() => {
    if (exitCalledRef.current) return;
    exitCalledRef.current = true;
    setIsExiting(true);
  }, []);

  // Precise timing trigger at ~1.85s
  useEffect(() => {
    const timer = setTimeout(triggerExit, ANIMATION_DURATION_MS);
    const safety = setTimeout(triggerExit, SAFETY_FALLBACK_MS);
    return () => {
      clearTimeout(timer);
      clearTimeout(safety);
    };
  }, [triggerExit]);

  const handleExitComplete = () => {
    setIsGone(true);
    onDone?.();
  };

  if (isGone) return null;

  const screenVariants = shouldReduce
    ? {
        initial: { opacity: 1 },
        exit: {
          opacity: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      }
    : {
        initial: { y: 0 },
        exit: {
          y: "-100%",
          transition: { duration: 0.42, ease: [0.76, 0, 0.24, 1] },
        },
      };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          key="gym-loader"
          variants={screenVariants}
          initial="initial"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Scoped CSS for responsive wordmark margin and stacking */}
          <style>{`
            .gym-loader-wordmark {
              margin-top: clamp(-0.8rem, -1.8vw, -0.4rem);
            }
            @media (max-width: 768px) {
              .gym-loader-wordmark {
                margin-top: 0.15rem !important;
              }
            }
          `}</style>

          {/* Centered Lockup Composition (Dumbbell + Brand Wordmark) */}
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              userSelect: "none",
            }}
            exit={
              shouldReduce
                ? {}
                : {
                    y: -35,
                    opacity: 0.9,
                    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
                  }
            }
          >
            {/* -- 1. STANDALONE LOCAL ATHLETIC DUMBBELL SVG ----------------- */}
            <motion.div
              initial={
                shouldReduce
                  ? { opacity: 1 }
                  : { opacity: 0, y: 32, scale: 0.88, rotate: -4 }
              }
              animate={
                shouldReduce
                  ? { opacity: 1 }
                  : {
                      opacity: [0, 1, 1, 1],
                      y: [32, -6, 2, 0],
                      scale: [0.88, 1.04, 0.99, 1],
                      rotate: [-4, 0.8, -0.2, 0],
                    }
              }
              transition={
                shouldReduce
                  ? {}
                  : {
                      duration: 1.65,
                      times: [0, 0.32, 0.72, 1],
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              style={{
                width: "clamp(180px, 32vw, 280px)",
                height: "clamp(120px, 22vw, 180px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                position: "relative",
                zIndex: 1,
              }}
            >
              <svg
                viewBox="0 0 240 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%", overflow: "visible" }}
              >
                {/* Outer Glow / Dynamic Shadow */}
                <ellipse cx="120" cy="108" rx="64" ry="7" fill="#1A1C1E" fillOpacity="0.08" />

                {/* Left Outer Plate */}
                <rect x="24" y="24" width="14" height="72" rx="4" fill="#252A2E" />
                <rect x="27" y="28" width="4" height="64" rx="2" fill="#3F464D" />

                {/* Left Mid Plate */}
                <rect x="42" y="16" width="16" height="88" rx="4" fill="#1A1C1E" />
                <rect x="46" y="20" width="4" height="80" rx="2" fill="#F4C400" />

                {/* Left Inner Plate */}
                <rect x="62" y="32" width="10" height="56" rx="3" fill="#252A2E" />

                {/* Center Bar */}
                <rect x="72" y="54" width="96" height="12" rx="3" fill="#5A626A" />
                {/* Knurled Grip Pattern */}
                <rect x="92" y="52" width="56" height="16" rx="2" fill="#1A1C1E" />
                <rect x="96" y="55" width="48" height="10" rx="1" fill="#F4C400" />
                <line x1="104" y1="55" x2="104" y2="65" stroke="#1A1C1E" strokeWidth="1.5" />
                <line x1="112" y1="55" x2="112" y2="65" stroke="#1A1C1E" strokeWidth="1.5" />
                <line x1="120" y1="55" x2="120" y2="65" stroke="#1A1C1E" strokeWidth="1.5" />
                <line x1="128" y1="55" x2="128" y2="65" stroke="#1A1C1E" strokeWidth="1.5" />
                <line x1="136" y1="55" x2="136" y2="65" stroke="#1A1C1E" strokeWidth="1.5" />

                {/* Right Inner Plate */}
                <rect x="168" y="32" width="10" height="56" rx="3" fill="#252A2E" />

                {/* Right Mid Plate */}
                <rect x="182" y="16" width="16" height="88" rx="4" fill="#1A1C1E" />
                <rect x="190" y="20" width="4" height="80" rx="2" fill="#F4C400" />

                {/* Right Outer Plate */}
                <rect x="202" y="24" width="14" height="72" rx="4" fill="#252A2E" />
                <rect x="209" y="28" width="4" height="64" rx="2" fill="#3F464D" />

                {/* Athletic Accent Highlight */}
                <circle cx="120" cy="60" r="3" fill="#FFFFFF" />
              </svg>
            </motion.div>

            {/* -- 2. BRAND WORDMARK ----------------------------------------- */}
            <div
              className="gym-loader-wordmark"
              style={{
                overflow: "hidden",
                lineHeight: 1,
                padding: "0.2rem 0.6rem 0.4rem",
                position: "relative",
                zIndex: 10,
              }}
              aria-label={`${GYM_INFO.brandPrefix} ${GYM_INFO.brandSuffix}`}
            >
              <div
                style={{
                  fontFamily:
                    '"Bebas Neue", "Impact", -apple-system, sans-serif',
                  fontSize: "clamp(3.8rem, 11.5vw, 7.6rem)",
                  fontWeight: 900,
                  WebkitTextStroke: "clamp(1.4px, 0.3vw, 2.8px) currentColor",
                  textRendering: "geometricPrecision",
                  lineHeight: 0.92,
                  letterSpacing: "0.04em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.28em",
                }}
              >
                {/* Prefix ("APEX") */}
                <motion.span
                  initial={
                    shouldReduce
                      ? { opacity: 1 }
                      : { y: "115%", opacity: 0 }
                  }
                  animate={
                    shouldReduce
                      ? { opacity: 1 }
                      : {
                          y: ["115%", "-7%", "2%", "0%"],
                          opacity: [0, 1, 1, 1],
                        }
                  }
                  transition={
                    shouldReduce
                      ? {}
                      : {
                          duration: 1.6,
                          times: [0, 0.3, 0.7, 1],
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                  style={{
                    color: "#252A2E",
                    display: "inline-block",
                    transformOrigin: "bottom center",
                  }}
                >
                  {GYM_INFO.brandPrefix || 'APEX'}
                </motion.span>

                {/* Suffix ("GYM") */}
                <motion.span
                  initial={
                    shouldReduce
                      ? { opacity: 1 }
                      : { y: "115%", opacity: 0 }
                  }
                  animate={
                    shouldReduce
                      ? { opacity: 1 }
                      : {
                          y: ["115%", "-7%", "2%", "0%"],
                          opacity: [0, 1, 1, 1],
                        }
                  }
                  transition={
                    shouldReduce
                      ? {}
                      : {
                          duration: 1.6,
                          delay: 0.06,
                          times: [0, 0.3, 0.7, 1],
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                  style={{
                    color: "#F4C400",
                    display: "inline-block",
                    transformOrigin: "bottom center",
                  }}
                >
                  {GYM_INFO.brandSuffix || 'GYM'}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GymLoadingScreen;
