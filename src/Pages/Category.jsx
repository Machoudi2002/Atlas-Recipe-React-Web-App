
import CategoryFilter from '../Components/Other/CategoryFilter'
import Newsletter from '../Components/Other/Newsletter'

const Category = () => {
  return (
    <>
      <div className='container mb-5'>
          <CategoryFilter />
      </div>
      <div className="newsletter-section">
            <Newsletter />
      </div>
    </>

  )
}

export default Category