const foodSuggestions = [
    // reserve
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 0 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 0 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 0 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 0 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 0 },
    { foodName: "Avocado", prescription: "One avocado per week", weekNumber: 0 },

    // Week 1
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 1 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 1 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 1 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 1 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 1 },
    { foodName: "Avocado", prescription: "One avocado per week", weekNumber: 1 },

    // Week 2
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 2 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 2 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 2 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 2 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 2 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 2 },

    // Week 3
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 3 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 3 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 3 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 3 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 3 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 3 },

    // Week 4
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 4 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 4 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 4 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 4 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 4 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 4 },

    // Week 5
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 5 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 5 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 5 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 5 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 5 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 5 },

    // Week 6
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 6 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 6 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 6 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 6 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 6 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 6 },

    // Week 7
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 7 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 7 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 7 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 7 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 7 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 7 },

    // Week 8
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 8 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 8 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 8 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 8 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 8 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 8 },

    // Week 9
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 9 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 9 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 9 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 9 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 9 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 9 },

    // Week 10
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 10 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 10 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 10 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 10 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 10 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 10 },

    // Week 11
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 11 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 11 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 11 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 11 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 11 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 11 },

    // Week 12
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 12 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 12 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 12 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 12 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 12 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 12 },

    // Week 13
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 13 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 13 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 13 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 13 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 13 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 13 },

    // Week 14
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 14 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 14 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 14 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 14 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 14 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 14 },

    // Week 15
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 15 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 15 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 15 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 15 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 15 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 15 },

    // Week 16
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 16 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 16 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 16 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 16 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 16 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 16 },

    // Week 17
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 17 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 17 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 17 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 17 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 17 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 17 },

    // Week 18
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 18 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 18 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 18 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 18 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 18 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 18 },

    // Week 19
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 19 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 19 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 19 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 19 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 19 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 19 },

    // Week 20
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 20 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 20 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 20 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 20 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 20 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 20 },

    // Week 21
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 21 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 21 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 21 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 21 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 21 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 21 },

    // Week 22
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 22 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 22 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 22 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 22 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 22 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 22 },

    // Week 23
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 23 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 23 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 23 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 23 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 23 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 23 },

    // Week 24
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 24 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 24 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 24 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 24 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 24 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 24 },

    // Week 25
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 25 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 25 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 25 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 25 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 25 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 25 },

    // Week 26
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 26 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 26 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 26 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 26 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 26 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 26 },

    // Week 27
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 27 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 27 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 27 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 27 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 27 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 27 },

    // Week 28
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 28 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 28 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 28 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 28 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 28 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 28 },

    // Week 29
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 29 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 29 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 29 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 29 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 29 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 29 },

    // Week 30
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 30 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 30 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 30 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 30 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 30 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 30 },

    // Week 31
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 31 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 31 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 31 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 31 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 31 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 31 },

    // Week 32
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 32 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 32 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 32 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 32 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 32 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 32 },

    // Week 33
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 33 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 33 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 33 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 33 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 33 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 33 },

    // Week 34
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 34 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 34 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 34 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 34 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 34 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 34 },

    // Week 35
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 35 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 35 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 35 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 35 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 35 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 35 },

    // Week 36
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 36 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 36 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 36 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 36 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 36 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 36 },

    // Week 37
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 37 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 37 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 37 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 37 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 37 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 37 },

    // Week 38
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 38 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 38 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 38 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 38 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 38 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 38 },

    // Week 39
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 39 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 39 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 39 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 39 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 39 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 39 },

    // Week 40
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 40 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 40 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 40 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 40 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 40 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 40 },

    // Week 41
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 41 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 41 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 41 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 41 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 41 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 41 },

    // Week 42
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 42 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 42 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 42 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 42 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 42 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 42 },

    // Week 43
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 43 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 43 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 43 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 43 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 43 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 43 },

    // Week 44
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 44 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 44 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 44 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 44 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 44 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 44 },

    // Week 45
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 45 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 45 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 45 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 45 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 45 },
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 45 },

    // Week 46
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 46 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 46 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 46 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 46 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 46 },
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 46 },

    // Week 47
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 47 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 47 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 47 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 47 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 47 },
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 47 },

    // Week 48
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 48 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 48 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 48 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 48 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 48 },
    { foodName: "Quinoa", prescription: "Three servings of quinoa per week", weekNumber: 48 },

    // Week 49
    { foodName: "Greek Yogurt", prescription: "One serving of Greek yogurt per day", weekNumber: 49 },
    { foodName: "Spinach", prescription: "One serving of spinach per week", weekNumber: 49 },
    { foodName: "Sweet Potatoes", prescription: "Two servings of sweet potatoes per week", weekNumber: 49 },
    { foodName: "Berries", prescription: "One serving of berries per day", weekNumber: 49 },
    { foodName: "Nuts", prescription: "A handful of mixed nuts per day", weekNumber: 49 },
    { foodName: "Lean Chicken", prescription: "Two servings of lean chicken per week", weekNumber: 49 },

    // Week 50
    { foodName: "Oranges", prescription: "One serving of oranges per day", weekNumber: 50 },
    { foodName: "Chickpeas", prescription: "Three servings of chickpeas per week", weekNumber: 50 },
    { foodName: "Broccoli", prescription: "Two servings of broccoli per week", weekNumber: 50 },
    { foodName: "Oats", prescription: "One serving of oats per day", weekNumber: 50 },
    { foodName: "Fortified Cereal", prescription: "One serving of fortified cereal per day", weekNumber: 50 },
    { foodName: "Whole Grain Bread", prescription: "Two slices of whole grain bread per day", weekNumber: 50 },

    // Week 51
    { foodName: "Carrots", prescription: "Two servings of carrots per week", weekNumber: 51 },
    { foodName: "Milk", prescription: "Two servings of milk per day", weekNumber: 51 },
    { foodName: "Eggs", prescription: "Three eggs per week", weekNumber: 51 },
    { foodName: "Lentils", prescription: "Two servings of lentils per week", weekNumber: 51 },
    { foodName: "Apples", prescription: "One apple per day", weekNumber: 51 },
    { foodName: "Salmon", prescription: "Two servings of salmon per week", weekNumber: 51 },
];

export default foodSuggestions;