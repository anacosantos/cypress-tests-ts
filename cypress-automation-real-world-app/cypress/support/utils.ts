export function generateRandomCypressEmails() {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    const randomTitle = `cypress-tests-${randomNumber}@gmail.com`;
    return randomTitle;
}

export function generateRandomCypressNames() {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    const randomTitle = `cypress-tests-${randomNumber}`;
    return randomTitle;
}