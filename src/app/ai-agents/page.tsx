import { DitheringShader } from "./components/dithering-shader";
import Link from "next/link";

export default function DemoOne() {
  return (
    <Link href="/ai-agents1" className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
      <DitheringShader
              shape="wave"
              type="8x8"
              colorBack="#86EFAC"
              colorFront="#DCFCE7"
              pxSize={3}
              speed={0.6}
            />
      <span className="pointer-events-auto z-10 text-center text-7xl leading-none absolute font-semibold text-white tracking-tighter whitespace-pre-wrap">
        AI & AGENTS
      </span>
    </Link>
  )
}