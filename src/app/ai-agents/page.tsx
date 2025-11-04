import { DitheringShader } from "./components/dithering-shader";

export default function DemoOne() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
      <DitheringShader
              shape="wave"
              type="8x8"
              colorBack="#86EFAC"
              colorFront="#DCFCE7"
              pxSize={3}
              speed={0.6}
            />
      <span className="pointer-events-none z-10 text-center text-7xl leading-none absolute font-semibold text-white tracking-tighter whitespace-pre-wrap">
        (AI)-Agents
      </span>
    </div>
  )
}