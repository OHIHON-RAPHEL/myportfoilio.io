const SectionHead = ({ icon, title, className = '' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="bg-gray-500 p-3 rounded-xl text-secondary text-[1.5rem]">{icon}</span>
      <h2 className="text-[2rem]">{title}</h2>
    </div>
  )
}

export default SectionHead
