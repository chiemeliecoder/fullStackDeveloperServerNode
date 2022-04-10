import mongoose from 'mongoose';

import TuitsSchema from "./TuitsSchema.js";


const TuitsModel = mongoose.model('TuitModel', TuitsSchema);

export default TuitsModel