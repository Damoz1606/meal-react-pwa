import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe/Recipe';
import Appbar from './components/Appbar/Appbar';
import Drawer from './components/Drawer/Drawer';
import Searchbar from './components/Searchbar/Searchbar';
import * as recipeService from './services/recipe.service';
import { Category } from './interfaces/category';
import { ThemeContext } from './context/themeContext';
import Loading from './components/Loading/Loading';
import WifiIndicator from './components/WifiIndicator/WifiIndicator';

function App() {

  const [enableDrawer, setenableDrawer] = useState<boolean>(false);
  const [modal, setmodal] = useState<boolean>(false)
  const [categories, setcategories] = useState<Category[]>([])
  const [category, setcategory] = useState<string>("")
  const [mealname, setmealname] = useState<string>("")
  const [offline, setoffline] = useState<boolean>(false)

  useEffect(() => {
    getCategories();
    window.addEventListener("offline", () => setoffline(true));
    window.addEventListener("online", () => setoffline(false));
  }, [])

  const getCategories = async () => {
    const categories = await recipeService.getCategories();
    setcategories(categories.data.meals);
  }

  const onEnableDrawer = () => {
    setenableDrawer(!enableDrawer);
  }

  const enableSearch = (flag: boolean) => {
    setmodal(flag);
  }

  const categoryClick = (category: string) => {
    setcategory(category)
    setmealname("")
  }

  const search = (text: string) => {
    setmealname(text.replace(/^./, text[0].toUpperCase()));
    setcategory("")
  }

  return (
    <BrowserRouter>
      <Appbar eventBrand={categoryClick} eventBurger={onEnableDrawer} eventSearch={enableSearch} />
      <Drawer eventClick={categoryClick} hidden={enableDrawer} eventClose={onEnableDrawer} drawerTitle="Categories" drawerOptions={categories} />
      <div className="mt-4 pt-6 is-flex is-justify-content-center">
        <Switch>
          <ThemeContext.Provider value={{ category: category, name: mealname }} >
            <Route exact path="/" component={Home}></Route>
            <Route path="/recipe/:id" component={Recipe}></Route>
          </ThemeContext.Provider>
        </Switch>
      </div>
      <Searchbar open={modal} closeEvent={enableSearch} placeholder="Find a meal" eventFind={search} />
      {
        offline ? <WifiIndicator /> : null
      }
      
    </BrowserRouter>
  );
}

export default App;
