"use client";

// @ts-ignore
import GlslCanvas from "glslCanvas";
import { useEffect, useRef } from "react";
import { useMeasure } from "react-use";

const ShaderLoader = ({ url }: { url: string; height?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glslSandbox = useRef<any>(null);
  const [containerRef, { width }] = useMeasure<HTMLDivElement>();

  let height = width;
  useEffect(() => {
    if (canvasRef.current && width) {
      const sandbox = new GlslCanvas(canvasRef.current);
      sandbox.setUniform("u_resolution", width, height);
      glslSandbox.current = sandbox;
    }

    return () => {
      glslSandbox.current = null;
    };
  }, [height, width]);

  return (
    <div ref={containerRef} className="w-full">
      <canvas ref={canvasRef} data-fragment-url={url} width={width} height={height} />
    </div>
  );
};

export default ShaderLoader;
