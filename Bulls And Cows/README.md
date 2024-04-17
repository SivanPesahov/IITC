bulls and cows:

    data structure:
        compGuess - 1d array for random numbers (0-9) that differ from each other
        userGuess - 1d array that is being created each round and stores the user inputs
        userGuessHistory - 1d array that stores every userGuess
        currentNum - a var that stores the number that the user inserted (pressed by a button)
        cows = 0
        bulls = 0

    functions:

        submitName() - takes a name from the user in the form of <form> element and stors it in a var 'playerNam' after 'submit' button clicked.


        creatCompGuess(length) - create an array whose length is set by the user (0-9). the function also insert random values to the array and returns compGuess.

        createUserGuess(length) - function that creates an empty array based on the length that has been given by the user.

        insertToUserGuess(length) - function that insert the currentNum into userGuess

        userInputValidation() - function that checks if the user inserted 2 identical numbers to userGuess

        insertToHistory(userGuess) - function that inserts the userGuess array into userGuessHistory

        insertHistoryToTable() - function that takes the values from userGuessHistory and insert them to <table> element


        ?showTotalTime(startTime, endTime) - takes two vars and return the amount of time?
        showTime() - functions that starts to count seconds from the moment the user pressed 'submit' in the name area


        checkForCows(length) - function that checks for every number in userGuess if excist in compGuess and raises cows by 1.

        checkForBulls(length) - function that checks for every number in userGuess if excist and has the same index in compGuess. raises bulls by 1.

        checkIfWin(bulls) - checks if bulls = length and finish the game if the condition is met.
