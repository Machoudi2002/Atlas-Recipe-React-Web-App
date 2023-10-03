import { Link } from 'react-router-dom'

const NotFoundComp = () => {
  return (
    <>
            <div className="container text-center my-5">
                <h1 className='page404'>404</h1>
                <h2>Page Not Found</h2>
                <p>Go To <Link to="/">Home Page</Link></p>
            </div>
    </>
  )
}

export default NotFoundComp