import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHead icon={<FaQuestion />} title="tubaskinoni" />

        {/* FAQs Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-x-20">
          {faqs.map(({ id, question, answer }) => (
            <FAQ key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
