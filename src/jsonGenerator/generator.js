
var randomjson = require('randomjson');

var generateApplication = function () {
    var applicationModelJson = {
        "testTypes<@{1,3}>": ["<@string{4,20}>"],
        "softwareName": "<@string{4,20}>",
        "softwareVersion": "1.0.1",
        "companyChineseName": "<@chinese{4,10}>",
        "companyEnglishName": "<@string{6,20}>",
        "developmentDepartment": "<@chinese{4,10}>",
        "companyType": "<@chinese{4,10}>",
        "description": "<@chinese{0,310}>",
        "testStandards<@{1,10}>": ["<@string{4,20}>"],
        "testAspects<@{1,10}>": ["<@string{4,20}>"],
        "softwareScales": [],
        "softwareType": "<@string{4,20}>",
        "clientSystems<@{1,3}>": [
            { "systemName": "<@string{4,20}>", "version": "<@string{4,20}>", "vforKey": "<@string{4,20}>" },
        ],
        "clientMemory": "<@[1-20000]>",
        "clientOtherRequirement": "<@string{4,120}>",
        "serverArchitectures@<{1,3}>": ["<@string{4,20}>"],
        "serverMemory": "<@[1-20000]>",
        "serverDisk": "<@[1-20000]>",
        "serverOtherRequirement": "<@string{4,120}>",
        "serverSystem": "<@string{4,20}>",
        "serverSystemVersion": "<@string{4,20}>",
        "serverLanguage": "<@string{4,20}>",
        "serverFrame": "<@string{4,20}>",
        "serverDatabase": "<@string{4,20}>",
        "serverMiddleware": "<@string{4,20}>",
        "serverOtherSoftware": "<@string{4,20}>",
        "networkEnvironment": "<@string{4,20}>",
        "media<@{1,9}>": [
            { "medium": "<@string{4,20}>", "num": "<@[1-20]>" },
        ],
        "documents": "<@string{4,200}>",
        "expireHandle": "由本中心销毁",
        "expectedDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "companyInfo": {
            "telephone": "<@string{4,20}>",
            "fax": "<@string{4,20}>",
            "address": "<@string{4,20}>",
            "postcode": "<@string{4,20}>",
            "contractPerson": "<@string{4,20}>",
            "mobile": "<@string{4,20}>",
            "email": "<@string{4,20}>",
            "website": "<@string{4,20}>",
        }
    }

    var applicationJson = randomjson(applicationModelJson)
    console.log(applicationJson)
    var applicationArray = JSON.stringify(applicationJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/applicationForm.json')//存入路径
    fs.writeFile(dir, applicationArray, 'utf8', (err) => {
        console.log("写入成功");
    })

}

var generateApplicationVerification = function () {
    
}

var generateFunctionList = function () {
    
}

generateApplication()

