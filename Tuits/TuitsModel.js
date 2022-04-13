import mongoose from 'mongoose';

import TuitsSchema from "./TuitsSchema.js";


const TuitsModel = mongoose.model('TuitsModel', TuitsSchema);

export default TuitsModel