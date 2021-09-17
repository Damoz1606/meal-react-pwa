import React from 'react'
import { useHistory } from 'react-router-dom';
import { Meal } from '../../interfaces/meal';
import './MealCard.css';

interface Props {
    meal: Meal;
}

function MealCard(props: Props) {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/recipe/${props.meal.idMeal}`);
    }

    return (
        <div className="card m-2" onClick={handleClick}>
            <div className="card-image">
                <div className="image is-4by3">
                    <img src={props.meal.strMealThumb} alt="" />
                </div>
            </div>
            <div className="card-content">
                <div className="content">
                    <div className="is-flex is-justify-content-space-around">
                        <div>
                            {props.meal.strMeal}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealCard
