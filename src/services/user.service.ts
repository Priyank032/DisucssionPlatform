import User, { User as UserModel } from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APIError } from '../middleware/error.middleware';

export const createUser = async (name: string, email: string, mobileNo: string, password: string) => {
    const existingUser = await User.findOne({ $or: [{ email }, { mobileNo }] });

    if (existingUser) {
        throw new APIError('Email or mobile number already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, mobileNo, password: hashedPassword });
    await user.save();
    // Omit password field before returning
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobileNo: user.mobileNo,
    };
};


export const loginUser = async (email: string, password: string): Promise<{ user: UserModel | null, token: string | null }> => {
    const user = await User.findOne({ email });

    if (!user) {
        return { user: null, token: null }; // Password does not match
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return { user: null, token: null }; // Password does not match
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
    return { user, token };
};

export const findUserById = async (userId: string) => {
    return await User.findById(userId).select("-password -__v");
};

export const updateUser = async (userId: string, updateData: any) => {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    return updatedUser;
};

export const deleteUser = async (userId: string) => {
    await User.findByIdAndDelete(userId);
};

export const getUsers = async () => {
    return await User.find().select("-password -__v");
};

export const searchUserByName = async (name: string) => {
    console.log(name, "name")
    return await User.find({ name: { $regex: name, $options: 'i' } });
};
