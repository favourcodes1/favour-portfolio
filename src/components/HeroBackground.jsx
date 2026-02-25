export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-primary/30 blur-[120px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />
    </div>
  )
}