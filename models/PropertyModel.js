const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  // category must be in of the following: house, plot, flat, shops, commercial
  category: {
    type: String,
    required: true,
  },

  // buy, rent
  purpose: {
    type: String,
    required: true,
  },

  rentPrice: {
    type: String,
  },

  totalTokens: {
    type: Number,
    required: true,
  },

  tokenPrice: {
    type: Number,
    required: true,
  },

  propertyStatus: {
    type: String,
    default: "pending",
  },

  bedroom: {
    type: Number,
  },

  washroom: {
    type: Number,
  },

  kitchen: {
    type: Number,
  },

  propertyOwner: [
    {
      ownerAddress: {
        type: String,
        required: true,
      },
      tokenHolder: {
        type: String,
        required: true,
      },
      perTokenPrice: {
        type: String,
      },
      currentListedTokens: {
        type: String,
        default: "0",
      },
    },
  ],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  listedBy: [
    {
      type: String,
    },
  ],

  isListed: {
    type: Boolean,
    default: false,
  },

  isRented: {
    type: Boolean,
    default: false,
  },

  rentedTo: {
    type: String,
  },

  propertyImages: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  propertyDocuments: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Property", propertySchema);
