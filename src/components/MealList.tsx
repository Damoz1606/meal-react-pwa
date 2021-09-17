import React, { useEffect, useState } from 'react'
import { Meal } from '../interfaces/meal';
import * as recipeService from '../services/recipe.service';
import MealCard from './MealCard/MealCard'

interface Props {
    meals: Meal[]
}

function MealList(props: Props) {

    return (
        <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around">
            {
                props.meals.map((element: any, key: any) =>{
                    return (
                        <div key={key}>
                            <MealCard meal={element} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MealList
