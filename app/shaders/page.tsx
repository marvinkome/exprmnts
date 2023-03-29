import ShaderLoader from "./components/shader";
import ClientOnly from "components/client-only";

const Page = () => {
  return (
    <div className="max-w-screen-lg w-full mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl text-neutral-800 font-semibold">Shaders Collections</h1>
        <p className="text-sm text-neutral-400">My simple collection of interesting shaders I&rsquo;ve tried to create over time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ClientOnly>
          <ShaderLoader url="/shaders/animating-circle.glsl" />
        </ClientOnly>

        <ClientOnly>
          <ShaderLoader url="/shaders/sdf.glsl" />
        </ClientOnly>

        <ClientOnly>
          <ShaderLoader url="/shaders/tv-noise.glsl" />
        </ClientOnly>
      </div>
    </div>
  );
};

export default Page;
