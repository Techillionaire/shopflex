import ShopPreview from "./shopPreview/ShopPreview";
import BlogPreview from "./blogPreview/BlogPreview";
import ChatList from "./chatList/ChatList";
import Navbar from "../navbar/Navbar";
import "./home.css";


const Home = () => {
    return (
        <div className="container">
            <header className="navbar">
                <Navbar />
            </header>

            <section className="main">
                <div className="preview">
                    <ShopPreview />
                </div>
                <div className="middleBlog">
                    <BlogPreview />
                </div>
                <div className="preview">
                    <ChatList />
                </div>

            </section>
        </div>
    )
}

export default Home
