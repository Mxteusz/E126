const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllCards() {
    const db = getDB();
    return await db.collection('clashRoyale')
    .find().sort({ createdAt: -1}).toArray();
}

async function getCardById(id){
    const db = getDB();
    return await db.collection('clashRoyale')
    .findOne({_id: new ObjectId(id)});
}

async function addCard(name, rarity, elixir, opinion, password) {
    const db = getDB();
    await db.collection('clashRoyale')
    .insertOne({ name, rarity, elixir, opinion, password, createdAt: new Date() });
}

async function updateCard(id, name, rarity, elixir, opinion, password){
    const db = getDB();
    await db.collection('clashRoyale').updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, rarity, elixir, opinion, password }}
    );
}

async function deleteCard(id) {
    const db = getDB();
    await db.collection('clashRoyale').deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllCards, getCardById, addCard, updateCard, deleteCard}

