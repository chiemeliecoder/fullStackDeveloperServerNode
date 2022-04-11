import TuitsModel from "./TuitsModel";

export const findAllTuits = () => TuitsModel.find();

export const createTuit = (tuit) => tuitsModel.create(tuit);

export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});

export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})