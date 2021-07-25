export const genarateId = (digit: number) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const len = letters.length;
    let randomLetters:string = '';
    for(let i = 0; i <= digit; i++) {
        randomLetters += letters.charAt(Math.ceil(Math.random()*len))
    }
    return randomLetters;
}