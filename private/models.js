const {db} = require('./config')
const express = require('express')

const _getEx = () => {
    return db('exercise')
    .select('*')

}

const _getExById = (id) => {
    return db('exercise')
    .select('*')
    .where({ex_id:id})
}

const _updateEx = (id,ex,done) => {
    return db('exercise')
    .update({ex:ex,done:true},['*'])
    .where({ex_id:id})
}

const _addEx = (ex,done) => {
    return db('exercise')
    .insert({ex:ex, done:false}, ['*'])
}




const _getSentence = () => {
    return db('motivational_sentences')
    .select("*")
}

module.exports = {_getEx, _getExById, _updateEx, _addEx, _getSentence}