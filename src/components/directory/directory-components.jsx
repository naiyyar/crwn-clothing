import "./directory.styles.scss"
import CategoryItem from "../category-item/category-item.jsx"

const Directory = () => {
  const categories = [
    {
      "id": 1,
      "title": 'Womens',
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },{
      "id": 2,
      "title": 'Men',
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },{
      "id": 3,
      "title": 'Hats',
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },{
      "id": 4,
      "title": 'Jackets',
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },{
      "id": 5,
      "title": 'Sneakers',
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    }
  ]

  return (
    <div className="directory-container">
    {
      categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))
    }  
    </div>
  )
}

export default Directory