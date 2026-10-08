// Gallery hardware that sits on the wall around a frame. Expects a `relative` parent sized to the frame.

/** A nail with a picture wire running down to the top of the frame. */
export function HangingWire({ className = "-top-5 h-5 md:-top-7 md:h-7" }: { className?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute inset-x-0 ${className}`}>
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <path
          d="M30 10 L50 0 L70 10"
          fill="none"
          stroke="#8b8378"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#776d63] shadow-[0_1px_1px_rgb(0_0_0/0.35)]" />
    </span>
  );
}
