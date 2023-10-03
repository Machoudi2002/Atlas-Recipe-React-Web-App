import { useNavigate } from "react-router-dom"

const CategoryItem = ({CategoryTitle, buttonStyle, CategoryPath}) => {
  let categoryNavigation = useNavigate()
  return (
    <>
        <div className={`categroy-item ${buttonStyle}`} onClick={() => categoryNavigation(`/Categories#${CategoryPath}`)}>
            {CategoryTitle}
        </div>
    </>
  )
}

export default CategoryItem