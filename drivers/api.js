const {expect} = require('@playwright/test');

module.exports = new class Api {
    async createUser(request, email, password){
        const response = await request.post('https://api.club-administration.qa.qubika.com/api/auth/register', {
            data: {
            "email": email,
            "password": password,
            "roles":["ROLE_ADMIN"]
            }
          });

        expect(response.ok()).toBeTruthy();        
    }
}

