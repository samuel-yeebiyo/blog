import Card from "./resusable/Card"

import '../css/articles.css'

const Articles = () => {
    return (
        <div className="Articles">
            <div className="articles-desc">
                <h3>Articles 📰</h3>
                <p>Hope you find something useful</p>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Articles
