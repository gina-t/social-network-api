// functions that handle the logic for thoughtRoutes

// @route GET /api/thoughts
export const getThoughts = async (req, res) => {
  try {
    // Logic to get all thoughts
    res.status(200).json({ message: 'Get all thoughts' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/thoughts/:thoughtId
export const getThoughtById = async (req, res) => {
  const { thoughtId } = req.params;
  try {
    // Logic to get a single thought by ID
    res.status(200).json({ message: `Get thought with ID ${thoughtId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/thoughts
export const createThought = async (req, res) => {
  const { body } = req;
  try {
    // Logic to create a new thought
    res.status(201).json({ message: 'Create a new thought', data: body });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/thoughts/:thoughtId
export const updateThought = async (req, res) => {
  const { thoughtId } = req.params;
  const { body } = req;
  try {
    // Logic to update a thought by ID
    res.status(200).json({ message: `Update thought with ID ${thoughtId}`, data: body });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/thoughts/:thoughtId
export const deleteThought = async (req, res) => {
  const { thoughtId } = req.params;
  try {
    // Logic to delete a thought by ID
    res.status(200).json({ message: `Delete thought with ID ${thoughtId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/thoughts/:thoughtId/reactions
export const createReaction = async (req, res) => {
  const { thoughtId } = req.params;
  const { body } = req;
  try {
    // Logic to create a new reaction
    res.status(201).json({ message: 'Create a new reaction', data: body });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/thoughts/:thoughtId/reactions/:reactionId
export const deleteReaction = async (req, res) => {
  const { thoughtId, reactionId } = req.params;
  try {
    // Logic to delete a reaction by ID
    res.status(200).json({ message: `Delete reaction with ID ${reactionId} from thought with ID ${thoughtId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};