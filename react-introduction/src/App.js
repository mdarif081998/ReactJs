import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';

export function App(){
    const [courseGoals, setCourseGoals] =useState([{id:'cg1', text: 'Finish the course'},
                         {id:'cg2', text: 'Learn all about the Course Main Topic'},
                         {id:'cg3', text: 'Help Others in the course Q&A'}]);

    const addNewGoalHandler = (newGoal)=>{
        // setCourseGoals(courseGoals.concat(newGoal));
        setCourseGoals((prevCourseGoals) => {
            return prevCourseGoals.concat(newGoal);
        });
    }

    return <div className='course-goals'>
        <h2 >Course Goals</h2>
        <NewGoal onAddGoal ={addNewGoalHandler}/>
        <GoalList goals={courseGoals} />
    </div>;
}