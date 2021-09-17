import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Loading from '../../components/Loading/Loading';
import { Meal } from '../../interfaces/meal'
import * as recipeService from '../../services/recipe.service';
import './Recipe.css'

function Recipe() {

    const history = useHistory();

    const { id }: any = useParams();
    const [meal, setmeal] = useState<Meal>()
    const [loading, setloading] = useState(false);
    const [loadingredients, setloadingredients] = useState<boolean>(false)
    const [loadpreparation, setloadpreparation] = useState<boolean>(false)

    useEffect(() => {
        setloading(true)
        getMeal();
        setloading(false)
    }, [])

    const getMeal = async () => {
        const res = await recipeService.getRecipeID(id);
        if (!res.data.meals[0]) {
            history.push('/');
        }
        const strIngredients: string[] = getIngredients(res.data.meals[0]);
        const strMeasures: string[] = getMeasures(res.data.meals[0]);
        setmeal({ ...res.data.meals[0], strIngredients: strIngredients, strMeasures: strMeasures });
    }

    const getIngredients = (data: any) => {
        const strIngredients: string[] = [];
        strIngredients.push(data.strIngredient2)
        strIngredients.push(data.strIngredient3)
        strIngredients.push(data.strIngredient4)
        strIngredients.push(data.strIngredient1)
        strIngredients.push(data.strIngredient5)
        strIngredients.push(data.strIngredient6)
        strIngredients.push(data.strIngredient7)
        strIngredients.push(data.strIngredient8)
        strIngredients.push(data.strIngredient9)
        strIngredients.push(data.strIngredient10)
        strIngredients.push(data.strIngredient11)
        strIngredients.push(data.strIngredient12)
        strIngredients.push(data.strIngredient13)
        strIngredients.push(data.strIngredient14)
        strIngredients.push(data.strIngredient15)
        strIngredients.push(data.strIngredient16)
        strIngredients.push(data.strIngredient17)
        strIngredients.push(data.strIngredient18)
        strIngredients.push(data.strIngredient19)
        strIngredients.push(data.strIngredient20)
        return strIngredients;
    }

    const getMeasures = (data: any) => {
        const strMeasures: string[] = [];
        strMeasures.push(data.strMeasure2)
        strMeasures.push(data.strMeasure3)
        strMeasures.push(data.strMeasure4)
        strMeasures.push(data.strMeasure1)
        strMeasures.push(data.strMeasure5)
        strMeasures.push(data.strMeasure6)
        strMeasures.push(data.strMeasure7)
        strMeasures.push(data.strMeasure8)
        strMeasures.push(data.strMeasure9)
        strMeasures.push(data.strMeasure10)
        strMeasures.push(data.strMeasure11)
        strMeasures.push(data.strMeasure12)
        strMeasures.push(data.strMeasure13)
        strMeasures.push(data.strMeasure14)
        strMeasures.push(data.strMeasure15)
        strMeasures.push(data.strMeasure16)
        strMeasures.push(data.strMeasure17)
        strMeasures.push(data.strMeasure18)
        strMeasures.push(data.strMeasure19)
        strMeasures.push(data.strMeasure20)
        return strMeasures;
    }

    const htmlBody = () => {
        return (
            <div className="columns m-0">
                <div className="column">
                    <img src={meal?.strMealThumb} />
                </div>
                <div className="column">
                    <div className="ingredients px-2">
                        <h5>Ingredients</h5>
                        <ul className="ingredient-list">
                            {
                                meal?.strIngredients.map((element: any, key: any) => {
                                    if (element) {
                                        return (
                                            <li key={key}>~  {meal.strMeasures[key]}...{element}</li>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className="preparation px-2">
                        <h5>Instructions</h5>
                        <p>{meal?.strInstructions}</p>
                    </div>
                </div>
            </div>

        );
    }

    return (
        <div>
            {
                loading ? <Loading /> : htmlBody()
            }
        </div>
    )
}

export default Recipe
