const express = require('express')
const {db} = require('./config.js')

const {_getEx, _getExById, _updateEx, _addEx} = require('./models.js')
const {_getSentence} = require('./models.js')

const getEx = (req,res) => {
    _getEx()
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const getExById = (req,res) => {
    const {id} = req.params
    _getExById(id)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const updateEx = (req,res) => {
    const {id} = req.params
    const {ex,done} = req.body
    _updateEx(id,ex,done)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })
}

const addEx = (req,res) => {
    const {ex,done} = req.body
    _addEx(ex,done)
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })

}



const getSentence = (req,res) => {
    _getSentence()
    .then((data) => {
        res.json(data)
    })
    .catch((e)=>{
        console.log(e);
    })

}

module.exports = {getEx, getExById, updateEx, addEx, getSentence}
