const generateRandomNumber = (min, max) => {
    return Math.round(Math.random()*(max - min) + min)
}

export default generateRandomNumber;