import Square from "../square";

export default function SquareGrid({children, colors}) {
  return (
    <div className="absolute -top-15 md:-top-219 lg:-top-345 left-0 right-0 container mx-auto md:flex md:items-end md:justify-between">
      <div className="md:flex md:items-end">
        <Square sizeClasses="md:w-x3 md:h-x3 lg:w-x5 lg:h-x5" color={colors[0]} customWrapper="hidden md:block md:relative md:bottom-0 md:left-0"/>
        <Square sizeClasses="w-x6 h-x6 md:w-x4 md:h-x4 lg:w-x7 lg:h-x7" color={colors[1]} customWrapper="absolute md:relative md:bottom-0 md:left-0">
          {children}
        </Square>
      </div>
      <div className="md:flex md:items-end">
        <Square sizeClasses="md:w-x1 md:h-x1 lg:w-x2 lg:h-x2" color={colors[2]} customWrapper="hidden md:block transform md:translate-y-full"/>
        <Square sizeClasses="md:w-x3 md:h-x3 lg:w-x5 lg:h-x5" color={colors[3]} customWrapper="hidden md:block"/>
      </div>
    </div>
  )
}