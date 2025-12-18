const clashRoyaleModel = require('../models/clashRoyaleModels');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

async function getAll(req, res){
    const cards = await clashRoyaleModel.getAllCards();
    res.render('pages/index', { cards });
}

function getAddForm(req, res){
    res.render('pages/add');
}

async function postAdd(req, res){
    const { name, rarity, elixir, opinion, password } = req.body;
    const errors = [];
    const rarities = ["common", "rare", "epic", "legendary", "champion"];
    const rarityLower = rarity?.toLowerCase();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/;

    if(elixir < 0 || elixir > 9 || !rarities.includes(rarityLower)) errors.push("Nie udało się dodać karty");

    if(!regex.test(password)) errors.push("Podane hasło jest za słabe");

    if(errors.length > 0){

        res.render('pages/error')

    }
    else{   
    const encrypter = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = encrypter.update(password, 'utf8', 'hex');
    encrypted += encrypter.final('hex');
    await clashRoyaleModel.addCard(name, rarity, elixir, opinion, encrypted);
    res.redirect('/');
    }
}

async function getEditForm(req, res){
    const card = await clashRoyaleModel.getCardById(req.params.id);
    res.render('pages/edit', { card });
}

async function postEdit(req, res){
    const { name, rarity, elixir, opinion, password } = req.body;
    await clashRoyaleModel.updateCard(req.params.id, name, rarity, elixir, opinion, password);
    res.redirect('/');
}

async function getDeleteForm(req, res){
    const card = await clashRoyaleModel.getCardById(req.params.id);
    res.render('pages/delete', { card });
}

async function deleteCard(req, res){
    await clashRoyaleModel.deleteCard(req.params.id);
    res.redirect('/');
}

async function getShowForm(req, res){
    const card = await clashRoyaleModel.getCardById(req.params.id);
    res.render('pages/show', { card });
}

module.exports = { getAll, getAddForm, postAdd, getEditForm, postEdit, getDeleteForm, deleteCard, getShowForm};
