import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc auth user and get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});

// @desc register user
// @route POST /api/users/login
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc logout user, clear cookie
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc get user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc get all users
// @route GET /api/users
// @access private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc get user by ID
// @route GET /api/users/:id
// @access private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('get user by ID');
});

// @desc delete a user
// @route DELETE /api/users/:id
// @access private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc update user
// @route PUT /api/users/:id
// @access private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
