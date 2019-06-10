const config = require('../config.json');
const utils = require('../utils/utils');

const missa = require('request-promise');
const $ = require('cheerio');

function getMassData(res, month, day, year) {
    const url = config['URL'] + '?date=' + month + '-' + day + '-' + year;

    missa(url).then((html) => {
        let propers = {};
    
        // Introit
        const introit = utils.cleanArray($("td#L6:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['introit'] = utils.getIntroit(introit);
    
        // Opening Prayer
        const oratio = utils.cleanArray($("td#L9:nth-of-type(1) font[color='black']", html).text().split("\n"))
        propers['oratio'] = utils.getOpeningPrayer(oratio);
    
        // Epistle
        const epistle = utils.cleanArray($("td#L10:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['epistle'] = utils.getEpistle(epistle);
        
        // Gradual and Tract
        const gradual = utils.cleanArray($("td#L11:nth-of-type(1) font[color='black']", html).text().split("\n"));
        const gradPropers = utils.getGradual(gradual);
        const gradKeys = Object.keys(gradPropers);
        
        for (let i = 0; i < gradKeys.length; i++) {
            propers[gradKeys[i]] = gradPropers[gradKeys[i]]
        }
    
        // Gospel
        const evangelium = utils.cleanArray($("td#L12:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['gospel'] = utils.getGospel(evangelium);
    
        // Offertory
        const offertorium = utils.cleanArray($("td#L14:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['offertory'] = utils.getOffertory(offertorium);
    
        // Secret 
        const secreta = utils.cleanArray($("td#L20:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['secret'] = utils.getSecret(secreta);
    
        // Preface 
        const prefatio = utils.cleanArray($("td#L21:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['preface'] = utils.getPreface(prefatio);
    
        // Communion
        const communio = utils.cleanArray($("td#L49:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['communion'] = utils.getCommunion(communio);
    
        // Postcommunion
        const postcommunio = utils.cleanArray($("td#L50:nth-of-type(1) font[color='black']", html).text().split("\n"));
        propers['postcommunion'] = utils.getPostCommunion(postcommunio);
    
        res.header("Content-Type",'application/json');
        res.status(200).send(JSON.stringify(propers, null, 4));
    
    }).catch((err) => {
        console.log(err);
    })
}

module.exports.getMassData = getMassData;

