import { userModel } from "../DB/models/userModel.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export const getCreatePage = (req, res) => {
  res.render("index.ejs");
};

export const addUser = async (req, res) => {
  let sid = uuidv4();
  const { userName, email, password, confirmPassword } = req.body;

  if (password === confirmPassword) {
    let hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await userModel.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.cookie("sid", sid);
    res.render("welcome.ejs", { message: `Welcome ${userName}` });
  } else {
    res.json("welcome.ejs", { message: "error" });
  }
};
