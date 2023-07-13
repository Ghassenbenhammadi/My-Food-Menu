import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { useState } from "react";
import { items } from "./data"

function App() {
  const [itemsData, setitemsData] = useState(items)
  
  const allCategory = ['All',...new Set(items.map((i)=> i.category))]
  const filterbyCategory = (cat) => {
    if(cat === "All")
    {
      setitemsData(items)
    } else {
      const newArray=items.filter((item)=> item.category === cat)
      setitemsData(newArray)
    }
  }
  const filterbySearch = (word) => {
    if(word !== ""){
      const newArray=items.filter((item)=> item.title === word)
      setitemsData(newArray)
    }
  }
  return (
    <div className="color-body">
    <NavBar filterbySearch={filterbySearch} />
      <Container>
      <Header />
      <Category filterbyCategory={filterbyCategory} allCategory={allCategory}/>
      <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
