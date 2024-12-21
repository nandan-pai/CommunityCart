describe('Authentication and Registration Flow Test', () => {
    const baseUrl = 'http://localhost:3000';
    const loginUrl = `${baseUrl}/auth/login`;
    const registerUrl = `${baseUrl}/auth/register`;
  
    it('Navigate to Login, Register, and Complete the Process', () => {
      // Visit the base URL (home page with navbar)
      cy.visit(baseUrl);
  
      // Step 1: Navigate to Login page from navbar
      cy.get('nav')
        .contains('Login') // Ensure the Login button is present
        .should('be.visible') // Verify it is visible
        .click();
  
      
      cy.url().should('include', '/auth/login');
  
      // Verify navigation to the Login page
      cy.url().should('eq', loginUrl);
  
      // Step 2: Navigate to Register page using the Sign Up button
      cy.get('[register-btn-test="register-btn"]')
        .should('be.visible') // Ensure the Sign Up button is visible
        .click();
  
      cy.url().should('include', '/auth/register');
  
      // Verify navigation to the Register page
      cy.url().should('eq', registerUrl);
  
      // Step 3: Fill and submit the registration form with additional details
      // Upload profile photo
      // const filePath = 'images/sample-profile.jpg'; // Ensure the file exists in `cypress/fixtures/images/`
      // cy.get('input[type="file"]#profilePhoto').attachFile(filePath);
  
      // Fill personal details
      cy.get('#name').type('John Doe');
      cy.get('#email').type('johndoe@example.com');
      cy.get('#phoneNumber').type('123-456-7890');
  
      // Fill address details
      cy.get('#address1').type('123 Main Street');
      cy.get('#address2').type('Apt 4B');
      cy.get('#district').type('Central District');
      cy.get('#city').type('Metropolis');
      cy.get('#state').type('New York');
      cy.get('#pinCode').type('12345');
      cy.get('#country').type('USA');
  
      // Enter password
      cy.get('#password').type('securePassword123');
  
      // Check the seller registration option
    //   cy.get('input[type="checkbox"]').check();
      // Submit the form
      cy.get('form').submit();
  
      // Verify successful registration message
      cy.contains('User created successfully').should('be.visible');
  
      // Step 4: Redirected back to Login page after successful registration
      cy.url().should('eq', loginUrl);
  
      // Fill in the login form
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="password"]').type('securePassword123');
  
      // Submit the login form
      cy.get('button[type="submit"]').click();
  
      // Verify successful login (adjust based on your app's behavior)
      cy.url().should('eq', baseUrl); // Redirect to the home page after login
      // cy.contains('Welcome, John Doe').should('be.visible'); // Adjust the welcome message if necessary
    });
  });
  