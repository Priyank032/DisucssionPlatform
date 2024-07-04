import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, mobileNo, email, password } = req.body;

  try {
    const user = await userService.createUser(name, email, mobileNo, password);
    res.status(201).json(user);
  } catch (error: any) {
    next(error)
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);
    res.status(200).json({ message: "Successfully Logged In", user });
  } catch (error) {
    next(error)
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await userService.findUserById(userId);
    res.status(200).json(user);
  } catch (error: any) {
    next(error)
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;
    const user = await userService.updateUser(userId, updateData);
    res.status(200).json(user);
  } catch (error: any) {
    next(error)
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    await userService.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error: any) {
    next(error)
  }
};

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    next(error)
  }
};

export const searchUserByName = async (req: Request, res: Response, next: NextFunction) => {
  console.log("hooo")
  // try {
  //   const { name } = req.query;
  //   if (!name) {
  //     return res.status(400).json({ success: false, message: 'Name parameter is required' });
  //   }
  //   const users = await userService.searchUserByName(name as string);
  //   return res.status(200).json({ success: true, data: users });
  // } catch (error: any) {
  //   console.error('Error searching user by name:', error);
  //   return next(error); // Pass error to the error handler middleware
  // }
};
