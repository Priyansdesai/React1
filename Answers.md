# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

Explain in your own words what ReactDOM.render is doing.
ReactDOM.render takes a react component and renders it in the file it is being called in. 

What are some of the advantages and cons to using Semantic UI? (or any UI library for that matter)
We don't need to use a separate styles file, where we may have to define styles, which would be exactly the same as the classes in Semantic UI are doing.

In your own words, explain why we need to wrap `addToCart` with another function.
Because if we won't do that, it will simply call it, even without us clicking the button "Add to Cart"

What allowed us to only write the Product component once inside the Cart's render function?
Because in our funciton we are calling map, which mpas over the whole list we are passing in. 

Why don't we just do this inside our render function 
Because then if we want to make a change to our data, we would have to make it in all the places, where it is hard-coded. 