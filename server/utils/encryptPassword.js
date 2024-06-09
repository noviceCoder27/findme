import bcrypt from 'bcrypt'


export const generateHash = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        try {
            const hash = await bcrypt.hash(password,salt);
            return hash;
        } catch(err) {
            return null;
        }
    } catch(err) {
        return null;
    } 
}

export const verifyPassword = async(password,encryptedPass) => {
    try {
        const verify = await bcrypt.compare(password,encryptedPass)
        return verify;
    } catch(err) {
        return null
    }
}
