// functions that handle the logic for userRoutes

// @route GET /api/users
export const getUsers = async (req, res) => {
  try {
    // Logic to get all users
    res.status(200).json({ message: 'Get all users' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/users/:userId
export const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    // Logic to get a single user by ID
    res.status(200).json({ message: `Get user with ID ${userId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/users
export const createUser = async (req, res) => {
  const { body } = req;
  console.log('Request body:', body);
  
  try {
    if (!body.username || !body.email) {
      res.status(400);
      throw new Error('Missing required fields');
    }
    
    // Logic to create a new user
    res.status(201).json({ message: 'Create a new user', data: body });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/users/:userId
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { body } = req;
  try {
    // Logic to update a user by ID
    res.status(200).json({ message: `Update user with ID ${userId}`, data: body });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/users/:userId
export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    // Logic to delete a user by ID
    res.status(200).json({ message: `Delete user with ID ${userId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/users/:userId/friends/:friendId
export const addFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    // Logic to add a new friend
    res.status(201).json({ message: `Add friend with ID ${friendId} to user with ID ${userId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/users/:userId/friends/:friendId
export const deleteFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    // Logic to delete a friend
    res.status(200).json({ message: `Delete friend with ID ${friendId} from user with ID ${userId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};