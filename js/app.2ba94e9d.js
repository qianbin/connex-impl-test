(function(e){function n(n){for(var r,s,i=n[0],c=n[1],u=n[2],p=0,f=[];p<i.length;p++)s=i[p],o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var d=c;a.push([0,"chunk-vendors"]),t()})({0:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__("cd49");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?')},1:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?")},2:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?")},3:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?")},4:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?")},5:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///scrypt_(ignored)?")},"754d":function(module,exports,__webpack_require__){"use strict";eval("\nvar _a = __webpack_require__(\"88b8\"), ensureBlock = _a.ensureBlock, ensureStatus = _a.ensureStatus, ensureTransaction = _a.ensureTransaction, ensureTransactionReceipt = _a.ensureTransactionReceipt, ensureAccount = _a.ensureAccount, ensureVMOutput = _a.ensureVMOutput, ensureEventCriteria = _a.ensureEventCriteria, ensureEventLog = _a.ensureEventLog, ensureTransferLog = _a.ensureTransferLog;\nvar expect = __webpack_require__(\"21a7\").expect;\nvar _b = __webpack_require__(\"a76d\"), isSemVer = _b.isSemVer, isHexBytes = _b.isHexBytes, isAddress = _b.isAddress, isBytes32 = _b.isBytes32;\nvar promiseWrapper = __webpack_require__(\"7dda\").promiseWrapper;\nvar Certificate = __webpack_require__(\"70df\").Certificate;\nvar transferEventABI = { \"anonymous\": false, \"inputs\": [{ \"indexed\": true, \"name\": \"_from\", \"type\": \"address\" }, { \"indexed\": true, \"name\": \"_to\", \"type\": \"address\" }, { \"indexed\": false, \"name\": \"_value\", \"type\": \"uint256\" }], \"name\": \"Transfer\", \"type\": \"event\" };\nvar candidateEventABI = { \"anonymous\": false, \"inputs\": [{ \"indexed\": true, \"name\": \"nodeMaster\", \"type\": \"address\" }, { \"indexed\": false, \"name\": \"action\", \"type\": \"bytes32\" }], \"name\": \"Candidate\", \"type\": \"event\" };\ndescribe('connex', function () {\n    it('connex should be attached to Window object', function () {\n        expect(window.connex).to.be.an('object');\n    });\n    it('ensure connex object properties', function () {\n        expect(connex).to.have.all.keys('version', 'thor', 'vendor');\n    });\n});\ndescribe('connex.version', function () {\n    it('connex.version should be a valid SemVer', function () {\n        expect(isSemVer(connex.version)).to.be.true;\n    });\n});\ndescribe('connex.thor', function () {\n    it('ensure connex.thor object properties', function () {\n        expect(connex.thor).to.have.all.keys('genesis', 'status', 'ticker', 'account', 'block', 'transaction', 'filter', 'explain');\n    });\n    describe('connex.thor.genesis', function () {\n        it('ensure connex.thor.genesis object properties', function () {\n            expect(connex.thor.genesis).to.have.all.keys('beneficiary', 'gasLimit', 'gasUsed', 'id', 'isTrunk', 'number', 'parentID', 'receiptsRoot', 'signer', 'size', 'stateRoot', 'timestamp', 'totalScore', 'transactions', 'txsRoot');\n        });\n        it('connex.thor.genesis ID should be testnet\\'s genesis ID', function () {\n            expect(connex.thor.genesis.id).to.be.equal('0x000000000b2bce3c70bc649a02749e8687721b09ed2e15997f466536b20bb127', \"Implementation test only can be run under testnet environment\");\n        });\n        it('connex.thor.genesis should be an block', function () {\n            ensureBlock(connex.thor.genesis);\n        });\n    });\n    describe('connex.thor.status', function () {\n        it('connex.thor.status should be an status', function () {\n            ensureStatus(connex.thor.status);\n        });\n    });\n    describe('connex.thor.ticker', function () {\n        it('connex.thor.ticker should be resolved without error thrown', function (done) {\n            connex.thor.ticker().next().then(function () {\n                done();\n            }).catch(function (e) {\n                done(e);\n            });\n        });\n    });\n    describe('connex.thor.account', function () {\n        it('get account should return a account detail', function (done) {\n            promiseWrapper(connex.thor.account('0xe59d475abe695c7f67a8a2321f33a856b0b4c71d').get().then(function (acc) {\n                ensureAccount(acc);\n                done();\n            }), done);\n        });\n        it('get code should return code', function (done) {\n            promiseWrapper(connex.thor.account('0x0000000000000000000000000000456e65726779').getCode().then(function (code) {\n                expect(isHexBytes(code.code), 'code should be a hex format string').to.be.true;\n                done();\n            }), done);\n        });\n        it('get storage should return storage', function (done) {\n            promiseWrapper(connex.thor.account('0x0000000000000000000000000000456e65726779').getStorage('0x0000000000000000000000000000000000000000000000000000000000000001').then(function (storage) {\n                expect(isHexBytes(storage.value), 'code should be a hex format string').to.be.true;\n                done();\n            }), done);\n        });\n        describe('connex.thor.account(...).method', function () {\n            var nameABI = { \"constant\": true, \"inputs\": [], \"name\": \"name\", \"outputs\": [{ \"name\": \"\", \"type\": \"string\" }], \"payable\": false, \"stateMutability\": \"pure\", \"type\": \"function\" };\n            it('call name method should return name', function (done) {\n                var nameMethod = connex.thor.account('0x0000000000000000000000000000456e65726779').method(nameABI);\n                promiseWrapper(nameMethod.call().then(function (output) {\n                    ensureVMOutput(output);\n                    expect(output.decoded).to.have.property('0', 'VeThor');\n                    done();\n                }), done);\n            });\n            it('call contract method set low gas should revert and gasUsed should be the setted gas', function (done) {\n                var nameMethod = connex.thor.account('0x0000000000000000000000000000456e65726779').method(nameABI);\n                nameMethod.gas(1);\n                promiseWrapper(nameMethod.call().then(function (output) {\n                    ensureVMOutput(output);\n                    expect(output.gasUsed).to.be.equal(1);\n                    expect(output.reverted).to.be.true;\n                    done();\n                }), done);\n            });\n            it('set value and convert to clause should return clause with correct value', function () {\n                var nameMethod = connex.thor.account('0x0000000000000000000000000000456e65726779').method(nameABI);\n                nameMethod.value(0x64);\n                var clause = nameMethod.asClause();\n                expect(clause).to.have.property('to', '0x0000000000000000000000000000456e65726779');\n                expect(clause).to.have.property('value', '100');\n                expect(clause).to.have.property('data', '0x06fdde03');\n            });\n        });\n        describe('connex.thor.account(...).event', function () {\n            it('asCriteria should produce correct criteria', function () {\n                var transferEvent = connex.thor.account('0x0000000000000000000000000000456e65726779').event(transferEventABI);\n                var criteria = transferEvent.asCriteria({\n                    _to: '0xd3ae78222beadb038203be21ed5ce7c9b1bff602'\n                });\n                ensureEventCriteria(criteria);\n                expect(criteria).to.have.property('address', '0x0000000000000000000000000000456e65726779');\n                expect(criteria).to.have.property('topic0', '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef');\n                expect(criteria).to.have.property('topic2', '0x000000000000000000000000d3ae78222beadb038203be21ed5ce7c9b1bff602');\n            });\n            it('filter should return the candidate event log', function (done) {\n                var transferEvent = connex.thor.account('0x0000000000000000000000417574686f72697479').event(candidateEventABI);\n                var filter = transferEvent.filter([]).order('desc');\n                promiseWrapper(filter.apply(0, 1).then(function (logs) {\n                    expect(logs.length).to.be.equal(1);\n                    var log = logs[0];\n                    var decoded = logs[0].decoded;\n                    ensureEventLog(log, true);\n                    expect(decoded).to.have.any.keys('0', '1', 'action', 'nodeMaster');\n                    expect(isAddress(decoded['nodeMaster']), 'nodeMaster should be an address').to.be.true;\n                    expect(isBytes32(decoded['action']), 'action should be an address').to.be.true;\n                    done();\n                }), done);\n            });\n        });\n    });\n    describe('connex.thor.block', function () {\n        it('getBlock should return a block', function (done) {\n            promiseWrapper(connex.thor.block(0).get().then(function (blk) {\n                ensureBlock(blk);\n                done();\n            }), done);\n        });\n        it('getBlock should accept block ID as parameter', function (done) {\n            promiseWrapper(connex.thor.block(connex.thor.genesis.id).get().then(function (blk) {\n                ensureBlock(blk);\n                done();\n            }), done);\n        });\n        it('getBlock invalid block ID should return null', function (done) {\n            promiseWrapper(connex.thor.block('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').get().then(function (blk) {\n                expect(blk).to.be.null;\n                done();\n            }), done);\n        });\n    });\n    describe('connex.thor.transaction', function () {\n        it('getTransaction should return a transaction', function (done) {\n            promiseWrapper(connex.thor.transaction('0x9daa5b584a98976dfca3d70348b44ba5332f966e187ba84510efb810a0f9f851').get().then(function (tx) {\n                ensureTransaction(tx);\n                done();\n            }), done);\n        });\n        it('getTransaction invalid block ID should return null', function (done) {\n            promiseWrapper(connex.thor.transaction('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').get().then(function (tx) {\n                expect(tx).to.be.null;\n                done();\n            }), done);\n        });\n        it('getTransactionReceipt should return a transaction receipt', function (done) {\n            promiseWrapper(connex.thor.transaction('0x9daa5b584a98976dfca3d70348b44ba5332f966e187ba84510efb810a0f9f851').getReceipt().then(function (receipt) {\n                ensureTransactionReceipt(receipt);\n            }).then(function () {\n                return connex.thor.transaction('0x316072e16a794a8f385e9f261a102c49947aa82a0355006289707b667e841cdc').getReceipt();\n            }).then(function (receipt) {\n                ensureTransactionReceipt(receipt);\n                done();\n            }), done);\n        });\n        it('getTransactionReceipt invalid block ID should return null', function (done) {\n            promiseWrapper(connex.thor.transaction('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').getReceipt().then(function (receipt) {\n                expect(receipt).to.be.null;\n                done();\n            }), done);\n        });\n    });\n    describe('connex.thor.filter', function () {\n        it('filter transfer event should return the transfer log', function (done) {\n            var filter = connex.thor.filter('transfer').order('desc');\n            promiseWrapper(filter.apply(0, 1).then(function (logs) {\n                expect(logs.length).to.be.equal(1);\n                ensureTransferLog(logs[0], true);\n                done();\n            }), done);\n        });\n    });\n    describe('connex.thor.explain', function () {\n        var transferABI = { \"constant\": false, \"inputs\": [{ \"name\": \"_to\", \"type\": \"address\" }, { \"name\": \"_amount\", \"type\": \"uint256\" }], \"name\": \"transfer\", \"outputs\": [{ \"name\": \"success\", \"type\": \"bool\" }], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" };\n        it('filter transfer event should return the transfer log', function (done) {\n            var transferMethod = connex.thor.account('0x0000000000000000000000000000456e65726779').method(transferABI);\n            var energyClause = transferMethod.asClause('0xd3ae78222beadb038203be21ed5ce7c9b1bff602', 1);\n            var explainer = connex.thor.explain();\n            explainer\n                .gas(200000)\n                .caller('0xe59d475abe695c7f67a8a2321f33a856b0b4c71d');\n            promiseWrapper(explainer.execute([\n                {\n                    to: '0xd3ae78222beadb038203be21ed5ce7c9b1bff602',\n                    value: 1,\n                    data: '0x'\n                },\n                energyClause\n            ]).then(function (outputs) {\n                expect(outputs.length).to.be.equal(2);\n                outputs.forEach(function (output) {\n                    ensureVMOutput(output);\n                });\n                done();\n            }), done);\n        });\n    });\n});\ndescribe('connex.vendor', function () {\n    it('acquire singing service should return signing service without error', function () {\n        var txSigner = connex.vendor.sign('tx');\n        expect(txSigner).to.not.equal(undefined);\n        var certSigner = connex.vendor.sign('cert');\n        expect(certSigner).to.not.equal(undefined);\n    });\n    it('tx signing should return txid and signer', function (done) {\n        var txSigner = connex.vendor.sign('tx');\n        promiseWrapper(txSigner.request([{\n                to: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',\n                value: '10000000000000000',\n                data: '0x',\n            }]).then(function (ret) {\n            expect(isAddress(ret.signer), 'signer should be an address').to.be.true;\n            expect(isBytes32(ret.txid), 'txid should be an bytes32').to.be.true;\n            done();\n        }), done);\n    });\n    it('specify signer should signed by the signer', function (done) {\n        var txSigner = connex.vendor.sign('tx');\n        txSigner.signer('0x7567d83b7b8d80addcb281a71d54fc7b3364ffed');\n        promiseWrapper(txSigner.request([{\n                to: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',\n                value: '10000000000000000',\n                data: '0x',\n            }]).then(function (ret) {\n            expect(ret.signer).to.be.equal('0x7567d83b7b8d80addcb281a71d54fc7b3364ffed');\n            done();\n        }), done);\n    });\n    it('identification cert signing should return valid cert response', function (done) {\n        var certSigner = connex.vendor.sign('cert');\n        promiseWrapper(certSigner.request({\n            purpose: 'identification',\n            payload: {\n                type: 'text',\n                content: 'random generated string'\n            }\n        }).then(function (ret) {\n            expect(isHexBytes(ret.signature), 'signature be a hex format string').to.be.true;\n            expect(ret.annex.domain).to.be.equal(location.hostname);\n            expect((connex.thor.status.head.timestamp - ret.annex.timestamp) % 10);\n            expect(ret.annex.timestamp).to.be.below((new Date().getTime()) / 1000).to.be.above((new Date().getTime()) / 1000 - 60);\n            expect(isAddress(ret.annex.signer), 'signer should be an address').to.be.true;\n            Certificate.verify({\n                purpose: 'identification',\n                payload: {\n                    type: 'text',\n                    content: 'random generated string'\n                },\n                domain: ret.annex.domain,\n                timestamp: ret.annex.timestamp,\n                signer: ret.annex.signer,\n                signature: ret.signature\n            });\n            done();\n        }), done);\n    });\n    it('agreement cert signing should return valid cert response', function (done) {\n        var certSigner = connex.vendor.sign('cert');\n        promiseWrapper(certSigner.request({\n            purpose: 'agreement',\n            payload: {\n                type: 'text',\n                content: 'agreement'\n            }\n        }).then(function (ret) {\n            expect(isHexBytes(ret.signature), 'signature be a hex format string').to.be.true;\n            expect(ret.annex.domain).to.be.equal(location.hostname);\n            expect((connex.thor.status.head.timestamp - ret.annex.timestamp) % 10);\n            expect(ret.annex.timestamp).to.be.below((new Date().getTime()) / 1000).to.be.above((new Date().getTime()) / 1000 - 60);\n            expect(isAddress(ret.annex.signer), 'signer should be an address').to.be.true;\n            Certificate.verify({\n                purpose: 'agreement',\n                payload: {\n                    type: 'text',\n                    content: 'agreement'\n                },\n                domain: ret.annex.domain,\n                timestamp: ret.annex.timestamp,\n                signer: ret.annex.signer,\n                signature: ret.signature\n            });\n            done();\n        }), done);\n    });\n});\ndescribe('error type and message', function () {\n    describe('connex.thor.account(...)', function () {\n        it('getStorage:get storage with invalid key should throw', function (done) {\n            try {\n                connex.thor.account('0x0000000000000000000000000000456e65726779').getStorage('not bytes32 in hex');\n                done(new Error('Should throw error'));\n            }\n            catch (err) {\n                expect(err.name).to.be.equal('BadParameter');\n                expect(err.message).to.be.equal('\\'key\\' expected bytes32 in hex string');\n                done();\n            }\n        });\n        it('event:invalid abi should throw ', function (done) {\n            try {\n                connex.thor.account('0x0000000000000000000000000000456e65726779').event({ wrong: 'invalid abi' });\n                done(new Error('Should throw error'));\n            }\n            catch (err) {\n                expect(err.name).to.be.equal('BadParameter');\n                expect(err.message).to.be.equal('\\'abi\\' is invalid');\n                done();\n            }\n        });\n        it('event().asCriteria:invalid indexed parameter should throw ', function (done) {\n            try {\n                var transferEvent = connex.thor.account('0x0000000000000000000000000000456e65726779').event(transferEventABI);\n                transferEvent.asCriteria({ _from: \"invalid from\" });\n                done(new Error('Should throw error'));\n            }\n            catch (err) {\n                expect(err.name).to.be.equal('BadParameter');\n                expect(err.message).to.be.equal('\\'indexed\\' can not be encoded');\n                done();\n            }\n        });\n        it('event().filter:invalid indexed parameter should throw ', function (done) {\n            try {\n                var transferEvent = connex.thor.account('0x0000000000000000000000000000456e65726779').event(transferEventABI);\n                transferEvent.filter([{ _from: \"invalid from\" }]);\n                done(new Error('Should throw error'));\n            }\n            catch (err) {\n                expect(err.name).to.be.equal('BadParameter');\n                expect(err.message).to.be.equal('\\'indexed\\' can not be encoded');\n                done();\n            }\n        });\n    });\n    // describe('connex.thor.filter', () => { \n    // })\n    it('connex.vendor:user decline should throw rejected error', function (done) {\n        var certSigner = connex.vendor.sign('cert');\n        certSigner.request({\n            purpose: 'identification',\n            payload: {\n                type: 'text',\n                content: 'Please decline this request\\nPlease decline this request\\nPlease decline this request\\nPlease decline this request'\n            }\n        }).then(function () {\n            done(new Error('User decline should throw error'));\n        }).catch(function (err) {\n            expect(err.name).to.be.equal('Rejected');\n            expect(err.message).to.be.equal('user cancelled');\n            done();\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./src/thor.test.ts?")},"7dda":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseWrapper", function() { return promiseWrapper; });\nfunction promiseWrapper(p, done) {\n    p.catch(function (err) {\n        done(err);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/utils.ts?')},"88b8":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureBlock\", function() { return ensureBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureStatus\", function() { return ensureStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureTransaction\", function() { return ensureTransaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureTransactionMeta\", function() { return ensureTransactionMeta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureTransactionReceipt\", function() { return ensureTransactionReceipt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureLogMeta\", function() { return ensureLogMeta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureEventLog\", function() { return ensureEventLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureTransferLog\", function() { return ensureTransferLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureAccount\", function() { return ensureAccount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureVMOutput\", function() { return ensureVMOutput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureEventCriteria\", function() { return ensureEventCriteria; });\nvar _a = __webpack_require__(\"a76d\"), isBytes32 = _a.isBytes32, isUint64 = _a.isUint64, isUint32 = _a.isUint32, isUint8 = _a.isUint8, isAddress = _a.isAddress, isInt = _a.isInt, isBytes8 = _a.isBytes8, isHexBytes = _a.isHexBytes;\nvar expect = __webpack_require__(\"21a7\").expect;\nfunction ensureBlock(val) {\n    expect(isAddress(val.beneficiary), 'block.beneficiary should be an address').to.be.true;\n    expect(isUint64(val.gasLimit, 'block.gasLimit should be a uint64')).to.be.true;\n    expect(isUint64(val.gasUsed), 'block.gasUsed should be a uint64').to.be.true;\n    expect(isBytes32(val.id), 'block.id should be a bytes32').to.be.true;\n    expect(isUint32(val.number), 'block.number should be a uint32').to.be.true;\n    expect(isBytes32(val.parentID), 'block.parentID should be a bytes32').to.be.true;\n    expect(isBytes32(val.receiptsRoot), 'block.receiptsRoot should be a bytes32').to.be.true;\n    expect(isAddress(val.signer), 'block.signer should be an address').to.be.true;\n    expect(isInt(val.size), 'block.size should be an int').to.be.true;\n    expect(isBytes32(val.stateRoot), 'block.stateRoot should be a bytes32').to.be.true;\n    expect(isUint64(val.timestamp), 'block.timestamp should be a uint64').to.be.true;\n    expect(isUint64(val.totalScore), 'block.totalScore should be a uint64').to.be.true;\n    expect(isBytes32(val.txsRoot), 'block.txsRoot should be a bytes32').to.be.true;\n    expect(val.transactions).to.be.an('array', 'block.transactions should be an array');\n    val.transactions.forEach(function (tx) {\n        expect(isBytes32(tx), 'tx should be a bytes32').to.be.true;\n    });\n}\nfunction ensureStatus(val) {\n    expect(isBytes32(val.head.id), 'head.id should be a bytes32').to.be.true;\n    expect(isUint32(val.head.number), 'head.number should be a uint32').to.be.true;\n    expect(isUint64(val.head.timestamp), 'head.timestamp should be a uint64').to.be.true;\n    expect(isBytes32(val.head.parentID), 'head.parentID should be a bytes32').to.be.true;\n    expect(val.progress).to.be.at.least(0).to.be.at.most(1);\n}\nfunction ensureTransaction(val) {\n    expect(isBytes8(val.blockRef), 'tx.blockRef should be a bytes8').to.be.true;\n    expect(isUint8(val.chainTag), 'tx.chainTag should be a uint8').to.be.true;\n    if (val.dependsOn)\n        expect(isBytes32(val.dependsOn), 'tx.dependsOn should be a bytes32 or null').to.be.true;\n    expect(isUint32(val.expiration), 'tx.expiration should be a uint32').to.be.true;\n    expect(isUint64(val.gas), 'tx.gas should be a uint64').to.be.true;\n    expect(isUint8(val.gasPriceCoef), 'tx.gasPriceCoef should be a uint8').to.be.true;\n    expect(isBytes32(val.id), 'tx.id should be a bytes32').to.be.true;\n    expect(isHexBytes(val.nonce), 'tx.nonce should be a hex format string').to.be.true;\n    expect(isAddress(val.origin), 'tx.origin should be an address').to.be.true;\n    expect(isInt(val.size), 'tx.size should be an int').to.be.true;\n    expect(val.clauses).to.be.an('array', 'tx.clauses should be an array');\n    val.clauses.forEach(function (clause) {\n        if (clause.to)\n            expect(isAddress(clause.to), 'clause.to should be an address').to.be.true;\n        expect(isHexBytes(clause.value), 'clause.value should be a hex format string').to.be.true;\n        expect(isHexBytes(clause.data), 'clause.data should be a hex format string').to.be.true;\n    });\n    ensureTransactionMeta(val.meta);\n}\nfunction ensureTransactionMeta(val) {\n    expect(isBytes32(val.blockID), 'tx.meta.blockID should be a bytes32').to.be.true;\n    expect(isUint64(val.blockNumber), 'tx.meta.blockNumber should be a uint64').to.be.true;\n    expect(isUint32(val.blockTimestamp), 'tx.meta.blockTimestamp should be a uint32').to.be.true;\n}\nfunction ensureTransactionReceipt(val) {\n    expect(isAddress(val.gasPayer), 'receipt.gasPayer should be an address').to.be.true;\n    expect(isUint64(val.gasUsed), 'receipt.gasUsed should be a uint64').to.be.true;\n    expect(isHexBytes(val.paid), 'receipt.paid should be a hex format string').to.be.true;\n    expect(isHexBytes(val.reward), 'receipt.reward should be a hex format string').to.be.true;\n    expect(val.reverted).to.be.an('boolean', 'receipt.reverted should be a boolean');\n    ensureLogMeta(val.meta);\n    expect(val.outputs).to.be.an('array', 'tx.outputs should be an array');\n    val.outputs.forEach(function (output) {\n        if (output.contractAddress)\n            expect(isAddress(output.contractAddress), 'output.contractAddress should be an address').to.be.true;\n        expect(output.events).to.be.an('array', 'output.events should be an array');\n        expect(output.transfers).to.be.an('array', 'output.transfers should be an array');\n        output.events.forEach(function (event) {\n            ensureEventLog(event);\n        });\n        output.transfers.forEach(function (transfer) {\n            ensureTransferLog(transfer);\n        });\n    });\n}\nfunction ensureLogMeta(val) {\n    expect(isBytes32(val.blockID), 'meta.blockID should be a bytes32').to.be.true;\n    expect(isUint64(val.blockNumber), 'meta.blockNumber should be a uint64').to.be.true;\n    expect(isUint32(val.blockTimestamp), 'meta.blockTimestamp should be a uint32').to.be.true;\n    expect(isBytes32(val.txID), 'meta.txID should be a bytes32').to.be.true;\n    expect(isAddress(val.txOrigin), 'meta.txOrigin should be an address').to.be.true;\n}\nfunction ensureEventLog(val, checkMeta) {\n    if (checkMeta === void 0) { checkMeta = false; }\n    expect(isAddress(val.address), 'event.address should be an address').to.be.true;\n    expect(isHexBytes(val.data), 'event.data should be a hex format string').to.be.true;\n    expect(val.topics).to.be.an('array', 'event.topics should be an array');\n    val.topics.forEach(function (topic) {\n        expect(isBytes32(topic), 'event topic should be a bytes32').to.be.true;\n    });\n    if (checkMeta)\n        ensureLogMeta(val.meta);\n}\nfunction ensureTransferLog(val, checkMeta) {\n    if (checkMeta === void 0) { checkMeta = false; }\n    expect(isAddress(val.sender), 'transfer.sender should be an address').to.be.true;\n    expect(isAddress(val.recipient), 'transfer.recipient should be an address').to.be.true;\n    expect(isHexBytes(val.amount), 'transfer.amount should be a hex format string').to.be.true;\n    if (checkMeta)\n        ensureLogMeta(val.meta);\n}\nfunction ensureAccount(val) {\n    expect(isHexBytes(val.balance), 'account.balance should be a hex format string').to.be.true;\n    expect(isHexBytes(val.energy), 'account.energy should be a hex format string').to.be.true;\n    expect(val.hasCode).to.be.an('boolean', 'account.hasCode should be a boolean');\n}\nfunction ensureVMOutput(val) {\n    expect(isHexBytes(val.data), 'data should be a hex format string').to.be.true;\n    expect(isUint64(val.gasUsed), 'gasUsed should be a uint64').to.be.true;\n    expect(val.reverted).to.be.an('boolean', 'reverted should be a boolean');\n    expect(val.vmError).to.be.a('string', 'vmError should be a string');\n    expect(val.events).to.be.an('array', 'events should be an array');\n    expect(val.transfers).to.be.an('array', 'transfers should be an array');\n    val.events.forEach(function (event) {\n        ensureEventLog(event);\n    });\n    val.transfers.forEach(function (transfer) {\n        ensureTransferLog(transfer);\n    });\n}\nfunction ensureEventCriteria(val) {\n    expect(isAddress(val.address), 'address should be an address').to.be.true;\n    var keys = ['topic0', 'topic1', 'topic2', 'topic3', 'topic4'];\n    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {\n        var key = keys_1[_i];\n        if (val[key]) {\n            expect(isBytes32(val[key]), key + \" should be a bytes32\").to.be.true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/validator.ts?")},a76d:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDecString", function() { return isDecString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHexString", function() { return isHexString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHexBytes", function() { return isHexBytes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAddress", function() { return isAddress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBytes4", function() { return isBytes4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBytes8", function() { return isBytes8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBytes32", function() { return isBytes32; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUint8", function() { return isUint8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUint32", function() { return isUint32; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUint64", function() { return isUint64; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return isInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSemVer", function() { return isSemVer; });\nfunction isDecString(val) {\n    return typeof val === \'string\' && /^[0-9]+$/.test(val);\n}\nfunction isHexString(val) {\n    return /^0x[0-9a-f]+$/i.test(val);\n}\nfunction isHexBytes(val) {\n    return /^0x[0-9a-f]*$/i.test(val);\n}\nfunction isAddress(val) {\n    return /^0x[0-9a-f]{40}$/.test(val);\n}\nfunction isBytes4(val) {\n    return /^0x[0-9a-f]{8}$/.test(val);\n}\nfunction isBytes8(val) {\n    return /^0x[0-9a-f]{16}$/.test(val);\n}\nfunction isBytes32(val) {\n    return /^0x[0-9a-f]{64}$/.test(val);\n}\nfunction isUint8(val) {\n    return val >= 0 && val < Math.pow(2, 8) && Number.isInteger(val);\n}\nfunction isUint32(val) {\n    return val >= 0 && val < Math.pow(2, 32) && Number.isInteger(val);\n}\nfunction isUint64(val) {\n    return val >= 0 && val < Math.pow(2, 64) && Number.isInteger(val);\n}\nfunction isInt(val) {\n    return Number.isInteger(val);\n}\nfunction isSemVer(val) {\n    return /[0-9]*\\.[0-9*]\\.[0-9]*$/.test(val);\n}\n\n\n//# sourceURL=webpack:///./src/types.ts?')},cd49:function(module,exports,__webpack_require__){"use strict";eval("\n// Using require for webpack-ed code to be shown in mocha report without webpack injects\n// mocha need to setup to bdd to make describe it work\nmocha.setup({\n    ui: 'bdd',\n    timeout: 60000,\n    slow: 300,\n    bail: true\n});\n// mocha needs to be set-upped before import test codes\n__webpack_require__(\"754d\");\n// mocha.checkLeaks()\nmocha.run();\n\n\n//# sourceURL=webpack:///./src/main.ts?")}});