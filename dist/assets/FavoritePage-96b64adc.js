import{r,j as e,F,a as p}from"./index-0c3c94f9.js";import{R as N}from"./RecipeCard-7e06984d.js";import{N as g}from"./Newsletter-38c925e4.js";const S=()=>{const[v,i]=r.useState([]),[n,h]=r.useState([]),[c,f]=r.useState(!1),[x,d]=r.useState(!1),m=()=>JSON.parse(localStorage.getItem("Favorites"))||[],j=async t=>{d(!0);const s=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${t}`;try{const a=await fetch(s);if(!a.ok)throw new Error(`Failed to fetch meal details for ID ${t}`);return(await a.json()).meals[0]}catch{return null}finally{d(!1)}},u=t=>{const s=v.filter(l=>l!==t);i(s);const o=m().filter(l=>l!==t);localStorage.setItem("Favorites",JSON.stringify(o)),f(!c)};return r.useEffect(()=>{const t=m();i(t),Promise.all(t.map(s=>j(s))).then(s=>{const a=s.filter(o=>o!==null);h(a)})},[c]),e.jsx(e.Fragment,{children:x?e.jsx("div",{className:"loader-random",children:e.jsxs("div",{className:"loader ",children:[e.jsx("li",{className:"ball"}),e.jsx("li",{className:"ball"}),e.jsx("li",{className:"ball"})]})}):n.length>0?e.jsx("div",{className:"results",children:n.map((t,s)=>e.jsx("div",{children:e.jsx(N,{Id:t.idMeal,Name:t.strMeal,Category:t.strCategory,ImageUrl:t.strMealThumb,Link:t.idMeal,Style:"delete-recipe",Comp:e.jsx("div",{children:e.jsx(F,{onClick:()=>u(t.idMeal),icon:p})})})},s))}):e.jsx("h3",{className:"text-center",children:"No Favorite Recipe Found"})})},M=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container my-4",children:[e.jsx("h1",{className:"text-center display-3 mb-5",children:"Favorite Recipes"}),e.jsx(S,{})]}),e.jsx("div",{className:"newsletter-section mt-5",children:e.jsx(g,{})})]});export{M as default};
