// Shehzad Contractor - 101285996

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success!" }
            resolve(success)
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("delayed exception!")
            } catch (errorMessage) {
                var error = {"error": errorMessage.message }
                reject(error)
            }
        }, 500)
    })
}

const finalAnswer = async() => {
    try{
        console.log("Question 2 Completed")
        console.log("....................")
        console.log(await resolvedPromise())
        await rejectedPromise()
    } catch(errorMessage) {
        console.error(errorMessage);
    }
}
finalAnswer()