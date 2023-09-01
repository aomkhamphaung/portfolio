import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} className='work__img' alt="" />
        <h3 className='work__title'>{item.title}</h3>
        <a href={item.link} target='blank' className='work__button'>Source Code 
        <i class="uil uil-github-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems