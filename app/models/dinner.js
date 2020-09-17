const mongoose = require('mongoose')

// dinner Schema with V1 attributes name and timeToPrepare
const dinnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  timeToPrepare: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, // use Object ID when creating a reference
    ref: 'User' // reference to user model
  }
}, {
  // add the timestamps options for createdAt and updatedAt
  timestamps: true
})
// create a dinner model, whose structure is based on the bookSchema
const Dinner = mongoose.model('Dinner', dinnerSchema)

module.exports = Dinner
