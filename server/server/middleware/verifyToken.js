import { getAuth } from "firebase-admin/auth";


export const VerifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log("token middlewear", token)
    console.log("auth", req.headers.authorization)

    getAuth().verifyIdToken(token).then(res => {
        console.log(res)
        const uid = res.uid
    })
        .catch(err => console.log(err));


    next();

}
    ;