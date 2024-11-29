import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    url: "https://app.asana.com/-/login",
    email: process.env.ASANA_EMAIL,
    password: process.env.ASANA_PASSWORD,
};
