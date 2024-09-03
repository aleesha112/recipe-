document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        pancake: {
            title: "Delicious Pancakes",
            image: "images/pancakes.jpg",
            description: "To make delicious pancakes, whisk together flour, sugar, baking powder, and salt in one bowl. In another bowl, mix milk, egg, melted butter, and vanilla extract. Combine the wet and dry ingredients until just mixed, leaving some lumps. Heat a non-stick skillet over medium heat and pour 1/4 cup of batter for each pancake. Cook until bubbles appear and flip to brown the other side. Serve warm with maple syrup and fresh berries for a delightful breakfast treat."
        },
        spaghetti: {
            title: "Spaghetti Carbonara",
            image: "images/sapghatti.jpg",
            description: "Spaghetti Carbonara: Cook 250g of spaghetti according to package instructions. In a bowl, mix 2 large eggs, 1 cup grated Parmesan cheese, and freshly ground black pepper to taste. Cook 150g of pancetta until crispy. Toss the hot spaghetti with the pancetta, then mix in the egg mixture to create a creamy sauce. Serve with additional Parmesan cheese and black pepper."
        },
        chicken: {
            title: "Chicken Curry",
            image: "images/chicken curry.png",
            description: "Chicken Curry: Sauté 1 chopped onion, 2 cloves garlic, and 1 tablespoon grated ginger in 2 tablespoons oil until fragrant. Add 500g of chicken pieces and cook until browned. Stir in 2 tablespoons curry powder, 1 teaspoon cumin, and 1 teaspoon turmeric. Add 1 can (400ml) coconut milk and 1 cup chopped tomatoes. Simmer until the chicken is cooked through and the sauce has thickened. Garnish with fresh cilantro and serve with rice."

        },
        cake: {
            title: "Chocolate Cake",
            image: "images/chocolate cake.jpg",
            description: "Chocolate Cake: Mix 1 ¾ cups flour, ¾ cup cocoa powder, 1 ½ teaspoons baking powder, and 1 ½ cups sugar in one bowl. In another bowl, combine 2 large eggs, 1 cup milk, ½ cup vegetable oil, and 2 teaspoons vanilla extract. Combine both mixtures and pour into 2 greased 9-inch cake pans. Bake at 350°F (175°C) for 30-35 minutes, or until a toothpick inserted in the center comes out clean. Cool and frost with chocolate icing."
        },
        biryani: {
            title: "Delicious Biryani",
            image: "images/biryani.png",
            description:"Biryani: Marinate 500g of meat with 1 cup yogurt and 2 tablespoons biryani spice mix. Layer 2 cups partially cooked basmati rice and the marinated meat in a large pot. Add 1 cup fried onions, ¼ cup fresh herbs (like mint and cilantro), and a splash of saffron milk. Cook on low heat until the rice and meat are fully cooked and the flavors meld together. Serve with raita or salad."
        },
        'chinese-rice': {
            title: "Chinese Rice",
            image: "images/chinese-rice.png",
            description: "Chinese Rice: Cook 2 cups of rice and set aside. Stir-fry 1 cup of chopped vegetables (such as bell peppers, carrots, and peas) and 2 cloves of garlic in 2 tablespoons of oil. Add the cooked rice, 2 tablespoons soy sauce, and 1 teaspoon sesame oil, and stir-fry until heated through. Garnish with chopped green onions and serve."
        },
        custard: {
            title: "Classic Custard",
            image: "images/custard.png",
            description: "Custard: Heat 2 cups milk and 1 teaspoon vanilla extract in a saucepan. Whisk together 4 large eggs, ½ cup sugar, and a pinch of salt in a bowl. Slowly add the hot milk to the egg mixture while whisking. Pour the mixture back into the saucepan and cook over low heat until it thickens (about 10 minutes). Chill before serving."
        },
        'fruit-trifle': {
            title: "Fruit Trifle",
            image: "images/fruit-trifle.png",
            description: "Fruit Trifle: Layer 4 cups of cubes of sponge cake with 2 cups of fresh fruit (such as berries and sliced bananas), 2 cups of custard, and 1 cup of whipped cream in a glass dish. Repeat layers and top with more fruit and cream. Chill before serving to let the flavors meld together."
        },
        lasagna: {
            title: "Classic Lasagna",
            image: "images/lasagna.png",
            description: "Lasagna: Layer 12 cooked lasagna noodles with a mixture of 2 cups ricotta cheese, 1 cup spinach, and 1 cup grated Parmesan cheese, followed by 4 cups of meat sauce (made from 500g ground beef, 1 can chopped tomatoes, and spices). Top with 2 cups shredded mozzarella cheese and bake at 375°F (190°C) for 45 minutes, or until bubbly and golden."
        },
        tacos: {
            title: "Spicy Tacos",
            image: "images/tacos.png",
            description: "Tacos: Cook 500g of seasoned ground beef with taco spices (1 packet or homemade mix) until browned. Serve in taco shells with toppings such as 1 cup shredded lettuce, 1 cup diced tomatoes, 1 cup shredded cheese, and salsa. Add a dollop of sour cream and a squeeze of lime juice for extra flavor."
        },
        muffins: {
            title: "Blueberry Muffins",
            image: "images/muffins.png",
            description: "Blueberry Muffins: Mix 2 cups flour, 1 cup sugar, 2 teaspoons baking powder, and ½ teaspoon salt in one bowl. In another bowl, combine 1 cup milk, 2 large eggs, and ¼ cup melted butter. Fold in 1 cup fresh blueberries, then pour the batter into 12 muffin tins. Bake at 375°F (190°C) for 20-25 minutes, or until golden brown and a toothpick comes out clean."


        },
        sushi: {
            title: "California Roll Sushi",
            image: "images/sushi.png",
            description: "California Roll Sushi: Prepare 2 cups sushi rice and season with ¼ cup rice vinegar. Lay a sheet of nori on a bamboo mat, spread a thin layer of rice, and add 100g of crab sticks, 1 avocado (sliced), and 1 cucumber (julienned). Roll tightly, slice into 8 pieces, and serve with soy sauce, pickled ginger, and wasabi."

        }


    };

    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const recipeCard = button.closest('.recipe-card');
            const recipeId = recipeCard.getAttribute('data-recipe');
            showRecipe(recipeId);
        });
    });

    function showRecipe(recipeId) {
        console.log('Recipe ID:', recipeId); // Debugging line
        const details = recipeDetails[recipeId];
        if (details) {
            console.log('Recipe Details:', details); // Debugging line
            document.getElementById('recipe-title').textContent = details.title;
            document.getElementById('recipe-image').src = details.image; // Fixed ID
            document.getElementById('recipe-description').textContent = details.description;
            document.getElementById('recipe-details').classList.add('show');
        } else {
            console.error('Recipe not found:', recipeId);
        }
    }

    window.closeRecipe = function() {
        document.getElementById('recipe-details').classList.remove('show');
    }
});
