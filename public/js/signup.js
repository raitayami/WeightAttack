const signupForm = document.getElementById('signupForm')

const formBtn = document.getElementById('submitBtn')

formBtn.addEventListener('click', async (event)=>{


    event.preventDefault()

//Validation checks such as if username already exists in DB, if email already exists, if password and retypePassword match.
 // and if password is more than 6 characters with special characters and numbers in it
    const username = document.getElementById('username').value
    const fullName = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    
    const password = document.getElementById('password').value
    const retypePassword = document.getElementById('retypePassword').value

    const data = {
        username: username,
        fullName: fullName,
        email: email,
        password: password,
        retypePassword: retypePassword
    }

    try {
        const response = await fetch('http://localhost:3000/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.ok){
            const result = await response.json();
            alert('Form submitted successfully: ' + result.message)
        } else {
            alert('Error submitting form')
        }
    } catch (error) {
        console.error('Error:', error)
        alert('Failed to submit form.')
    }
    
})

// function checkIfPasswordIsSame(password, retypePassword){
//     if (password === retypePassword) {
//         return true
//     } else{
//         return false
//     }
// }


