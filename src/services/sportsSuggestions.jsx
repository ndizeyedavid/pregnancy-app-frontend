const sportsSuggestions = [
    // Reserve
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 0 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 0 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 0 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 0 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 0 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 0 },

    // Week 1
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 1 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 1 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 1 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 1 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 1 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 1 },

    // Week 2
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 2 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 2 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 2 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 2 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 2 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 2 },

    // Week 3
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 3 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 3 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 3 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 3 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 3 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 3 },

    // Week 4
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 4 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 4 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 4 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 4 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 4 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 4 },

    // Week 5
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 5 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 5 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 5 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 5 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 5 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 5 },

    // Week 6
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 6 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 6 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 6 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 6 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 6 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 6 },

    // Week 7
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 7 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 7 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 7 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 7 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 7 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 7 },

    // Week 8
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 8 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 8 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 8 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 8 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 8 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 8 },

    // Week 9
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 9 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 9 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 9 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 9 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 9 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 9 },

    // Week 10
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 10 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 10 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 10 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 10 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 10 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 10 },

    // Week 11
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 11 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 11 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 11 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 11 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 11 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 11 },

    // Week 12
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 12 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 12 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 12 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 12 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 12 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 12 },

    // Week 13
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 13 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 13 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 13 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 13 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 13 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 13 },

    // Week 14
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 14 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 14 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 14 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 14 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 14 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 14 },

    // Week 15
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 15 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 15 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 15 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 15 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 15 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 15 },

    // Week 16
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 16 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 16 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 16 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 16 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 16 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 16 },

    // Week 17
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 17 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 17 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 17 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 17 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 17 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 17 },

    // Week 18
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 18 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 18 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 18 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 18 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 18 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 18 },

    // Week 19
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 19 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 19 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 19 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 19 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 19 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 19 },

    // Week 20
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 20 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 20 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 20 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 20 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 20 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 20 },

    // Week 21
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 21 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 21 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 21 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 21 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 21 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 21 },

    // Week 22
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 22 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 22 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 22 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 22 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 22 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 22 },

    // Week 23
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 23 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 23 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 23 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 23 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 23 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 23 },

    // Week 24
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 24 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 24 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 24 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 24 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 24 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 24 },

    // Week 25
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 25 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 25 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 25 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 25 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 25 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 25 },

    // Week 26
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 26 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 26 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 26 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 26 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 26 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 26 },

    // Week 27
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 27 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 27 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 27 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 27 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 27 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 27 },

    // Week 28
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 28 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 28 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 28 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 28 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 28 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 28 },

    // Week 29
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 29 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 29 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 29 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 29 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 29 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 29 },

    // Week 30
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 30 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 30 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 30 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 30 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 30 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 30 },

    // Week 31
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 31 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 31 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 31 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 31 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 31 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 31 },

    // Week 32
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 32 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 32 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 32 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 32 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 32 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 32 },

    // Week 33
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 33 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 33 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 33 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 33 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 33 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 33 },

    // Week 34
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 34 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 34 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 34 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 34 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 34 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 34 },

    // Week 35
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 35 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 35 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 35 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 35 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 35 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 35 },

    // Week 36
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 36 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 36 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 36 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 36 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 36 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 36 },

    // Week 37
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 37 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 37 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 37 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 37 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 37 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 37 },

    // Week 38
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 38 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 38 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 38 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 38 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 38 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 38 },

    // Week 39
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 39 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 39 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 39 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 39 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 39 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 39 },

    // Week 40
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 40 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 40 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 40 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 40 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 40 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 40 },

    // Week 41
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 41 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 41 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 41 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 41 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 41 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 41 },

    // Week 42
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 42 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 42 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 42 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 42 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 42 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 42 },

    // Week 43
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 43 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 43 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 43 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 43 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 43 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 43 },

    // Week 44
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 44 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 44 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 44 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 44 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 44 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 44 },

    // Week 45
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 45 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 45 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 45 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 45 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 45 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 45 },

    // Week 46
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 46 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 46 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 46 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 46 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 46 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 46 },

    // Week 47
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 47 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 47 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 47 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 47 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 47 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 47 },

    // Week 48
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 48 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 48 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 48 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 48 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 48 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 48 },

    // Week 49
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 49 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 49 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 49 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 49 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 49 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 49 },

    // Week 50
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 50 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 50 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 50 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 50 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 50 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 50 },

    // Week 51
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 51 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 51 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 51 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 51 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 51 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 51 },

    // Week 52
    { sportsName: "Running", prescription: "Run for at least 30 minutes, three times a week", weekNumber: 52 },
    { sportsName: "Swimming", prescription: "Swim for one hour, twice a week", weekNumber: 52 },
    { sportsName: "Cycling", prescription: "Cycle for 45 minutes, three times a week", weekNumber: 52 },
    { sportsName: "Yoga", prescription: "Practice yoga for 30 minutes, four times a week", weekNumber: 52 },
    { sportsName: "Strength Training", prescription: "Engage in strength training for 30 minutes, twice a week", weekNumber: 52 },
    { sportsName: "Walking", prescription: "Walk for at least 10,000 steps daily", weekNumber: 52 }
];

export default sportsSuggestions;
