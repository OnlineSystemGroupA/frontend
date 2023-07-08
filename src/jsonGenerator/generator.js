var randomjson = require('randomjson');

var generateApplication = function () {
    var applicationModelJson = {
        "testTypes<@{1,3}>": ["<@string{4,20}>"],
        "softwareName": "<@string{4,20}>",
        "softwareVersion": "1.0.1",
        "companyChineseName": "<@chinese{4,10}>",
        "companyEnglishName": "<@string{6,20}>",
        "developmentDepartment": "<@chinese{4,10}>",
        "companyType": "内资企业",
        "description": "<@chinese{0,310}>",
        "testStandards<@{1,10}>": ["<@string{4,20}>"],
        "testAspects<@{1,10}>": ["<@string{4,20}>"],
        "softwareScales": [
            { "scaleDescription": "<@string{4,20}>", "scale": "<@[1-20000]>" },
        ],
        "softwareType": ["<@string{4,20}>", "<@string{4,20}>"],
        "clientSystems<@{1,3}>": [
            { "system": "<@string{4,20}>", "version": "<@string{4,20}>", "vforKey": "<@string{4,20}>" },
        ],
        "clientMemory": "<@[1-20000]>",
        "clientOtherRequirement": "<@string{4,120}>",
        "serverNames<@{1,10}>": ["<@string{4,20}>"],
        "serverMemory": "<@[1-20000]>",
        "serverDisk": "<@[1-20000]>",
        "serverOtherRequirement": "<@string{4,120}>",
        "serverSystem": "<@string{4,20}>",
        "serverSystemVersion": "<@string{4,20}>",
        "serverLanguage": "<@string{4,20}>",
        "serverFrames": ["<@string{4,20}>"],
        "serverDatabase": "<@string{4,20}>",
        "serverMiddleware": "<@string{4,20}>",
        "serverOtherSoftware": "<@string{4,20}>",
        "networkEnvironment": "<@string{4,20}>",
        "media<@{1,9}>": [
            { "mediumType": "<@string{4,20}>", "num": "<@[1-20]>" },
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

var generateFunctionList = function () {
    var functionListModelJson = {
        "softwareName": "<@string{4,20}>",
        "softwareVersion": "1.10.1",
        "functions<@{2,10}>": [
            {
                "title": "<@string{4,20}>",
                "items<@{2,4}>": [
                    {
                        "name": "<@string{4,20}>",
                        "description": "<@string{4,20}>",
                    }
                ]
            }
        ]
    }
    var functionListJson = randomjson(functionListModelJson)
    console.log(functionListJson)
    var applicationArray = JSON.stringify(functionListJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/functionList.json')//存入路径
    fs.writeFile(dir, applicationArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateTestPlan = function () {
    var testPlanModelJson = {
        "version": "2.10.1",
        "editRecords<@{1,4}>": [
            {
                "version": "<@string{4,20}>",
                "date": "Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)",
                "amd": "<@string{4,20}>",
                "editor": "<@string{4,20}>",
                "description": "<@string{4,20}>",
            }
        ],
        "marks": "<@string{4,120}>",
        "systemOverview": "<@string{4,120}>",
        "documentOverview": "<@string{4,120}>",
        "baselines": "<@string{4,120}>",
        "reference": "<@string{4,120}>",
        "hardware": "<@string{4,120}>",
        "software": "<@string{4,120}>",
        "other": "<@string{4,120}>",
        "organization": "<@string{4,120}>",
        "staff": "<@string{4,120}>",
        "testLevel": "<@string{4,120}>",
        "testType": "<@string{4,120}>",
        "testCondition": "<@string{4,120}>",
        "plannedTest": "<@string{4,120}>",
        "testCases": "<@string{4,120}>",
        "time": "<@string{4,120}>",
        "timeTables": [
            {
                "task": '制定测试计划',
                "lastTime": '<@[2-10]>',
                "startTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
                "endTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            },
            {
                "task": '设计测试',
                "lastTime": '<@[2-10]>',
                "startTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
                "endTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            },
            {
                "task": '执行测试',
                "lastTime": '<@[2-10]>',
                "startTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
                "endTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            },
            {
                "task": '评估测试',
                "lastTime": '<@[2-10]>',
                "startTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
                "endTime": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            },
        ],
        "traceability": "<@string{4,120}>",
    }
    var testPlanJson = randomjson(testPlanModelJson)
    console.log(testPlanJson)
    var testPlanArray = JSON.stringify(testPlanJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/testPlanForm.json')//存入路径
    fs.writeFile(dir, testPlanArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateTestRecords = function () {
    var testRecordModelJson = {
        "records<@{2,15}>": [{
            "type": "<@string{4,20}>",
            "description": "<@string{4,20}>",
            "contract": "<@string{4,20}>",
            "premise": "<@string{4,20}>",
            "process": "<@string{4,20}>",
            "prediction": "<@string{4,20}>",
            "designer": "<@string{4,20}>",
            "result": "<@string{4,20}>",
            "matched": "<@boolean>",
            "bugIndex": "<@string{4,20}>",
            "executor": "<@string{4,20}>",
            "date": "<@string{4,20}>",
            "verifier": "<@string{4,20}>"
        }]
    }
    var testRecordJson = randomjson(testRecordModelJson)
    console.log(testRecordJson)
    var testRecordArray = JSON.stringify(testRecordJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/testRecordsForm.json')//存入路径
    fs.writeFile(dir, testRecordArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateTestPlanVerification = function () {
    var testPlanVerificationModelJson = {
        "softwareName": '<@string{4,20}>',
        "softwareVersion": '<@string{4,20}>',
        "projectId": '<@string{4,20}>',
        "testType": '<@string{4,20}>',
        "verifyItems": [
            {
                "content": '《测试方案》书写规范性',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '测试环境是否具有典型意义以及是否符合用户要求',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '测试内容的完整性，是否覆盖了整个系统',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '测试方法的选取是否合理',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '测试用例能否覆盖问题',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '输入、输出数据设计合理性',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '测试时间安排是否合理',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
            {
                "content": '测试人力资源安排是否合理',
                "passed": '<@boolean>',
                "explanation": '<@string{4,20}>',
            },
        ],
        "verifyEmployees": [
            {
                "position": '测试工程师',
                "suggestions": '<@string{4,20}>',
            },
            {
                "position": '测试室负责人',
                "suggestions": '<@string{4,20}>',
            },
            {
                "position": '质量负责人',
                "suggestions": '<@string{4,20}>',
            },
            {
                "position": '技术负责人',
                "suggestions": '<@string{4,20}>',
            },
            {
                "position": '监督人',
                "suggestions": '<@string{4,20}>',
            },
        ]
    }
    var testPlanVerificationJson = randomjson(testPlanVerificationModelJson)
    console.log(testPlanVerificationJson)
    var testPlanVerificationArray = JSON.stringify(testPlanVerificationJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/testPlanVerificationForm.json')//存入路径
    fs.writeFile(dir, testPlanVerificationArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateTestReport = function () {
    var testReportModelJson = {
<<<<<<< HEAD
        form: {
            softwareName: '<@string{4,20}>',
            softwareVersion: '<@string{4,20}>',
            clientCompany: '<@string{4,20}>',
            testType: '<@string{4,20}>',
            reportDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            projectId: '<@string{4,20}>',
            sampleDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            startDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            endDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            sampleCondition: '<@string{4,20}>',
            testStandard: '<@string{4,20}>',
            sampleList: '<@string{4,20}>',
            testConclusion: '<@string{4,20}>',
            telephone: '<@string{4,20}>',
            fax: '<@string{4,20}>',
            address: '<@string{4,20}>',
            website: '<@string{4,20}>',
            contract: '<@string{4,20}>',
            email: '<@string{4,20}>',
            compiler: '<@string{4,20}>',
            compileDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            reviewer: '<@string{4,20}>',
            reviewDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            approver: '<@string{4,20}>',
            approveDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            hardwareType: '<@string{4,20}>',
            hardwareName: '<@string{4,20}>',
            hardwareConfiguration: '<@string{4,20}>',
            hardwareNum: '',
            softwareEnvironment: {
                operatingSystem: {
                    name: '<@string{4,20}>',
                    version: '<@string{4,20}>',
                },
                'software<@{2, 4}>': [
                    {
                        name: '<@string{4,20}>',
                        version: '<@string{4,20}>'
                    }
                ],
                ancillaryTool: {
                    name: '<@string{4,20}>',
                    version: '<@string{4,20}>'
                },
                developmentTool: {
                    name: '<@string{4,20}>',
                    version: '<@string{4,20}>'
                },
                testSample: {
                    name: '<@string{4,20}>',
                    version: '<@string{4,20}>'
                }
=======
        "softwareName": '<@string{4,20}>',
        "softwareVersion": '<@string{4,20}>',
        "clientCompany": '<@string{4,20}>',
        "testType": '<@string{4,20}>',
        "reportDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "projectId": '<@string{4,20}>',
        "sampleDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "startDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "endDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "sampleCondition": '<@string{4,20}>',
        "testStandard": '<@string{4,20}>',
        "sampleList": '<@string{4,20}>',
        "testConclusion": '<@string{4,20}>',
        "telephone": '<@string{4,20}>',
        "fax": '<@string{4,20}>',
        "address": '<@string{4,20}>',
        "website": '<@string{4,20}>',
        "contract": '<@string{4,20}>',
        "email": '<@string{4,20}>',
        "compiler": '<@string{4,20}>',
        "compileDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "reviewer": '<@string{4,20}>',
        "reviewDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "approver": '<@string{4,20}>',
        "approveDate": 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        "hardwareType": '<@string{4,20}>',
        "hardwareName": '<@string{4,20}>',
        "hardwareConfiguration": '<@string{4,20}>',
        "hardwareNum": '<@string{4,20}>',
        "softwareEnvironment": {
            "operatingSystem": {
                "name": '<@string{4,20}>',
                "version": '<@string{4,20}>',
>>>>>>> refs/remotes/origin/connect
            },
            networkEnvironment: '<@string{4,20}>',
            'testStandards<@{2, 4}>': ['<@string{4,20}>'],
            references: [],
            functionTests: [{ functionModule: '', functionRequirement: '', testResult: '' }],
            efficiencyTests: [{ property: '', testExplanation: '', testResult: '' }],
            portabilityTests: [{ property: '', testExplanation: '', testResult: '' }],
            usabilityTests: [{ property: '', testExplanation: '', testResult: '' }],
            reliabilityTests: [{ property: '', testExplanation: '', testResult: '' }],
            maintainabilityTests: [{ property: '', testExplanation: '', testResult: '' }]
        },
    }
    var testReportJson = randomjson(testReportModelJson)
    console.log(testReportJson)
    var testReportArray = JSON.stringify(testReportJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/testReportForm.json')//存入路径
    fs.writeFile(dir, testReportArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateDocumentReviewForm = function () {
    var documentReviewModelJson = {
        softwareName: '<@string{4,20}>',
        softwareVersion: '<@string{4,20}>',
        clientCompany: '<@string{4,20}>',
        reviewGroup: '<@string{4,20}>',
        reviewer: '<@string{4,20}>',
        finishDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        reviewsOnExplanation: [
            {
                title: '可用性',
                items: [
                    {
                        content: '产品说明对于用户和潜在需方是可用的',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '内容',
                items: [
                    {
                        content: '足够用于评价适用性',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '排除内在的不一致',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '可测试或可验证的',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '标识和标示',
                items: [
                    {
                        content: '显示唯一标识',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '通过名称版本和日期指称',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '包含供方和至少一家经销商的名称和地址',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '功能性陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的功能进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '可靠性陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的可靠性进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '易用性陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的易用性进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '效率陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的效率进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '维护性陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的维护性进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '可移植性陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的可移植性进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '使用质量陈述',
                items: [
                    {
                        content: '根据GB/T 25000.51-2016规范对软件的使用质量进行陈述',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            }
        ],
        reviewsOnDocuments: [
            {
                title: '完备性',
                items: [
                    {
                        content: '包含所有必需信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '包含产品说明中所有功能以及可调用功能的说明',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '包含可靠性特征及其操作',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '包含已处理的和可造成系统失效终止的差错和失效',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '必要的数据备份与恢复指南',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '所有关键功能的完备的细则信息和参考信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '陈述产品说明中所有限制',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '陈述最大最小磁盘空间',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '关于应用管理职能的所有必要信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '让用户验证是否完成应用管理职能的信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '文档集分若干部分，需给出完整标识',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '正确性',
                items: [
                    {
                        content: '文档中所有的信息都是正确的',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '没有歧义的信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '一致性',
                items: [
                    {
                        content: '文档集中的各文档不相互矛盾, 与产品说明也不矛盾',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '易理解性',
                items: [
                    {
                        content: '使用用户可理解的术语和文体',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '文档集为用户使用该软件提供必要的信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    }
                ]
            },
            {
                title: '易学性',
                items: [
                    {
                        content: '为如何使用该软件提供了足够的信息',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                ]
            },
            {
                title: '可操作性',
                items: [
                    {
                        content: '电子文档可打印',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '有目次(主题词列表)和索引',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    },
                    {
                        content: '不常用术语缩略语有定义',
                        result: '<@string{4,20}>',
                        explanation: '<@string{4,20}>'
                    }
                ]
            }
        ],
        checker: '<@string{4,20}>'
    }
    var documentReviewJson = randomjson(documentReviewModelJson)
    console.log(documentReviewJson)
    var documentReviewArray = JSON.stringify(documentReviewJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/documentReviewForm.json')//存入路径
    fs.writeFile(dir, documentReviewArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateProblemForm = function () {
    var testProblemModelJson = {
        "problemList<@{3,6}>": [
            {
                description: '<@string{4,20}>',
                relatedRequirementItem: '<@string{4,20}>',
                initialCondition: '<@string{4,20}>',
                operationRoute: '<@string{4,20}>',
                relatedCase: '<@string{4,20}>',
                discoveredDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
                personInCharge: '<@string{4,20}>',
                editSuggestion: '<@string{4,20}>',
                //vforKey: '<@string{4,20}>'
            }
        ]
    }
    var testProblemJson = randomjson(testProblemModelJson)
    console.log(testProblemJson)
    var testProblemArray = JSON.stringify(testProblemJson)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/testProblemForm.json')//存入路径
    fs.writeFile(dir, testProblemArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

var generateContractForm = function () {
    var contractModelJson = {
        item: '<@string{4,20}>',
        client: '<@string{4,20}>',
        trustee: '<@string{4,20}>',
        signPlace: '<@string{4,20}>',
        signDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        validDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
        software: '<@string{4,20}>',
        qualityCharacteristic: '<@string{4,20}>',
        testFee: '<@[1-20000]>',
        testTime: '<@[1-20000]>',
        rectificationFrequency: '<@[1-20000]>',
        rectificationTime: '<@[1-20000]>',
        clientInfo: {
            representive: '<@string{4,20}>',
            signatureDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            contact: '<@string{4,20}>',
            address: '<@string{4,20}>',
            telephone: '<@string{4,20}>',
            fax: '<@string{4,20}>',
            bank: '<@string{4,20}>',
            account: '<@string{4,20}>',
            postcode: '<@string{4,20}>',
        },
        trusteeInfo: {
            representive: '<@string{4,20}>',
            signatureDate: 'Wed May 10 2023 00:00:00 GMT+0800 (中国标准时间)',
            contact: '<@string{4,20}>',
            address: '<@string{4,20}>',
            telephone: '<@string{4,20}>',
            fax: '<@string{4,20}>',
            postcode: '<@string{4,20}>',
        }
    }
    var contractForm = randomjson(contractModelJson)
    console.log(contractForm)
    var contractFormArray = JSON.stringify(contractForm)
    const fs = require('fs')
    const path = require('path')
    let dir = path.join('../assets/jsons/contractForm.json')//存入路径
    fs.writeFile(dir, contractFormArray, 'utf8', (err) => {
        console.log("写入成功");
    })
}

generateApplication()
generateTestReport()
generateFunctionList()
generateTestPlan()
generateTestRecords()
generateTestPlanVerification()
generateDocumentReviewForm()
generateProblemForm()
generateContractForm()