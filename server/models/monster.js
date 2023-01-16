import mongoose, {Schema, model} from 'mongoose';

const Schema = mongoose.Schema;

const ModelMonsterSchema = new Schema({
    pseudo: string,
    password: string,
    description: string,
    createdAt: Date,
});

const MonsterSchema = mongoose.model('MonsterSchema', ModelMonsterSchema);