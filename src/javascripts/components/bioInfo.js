const bioInfo = () => {
  const domString = $('#bioPage').html(`<div class='bio-pg-container><h3>About Wanda</h3>
   <p class='bio-info'>I earned a B.S. in Biology 
   and an M.Ed. in curriculum and instruction. After fifteen years of teaching science and STEM courses at various grade levels, I am ready to explore new options. 
   A career as a developer provides more opportunities 
   for challenges, creativity, and collaboration while fostering my desire to be a "lifelong learner". I am 
   excited to contribute to an ever-evolving field with the potential to use my current skillset.</p>
   </div>`);
  return domString;
};
export default { bioInfo };
