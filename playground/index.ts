import "dotenv/config";
import { hello } from "../dist";

hello();
console.log(process.env.example);
