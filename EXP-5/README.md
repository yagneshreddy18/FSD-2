# EXP-5: React Lazy Loading

This experiment shows how to use **lazy loading** in a React application with multiple components.

## Aim
To create a React application with multiple components and load them using lazy loading.

## Project Structure
EXP-5  
public  
src  
- components  
  - Dashboard.jsx  
  - Company.jsx  
  - Help.jsx  
  - Navigation.jsx  
- App.jsx  
- App.css  
- index.css  
- main.jsx  

## Description
Components like Dashboard, Company, and Help are loaded only when their routes are visited.  
This is done using `React.lazy()` and `Suspense`.

## Technologies Used
- React  
- React Router DOM  
- JavaScript  
- CSS  

## Output
- Navigation menu is displayed  
- Components load when clicked  
- Content is shown inside a card  

## Learning Outcomes
1. Understand component-based development in React  
2. Learn lazy loading using `React.lazy()`  
3. Use `Suspense` for loading states  
4. Implement routing using React Router  
5. Improve performance using code splitting  

## Conclusion
Lazy loading helps improve performance by loading components only when needed.
