
import {Schema, model, Types} from 'mongoose';

interface IMonster {
    pseudo: string,
    password: string,
    description?: string
    createdAt?: Date
}

const monsterSchema = new Schema<IMonster>({
    pseudo: { type: String, required : true },
    password: {type: String, required: true},
    description: {type: String, required: false},
    createdAt: {type: Date, required: false}
});

const Monster = model<IMonster>('Monster', monsterSchema);
