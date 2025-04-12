import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)

  return (
    <article
      className="bg-[#2a2d66] p-6 sm:p-8 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md"
      onClick={() => setIsAnswerShowing(prev => !prev)}
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="font-semibold text-white text-base sm:text-lg">
          {question}
        </h4>
        <button
          className="text-[#eceefd] text-xl sm:text-2xl bg-transparent focus:outline-none"
          aria-label={isAnswerShowing ? 'Collapse answer' : 'Expand answer'}
          onClick={(e) => {
            e.stopPropagation()
            setIsAnswerShowing(prev => !prev)
          }}
        >
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && (
        <p className="text-sm sm:text-base text-white mt-4 sm:mt-6 leading-relaxed">
          {answer}
        </p>
      )}
    </article>
  )
}

export default FAQ
