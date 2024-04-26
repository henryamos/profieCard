import React from 'react'
import profilePic from "./assets/ben.jpg"
const Skills=[
  {
  skill: "HTML + CSS ",
  level:"Advanced",
  color:"#2662EA"
},
{
  skill: "Tailwind CSS",
  level:"Advanced",
  color:"#EFD81D"
},
{
  skill: "Javascript",
  level:"Intermediate",
  color:"#2662EA"
},
{
  skill: "Git + GitHub",
  level:"Intermediate",
  color:"#2662EA"
},
{
  skill: "React JS",
  level:"Intermediate",
  color:"#2662EA"
},
{
  skill: "Next JS",
  level:"Beginner",
  color:"#2662EA"
},
]

const App = () => {
  return (
    <div className='card'>
      <Avatar  image ={profilePic}/>
      <div className="data">
        <Intro/>
        <SkillSet/>
      </div>
    
    </div>
   
   
  )
}
const Avatar = ({image})=>{
return(
<img  className ="avatar" 
src={image} alt="" />
)
}
const Intro = ()=>{
return(
   <div>
      <h1>Bnejamin Henry Amos</h1>
      <p> Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.</p>
   </div>
)
}
const SkillSet=()=>{
return (
  <div className='skill-list'>
    {Skills.map((skills,index)=>(
      <Skill 
      key={index} 
      skill={skills.skill} 
      level={skills.level}
      color={skills.color}
      
      />
    ))}
     
 
  </div>
)
}
const Skill=({skill,level,color})=>{
  return(
    <div className="skill" style={{ backgroundColor:color }}>
      <span>{skill}</span>
         <span>{level === "Beginner" && "👶"  }</span>
         <span>{level === "Intermediate" && "🤝" }</span>
         <span>{level === "Advanced" && "🖐"  }</span>

    </div>
  )

}
export default App
