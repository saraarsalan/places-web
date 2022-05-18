
import './CategoriesBar.css'
import { useEffect, useState } from "react"
const CategoriesBar = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}categories`)
            .then(response => {
                response.json().then(categories => {
                    if (categories?.success) {
                        setcategories(categories?.data)
                    }

                })
            })
            .catch(e =>console.log(e))
    }, [])
    return (
        <div>
            {categories.map((category,i)=>{
                return(
                    <div className='category' key={i}>
                        <img src={category?.icon} alt={category?.title} width="80"/>
                        
                    </div>

                )
            })}
        </div>

    )


}
export default CategoriesBar