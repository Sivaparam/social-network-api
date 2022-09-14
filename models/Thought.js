const { Schema, model } = require('mongoose');

//schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (time) => format_date(time),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

//schema to get teh retrieve length of thought's reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//schema for reaction
const reactionSchema = new Schema (
   {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true, 
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now(),
        get: (time) => format_date(time),
    },
   } 
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;