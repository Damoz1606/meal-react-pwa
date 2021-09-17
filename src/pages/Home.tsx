import React, { useEffect, useState, useContext } from 'react'
import MealList from '../components/MealList'
import { Meal } from '../interfaces/meal';
import * as recipeService from '../services/recipe.service';
import { ThemeContext } from '../context/themeContext';
import Loading from '../components/Loading/Loading';

function Home() {
    const contextType = useContext(ThemeContext);

    const [meals, setmeals] = useState<Meal[]>([])
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        if (contextType) {
            if (contextType.category || contextType.category !== "") {
                getMealsCategory(contextType.category as string);
            } if (contextType.name || contextType.name !== "") {
                getMealsName(contextType.name as string)
            } else {
                getMeals();
            }
        } else {
            getMeals();
        }
        setloading(false);
    }, [contextType])

    const getMeals = async () => {
        const res = await recipeService.getRecipes();
        setmeals([]);
        if (res.data.meals) {
            setmeals(res.data.meals);
        }
    }

    const getMealsCategory = async (category: string) => {
        const res = await recipeService.getRecipeCategory(category);
        setmeals([]);
        if (res.data.meals) {
            setmeals(res.data.meals);
        } else {
            getMeals();
        }
    }

    const getMealsName = async (name: string) => {
        const res = await recipeService.getRecipeName(name);
        setmeals([]);
        if (res.data.meals) {
            setmeals(res.data.meals);
        } else {
            getMeals();
        }
    }


    return (
        <div>
            {
                loading ? <Loading /> : <MealList meals={meals} />
            }
            {
                !meals ?
                <div className="indicator bottom-right background-is-secondary ">
                    <p className="is-flex is-justify-content-center is-align-content-center"> Data not found </p>
                </div>
                : null
            }
        </div>
    )
}

export default Home
