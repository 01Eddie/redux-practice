import {memo, useState} from "react";

export default function App() {
    const [skill, setSkill] = useState("");
    const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  
    function handleChangeInput(event) {
      setSkill(event.target.value);
    }
  
    function handleAddSkill() {
      setSkills(skills.concat(skill));
    }
  
    return (
      <>
        <input onChange={handleChangeInput} />
        <button onClick={handleAddSkill}>Add Skill</button>
        <SkillList skills={skills} />
      </>
    );
  }
  
  /* Pero el problema, si ejecutas este código tu mismo, es que cuando escribimos en la entrada, debido a que el componente principal de SkillList (App) vuelve a renderizarse, debido a que el estado se actualiza con cada pulsación de tecla, SkillList se vuelve a renderizar constantemente (como lo indicada console.log) */
  
  /* Sin embargo, una vez que envolvemos el componente SkillList en React.memo (que es una función de orden superior, lo que significa que acepta una función como argumento), ya no se vuelve a renderizar innecesariamente cuando lo hace nuestro componente padre. */
  const SkillList = memo(({ skills }) => {
    console.log("rerendering");
    return (
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    );
  });