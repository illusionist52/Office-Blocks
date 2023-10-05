import './Features.css'

const featured = [
    {
        cover: "../images/h1.png",
        name: "Family House",
        total: "122 Property",
    },
    {
        cover: "../images/h2.png",
        name: "House & Villa",
        total: "155 Property",
    },
    {
        cover: "../images/h3.png",
        name: "Apartment",
        total: "300 Property",
    },
    {
        cover: "../images/h4.png",
        name: "Office & Studio",
        total: "80 Property",
    },
    {
        cover: "../images/h6.png",
        name: "Villa & Condo",
        total: "80 Property",
    },
]


const FeaturedCard = () => {
    return (
        <div className="featured container">
            <div className='content grid5 mtop'>
                {featured.map((items, index) => (
                    <div className='box' key={index}>
                        <img src={items.cover} alt='' />
                        <h4>{items.name}</h4>
                        <label>{items.total}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCard