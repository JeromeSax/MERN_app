// @desc Get Goals
// @route GET /api/goals
// @access Private 
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Backend is BooBoo' })

};

// @desc Set Goals
// @route POST /api/goals
// @access Private 
const setGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
};

// @desc Update Goals
// @route PUT /api/goals
// @access Private 
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })

};
// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private 
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
};

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}