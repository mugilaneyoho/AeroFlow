import { JWTDecoded } from "../utils/AuthHelpers.js";
import axios from "axios"
import dotenv from "@dotenvx/dotenvx"
dotenv.config()

export const AuthVerify = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(500).json({ status: "failed", message: "Authentication credentials not provided" });
        }

        const decoded = await JWTDecoded(token)

        if (decoded.status === "failed" && decoded.message === "jwt expired") {
            return res.status(401).json({ message: "Your session has expired. Please log in again", status: "session_expired" });
        }
        if (decoded.status === "failed") {
            return res.status(401).json({ message: decoded.message, status: "session_expired" })
        }

        if (decoded) {
            const role = await axios.get(`${process.env.auth_url}/roles/${decoded.role}`)

            if (!role) {
                return res.status(401).json({
                    success: false,
                    status: "failed",
                    message: "your role not found.",
                    details: "The requested user does not exist in the system."
                });
            }

            req.headers["user"] = JSON.stringify({...decoded,role})
            next()
        } else {
            return res.status(401).json({ message: "your not allow to access", status: "not_permitted" });
        }

    } catch (error) {
        res.status(500).json({ status: "failed", message: error.message, data: null });
    }
}